# Workflow Name: (G) LineChatBot + Google Sheets (as a memory)

## Summary
A chatbot workflow that integrates LINE messaging with Google Sheets, using an AI agent (Gemini or similar) to provide interactive, memory-enabled conversations for users.

## Description
This workflow acts as a conversational assistant on LINE messenger. When a user sends a message to the bot, the workflow receives the webhook, processes the message, consults an AI agent for a response, and manages user conversation history in Google Sheets for memory. The assistant can remember context, respond in the user’s language, and is aware of the current date/time in the Thailand time zone.

## Input Triggers
- **Webhook** (`n8n-nodes-base.webhook`): Triggered by incoming POST requests from the LINE messaging platform.

## Output
- Sends a reply message to the user via LINE using an HTTP request.
- Updates Google Sheets with user conversation history for persistent memory.

## Nodes Involved
- **Webhook** (`n8n-nodes-base.webhook`): Receives incoming messages from LINE.
- **Edit Fields** (`n8n-nodes-base.set`): Extracts and formats relevant fields from the incoming data.
- **Get History** (`n8n-nodes-base.googleSheets`): Retrieves conversation history for the user from Google Sheets.
- **Prepare Prompt** (`n8n-nodes-base.set`): Prepares the prompt for the AI agent using the incoming message and conversation history.
- **AI Agent** (`@n8n/n8n-nodes-langchain.agent`): The core conversational agent, powered by Google Gemini or similar, configured with a system message and memory context.
- **Google Gemini Chat Model** (`@n8n/n8n-nodes-langchain.lmChatGoogleGemini`): Supplies the Gemini language model for the AI Agent.
- **Split History** (`n8n-nodes-base.function` or similar): Splits or processes conversation history for prompt engineering.
- **Save History** (`n8n-nodes-base.googleSheets`): Appends or updates the user’s conversation history in Google Sheets.
- **HTTP Request** (`n8n-nodes-base.httpRequest`): Sends the AI agent’s response back to the user via LINE’s reply API.
- **Sticky Notes**: Used for documentation/comments within the workflow.

## High-Level Process Flow
1. LINE sends a message to the bot, triggering the webhook.
2. The workflow extracts message, user ID, and reply token.
3. Retrieves the user’s conversation history from Google Sheets.
4. Prepares a prompt for the AI agent, combining the new message and history.
5. The AI agent (Gemini) generates a response.
6. The response is sent back to the user via LINE.
7. The conversation history is updated in Google Sheets for future context.

## Detailed Process Description
1. **Webhook**: Receives POST requests from LINE containing user messages and metadata.
2. **Edit Fields**: Extracts message text, reply token, and user ID for downstream nodes.
3. **Get History**: Looks up the user’s previous conversation history in Google Sheets.
4. **Prepare Prompt**: Combines the new message and retrieved history to form a prompt for the AI agent.
5. **AI Agent**: Receives the prompt, uses the Gemini model, and is guided by a system message to act as a helpful Thai assistant, aware of time and context.
6. **Google Gemini Chat Model**: Provides the LLM capabilities for the agent.
7. **Split History**: Formats or splits the conversation history as needed for memory management.
8. **Save History**: Appends or updates the conversation history in Google Sheets, ensuring context is preserved.
9. **HTTP Request**: Sends the AI-generated response back to the user on LINE using the reply token.

## Additional Notes
- **Credentials Required**: LINE API credentials, Google Sheets OAuth2, Gemini API credentials.
- **AI Model**: Uses Google Gemini (`models/gemini-2.0-flash-001`).
- **Persistent Memory**: User conversation history is maintained in Google Sheets for context-aware responses.
- **Timezone Awareness**: The agent is configured for the Thailand time zone (Asia/Bangkok, UTC+7).
- **Workflow Status**: The workflow JSON indicates `active: true`.
- **Tags**: "Guitar"
