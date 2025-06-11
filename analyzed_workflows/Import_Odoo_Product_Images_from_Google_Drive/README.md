# Import Odoo Product Images from Google Drive

## Summary
Imports product images from a Google Drive folder and filters them for Odoo integration.

## Description
This workflow finds image files in a specified Google Drive folder, filters for PNG and JPG formats, and prepares them for import into Odoo. It streamlines the process of updating product images in Odoo from a centralized drive location.

## Input Triggers
- **Manual/Automated Trigger**: Initiates workflow to scan Google Drive.

## Output
- Filtered list of image files ready for Odoo import.

## Nodes Involved
- **Find Files (Google Drive)**: Scans folder for files.
- **Filter Images**: Selects PNG/JPG files.

## High-Level Process Flow
- Trigger workflow.
- Scan Google Drive folder for files.
- Filter and output image files for Odoo.

## Detailed Process Description
1. **Find Files**: Locates all files in the specified Google Drive folder.
2. **Filter Images**: Filters for PNG and JPG extensions.

## Additional Notes
- **Credentials**: Requires Google Drive API credentials.
- **Customization**: Folder IDs and filter logic can be adjusted.
- **Performance**: Dependent on Google Drive API response.
- **Disclaimer**: Ensure compliance with Google Drive and Odoo integration policies.
