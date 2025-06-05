# Telegram Messaging Agent for Text, Audio, and Images

## Summary
This workflow enables a Telegram bot to receive, process, and respond to text, audio, and image messages. It verifies user and chat identity, handles webhooks, processes different message types, and uses OpenAI for transcription and image analysis.

## Description
- Listens for incoming Telegram messages via a webhook.
- Verifies the sender’s first name, last name, and user ID.
- Handles and responds to text, audio, and image messages.
- Processes audio messages using OpenAI for transcription.
- Processes image messages using OpenAI for analysis.
- Sends error messages for unauthorized or invalid requests.
- Includes sticky notes for setup and processing guidance.
- Provides utilities for setting and testing Telegram webhooks.

## Input Triggers
- Telegram webhook (`n8n-nodes-base.webhook`).

## Output
- Telegram message responses (text, transcribed audio, analyzed images).
- Error messages for invalid or unauthorized users.

## Nodes Involved
- **Webhook (Listen for Telegram Events):** Receives incoming Telegram messages.
- **If (Check User & Chat ID):** Verifies sender identity.
- **Telegram (Error message):** Sends error responses.
- **HTTP Request (Set Webhook Test URL, Get Telegram Webhook Info):** Sets and checks webhook status.
- **Telegram (Get Audio File, Get Image):** Retrieves files from Telegram.
- **OpenAI (Transcribe Recording, Analyze Image, gpt-4o-mini):** Transcribes audio and analyzes images.
- **Set (Image Schema):** Structures image data.
- **Sticky Notes:** Provide setup and process documentation.

## High-Level Process Flow
1. Webhook receives a message from Telegram.
2. User and chat ID are validated.
3. Depending on message type:
   - **Text:** Processed and responded to (optionally via OpenAI).
   - **Audio:** File retrieved and transcribed via OpenAI.
   - **Image:** File retrieved and analyzed via OpenAI.
4. Error responses sent for invalid requests.

## Detailed Process Description
- **Listen for Telegram Events:** Receives and parses incoming messages.
- **Check User & Chat ID:** Ensures only authorized users are processed.
- **Error Handling:** Sends error messages for unauthorized access.
- **Set Webhook Utilities:** Nodes for setting and verifying webhook configuration.
- **Audio/Image Processing:** Downloads files and uses OpenAI nodes for transcription and image analysis.
- **Text Processing:** Handles and responds to text messages, potentially with AI assistance.

## Additional Notes
- Requires Telegram bot token and OpenAI API credentials.
- Webhook endpoint must be set up and accessible via HTTPS.
- Designed for multi-modal messaging (text, audio, image).
- Sticky notes in the workflow provide setup instructions and process explanations.
