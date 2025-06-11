# Luma AI Dream Machine - Simple v1 - AK

## Summary
Automates text-to-video generation using the Luma AI Dream Machine API, with customizable camera motion and video settings.

## Description
This workflow allows users to generate videos from text prompts using the Luma AI Dream Machine API. It features random camera motion selection, customizable global settings, and integration with Luma's HTTP API for video generation. Useful for creative projects, prototyping, or automated video content creation.

## Input Triggers
- Manual Trigger (for testing or manual execution)
- (Can be extended to run on schedule or webhook)

## Output
- Generated video from the Luma AI Dream Machine API, based on the provided text prompt and settings.

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually.
- **Global SETTINGS**: Sets up prompt, aspect ratio, duration, loop, and callback URL for video generation.
- **RANDOM Camera Motion**: Randomly selects a camera motion effect for the video.
- **Text 2 Video**: Sends the request to Luma AI Dream Machine API to generate the video.
- **Sticky Note**: Provides workflow instructions and configuration hints.

## High-Level Process Flow
1. Manual Trigger initiates the workflow.
2. Global SETTINGS node defines prompt and video parameters.
3. RANDOM Camera Motion node selects a random camera motion.
4. Text 2 Video node sends all parameters to Luma AI Dream Machine API for video generation.

## Detailed Process Description
1. **Manual Trigger**: Initiates the workflow for testing or manual runs.
2. **Global SETTINGS**: Prepares the text prompt, aspect ratio, duration, loop, and callback URL.
3. **RANDOM Camera Motion**: Picks a random camera movement to enhance video diversity.
4. **Text 2 Video**: Calls the Luma API with all settings to generate the video.
5. **Sticky Note**: (Optional) Used for workflow documentation and reminders.

## Additional Notes
- Requires Luma API credentials (header authentication).
- All video and prompt settings must be configured in the Global SETTINGS node.
- The workflow can be extended for batch processing, scheduled runs, or integration with other automation tools.
