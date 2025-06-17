# Receive Updates on Gumroad Sales

## Summary
Triggers an n8n workflow whenever a sale is made on Gumroad using a webhook trigger.

## Description
This workflow listens for sale events from Gumroad using a webhook trigger node. When a sale occurs, Gumroad sends the event to n8n, which can then be extended to perform downstream automation such as notifications, database updates, or fulfillment.

## Input Triggers
- Gumroad Trigger (webhook for sales events)

## Output
- Triggers downstream actions in n8n when a sale is made in Gumroad.

## Nodes Involved
- **Gumroad Trigger**: Listens for sale events from Gumroad and starts the workflow upon receiving a webhook call.

## High-Level Process Flow
- Gumroad sends a sale event to the webhook
- Workflow is triggered in n8n

## Detailed Process Description
1. **Gumroad Trigger Node**: Configured to listen for 'sale' events from Gumroad. When a sale is made, it triggers the workflow for further processing (additional nodes can be added for custom actions).

## Additional Notes
- Requires valid Gumroad API credentials (`gumroadApi`).
- The workflow is inactive by default and must be enabled to receive events.
- Further processing can be added by extending the workflow with additional nodes.
