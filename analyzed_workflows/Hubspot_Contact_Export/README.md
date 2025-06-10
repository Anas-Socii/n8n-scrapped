# Hubspot Contact Export

## Summary
Exports all Hubspot contacts using a manual trigger in n8n.

## Description
This workflow allows users to fetch all contacts from Hubspot by executing the workflow manually. It demonstrates integration with Hubspot's API for contact retrieval, useful for CRM data exports or migrations.

## Input Triggers
- Manual Trigger (On clicking 'execute')

## Output
- List of all contacts from Hubspot

## Nodes Involved
- **Manual Trigger**: Initiates the workflow.
- **Hubspot**: Fetches all contacts using Hubspot API.

## High-Level Process Flow
- Manually trigger the workflow.
- Fetch all contacts from Hubspot.
- Output the contacts for further use.

## Detailed Process Description
1. **Manual Trigger**: User starts the workflow.
2. **Hubspot**: Uses API credentials to fetch all contacts.

## Additional Notes
- **Credentials**: Requires Hubspot API credentials.
- **Customization**: Can be extended to filter or process contacts as needed.
