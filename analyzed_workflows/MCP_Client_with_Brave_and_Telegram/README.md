# MCP Client with Brave and Telegram

## Summary
This workflow enables users to perform web searches from Telegram using the Brave search engine via MCP integration. It listens for /brave commands in Telegram, processes the query, and returns search results to the chat.

## Description
Triggered by a Telegram message, this workflow checks if the message starts with the /brave command. If so, it cleans the query, lists available Brave tools, executes the search, and sends the results back to Telegram. Sticky notes are included for documentation and guidance within the workflow. The workflow demonstrates advanced integration between Telegram, Brave, and MCP via n8n.

## Input Triggers
- Telegram Trigger (listens for incoming Telegram messages)

## Output
- Sends search results back to the originating Telegram chat

## Nodes Involved
- **Telegram Trigger:** Listens for messages in Telegram.
- **IF:** Checks if the message starts with /brave.
- **Set (Get Text):** Extracts the message text.
- **Code (Clean query):** Removes the /brave command from the message.
- **MCP Client (List Brave Tools):** Lists available Brave tools.
- **MCP Client (Exec Brave tool):** Executes the search using Brave tools.
- **Telegram (Send message):** Sends the search result back to Telegram.
- **Sticky Notes:** Provide workflow documentation and user guidance.

## High-Level Process Flow
1. Telegram Trigger receives a message.
2. IF node checks if the message starts with /brave.
3. If true, the message is cleaned and the query extracted.
4. Lists available Brave tools.
5. Executes the search with the cleaned query.
6. Sends the result back to the Telegram chat.

## Detailed Process Description
- **Telegram Trigger:** Receives all incoming Telegram messages.
- **IF Node:** Determines if the message is a /brave command.
- **Set/Code Nodes:** Extract and clean the search query.
- **MCP Client Nodes:** List and execute Brave search tools.
- **Telegram Node:** Sends the formatted result back to the user.
- **Sticky Notes:** Inline documentation for workflow maintainers.

## Additional Notes
- Requires valid Telegram and MCP Client credentials.
- Ensure all node credentials are set up for Telegram and Brave MCP.
- Extend this workflow by adding support for additional commands or richer result formatting.
