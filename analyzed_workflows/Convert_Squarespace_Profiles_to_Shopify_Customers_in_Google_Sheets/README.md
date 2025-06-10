# Convert Squarespace Profiles to Shopify Customers in Google Sheets

## Summary
This workflow automates the conversion of Squarespace profile data into Shopify customer records, storing the results in a Google Sheet for further processing or integration.

## Description
- **Purpose:** Streamlines the process of migrating or syncing customer data from Squarespace to Shopify using Google Sheets as an intermediary.
- **Automation:** Receives profile data via webhook, maps and transforms the fields, and inserts them into a Google Sheet in a Shopify-compatible format.

## Workflow Structure
- **Trigger:** Webhook (POST to `/submit-profiles`)
- **Main Nodes:**
  - **Webhook:** Accepts incoming Squarespace profile data.
  - **Shopify Customers (Google Sheets):** Maps and inserts the incoming data into a pre-defined Google Sheet schema for Shopify customers.

## Process Flow
1. **Webhook Trigger:** Receives a POST request with Squarespace profile data at the `/submit-profiles` endpoint.
2. **Data Mapping:** Fields are mapped and transformed to match Shopify's customer schema, including tags, contact info, addresses, and marketing preferences.
3. **Google Sheets Insert:** The processed data is inserted into the target Google Sheet, ready for Shopify import or further automation.

## Credentials
- **Google Sheets:** Requires Google Sheets API credentials for access and modification.

## Usage Instructions
- Send a POST request to the workflow's webhook URL with Squarespace profile data in JSON format.
- Ensure the Google Sheet is pre-configured with the required columns as per the schema in the workflow.

## Notes
- The workflow includes logic to tag customers based on their order history and marketing preferences.
- All data transformations are handled within the workflow nodes, ensuring compatibility with Shopify's import requirements.
- The workflow is modular and can be extended for additional data sources or destinations.

---
*Last processed: 10/06/2025 12:57*
