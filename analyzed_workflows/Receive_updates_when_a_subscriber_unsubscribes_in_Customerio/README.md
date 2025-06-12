# Receive updates when a subscriber unsubscribes in Customer.io

## Summary
This workflow listens for unsubscribe events in Customer.io and triggers downstream processes when a subscriber unsubscribes.

## Description
Whenever a subscriber unsubscribes from a list or campaign in Customer.io, this workflow is triggered. It is designed to automate follow-up actions or notifications based on unsubscribe events, helping teams stay up to date with changes in their subscriber base.

## Input Triggers
- Customer.io Trigger (event: unsubscribe)

## Output
- Initiates downstream automation or notifications

## Nodes Involved
- **Customer.io Trigger**: Listens for unsubscribe events from Customer.io.

## High-Level Process Flow
- Wait for an unsubscribe event from Customer.io
- Trigger any downstream actions or notifications as configured

## Detailed Process Description
1. **Customer.io Trigger**: Activated when a subscriber unsubscribes.
2. **(Optional) Downstream Nodes**: Add further processing, such as sending a notification or updating a database.

## Additional Notes
- Requires valid Customer.io API credentials.
- Workflow is designed for extensibility; add additional nodes as needed for your use case.
