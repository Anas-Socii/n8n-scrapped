# Google Calendar to Zoom Meeting

## Summary
Automatically creates Zoom meetings for upcoming Google Calendar events, filtering out unwanted types, and scheduling them via a daily cron job or manual execution.

## Description
- Runs daily (or manually) to check for upcoming Google Calendar events.
- Filters out events that are transparent, in-person, signal, or minute meetings.
- For each valid event, creates a corresponding Zoom meeting with appropriate details.
- Automates Zoom meeting creation for calendar events, reducing manual scheduling.

## Input Triggers
- Cron Trigger (once a day at 7 AM) (`n8n-nodes-base.cron`)
- Manual Trigger (`n8n-nodes-base.manualTrigger`)

## Output
- Zoom meetings created for filtered Google Calendar events.

## Nodes Involved
- **Cron Once a Day:** Triggers the workflow daily at 7 AM.
- **Manual Trigger:** Allows for on-demand execution.
- **Date & Time:** Calculates the time window for events.
- **Google Calendar:** Fetches upcoming events using credentials.
- **IF Zoom meeting:** Filters out events that should not have Zoom meetings (transparent, in-person, signal, etc.).
- **Zoom:** Creates the Zoom meeting for each valid event.

## High-Level Process Flow
1. Triggered daily or manually.
2. Calculates the relevant time window.
3. Fetches events from Google Calendar.
4. Filters out unwanted event types.
5. Creates Zoom meetings for each valid event.

## Detailed Process Description
- **Cron/Manual Trigger:** Starts the workflow.
- **Date & Time:** Determines the time window (next 12 hours).
- **Google Calendar:** Retrieves events within the window.
- **IF Zoom meeting:** Filters out events based on transparency and summary.
- **Zoom:** Creates a Zoom meeting for each event passing the filter.

## Additional Notes
- Requires Google Calendar and Zoom API credentials.
- Calendar and list IDs must be configured for your environment.
- Demonstrates event-driven automation for meetings.
