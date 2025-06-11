# AI Agent Chatbot + LONG TERM Memory + Note Storage + Telegram

## Summary
AI-powered chatbot with long-term memory, note storage in Google Docs, and Telegram integration for persistent, context-aware conversations.

## Description
- Receives chat messages via Telegram or chat trigger.
- Uses LLMs to generate responses and manage context.
- Stores and retrieves long-term memory in Google Docs.
- Sends responses back via Telegram.
- Sticky notes document the memory and integration logic.

## Input Triggers
- Chat message received (`@n8n/n8n-nodes-langchain.chatTrigger`)

## Output
- Chat responses, persistent memory entries, Telegram messages.

## Nodes Involved
- **Chat Trigger:** Receives user input.
- **Google Docs Tool:** Saves and retrieves long-term memory.
- **LLM Node (gpt-4o-mini):** Generates chat responses.
- **Telegram Node:** Sends responses to user.
- **Sticky Notes:** Document memory and process.

## High-Level Process Flow
1. Receive chat message.
2. Retrieve and update memory from Google Docs.
3. Generate response using LLM.
4. Send response via Telegram.

## Detailed Process Description
- **Chat Trigger:** Entry point for user interaction.
- **Memory Retrieval:** Fetches long-term notes from Google Docs.
- **LLM Response:** Uses context and memory to generate output.
- **Memory Update:** Optionally saves new memories.
- **Telegram Response:** Sends message back to user.

## Additional Notes
- Requires Google Docs and Telegram API credentials.
- Designed for persistent, context-rich conversations.
- Memory and chat logic are modular and extensible.
