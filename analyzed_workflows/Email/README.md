# Email

## Summary
Automatically ingests emails via IMAP and creates TheHive cases for each email with attachments and metadata.

## Description
This workflow connects to an IMAP email account, retrieves emails, and creates corresponding cases in TheHive incident response platform. Attachments and relevant metadata are included in each case, streamlining incident tracking and analysis for security or operational teams.

## Input Triggers
- **IMAP Email**: Polls an IMAP mailbox for new messages.

## Output
- New case created in TheHive for each processed email, with attachments and metadata.

## Nodes Involved
- **IMAP Email**: Connects to an IMAP server and reads incoming emails.
- **TheHive**: Creates a case in TheHive, attaches files, and populates case fields from email data.

## High-Level Process Flow
- Connect to IMAP server and check for new emails.
- For each email, extract metadata and attachments.
- Create a new case in TheHive with the email's details and attachments.

## Detailed Process Description
1. **IMAP Email**: Connects to the configured IMAP account and retrieves new emails.
2. **TheHive**: For each email, creates a case with:
   - Title and description from the attachment file name.
   - Source set to Outlook and reference to the email's message ID.
   - Attachment(s) included as artifacts.
   - Tagging and type set for email context.

## Additional Notes
- **Credentials**: Requires IMAP account credentials and TheHive API credentials configured in n8n.
- **Customization**: TheHive case fields and mappings can be adjusted for your workflow needs.
- **Performance**: Dependent on email volume and TheHive API response times.
- **Disclaimer**: Ensure compliance with email and incident response policies.
