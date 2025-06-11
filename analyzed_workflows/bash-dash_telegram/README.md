# bash-dash telegram

## Summary
Receives webhook requests and sends messages to a Telegram chat using n8n.

## Description
This workflow provides a webhook endpoint that, when triggered, sends a message to a specified Telegram chat. It is ideal for integrating external scripts or services with Telegram notifications.

## Input Triggers
- **Webhook**: Receives requests from external sources.

## Output
- Message sent to a Telegram chat.

## Nodes Involved
- **Webhook**: Receives incoming requests.
- **Telegram**: Sends message to Telegram chat.
- **Set**: Formats the outgoing message.

## High-Level Process Flow
- Receive webhook request.
- Send message to Telegram chat.
- Format and confirm response.

## Detailed Process Description
1. **Webhook**: Receives request with message and chat info.
2. **Telegram**: Sends message to the specified chat.
3. **Set**: Formats the outgoing response for confirmation.

## Additional Notes
- **Credentials**: Requires Telegram Bot API credentials.
- **Customization**: Chat ID and message formatting can be changed.
- **Performance**: Near-instant delivery for most requests.
- **Disclaimer**: Ensure compliance with Telegram API usage policies.
