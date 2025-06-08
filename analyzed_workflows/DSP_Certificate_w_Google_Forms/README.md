# DSP Certificate w/ Google Forms

## Summary
Automates certificate issuance or management by monitoring Google Forms responses via Google Sheets, enabling streamlined digital certificate workflows for DSP.

## Description
This workflow listens for new Google Forms responses submitted to a specific Google Sheet. When a new row is added (indicating a new form submission), the workflow is triggered to process the data—potentially issuing certificates, updating records, or sending notifications. It is designed for educational or training environments where digital certificates need to be generated and tracked automatically.

## Input Triggers
- **Google Sheets Trigger**: Fires when a new row is added to the 'Form Responses 1' sheet linked to a Google Form.

## Output
- (Not shown in snippet) Typically, this would be a certificate issuance, notification, or entry in another system. Actual output depends on downstream nodes.

## Nodes Involved
- **Google Sheets Trigger**: Watches for new Google Forms responses (row added event).

## High-Level Process Flow
1. Google Sheets Trigger monitors the response sheet for new entries.
2. When a new row is detected, the workflow is triggered.
3. (Downstream steps not shown) Data is processed for certificate generation, notification, or record update.

## Detailed Process Description
1. **Google Sheets Trigger**: Configured to poll every minute for new rows in the 'Form Responses 1' sheet. When a new response is detected, the workflow begins processing.
2. **Downstream Processing**: (Not shown in snippet) Typically, the data from the new row would be used to generate a certificate, update a database, or send an email notification.

## Additional Notes
- Requires Google Sheets OAuth2 credentials.
- Sheet and document IDs must be set in the trigger node.
- Extendable to include certificate generation, email notifications, or integration with other systems.
- Ensure proper permissions for the Google account used.
