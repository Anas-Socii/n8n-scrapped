# Interactive Image Editor with FLUX.1 Fill Tool for Inpainting

## Summary
This workflow enables interactive image editing and inpainting using the FLUX.1 Fill Tool API. It provides a web-based editor for users to upload images, draw masks, and apply inpainting with custom prompts. The workflow orchestrates the inpainting process, manages user interactions, and delivers results in real time.

## Description
Designed for creative and technical users, this workflow exposes a webhook endpoint that serves an HTML-based editor. Users can upload or select images, draw masks, and enter prompts. The workflow calls the FLUX API for inpainting, checks job status, and returns the edited image. It supports asynchronous processing and can be extended for additional image sources or outputs.

## Input Triggers
- Webhook (HTTP endpoint `/flux-fill`)
- Editor page loaded in browser

## Output
- Edited/inpainted image returned to the user
- HTML editor page with before/after comparison

## Nodes Involved
- **Webhook**: Receives HTTP requests to start the workflow and serve the editor
- **Mockups**: Sets up initial image data or loads default images
- **Merge**: Combines incoming data streams for editor setup
- **Editor page (HTML)**: Serves the interactive editor UI
- **NO OP**: Placeholder for branch logic
- **FLUX Fill (HTTP Request)**: Calls the FLUX.1 Fill Tool API with user input
- **Wait 3 sec**: Delays execution to allow inpainting to process
- **Check FLUX status (HTTP Request)**: Polls the FLUX API for job completion
- **Is Ready? (If)**: Checks if the FLUX API job is complete
- **Get Fill Image (HTTP Request)**: Retrieves the completed inpainted image
- **Show the image to user (Respond to Webhook)**: Returns the result to the user
- **Sticky Notes**: Embedded documentation and instructions within the workflow

## High-Level Process Flow
1. User accesses the editor via webhook endpoint.
2. User uploads/selects image, draws mask, and enters prompt.
3. Workflow sends image, mask, and prompt to FLUX API.
4. Waits and polls for job completion.
5. Retrieves the inpainted image.
6. Returns the edited image to the user in the web editor.

## Detailed Process Description
1. **Webhook**: Serves the HTML editor and handles user requests.
2. **Mockups**: Provides initial image data or default images.
3. **Merge**: Combines image and editor setup data.
4. **Editor page (HTML)**: Delivers a modern, interactive UI for image editing.
5. **NO OP**: Used for branching, can be customized for additional logic.
6. **FLUX Fill**: Sends user image, mask, and prompt to the FLUX API for inpainting.
7. **Wait 3 sec**: Ensures FLUX API has time to process the request.
8. **Check FLUX status**: Polls the FLUX API to check if the image is ready.
9. **Is Ready?**: Determines if the inpainted image can be fetched.
10. **Get Fill Image**: Downloads the completed inpainted image from FLUX.
11. **Show the image to user**: Responds to the webhook with the edited image for display in the editor.
12. **Sticky Notes**: Provide internal documentation, setup instructions, and customization tips.

## Additional Notes
- Requires FLUX API credentials (httpHeaderAuth).
- The editor uses Konva.js and img-comparison-slider for UI/UX.
- Can be extended to support additional image sources or output formats.
- Designed for demonstration, creative, and technical use cases.
