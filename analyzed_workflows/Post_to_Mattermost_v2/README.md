# Post to Mattermost v2

## Summary
Automatically posts new items from an RSS feed to a Mastodon instance on a schedule.

## Description
This workflow reads an RSS feed at regular intervals, checks for new items since the last run, and posts the latest entries to a Mastodon instance using its API. It ensures that only new items are posted by tracking the last processed RSS entry. The workflow is suitable for automating social updates from any RSS source to Mastodon.

## Input Triggers
- Cron Trigger (every 10 minutes)

## Output
- New status updates posted to the specified Mastodon instance for each new RSS item.

## Nodes Involved
- **Cron**: Triggers the workflow every 10 minutes.
- **RSS Feed Read**: Fetches the RSS feed items.
- **Function**: Filters only new RSS items since the last run and manages state.
- **IF**: Checks if there are new items to post.
- **HTTP Request**: Posts the new item to Mastodon via API.
- **NoOp**: Used for workflow branching when there are no new items.

## High-Level Process Flow
1. Cron node triggers the workflow every 10 minutes.
2. RSS Feed Read node fetches the latest RSS items.
3. Function node determines which items are new since the last run.
4. IF node checks if there are new items to post.
5. If new items exist, HTTP Request node sends them to Mastodon.
6. If no new items, NoOp node is executed.

## Detailed Process Description
1. **Cron**: Initiates the workflow every 10 minutes.
2. **RSS Feed Read**: Pulls items from the specified RSS feed URL.
3. **Function**: Compares the IDs of RSS items with the last processed ID (stored in workflow static data) and prepares a list of only new items.
4. **IF**: Checks if the list of new items is not empty (ID is not 'NaN').
5. **HTTP Request**: For each new item, posts a status update to the Mastodon instance, including the title and link.
6. **NoOp**: Executes when there are no new items to process (for workflow completeness).

## Additional Notes
- Requires a valid Mastodon access token and instance URL.
- The RSS feed URL must be public and accessible.
- The workflow uses workflow static data to persist the last processed RSS ID between runs.
- Customize the RSS feed URL and Mastodon API details as needed.
