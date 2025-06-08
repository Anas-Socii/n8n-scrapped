# Capture Website Screenshots with Bright Data Web Unlocker and Save to Disk

## Summary
Captures screenshots of specified websites using Bright Data Web Unlocker and saves them to disk.

## Description
This workflow automates the process of capturing website screenshots. It uses Bright Data Web Unlocker’s API to fetch a screenshot of a given URL, then saves the resulting image file to disk. The workflow is configurable for different target URLs, filenames, and proxy zones, making it suitable for automated monitoring, reporting, or archival of web content.

## Input Triggers
- Manual Trigger (When clicking ‘Test workflow’)

## Output
- Screenshot image file saved to disk

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually
- **Set URL, Filename and Bright Data Zone**: Specifies the target URL, output filename, and Bright Data proxy zone
- **Capture a screenshot**: Makes an HTTP request to Bright Data’s screenshot API
- **Write a file to disk**: Saves the screenshot image to the specified location
- **Sticky Notes**: Embedded documentation and usage notes

## High-Level Process Flow
1. Workflow is triggered manually.
2. User specifies the URL, filename, and Bright Data zone.
3. Workflow requests a screenshot from Bright Data API.
4. The resulting image is saved to disk as specified.

## Detailed Process Description
1. **Manual Trigger**: User starts the workflow.
2. **Set URL, Filename and Bright Data Zone**: User provides the website URL to capture, the desired output filename, and the Bright Data proxy zone.
3. **Capture a screenshot**: Sends a POST request to Bright Data’s screenshot endpoint with the provided parameters.
4. **Write a file to disk**: Receives the binary screenshot data and writes it to the specified file path.
5. **Sticky Notes**: Provide operational and configuration instructions.

## Additional Notes
- Requires Bright Data API credentials (Header Auth account).
- Update the URL, filename, and zone in the set node as needed.
- Ensure the output file path is valid and writable on your system.
