# Build Your First AI MCP Server

## Summary
Demonstrates how to build an AI-powered MCP (Multi-Channel Platform) server for workflow automation, integrating Google Calendar and custom text-processing tools.

## Description
This workflow showcases how to set up an AI MCP server that can handle chat triggers, process text (convert case, generate jokes, random data), and manage Google Calendar events (search, create, update, delete) using n8n’s AI agent and tool nodes. It is designed as a template for building extensible AI workflow servers with both conversational and event-driven automation.

## Input Triggers
- Chat message received
- Webhook (MCP trigger)
- Executed by another workflow

## Output
- Google Calendar events created, updated, deleted, or searched
- Responses to chat or workflow requests with processed text or generated data

## Nodes Involved
- **AI Agent**: Handles chat and workflow logic
- **Google Calendar Tool**: Manages calendar events
- **Switch**: Routes function calls (e.g., uppercase, lowercase, random data, joke)
- **Set**: Processes and transforms text
- **MCP Trigger**: Webhook endpoint for external calls
- **Execute Workflow Trigger**: Allows execution by other workflows
- **Tool Workflow**: Defines callable tools for text conversion
- **Chat Trigger**: Listens for incoming chat messages

## High-Level Process Flow
- Receive chat, webhook, or workflow trigger
- Route function request (e.g., text conversion, calendar event)
- Process request using appropriate tool node
- Return result or perform action (e.g., update calendar)

## Detailed Process Description
1. **Chat Trigger / MCP Trigger / Execute Workflow Trigger**: Initiates workflow based on chat, webhook, or workflow call.
2. **Switch Node**: Determines which function to execute (uppercase, lowercase, random data, joke).
3. **Set Nodes**: Convert text case as requested.
4. **Google Calendar Tool Nodes**: Search, create, update, or delete calendar events using provided parameters.
5. **Tool Workflow**: Provides callable tools for text conversion.
6. **AI Agent**: Orchestrates logic and system message context.

## Additional Notes
- Requires Google Calendar OAuth2 credentials
- Designed as a template for extensible AI-powered workflow servers
- Can be expanded with additional tools and integrations
