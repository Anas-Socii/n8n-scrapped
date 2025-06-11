# Build a Web Search Chatbot with GPT-4o and MCP Brave Search

## Summary
A chatbot workflow that uses GPT-4o and MCP Brave Search to answer user queries with up-to-date web information.

## Description
This workflow enables users to interact with a chatbot that leverages GPT-4o for natural language understanding and MCP Brave Search for real-time web search capabilities. It is suitable for scenarios where up-to-date information retrieval is needed in a conversational format.

## Input Triggers
- **Chat Message Trigger**: Initiates the chatbot when a chat message is received.

## Output
- Answers to user queries based on live web search results.

## Nodes Involved
- **AI Agent**: Handles conversation and orchestrates actions.
- **Chat Trigger**: Listens for incoming chat messages.
- **MCP Get Brave Tools**: Retrieves available Brave Search tools.
- **MCP Execute Brave Search**: Executes the selected search tool.
- **Simple Memory**: Maintains chat context.

## High-Level Process Flow
- Receive chat message.
- Analyze intent and context.
- Execute web search via MCP Brave Search.
- Respond to user with results.

## Detailed Process Description
1. **Chat Trigger**: Receives the user's chat message.
2. **AI Agent**: Determines the user's intent and manages conversation flow.
3. **MCP Get Brave Tools**: Lists available search tools.
4. **MCP Execute Brave Search**: Performs the web search and retrieves results.
5. **Simple Memory**: Maintains context across messages.

## Additional Notes
- **Credentials**: Requires MCP Brave Search and OpenAI API credentials.
- **Customization**: Tool selection and prompts can be tailored.
- **Disclaimer**: Ensure compliance with search and data privacy policies.
