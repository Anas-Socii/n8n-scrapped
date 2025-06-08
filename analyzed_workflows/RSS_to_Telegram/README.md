# RSS to Telegram

## Summary
Automatically forwards new items from an RSS feed to a Telegram chat.

## Description
This workflow checks an RSS feed on a schedule, determines which items are new since the last check, and sends them as messages to a Telegram channel. It uses workflow static data to avoid duplicate notifications and ensure only new items are sent each time.

## Input Triggers
- Cron Trigger (scheduled, details can be configured)

## Output
- New RSS feed items sent as Telegram messages.

## Nodes Involved
- **Cron**: Triggers the workflow on a schedule.
- **RSS Feed Read**: Fetches the latest RSS feed items.
- **Latest Read (Function)**: Tracks the last processed RSS item date.
- **IF**: Checks if there are new items.
- **Write Latest Read (Function)**: Updates the last processed date in static data.
- **Telegram**: Sends the message to the specified Telegram chat.
- **NoOp**: Used for workflow branching when no new items are found.

## High-Level Process Flow
1. Cron node triggers the workflow.
2. RSS Feed Read node fetches items from the RSS feed.
3. Latest Read function checks what was last processed.
4. IF node determines if there are new items.
5. If new items exist, Write Latest Read updates the state and Telegram node sends the message.
6. If no new items, NoOp node is executed.

## Detailed Process Description
1. **Cron**: Initiates the workflow on a schedule.
2. **RSS Feed Read**: Pulls items from the specified RSS feed URL.
3. **Latest Read (Function)**: Reads the last processed date from workflow static data and annotates the items.
4. **IF**: Checks if the RSS item is newer than the last processed date.
5. **Write Latest Read (Function)**: Updates the last processed date in static data if new items are found.
6. **Telegram**: Sends a message with the RSS item's title and link to the Telegram chat.
7. **NoOp**: Executes when there are no new items to process.

## Additional Notes
- Requires valid Telegram Bot API credentials and chat ID.
- The RSS feed URL must be public and accessible.
- The workflow uses workflow static data to persist the last processed date between runs.
- Customize the RSS feed URL and Telegram chat details as needed.
