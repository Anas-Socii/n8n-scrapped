# Add an Event to Calendar

## Summary
Adds a new event to a specified Google Calendar when manually triggered.

## Description
- Manually triggered workflow to create an event in Google Calendar.
- Uses hardcoded event details (start/end time, calendar email).
- Designed for simple, one-off event creation.

## Input Triggers
- Manual Trigger (`n8n-nodes-base.manualTrigger`)

## Output
- New event created in the designated Google Calendar.

## Nodes Involved
- **Manual Trigger:** Initiates the workflow when executed.
- **Google Calendar:** Creates the calendar event using the specified details.

## High-Level Process Flow
1. User clicks "execute" to start the workflow.
2. Google Calendar node creates an event with the configured details.

## Detailed Process Description
- **On clicking 'execute':** User manually starts the workflow.
- **Google Calendar:** Uses provided credentials to add an event with given start/end times and calendar email.

## Additional Notes
- Requires Google Calendar OAuth2 credentials.
- Event details are hardcoded; can be parameterized for dynamic usage.
- Safe for demonstration and simple automations.
