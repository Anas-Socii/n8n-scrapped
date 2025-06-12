# 3D Figurine Orthographic Views with Midjourney and GPT-4o-Image API

## Summary
Generates orthographic views of 3D figurines using Midjourney and GPT-4o-Image API, providing AI-generated images and URLs for further use.

## Description
This workflow enables the creation of orthographic (multi-angle) images of 3D figurines by leveraging Midjourney for image generation and the GPT-4o-Image API for further processing. It orchestrates API calls, waits for image generation, extracts URLs, and provides the final output in a structured format.

## Input Triggers
- Manual Trigger (when clicking 'Test workflow')

## Output
- URLs to generated images of 3D figurines

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually.
- **HTTP Request**: Interacts with Midjourney and GPT-4o-Image APIs.
- **If**: Checks status of image generation.
- **Wait**: Waits for asynchronous image generation to complete.
- **Code**: Processes and extracts image URLs from responses.

## High-Level Process Flow
- Manually trigger the workflow
- Send prompt to Midjourney API to generate figurine images
- Poll for completion and retrieve image URLs
- Optionally, process images with GPT-4o-Image API for 3-view generation
- Output the final image URLs

## Detailed Process Description
1. **Manual Trigger** node initiates the workflow.
2. **HTTP Request** nodes send prompts to Midjourney and retrieve task IDs and results.
3. **If** and **Wait** nodes check for completion and handle asynchronous processing.
4. **Code** nodes extract and format the image URLs from API responses.
5. The workflow outputs the URLs for use in other applications or for download.

## Additional Notes
- Requires valid API keys for Midjourney and GPT-4o-Image.
- Ensure API quotas and rate limits are respected.
- The workflow can be adapted for other generative image tasks or additional post-processing.
