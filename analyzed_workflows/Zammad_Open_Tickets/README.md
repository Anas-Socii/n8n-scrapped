# Zammad Open Tickets

## Summary
Fetches, filters, and summarizes open tickets from Zammad, and sends daily standup summaries via Zulip.

## Description
This workflow retrieves all tickets from Zammad, filters them by status, and sends a summary notification to a Zulip stream. It is useful for support teams to monitor ticket status and communicate daily updates efficiently.

## Input Triggers
- **Manual Trigger**: Starts workflow execution manually.
- **Standup Cron**: Triggers daily standup summary.

## Output
- Summary message sent to a Zulip stream with ticket counts by status.

## Nodes Involved
- **Manual Trigger**: Allows manual execution.
- **Standup Cron**: Schedules daily standup summary.
- **List Tickets**: Fetches all tickets from Zammad.
- **Ticket Filtering**: Filters and counts tickets by status.
- **Notify for Standup**: Sends summary to Zulip.

## High-Level Process Flow
- Trigger workflow manually or via cron.
- Fetch all tickets from Zammad.
- Filter tickets by status.
- Send summary to Zulip stream.

## Detailed Process Description
1. **Manual Trigger/Standup Cron**: Starts the workflow.
2. **List Tickets**: Retrieves all tickets from Zammad.
3. **Ticket Filtering**: Counts tickets by status (new, open, pending, etc.).
4. **Notify for Standup**: Sends the summary to a Zulip stream for team awareness.

## Additional Notes
- **Credentials**: Requires Zammad and Zulip API credentials.
- **Customization**: Stream/topic names and ticket filters can be changed.
- **Performance**: Fast for moderate ticket volumes.
- **Disclaimer**: Ensure compliance with Zammad and Zulip API usage policies.
