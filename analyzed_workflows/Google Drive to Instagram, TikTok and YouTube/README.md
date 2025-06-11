# Google Drive to Instagram, TikTok and YouTube

## Summary
Automates the process of uploading videos from Google Drive to Instagram, TikTok, and YouTube, including AI-generated descriptions and error notifications.

## Description
This workflow monitors a specific Google Drive folder for new video uploads. When a new video is detected, it downloads the file, extracts audio, uses OpenAI to generate engaging descriptions, and uploads the video with the generated description to Instagram, TikTok, and YouTube. Error handling and notifications are integrated via Telegram.

## Input Triggers
- Google Drive file creation in a specific folder

## Output
- Videos uploaded to Instagram, TikTok, and YouTube with AI-generated descriptions
- Error notifications sent via Telegram

## Nodes Involved
- **Google Drive Trigger**: Detects new video files in a Google Drive folder
- **Google Drive**: Downloads the video file
- **OpenAI (Get Audio from Video)**: Transcribes audio from the video
- **OpenAI (Generate Description)**: Generates a video description using the transcribed audio
- **Read/Write Binary File**: Handles video file I/O
- **HTTP Request**: Uploads video and description to TikTok, Instagram, and YouTube using upload-post.com API
- **Telegram**: Sends error notifications
- **If**: Handles error logic and conditional flows
- **Sticky Note**: In-workflow documentation

## High-Level Process Flow
- Detect new video in Google Drive folder
- Download and process video
- Extract audio and generate description with OpenAI
- Upload video and description to TikTok, Instagram, and YouTube
- Notify errors via Telegram

## Detailed Process Description
1. **Google Drive Trigger**: Monitors a folder for new video uploads.
2. **Google Drive**: Downloads the new video file.
3. **Read Binary File**: Prepares video for processing.
4. **OpenAI Node**: Extracts audio and generates a description.
5. **HTTP Request Nodes**: Uploads video and description to each platform using upload-post.com API.
6. **Telegram Node**: Sends error notifications if uploads fail.

## Additional Notes
- Requires Google Drive, OpenAI, upload-post.com, and Telegram API credentials
- Folder ID and API tokens must be configured
- Designed for social media automation and influencer workflows
