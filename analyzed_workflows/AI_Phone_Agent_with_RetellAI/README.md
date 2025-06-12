# AI Phone Agent with RetellAI

## Summary
This workflow implements an AI-powered phone agent that integrates with RetellAI, OpenAI, Telegram, Google Calendar, and Qdrant for advanced call handling, analysis, and multi-channel notifications.

## Description
The workflow receives phone call events via RetellAI, processes and analyzes calls using OpenAI's GPT models, extracts structured information, interacts with vector stores for RAG (Retrieval-Augmented Generation), and sends notifications or updates to Telegram and Google Calendar. It demonstrates a sophisticated orchestration of AI and communication tools for automated call management and post-call actions.

## Input Triggers
- Webhook (RetellAI call events)
- Manual Trigger (for testing)

## Output
- Telegram notifications
- Google Calendar events
- Vector store updates (Qdrant)
- Structured call summaries and actionable tasks

## Nodes Involved
- **Webhook**: Receives call events from RetellAI.
- **OpenAI Chat Model**: Processes call data and generates summaries.
- **Structured Output Parser**: Extracts structured information from AI output.
- **Qdrant Vector Store**: Stores and retrieves vectorized call data.
- **Telegram**: Sends notifications about call outcomes.
- **Google Calendar**: Schedules events based on call data.
- **Filter/If**: Branches logic based on event types.
- **Set/Function**: Data manipulation and transformation.
- **Sticky Notes**: Documentation and workflow notes.

## High-Level Process Flow
- Receive call event via webhook
- Filter and analyze call event types (e.g., call ended, call analyzed)
- Use OpenAI to process call transcripts and extract key information
- Store and retrieve context from Qdrant vector store
- Send notifications to Telegram and update Google Calendar as needed
- Parse and structure AI outputs for downstream use

## Detailed Process Description
1. **Webhook Trigger**: Listens for call events from RetellAI.
2. **Filter**: Determines event type (e.g., call_ended, call_analyzed) and routes accordingly.
3. **OpenAI Chat Model**: Summarizes and analyzes call content using GPT-4o.
4. **Structured Output Parser**: Extracts structured fields such as name, email, summary, date, etc.
5. **Qdrant Vector Store**: Stores embeddings and retrieves relevant context for RAG operations.
6. **Telegram Node**: Sends notifications about calls or actions.
7. **Google Calendar Node**: Schedules or updates events based on call outcomes.
8. **Set/Function Nodes**: Transform and prepare data for different branches.
9. **Sticky Notes**: Provide workflow documentation and guidance for maintainers.

## Additional Notes
- Requires API credentials for RetellAI, OpenAI, Qdrant, Telegram, and Google Calendar.
- The workflow uses advanced AI and vector search integrations for RAG.
- Manual triggers and sticky notes are included for testing and documentation.
- Ensure all third-party services are configured and credentials are valid before activating.
