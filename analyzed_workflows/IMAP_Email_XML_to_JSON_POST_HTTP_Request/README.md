# IMAP Email, XML to JSON, POST HTTP Request

## Summary
Reads emails with attachments via IMAP, converts XML attachments to JSON, and posts the data to an API endpoint.

## Description
- Checks an IMAP mailbox for new emails with attachments.
- Moves the first attachment to a binary field and decodes it as UTF-8 XML.
- Converts the XML to JSON.
- Prepares and sends the JSON data as a form-urlencoded POST request to a local API endpoint.
- Automates the process of extracting and transforming email attachments for backend processing.

## Input Triggers
- IMAP Email (`n8n-nodes-base.emailReadImap`)

## Output
- HTTP POST request sent to the configured API endpoint with extracted data.

## Nodes Involved
- **IMAP Email:** Reads emails and downloads attachments.
- **Move Binary Data:** Moves and decodes the first attachment as XML.
- **XML:** Converts the XML attachment to JSON.
- **Set:** Prepares the data for the HTTP request.
- **HTTP Request:** Sends the processed data to a backend API.

## High-Level Process Flow
1. IMAP Email node fetches emails with attachments.
2. Move Binary Data node decodes the first attachment as XML.
3. XML node converts XML to JSON.
4. Set node prepares the data.
5. HTTP Request node posts the data to the API.

## Detailed Process Description
- **IMAP Email:** Connects to the mailbox, downloads attachments, and allows unauthorized certs.
- **Move Binary Data:** Moves and decodes the first attachment as UTF-8 XML.
- **XML:** Converts the XML to JSON for easier handling.
- **Set:** Assigns the JSON to the field for the HTTP request.
- **HTTP Request:** Sends the data as a form-urlencoded POST to the specified endpoint.

## Additional Notes
- Requires IMAP credentials.
- Endpoint and field mappings must be configured for your backend.
- Demonstrates email-to-API automation with XML data transformation.
