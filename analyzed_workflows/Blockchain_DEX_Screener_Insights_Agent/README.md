# Blockchain DEX Screener Insights Agent

## Summary
Provides automated insights and analytics for decentralized exchanges (DEX) using DexScreener APIs, AI, and Telegram chat integration.

## Description
This workflow enables users to interactively query and receive insights about blockchain DEX tokens, pools, and trading activity. It listens for Telegram chat messages, processes user queries using an agent powered by OpenAI and LangChain, and fetches real-time DEX data via DexScreener APIs. The workflow supports memory for conversational context, multiple DexScreener endpoints, and delivers results back to Telegram.

## Input Triggers
- Telegram Trigger (incoming chat messages)
- LangChain Chat Trigger (AI-powered chat interface)

## Output
- Telegram chat responses with DEX analytics and token information

## Nodes Involved
- **Telegram Trigger**: Listens for incoming Telegram messages
- **LangChain Chat Trigger**: Initiates AI-powered chat sessions
- **OpenAI Chat Model**: Processes and generates responses
- **Window Buffer Memory**: Maintains conversational context
- **Blockchain DEX Screener Insights Agent**: Orchestrates query interpretation and tool usage
- **DexScreener Tool Nodes**: Fetch latest token profiles, boosted tokens, token boosts, search pairs, check orders, and get pairs by chain/address
- **Telegram**: Sends responses back to the user

## High-Level Process Flow
1. User sends a message via Telegram.
2. Telegram Trigger and/or LangChain Chat Trigger receive the input.
3. The message is processed by the AI agent (OpenAI + LangChain), which interprets the query.
4. Relevant DexScreener API endpoints are called for data.
5. Results are formatted and sent back to the user via Telegram.

## Detailed Process Description
1. **Telegram Trigger**: Receives chat messages from users.
2. **LangChain Chat Trigger**: Optionally enables broader chat-based workflow activation.
3. **OpenAI Chat Model**: Interprets user intent and generates natural language responses.
4. **Window Buffer Memory**: Maintains ongoing context for multi-turn conversations.
5. **DEX Screener Tool Nodes**: Access various DexScreener endpoints for token, pool, and trading analytics.
6. **Blockchain DEX Screener Insights Agent**: Orchestrates the workflow, combining AI reasoning with live blockchain data.
7. **Telegram**: Delivers the response and analytics to the user in chat.

## Additional Notes
- Requires Telegram and OpenAI API credentials.
- DexScreener API endpoints are rate-limited; use responsibly.
- Designed for interactive, real-time DEX analytics via chat.
