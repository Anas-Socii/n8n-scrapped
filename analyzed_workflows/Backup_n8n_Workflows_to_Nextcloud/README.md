# Backup n8n Workflows to Nextcloud

## Summary
Backs up all n8n workflow definitions to a Nextcloud instance on a scheduled basis or manual trigger.

## Description
This workflow automates the backup of all workflows from an n8n instance to a specified Nextcloud folder. It can be triggered manually or on a schedule (every 6 hours by default). The workflow retrieves the list of all workflows, fetches each workflow's definition, and uploads it as a JSON file to Nextcloud, ensuring regular backups and disaster recovery.

## Input Triggers
- **Manual Trigger**: User can start the backup process manually.
- **Cron**: Scheduled to run every 6 hours.

## Output
- JSON backup files of each n8n workflow stored in the Nextcloud folder `/n8n/Backup/lacnet1/`.

## Nodes Involved
- **Manual Trigger**: Allows manual execution.
- **Cron**: Schedules automatic execution every 6 hours.
- **Get Workflow List (HTTP Request)**: Fetches the list of all workflows from n8n REST API.
- **Map (Function)**: Maps the workflow list for further processing.
- **Get Workflow (HTTP Request)**: Fetches each workflow's JSON definition.
- **Merge**: Combines data streams for backup.
- **Move Binary Data**: Converts JSON to binary for upload.
- **FunctionItem**: Processes each workflow item.
- **NextCloud1**: Uploads the workflow JSON to Nextcloud.

## High-Level Process Flow
- Trigger (manual or scheduled)
- Fetch workflow list from n8n
- For each workflow:
  - Fetch workflow definition
  - Convert to binary
  - Upload to Nextcloud

## Detailed Process Description
1. **Manual Trigger / Cron**: Initiates the backup process either manually or every 6 hours.
2. **Get Workflow List**: Retrieves all workflow IDs from the n8n instance.
3. **Map**: Prepares each workflow ID for fetching.
4. **Get Workflow**: Fetches the JSON definition of each workflow.
5. **Merge**: Combines fetched data for processing.
6. **Move Binary Data**: Converts JSON to binary format for upload.
7. **FunctionItem**: Finalizes the workflow item for upload.
8. **NextCloud1**: Uploads each workflow JSON to Nextcloud at `/n8n/Backup/lacnet1/`.

## Additional Notes
- **Credentials**: Requires access to n8n REST API and Nextcloud credentials.
- **Customization**: Nextcloud path and scheduling can be adjusted as needed.
- **Performance**: Efficient for regular backups; may take longer for large numbers of workflows.
- **Disclaimer**: Ensure API endpoints and credentials are secured and compliant with organizational policies.
