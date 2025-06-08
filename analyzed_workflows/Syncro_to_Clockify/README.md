# Syncro to Clockify

## Summary
Automatically logs new Syncro tickets as time entries in Clockify via webhook integration.

## Description
This workflow listens for new Syncro ticket events via a webhook and creates corresponding time entries in Clockify. It extracts relevant ticket details from the webhook payload and uses the Clockify node to log the data. The workflow is ideal for automating time tracking for support tickets.

## Input Triggers
- Webhook (receives POST requests from Syncro)

## Output
- New time entry created in Clockify for each received Syncro ticket.

## Nodes Involved
- **Webhook**: Receives ticket data from Syncro.
- **Clockify**: Logs the ticket as a time entry in Clockify.

## High-Level Process Flow
1. Webhook node receives a POST request from Syncro when a new ticket is created.
2. Clockify node creates a new time entry using details from the webhook payload.

## Detailed Process Description
1. **Webhook**: Triggered by Syncro when a new ticket event occurs. Extracts ticket details from the request body.
2. **Clockify**: Uses the extracted details to create a time entry in Clockify, including ticket number, customer name, and ticket ID.

## Additional Notes
- Requires valid Clockify API credentials and workspace ID.
- The webhook path must be configured in Syncro to point to this workflow's endpoint.
- Customize the mapping between Syncro fields and Clockify entry as needed.
