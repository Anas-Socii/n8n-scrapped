# Clockify to Syncro

## Summary
Automates the transfer and mapping of project/task data between Clockify and Syncro, logging results in Google Sheets.

## Description
This workflow connects Clockify and Syncro via n8n, using a webhook to receive data, processes and maps project IDs, and appends the results to a Google Sheet. It is useful for synchronizing time tracking or project data between two platforms and maintaining a log of processed entries.

## Input Triggers
- Webhook (receives POST requests from Clockify or other sources)

## Output
- Appended rows in Google Sheets containing mapped Syncro and Clockify IDs

## Nodes Involved
- **Webhook**: Receives incoming data (likely from Clockify)
- **ForSyncro**: Extracts project ID from the webhook payload
- **FindMatch**: Looks up the project in Google Sheets
- **ForGoogle**: Prepares data for Google Sheets logging
- **Google Sheets**: Appends mapped data to a sheet

## High-Level Process Flow
1. Webhook node receives a POST payload from Clockify.
2. ForSyncro node extracts the project ID from the payload.
3. FindMatch node searches Google Sheets for the project.
4. ForGoogle node prepares the mapped data.
5. Google Sheets node appends the mapped Syncro and Clockify IDs to the sheet.

## Detailed Process Description
1. **Webhook**: Receives project/task data from Clockify.
2. **ForSyncro**: Extracts project ID using regex from the project name.
3. **FindMatch**: Searches for the project in a Google Sheet to find a corresponding Syncro entry.
4. **ForGoogle**: Sets up the data for logging (Syncro and Clockify IDs).
5. **Google Sheets**: Appends the data to a specified range in the sheet.

## Additional Notes
- Requires Google Sheets API credentials.
- Sheet IDs and ranges must be configured in the workflow nodes.
- Can be extended to handle additional mapping logic or error handling.
