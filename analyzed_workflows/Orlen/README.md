# Orlen

## Summary
Automates daily folder and file management in Google Drive, triggered both manually and on a schedule, for streamlined document organization and archiving.

## Description
This workflow is designed for the Orlen use case, automating the creation and management of year-based folders in Google Drive. It can be triggered manually or at 23:45 daily, retrieves the current date, and ensures that the appropriate folder structure exists for archiving documents by year.

## Input Triggers
- Manual Trigger (user clicks 'execute')
- Cron Trigger (every day at 23:45)

## Output
- Year-based folders created/verified in Google Drive.
- Current date information attached to workflow data.

## Nodes Involved
- **On clicking 'execute'**: Manual trigger for ad hoc runs.
- **Every 23:45**: Scheduled trigger for daily automation.
- **Current date**: JavaScript function node to extract year, month, and day.
- **Get Year folder**: Google Drive node to create or find the correct year folder.

## High-Level Process Flow
1. Triggered manually or at 23:45 by cron.
2. Retrieves the current date (year, month, day).
3. Checks/creates the year folder in Google Drive.
4. (Further steps may archive or organize documents as needed.)

## Detailed Process Description
1. **On clicking 'execute'**: Allows the user to run the workflow at any time.
2. **Every 23:45**: Ensures daily automation for folder management.
3. **Current date**: Extracts date components for folder naming and organization.
4. **Get Year folder**: Uses Google Drive API to manage year-based folders.

## Additional Notes
- Requires Google Drive API credentials.
- Folder and file operations must be configured in the workflow nodes.
- Can be extended to archive, move, or process documents as needed.
