# Post to Wallabag

## Summary
Automatically posts new RSS feed items to Wallabag for reading and archiving.

## Description
This workflow periodically checks an RSS feed for new items and posts them to Wallabag using its API. It tracks the last processed item to avoid duplicates, making it ideal for automated archiving and read-later workflows.

## Input Triggers
- **Cron**: Runs every 10 minutes to check for new items.
- **Manual Trigger**: Allows manual execution.

## Output
- New RSS feed items are posted to Wallabag as entries.

## Nodes Involved
- **Cron**: Schedules periodic checks.
- **Manual Trigger**: Allows manual execution.
- **Function**: Determines which items are new and prepares data.
- **HTTP Request**: Posts items to Wallabag API.

## High-Level Process Flow
- Trigger workflow on schedule or manually.
- Fetch new RSS items.
- Filter out already processed items.
- Post new items to Wallabag.

## Detailed Process Description
1. **Cron/Manual Trigger**: Starts the workflow.
2. **Function**: Filters new items and prepares data for posting.
3. **HTTP Request**: Sends new items to Wallabag via API.

## Additional Notes
- **Credentials**: Requires Wallabag API access token.
- **Customization**: RSS feed and Wallabag host must be set in the workflow.
- **Performance**: Dependent on RSS and Wallabag API response times.
- **Disclaimer**: Ensure compliance with RSS and Wallabag API usage policies.
