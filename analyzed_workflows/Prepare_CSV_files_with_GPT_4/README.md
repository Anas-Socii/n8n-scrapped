# Prepare CSV files with GPT-4

## Summary
Helper workflow to generate mock user data with GPT-4 and prepare CSV files for testing or demo purposes.

## Description
This workflow uses OpenAI's GPT-4 to generate random user data, splits the results into batches, and provides convenient sticky notes for context. It is ideal for quickly generating sample CSV files with realistic data for development or demonstration.

## Input Triggers
- **Manual Trigger**: Initiates the workflow when executed manually.

## Output
- Mock user data, suitable for export as CSV files.

## Nodes Involved
- **Manual Trigger**: Starts the workflow.
- **OpenAI**: Generates user data using GPT-4.
- **Split In Batches**: Splits generated data into separate batches.
- **Sticky Note**: Provides context and instructions.

## High-Level Process Flow
- Manually trigger the workflow.
- Generate user data with GPT-4.
- Split data into batches.
- Export or use as needed.

## Detailed Process Description
1. **Manual Trigger**: User starts the workflow.
2. **OpenAI**: Calls GPT-4 to generate mock user data.
3. **Split In Batches**: Splits the generated data into single-item batches for CSV export.
4. **Sticky Note**: Offers instructions and context.

## Additional Notes
- **Credentials**: Requires OpenAI API credentials.
- **Customization**: Prompt and batch size can be adjusted.
- **Disclaimer**: Ensure compliance with OpenAI usage policies.
