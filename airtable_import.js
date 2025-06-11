/**
 * Airtable Import Script
 * 
 * This script imports all workflow data from processing_results.json into an Airtable table.
 * 
 * Usage:
 * 1. Install dependencies: npm install airtable
 * 2. Add your Airtable API key below
 * 3. Run the script: node airtable_import.js
 */

const fs = require('fs');
const path = require('path');
const Airtable = require('airtable');

// Airtable configuration - replace with your API key
const AIRTABLE_API_KEY = 'YOUR_API_KEY_HERE';
const BASE_ID = 'app4u2MTevIg7o8np';
const TABLE_NAME = 'n8n-workflows-analyzed';

// Configure Airtable
const base = new Airtable({
  apiKey: AIRTABLE_API_KEY
}).base(BASE_ID);

// Path to the JSON file
const jsonFilePath = path.join(__dirname, 'output', 'processing_results.json');

/**
 * Process records in batches to avoid Airtable rate limits
 */
async function importRecords() {
  try {
    // Read and parse the JSON file
    console.log(`Reading data from ${jsonFilePath}...`);
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
    console.log(`Found ${jsonData.length} records to import.`);

    // Format the data for Airtable
    const records = jsonData.map(item => {
      return {
        fields: {
          input_workflow_name: item.input_workflow_name,
          output_workflow_name: item.output_workflow_name,
          output_workflow_file_path: item.output_workflow_file_path,
          output_readme_file_path: item.output_readme_file_path,
          summary: item.summary,
          inputs: Array.isArray(item.inputs) ? item.inputs.join('\n') : item.inputs,
          nodes_used: Array.isArray(item.nodes_used) ? item.nodes_used.join('\n') : item.nodes_used,
          outputs: Array.isArray(item.outputs) ? item.outputs.join('\n') : item.outputs,
          processed_at: item.processed_at,
          Analyzed: "No",
          Approved: "No"
        }
      };
    });

    // Split records into batches (Airtable has a limit of 10 records per request)
    const batchSize = 10;
    const batches = [];
    
    for (let i = 0; i < records.length; i += batchSize) {
      batches.push(records.slice(i, i + batchSize));
    }
    
    console.log(`Importing ${records.length} records in ${batches.length} batches...`);
    
    // Import each batch with a delay between batches
    let successCount = 0;
    let errorCount = 0;
    
    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      console.log(`Processing batch ${i + 1} of ${batches.length} (${batch.length} records)`);
      
      try {
        await base(TABLE_NAME).create(batch);
        successCount += batch.length;
        console.log(`✅ Successfully imported batch ${i + 1}`);
      } catch (error) {
        errorCount += batch.length;
        console.error(`❌ Error importing batch ${i + 1}:`, error.message);
        
        // If there's an error with the batch, try importing records one by one
        console.log('Attempting to import records individually...');
        
        for (const record of batch) {
          try {
            await base(TABLE_NAME).create(record);
            successCount++;
            errorCount--;
            console.log('  ✅ Successfully imported individual record');
          } catch (recordError) {
            console.error('  ❌ Error importing individual record:', recordError.message);
          }
          
          // Small delay between individual record imports
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      }
      
      // Wait between batches to avoid rate limiting
      if (i < batches.length - 1) {
        console.log('Waiting before next batch...');
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    console.log(`\nImport complete!`);
    console.log(`✅ Successfully imported: ${successCount} records`);
    console.log(`❌ Failed to import: ${errorCount} records`);
    
  } catch (error) {
    console.error('Error reading or processing the JSON file:', error);
  }
}

// Check if API key has been set
if (AIRTABLE_API_KEY === 'YOUR_API_KEY_HERE') {
  console.log('⚠️  Please set your Airtable API key in the script before running.');
  console.log('Replace YOUR_API_KEY_HERE with your actual Airtable API key.');
} else {
  // Start the import process
  importRecords().catch(error => {
    console.error('Unhandled error during import:', error);
  });
}
