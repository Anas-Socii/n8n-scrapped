# Add Text to an Image Downloaded from the Internet

## Summary
Downloads an image from a URL and overlays custom text onto it when manually triggered.

## Description
- Manually triggered workflow for basic image annotation.
- Downloads an image from a specified internet URL.
- Adds the text “This is n8n” at a defined position and font size using the Edit Image node.
- Useful for creating quick image annotations or social posts.

## Input Triggers
- Manual Trigger (`n8n-nodes-base.manualTrigger`)

## Output
- Image file with overlaid text.

## Nodes Involved
- **Manual Trigger:** Starts the workflow.
- **HTTP Request:** Downloads the image from the specified URL.
- **Edit Image:** Adds the text to the downloaded image at the specified coordinates.

## High-Level Process Flow
1. User clicks “execute” to start the workflow.
2. HTTP Request node downloads the image file.
3. Edit Image node overlays the text.

## Detailed Process Description
- **On clicking 'execute':** User manually starts the workflow.
- **HTTP Request:** Downloads the image from the provided URL as a file.
- **Edit Image:** Adds the text “This is n8n” at (300, 500) with font size 100.

## Additional Notes
- Image URL and text are hardcoded; can be customized for other uses.
- Requires no credentials for the default URL.
- Demonstrates basic image processing in n8n.
