# Automated PDF to HTML Conversion

## Summary
Automatically converts newly uploaded PDF files in Google Drive to HTML format for easy viewing and downstream processing.

## Description
This workflow monitors a Google Drive folder for newly created PDF files. When a PDF is detected, it triggers a conversion process that transforms the PDF into HTML using an HTTP API. This enables rapid document digitization and integration with other tools or workflows.

## Input Triggers
- **Google Drive Trigger**: Watches a specific folder for new PDF file uploads.

## Output
- HTML file or content generated from the uploaded PDF.

## Nodes Involved
- **Google Drive Trigger**: Detects new files in a specified Google Drive folder.
- **If**: Checks if the uploaded file is a PDF (by MIME type).
- **HTTP Request**: Sends the PDF for conversion to HTML (external API or service).

## High-Level Process Flow
- Monitor Google Drive folder for new files.
- If a new file is a PDF, send it to the conversion service.
- Receive and store the resulting HTML.

## Detailed Process Description
1. **Google Drive Trigger**: Watches for file creation events in a folder.
2. **If**: Checks the file's MIME type to ensure it's a PDF.
3. **HTTP Request**: Sends the PDF to an external service for conversion to HTML.
4. **Output**: The HTML content can be saved or processed as needed.

## Additional Notes
- **Credentials**: Requires Google Drive OAuth credentials and possibly API credentials for the conversion service.
- **Customization**: Folder and conversion API can be changed as required.
- **Performance**: Conversion speed depends on file size and external service.
- **Disclaimer**: Ensure compliance with Google Drive and API terms of service.
