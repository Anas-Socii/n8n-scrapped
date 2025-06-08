# Printify Automation – Update Title and Description – AlexK1919

## Summary
Automates the process of updating product titles and descriptions on Printify using data from Google Sheets and AI-powered content generation.

## Description
This workflow connects Google Sheets, Printify, and AI tools to streamline product content management for a Printify shop. When a row is updated in a designated Google Sheet, the workflow fetches the relevant product, generates new titles and descriptions using OpenAI and Wikipedia, and updates the product on Printify via its API. The process is fully automated and supports batch processing, custom brand guidelines, and seasonal content instructions.

## Input Triggers
- Manual Trigger (for testing)
- Google Sheets Trigger (row update event)

## Output
- Updated product titles and descriptions on Printify
- Logs and status updates in Google Sheets

## Nodes Involved
- **Manual Trigger**: For workflow testing
- **Google Sheets Trigger**: Detects row updates to initiate the process
- **Printify - Get Shops / Get Products**: Fetches shop and product data from Printify
- **Split Out / Split - id, title, desc**: Processes and splits product data for batch operations
- **Loop Over Items**: Iterates through products to update
- **Brand Guidelines + Custom Instructions**: Sets custom content instructions (e.g., for seasonal updates)
- **Wikipedia / Calculator / OpenAI**: AI and data enrichment for content generation
- **Generate Title and Desc**: Produces new product titles and descriptions
- **Printify - Update Product**: Updates product info on Printify via API
- **Google Sheets**: Logs results back to the spreadsheet
- **Sticky Notes**: Embedded documentation and usage notes

## High-Level Process Flow
1. Workflow is triggered by a Google Sheets row update or manually for testing.
2. Fetch Printify shop and product data.
3. Split and batch process products to be updated.
4. Generate new titles and descriptions using AI and custom instructions.
5. Update products on Printify.
6. Log results in Google Sheets.

## Detailed Process Description
1. **Trigger**: The workflow starts on a Google Sheets row update or manual trigger.
2. **Fetch Shop & Product Data**: Retrieves shop and product details from Printify.
3. **Batch Processing**: Splits product data and iterates through each item.
4. **Custom Instructions**: Applies brand and seasonal instructions for content generation.
5. **AI Content Generation**: Uses OpenAI and Wikipedia to create new product titles and descriptions.
6. **Update Product**: Sends updated data to Printify via API.
7. **Logging**: Writes status/results to Google Sheets for tracking.
8. **Sticky Notes**: Provide configuration and usage guidance.

## Additional Notes
- Requires Printify API credentials and Google Sheets integration.
- Update the Brand Guidelines node for custom instructions.
- Supports swapping Printify API calls with similar services (e.g., Printful).
- Designed for scalable, automated e-commerce content management.
