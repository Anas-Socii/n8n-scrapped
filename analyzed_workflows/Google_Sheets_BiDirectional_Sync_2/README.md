# Google Sheets Bi-Directional Sync (Copy)

## Summary
Synchronizes data between two Google Sheets in both directions on a scheduled basis (duplicate workflow).

## Description
This workflow is a duplicate of the Google Sheets Bi-Directional Sync, reading data from a source sheet and updating two target sheets every 2 minutes. It is useful for testing, backup, or parallel sync scenarios.

## Input Triggers
- **Cron**: Scheduled to run every 2 minutes.

## Output
- Updated data in both target Google Sheets.

## Nodes Involved
- **Cron**: Triggers the workflow on schedule.
- **Read Sheet**: Reads data from the source sheet.
- **Write Sheet 1**: Updates the first target sheet.
- **Write Sheet 2**: Updates the second target sheet.

## High-Level Process Flow
- Scheduled trigger.
- Read data from source sheet.
- Update both target sheets with the new data.

## Detailed Process Description
1. **Cron**: Triggers the workflow every 2 minutes.
2. **Read Sheet**: Reads data from the source sheet (`Data!A:G`).
3. **Write Sheet 1**: Updates the first target sheet with the new data.
4. **Write Sheet 2**: Updates the second target sheet with the new data.

## Additional Notes
- **Credentials**: Requires Google Sheets API credentials.
- **Customization**: Sheet ranges and schedule can be modified.
- **Performance**: Efficient for small to medium-sized sheets.
- **Disclaimer**: Ensure compliance with Google Sheets API usage policies.
