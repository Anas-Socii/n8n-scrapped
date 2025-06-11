# StatsInstagram

## Summary
Automates the reporting of Instagram statistics to a Mattermost channel, using Google Sheets for data storage and scheduled reporting.

## Description
This workflow fetches Instagram statistics (followers, posts, etc.) from a Google Sheet, formats a daily report, and posts it to a Mattermost channel. It is scheduled to run every morning and provides a concise summary of Instagram performance for the team.

## Input Triggers
- Cron (scheduled daily at 8:00 AM)

## Output
- A formatted message posted to a Mattermost channel with Instagram stats.

## Nodes Involved
- **Cron**: Triggers the workflow every morning.
- **Get the date today**: Determines the current date and day of the week.
- **Date & Time**: Formats the date for the report.
- **Read data on Google Sheets**: Fetches Instagram stats from a Google Sheet.
- **Mattermost**: Posts the report to a specified channel.

## High-Level Process Flow
1. Cron node triggers the workflow at 8:00 AM.
2. Get the date today node sets the date and day.
3. Date & Time node formats the date.
4. Read data on Google Sheets node retrieves Instagram stats.
5. Mattermost node posts the formatted stats to the channel.

## Detailed Process Description
1. **Cron**: Initiates the workflow at the scheduled time.
2. **Get the date today**: Uses JavaScript to determine the current ISO date and weekday.
3. **Date & Time**: Formats the date for the report.
4. **Read data on Google Sheets**: Reads stats (followers, posts, etc.) from a Google Sheet.
5. **Mattermost**: Sends a message to a Mattermost channel with the day's Instagram statistics.

## Additional Notes
- Requires Mattermost and Google Sheets API credentials.
- Sheet ID and channel ID must be configured in the workflow nodes.
- Can be extended to include more analytics, notifications, or other social platforms.
