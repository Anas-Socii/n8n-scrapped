# Google Sheets to Dropbox XLS Exporter

## Summary
Automatically exports data from a Google Sheet to an XLS file and uploads it to Dropbox every 15 minutes.

## Description
This workflow reads data from a specified Google Sheet, converts it into an XLS file, and uploads the resulting file to Dropbox. The process is triggered at regular 15-minute intervals, ensuring that the Dropbox folder always contains an up-to-date version of the sheet.

## Input Triggers
- Interval (every 15 minutes)

## Output
- XLS file uploaded to Dropbox at the specified path

## Nodes Involved
- **Interval**: Triggers the workflow every 15 minutes.
- **Google Sheets**: Reads data from the specified sheet.
- **Spreadsheet File**: Converts data to XLS format.
- **Dropbox**: Uploads the XLS file to Dropbox.

## High-Level Process Flow
- Trigger workflow every 15 minutes
- Read data from Google Sheets
- Convert data to XLS format
- Upload XLS to Dropbox

## Detailed Process Description
1. **Interval** node triggers the workflow every 15 minutes.
2. **Google Sheets** node reads the latest data from the specified sheet.
3. **Spreadsheet File** node converts the data to an XLS file.
4. **Dropbox** node uploads the XLS file to the designated Dropbox path.

## Additional Notes
- Requires Google Sheets and Dropbox credentials to be set up in n8n.
- The Google Sheet ID and Dropbox path should be configured as needed.
- This workflow can be adapted for other file formats or storage services.
