# Send Certificate Emails in Batches

## Summary
Reads a CSV file, parses it, and sends certificate emails with personalized attachments in batches.

## Description
- Manually triggered workflow.
- Reads a CSV file containing user data.
- Parses the CSV into rows using the Spreadsheet File node.
- Processes the records in batches (batch size: 5).
- For each record, reads a personalized certificate image and sends an email with the certificate attached.
- Automates batch emailing of certificates or similar documents.

## Input Triggers
- Manual Trigger (`n8n-nodes-base.manualTrigger`)

## Output
- Personalized emails with certificate attachments sent to each user in the CSV.

## Nodes Involved
- **Manual Trigger:** Starts the workflow.
- **Read Binary File:** Reads the CSV data file.
- **Spreadsheet File:** Parses the CSV into structured rows.
- **SplitInBatches:** Processes records in batches of 5.
- **Read Binary File1:** Reads the personalized certificate image for each user.
- **Send Email:** Sends the email with the certificate attached.

## High-Level Process Flow
1. Workflow is manually triggered.
2. Reads and parses the CSV file.
3. Splits records into batches.
4. For each user, reads the personalized certificate image.
5. Sends an email with the certificate attached.

## Detailed Process Description
- **Manual Trigger:** User starts the workflow.
- **Read Binary File:** Loads the CSV file from disk.
- **Spreadsheet File:** Converts CSV to JSON rows.
- **SplitInBatches:** Batches the records for processing.
- **Read Binary File1:** Loads the certificate image for each user.
- **Send Email:** Sends the certificate as an attachment to each user's email.

## Additional Notes
- Requires SMTP credentials for sending emails.
- File paths for CSV and certificate images must be configured.
- Demonstrates batch processing and personalized email automation.
