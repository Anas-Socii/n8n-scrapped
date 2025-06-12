# Telegram Sticker Checker Workflow

## Summary
This workflow listens for messages in a Telegram chat and checks if the message contains a sticker. If a sticker is found, it replies with the sticker's ID and set name; otherwise, it informs the user that no sticker was found.

## Description
- **Trigger:** The workflow starts when a message is received in a Telegram chat (Telegram Trigger node).
- **Sticker Check:** The If node (Look for Sticker) checks whether the incoming message contains a sticker.
- **Sticker Response:** If a sticker is found, the workflow sends a message with the sticker's ID and set name (Return Sticker node).
- **No Sticker Response:** If no sticker is found, it sends a message informing the user (Return no Sticker found node).

## Nodes Involved
- **Telegram Trigger:** Listens for new messages in a Telegram chat.
- **Look for Sticker (If):** Checks if the message contains a sticker.
- **Return Sticker (Telegram):** Sends sticker details if found.
- **Return no Sticker found (Telegram):** Informs the user if no sticker is present.

## Process Flow
1. **Telegram Trigger** receives a new message.
2. **Look for Sticker (If)** checks for the presence of a sticker in the message.
3. If a sticker is present, **Return Sticker** sends sticker details to the chat.
4. If not, **Return no Sticker found** sends a notification to the chat.

## Inputs
- **Telegram API credentials** (must be set up in n8n)
- **Telegram chat messages**

## Outputs
- Telegram message with sticker details (if sticker is found)
- Telegram message indicating no sticker was found (if not)

## Additional Notes
- The workflow is designed to be triggered by any message in the connected Telegram chat.
- Credentials for the Telegram bot must be configured in n8n.
- You can customize the response messages as needed.

---
*Last processed: 12/06/2025 20:26 local time*
