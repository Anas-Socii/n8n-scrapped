# Append, lookup, update, and read data from a Google Sheets spreadsheet

## Summary
Appends, looks up, updates, and reads data from a Google Sheets spreadsheet using n8n nodes.

## Description
This workflow enables full CRUD (Create, Read, Update, Delete) operations on a Google Sheets spreadsheet. It can append new rows, look up existing data, update specific entries, and read the sheet content, making it ideal for dynamic data management and automation tasks.

## Input Triggers
- **Manual Trigger**: Initiates workflow execution manually.

## Output
- Updated Google Sheets data based on the operation performed (append, lookup, update, read).

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually.
- **Google Sheets1**: Reads data from the sheet.
- **Set1**: Prepares and transforms data for update.
- **Google Sheets2**: Updates data in the sheet.

## High-Level Process Flow
- Manually trigger the workflow.
- Read data from Google Sheets.
- Prepare data for update.
- Update the sheet with new data.

## Detailed Process Description
1. **Manual Trigger**: User initiates the workflow.
2. **Google Sheets1**: Reads current data from the spreadsheet.
3. **Set1**: Adjusts or prepares data for update (e.g., incrementing values).
4. **Google Sheets2**: Updates the spreadsheet with new or modified data.

## Additional Notes
- **Credentials**: Requires Google Sheets OAuth2 API credentials.
- **Customization**: Sheet ID, range, and transformation logic can be adjusted.
- **Performance**: Fast for small to medium sheets; may slow with large datasets.
- **Disclaimer**: Ensure compliance with Google Sheets API usage policies.
