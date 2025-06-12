# Zendesk to Slack

## Summary
This workflow automates the process of retrieving unassigned Zendesk tickets and posting a formatted summary to a Slack channel. It can be triggered manually or on a schedule (e.g., daily at 16:30).

## Description
- **Trigger:** Can be executed manually or scheduled with a cron job (default: 16:30 daily).
- **Zendesk Query:** Fetches all unassigned Zendesk tickets with status less than pending.
- **Formatting:** Uses a Function node to format ticket information into a Slack-friendly message, listing each ticket with a link, status, and subject.
- **Slack Notification:** Posts the formatted message to a specified Slack channel.

## Nodes Involved
- **Manual Trigger:** Allows manual execution of the workflow.
- **Cron:** Schedules the workflow to run at a set time (default: 16:30 daily).
- **Zendesk:** Retrieves tickets from Zendesk based on the specified query.
- **Function:** Formats the tickets into a Slack message.
- **Slack:** Sends the formatted message to the Slack channel.

## Process Flow
1. **Manual Trigger** or **Cron** starts the workflow.
2. **Zendesk** node fetches all unassigned tickets with status less than pending.
3. **Function** node formats the tickets into a structured message for Slack.
4. **Slack** node posts the formatted message to the `jarvis-test` channel.

## Inputs
- **Zendesk API credentials** (for ticket retrieval)
- **Slack API credentials** (for message posting)
- **Schedule time** (if using Cron node)

## Outputs
- Slack message listing unassigned Zendesk tickets with direct links, statuses, and subjects.

## Additional Notes
- The workflow can be triggered both manually and on a schedule.
- The Function node ensures tickets are formatted for readability in Slack.
- Credentials for Zendesk and Slack must be set up in n8n.
- The query can be customized for different ticket criteria or Slack channels.

---
*Last processed: 12/06/2025 20:17 local time*
