# n8n Check and Notify New Releases

## Summary
Checks the n8n GitHub releases feed and notifies via Telegram and email when a new major version is released.

## Description
This workflow monitors the n8n GitHub releases Atom feed and, if a new major version is published within the last 4 hours, sends a notification to a specified Telegram chat and email address. It can be triggered manually or on a custom cron schedule. Useful for teams or admins who want to stay up to date with n8n releases.

## Input Triggers
- Manual Trigger (On clicking 'execute')
- Cron (custom times: 10:00, 14:00, 18:00 daily)

## Output
- Telegram message and email notification when a new major n8n release is detected.

## Nodes Involved
- **Manual Trigger**: Allows manual execution.
- **Cron**: Schedules periodic checks.
- **RSS Feed Read**: Fetches the n8n GitHub releases Atom feed.
- **Function (Filter by current day)**: Filters releases published in the last 4 hours and formats the notification text.
- **IF**: Checks if there is a new release to notify about.
- **Telegram**: Sends a message to a Telegram chat.
- **AWS SES**: Sends an email notification.

## High-Level Process Flow
- Triggered manually or by cron
- Fetch and filter recent n8n releases
- If new release found, send Telegram and email notifications

## Detailed Process Description
1. **Manual Trigger / Cron**: Starts the workflow either manually or on a schedule.
2. **RSS Feed Read**: Reads the n8n GitHub releases Atom feed.
3. **Function (Filter by current day)**: Filters for new releases in the last 4 hours and prepares the message.
4. **IF Node**: Checks if there is a new release to report.
5. **Telegram Node**: Sends the release notification to the specified Telegram chat.
6. **AWS SES Node**: Sends the release notification by email.

## Additional Notes
- Requires Telegram and AWS SES credentials.
- Edit the chat ID and email addresses as needed.
- The workflow is active by default and runs automatically or can be triggered manually.
