# Gender Inclusive Language

## Summary
Detects and suggests gender-inclusive alternatives in chat messages, promoting inclusive communication in Mattermost channels.

## Description
This workflow listens for incoming webhook POSTs containing chat messages. It checks for gendered terms (such as "guys", "gals", "bros", etc.) and, if found, sends a gentle suggestion to use more inclusive language, like "folks" or “y'all”, via a Mattermost bot. If no gendered terms are detected, the workflow does nothing.

## Input Triggers
- Webhook (POST request with chat message data)

## Output
- Automated message in Mattermost suggesting inclusive language (if needed)

## Nodes Involved
- **Webhook:** Receives chat message data.
- **IF:** Checks for gendered terms in the message text.
- **Mattermost:** Sends a suggestion to use inclusive language.
- **NoOp:** Used if no action is needed.

## High-Level Process Flow
- Receive chat message via webhook
- Check for gendered terms
- If found, send suggestion to Mattermost
- If not found, do nothing

## Detailed Process Description
1. **Webhook:** Receives POST requests with chat message data, including text and channel ID.
2. **IF:** Evaluates the message text for any gendered terms ("guys", "gals", "bros", "dudes", etc.).
3. **Mattermost:** If a gendered term is detected, sends a message to the channel suggesting more inclusive alternatives.
4. **NoOp:** If no gendered terms are found, the workflow ends without further action.

## Additional Notes
- Requires valid Mattermost bot credentials.
- Can be extended to check for additional terms or languages.
- Promotes a respectful and inclusive communication environment.
