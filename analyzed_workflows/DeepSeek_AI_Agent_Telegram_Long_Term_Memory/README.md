# DeepSeek AI Agent + Telegram + LONG TERM Memory

## Summary
This workflow connects a DeepSeek-powered AI agent to Telegram, enabling chat-based interaction with advanced reasoning and long-term memory. It validates users, routes messages (text, audio, image), and stores/retrieves long-term memories for personalized, context-aware conversations.

## Description
Designed for conversational AI applications on Telegram, this workflow integrates DeepSeek V3 and R1 models for reasoning, supports message type routing, and maintains long-term memory for each user. It features user validation, error handling, and in-workflow documentation via sticky notes.

## Input Triggers
- Telegram webhook (via Listen for Telegram Events node)

## Output
- AI-generated response sent back to the user on Telegram
- Error message if validation fails or unsupported input

## Nodes Involved
- **Listen for Telegram Events**: Receives incoming Telegram messages via webhook
- **Validation / Check User & Chat ID**: Ensures the message is from an authorized user
- **Message Router**: Routes messages based on type (text, audio, image)
- **AI Agent**: Orchestrates LLM calls and manages conversation logic
- **DeepSeek-V3 Chat / DeepSeek-R1 Reasoning**: Calls DeepSeek models for chat and reasoning
- **Window Buffer Memory**: Maintains short-term context
- **Save/Retrieve Long Term Memories**: Stores and fetches persistent user memories
- **Merge**: Combines memory and input for context-rich responses
- **Error message / Telegram Response**: Sends responses or errors to Telegram
- **Sticky Notes**: Embedded documentation and usage tips

## High-Level Process Flow
1. Telegram message is received via webhook.
2. User and chat ID are validated.
3. Message is routed based on type (text, audio, image).
4. Conversation context (short and long-term memory) is retrieved and merged.
5. AI Agent invokes DeepSeek models for reasoning and response.
6. Response is sent back to the user on Telegram.
7. Long-term memories are updated as needed.

## Detailed Process Description
1. **Listen for Telegram Events**: Triggers on incoming Telegram messages.
2. **Validation / Check User & Chat ID**: Validates sender against allowed users.
3. **Message Router**: Determines message type and routes to appropriate handler.
4. **Retrieve Long Term Memories**: Fetches persistent user context.
5. **Merge**: Combines input and memory for context-aware response.
6. **AI Agent**: Orchestrates logic, invokes DeepSeek-V3/DeepSeek-R1 for chat or reasoning.
7. **Window Buffer Memory**: Maintains recent conversation turns for continuity.
8. **Save Long Term Memories**: Updates persistent memory store.
9. **Telegram Response / Error message**: Sends AI response or error to user.
10. **Sticky Notes**: Provide in-workflow documentation and integration tips.

## Additional Notes
- Requires Telegram Bot API and DeepSeek API credentials.
- Supports long-term and short-term memory for personalized conversations.
- Handles text, audio, and image messages.
- Designed for advanced AI chatbots on Telegram with persistent user context.
