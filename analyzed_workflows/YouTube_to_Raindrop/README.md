# YouTube to Raindrop

## Summary
Saves new YouTube playlist items as bookmarks in Raindrop, filtering out previously saved videos.

## Description
This workflow monitors a YouTube playlist for new videos, filters out already-saved items, and saves new ones as bookmarks in Raindrop. It can run on a schedule or be triggered manually, helping users archive and organize YouTube content.

## Input Triggers
- Manual Trigger (On clicking 'execute')
- Cron Trigger (Every 30 minutes)

## Output
- New YouTube videos saved as bookmarks in Raindrop

## Nodes Involved
- **Manual Trigger**: Allows manual execution.
- **Every 30 mins**: Runs the workflow on a schedule.
- **YouTube**: Fetches playlist items.
- **Flatten JSON**: Normalizes YouTube API response.
- **Filter new items**: Filters out already-saved videos.
- **Raindrop Bookmark**: Saves new items as bookmarks.

## High-Level Process Flow
- Trigger workflow (manual or scheduled).
- Fetch playlist items from YouTube.
- Flatten and filter new items.
- Save new videos to Raindrop.

## Detailed Process Description
1. **Trigger**: Initiate workflow manually or on schedule.
2. **YouTube**: Fetch playlist items.
3. **Flatten JSON**: Extracts relevant details.
4. **Filter new items**: Removes already-saved videos.
5. **Raindrop Bookmark**: Saves new items.

## Additional Notes
- **Credentials**: Requires YouTube and Raindrop API credentials.
- **Customization**: Playlist ID and tags can be changed.
