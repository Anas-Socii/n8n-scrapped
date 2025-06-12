# Upload Video, Create Playlist, and Add Video to Playlist

## Summary
Automates the process of uploading a video to YouTube, creating a playlist, and adding the uploaded video to the new playlist using n8n.

## Description
This workflow demonstrates how to integrate YouTube API operations with n8n to streamline video management. It reads a video file, uploads it to YouTube, creates a playlist, and then adds the uploaded video to the newly created playlist—all in a single automated flow.

## Input Triggers
- Manual Trigger (on workflow execution)

## Outputs
- Video uploaded to YouTube
- Playlist created
- Video added to the playlist

## Nodes Involved
- **Manual Trigger:** Starts the workflow manually.
- **Read Binary File:** Reads the video file for upload.
- **YouTube:** Uploads the video to YouTube.
- **YouTube1:** Creates a new playlist on YouTube.
- **YouTube2:** Adds the uploaded video to the created playlist.

## High-Level Process Flow
1. **Manual Trigger** → 2. **Read Video File** → 3. **Upload Video** → 4. **Create Playlist** → 5. **Add Video to Playlist**

## Detailed Process Description
- The workflow is manually triggered.
- Reads the specified binary video file from the filesystem.
- Uploads the video to YouTube using the YouTube node.
- Creates a new playlist on YouTube.
- Adds the uploaded video to the newly created playlist.

## Additional Notes
- Requires valid YouTube OAuth2 credentials.
- The file path for the video must be correctly specified in the Read Binary File node.
- Useful for automating bulk video uploads and playlist management.
