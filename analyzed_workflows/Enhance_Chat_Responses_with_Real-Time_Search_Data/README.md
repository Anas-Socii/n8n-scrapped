# Enhance Chat Responses with Real-Time Search Data via Bright Data & Gemini AI

## Summary
Enhances chat responses by integrating real-time search data from Bright Data's search tools and Google Gemini AI.

## Description
This workflow listens for incoming chat messages, then uses an AI agent to perform live internet searches (Google, Bing, Yandex) through Bright Data and combines the results with generative responses from Google Gemini AI. It supports memory for short-term chat context and sends webhook notifications for each response. Useful for building advanced chatbots that can provide up-to-date, context-aware answers.

## Input Triggers
- Chat Trigger (on new chat message)

## Output
- Enriched chat responses (using real-time search data and Gemini AI)
- Webhook notifications for responses

## Nodes Involved
- Chat Trigger: Listens for new chat messages.
- LangChain Agent: Orchestrates actions (search, respond, notify).
- Google Gemini Chat Model: Generates enriched responses.
- MCP Client/Tool: Performs Bright Data searches (Google, Bing, Yandex).
- HTTP Request: Sends webhook notifications.
- Memory Buffer: Maintains short-term context.
- Set: Prepares search queries.
- Manual Trigger: For workflow testing.
- Sticky Notes: Embedded documentation and instructions.

## High-Level Process Flow
- Receive chat message
- AI agent determines if search is needed
- Perform real-time search via Bright Data (Google/Bing/Yandex)
- Generate response using Gemini AI
- Send response and webhook notification
- Store conversation context in memory

## Detailed Process Description
1. **Chat Trigger** node activates on new chat message.
2. **LangChain Agent** decides which tools to use and coordinates the workflow.
3. **Set/MCP Client** nodes prepare and execute real-time search queries.
4. **Google Gemini Chat Model** generates an enriched response using search results and chat context.
5. **HTTP Request** node sends webhook notifications with the response.
6. **Memory Buffer** node maintains recent chat context for continuity.

## Additional Notes
- Requires Bright Data MCP Client and Google Gemini API credentials.
- Only available on n8n self-hosted due to use of community nodes.
- Webhook URL must be accessible for notifications.
