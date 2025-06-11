# YT AI News Playlist Creator / AI News Form Updater

## Summary
Automates the aggregation of recent YouTube videos from AI news channels and processes them for playlist or form updates using Google Sheets and YouTube Data API.

## Description
This workflow reads a list of AI news YouTube channels from a Google Sheet, fetches the latest videos published in the past day for each channel using the YouTube Data API, and splits out the results for further processing. The workflow can be extended to update a playlist, populate a news form, or perform analytics on video content.

## Input Triggers
- (Not shown in snippet) Likely a scheduled or manual trigger to initiate the daily aggregation process.

## Output
- List of recent AI news videos, ready for playlist update, reporting, or further processing.

## Nodes Involved
- **Read Channel Names**: Reads channel IDs from a Google Sheet containing AI news channels.
- **Get Videos**: Uses HTTP Request to fetch the latest videos from each channel using the YouTube Data API.
- **Split Out**: Splits the array of video items for individual processing.

## High-Level Process Flow
1. Trigger node initiates the aggregation process.
2. Read Channel Names node retrieves a list of channel IDs from Google Sheets.
3. Get Videos node queries the YouTube Data API for recent uploads for each channel.
4. Split Out node separates the video items for further workflow steps (e.g., playlist update, analytics, or form population).

## Detailed Process Description
1. **Trigger (not shown)**: Starts the workflow on schedule or manually.
2. **Read Channel Names**: Connects to Google Sheets to get the list of AI news YouTube channel IDs.
3. **Get Videos**: Sends a request to the YouTube Data API, filtering for videos published in the last day, and retrieves up to 5 videos per channel.
4. **Split Out**: Processes each video item individually for downstream automation.

## Additional Notes
- Requires Google Sheets and YouTube Data API credentials/API key.
- The workflow can be extended to update playlists, forms, or perform other automation tasks with the video data.
- Ensure the API key and channel ID fields are correctly set in the workflow nodes.
