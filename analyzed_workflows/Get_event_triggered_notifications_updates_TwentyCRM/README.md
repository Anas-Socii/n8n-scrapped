# Get Event Triggered Notifications / Updates on Preferred Messaging Channels with TwentyCRM

## Summary
Automates the delivery of event-triggered notifications and updates from TwentyCRM to users’ preferred messaging channels (Slack or Email), with event logging to Google Sheets.

## Description
This workflow listens for new events from TwentyCRM via a webhook. It filters and processes event data, logs all events to a Google Sheet, and determines the appropriate messaging channel based on event type. Delete events are sent via Gmail, while all other events are sent to a Slack channel. The workflow is modular and can be extended to support additional channels or event types as needed.

## Input Triggers
- Webhook: Receives event notifications from TwentyCRM (set up webhook URL in TwentyCRM).

## Output
- Sends event notifications to Slack or Gmail, depending on event type.
- Logs all events to a Google Sheet.

## Nodes Involved
- **on new twentycrm event (Webhook)**: Receives POST requests from TwentyCRM with event data.
- **filter required data #eventType mandatory (Set)**: Extracts and prepares required event fields.
- **events log (Google Sheets)**: Appends all event data to a Google Sheet for record-keeping.
- **message channel evaluation (IF)**: Determines if the event type is 'delete' or another type.
- **email channel for delete eventType (Gmail)**: Sends email notifications for delete events.
- **message channel for all other eventTypes (Slack)**: Sends Slack messages for all other events.
- **Sticky Notes**: Provide setup instructions and documentation within the workflow.

## High-Level Process Flow
1. Webhook is triggered by a new event from TwentyCRM.
2. Event data is filtered and required fields are extracted.
3. All events are logged in Google Sheets.
4. The workflow evaluates the event type:
   - If the event is a 'delete', an email is sent via Gmail.
   - Otherwise, a Slack message is sent with event details.

## Detailed Process Description
1. **Webhook Trigger**: Receives event data from TwentyCRM.
2. **Set Node**: Extracts event name, object metadata, and record details.
3. **Google Sheets Logging**: Logs each event as a new row.
4. **IF Node**: Checks if the event type is 'delete'.
5. **Gmail Node**: For 'delete' events, sends an email with event details.
6. **Slack Node**: For other events, posts a message to a Slack channel with relevant info.
7. **Sticky Notes**: Embedded for user guidance and configuration help.

## Additional Notes
- Requires configuration of webhook URL in TwentyCRM to point to this workflow.
- Google Sheets, Gmail, and Slack credentials must be set up in n8n.
- The workflow can be easily extended to support more channels or event types.
- All events are logged for traceability and auditing.
