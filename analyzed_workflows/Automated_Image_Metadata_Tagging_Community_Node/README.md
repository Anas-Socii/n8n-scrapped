# Automated Image Metadata Tagging (Community Node)

## Summary
Automatically tags new images uploaded to a Google Drive folder with metadata using AI and EXIF extraction.

## Description
This workflow monitors a Google Drive folder for new image uploads, downloads the images, analyzes content using AI, and extracts EXIF metadata. It is ideal for automating image tagging and organization.

## Input Triggers
- **Google Drive Trigger**: Detects new files added to a folder.

## Output
- Tagged metadata for each uploaded image.

## Nodes Involved
- **Google Drive Trigger**: Monitors folder for new files.
- **Download Image File**: Downloads the new image.
- **Analyze Image Content**: Uses AI to describe image content.
- **Extract EXIF Metadata**: Extracts EXIF data from image.

## High-Level Process Flow
- Detect new image in folder.
- Download image.
- Analyze image content and extract metadata.
- Output tagged metadata.

## Detailed Process Description
1. **Google Drive Trigger**: Watches for new file uploads.
2. **Download Image File**: Downloads the detected image.
3. **Analyze Image Content**: Uses AI to generate a description.
4. **Extract EXIF Metadata**: Extracts and outputs metadata.

## Additional Notes
- **Credentials**: Requires Google Drive and AI API credentials.
- **Customization**: Folder IDs and AI model can be changed.
- **Performance**: Dependent on file size and API speed.
- **Disclaimer**: Ensure compliance with Google Drive and API usage policies.
