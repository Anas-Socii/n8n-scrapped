# Telegram Messaging Agent for Text/Audio/Images

## Summary
A Telegram bot workflow that receives, classifies, and processes text, audio, and image messages using n8n, OpenAI, and Telegram nodes.

## Description
This workflow acts as a multi-modal Telegram bot agent. It receives incoming messages via webhook, checks user and chat IDs, and processes text, audio, and image messages. Audio is transcribed, images are analyzed, and all content is classified (e.g., task vs. other) using OpenAI and LangChain nodes. The bot replies with contextually appropriate Telegram messages, including error handling and task confirmations.

## Input Triggers
- Webhook (receives Telegram bot events)

## Output
- Telegram messages (text, audio, image replies, error messages, task confirmations, etc.)

## Nodes Involved
- Webhook: Receives incoming Telegram bot events.
- If: Checks and validates user and chat IDs.
- Telegram: Sends and receives Telegram messages.
- HTTP Request: Sets and checks Telegram webhook status.
- Set: Formats and assigns data for downstream nodes.
- OpenAI (LangChain): Transcribes audio, analyzes images, and generates responses.
- ConvertToFile: Converts binary data for image processing.
- ExtractFromFile: Extracts base64 data from files.
- TextClassifier: Classifies message content (task/other).
- Sticky Notes: Embedded documentation and instructions.

## High-Level Process Flow
- Receive Telegram event via webhook
- Validate user and chat ID
- Classify message type (text, audio, image)
- Transcribe audio and analyze images with OpenAI
- Classify message (task/other)
- Send appropriate Telegram reply

## Detailed Process Description
1. **Webhook** node receives Telegram events (text, audio, image).
2. **If** node checks user and chat ID validity.
3. **Set/HTTP Request** nodes manage and check Telegram webhook configuration.
4. **TextClassifier/Set** nodes classify and format incoming message content.
5. **OpenAI (LangChain)** nodes transcribe audio, analyze images, and generate intelligent responses.
6. **Telegram** nodes reply to users with contextually relevant messages, including error handling.

## Additional Notes
- Requires Telegram bot token and OpenAI API credentials configured in n8n.
- Make sure the webhook endpoint is accessible to Telegram.
- The workflow is modular and can be extended for additional message types or logic.
