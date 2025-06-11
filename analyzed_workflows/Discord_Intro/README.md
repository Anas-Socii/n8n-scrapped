# Discord Intro

## Summary
Sends a simple introduction message to a Discord channel using a webhook when manually triggered in n8n.

## Description
This workflow demonstrates how to send a message to a Discord channel using the Discord webhook integration in n8n. When a user manually triggers the workflow, it posts a "Hello World!" message to the specified Discord webhook URL. This can be used as a template for more complex Discord automation.

## Input Triggers
- Manual Trigger (On clicking 'execute')

## Output
- Message sent to Discord channel via webhook

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually
- **Discord**: Sends the message to the Discord channel

## High-Level Process Flow
1. User manually triggers the workflow.
2. Discord node posts a message to the specified Discord channel via webhook.

## Detailed Process Description
1. **Manual Trigger**: Initiates the workflow when the user clicks 'execute'.
2. **Discord**: Uses the provided webhook URI to send the message "Hello World!" to the Discord channel.

## Additional Notes
- Requires a valid Discord webhook URI.
- The message and webhook URL can be customized for different channels or content.
