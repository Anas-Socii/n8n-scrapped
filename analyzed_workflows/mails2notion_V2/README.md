# mails2notion V2

## Summary
This workflow automates the extraction of information from Gmail emails, processes the content using OpenAI, and stores structured data in Airtable and Notion, supporting advanced RAG (Retrieval-Augmented Generation) use cases.

## Description
Upon receiving emails via Gmail, the workflow uses OpenAI's GPT models to analyze and summarize the content. It parses structured outputs, stores relevant information in Airtable, and updates Notion with actionable insights. The workflow leverages vector storage for RAG and includes manual triggers and sticky notes for documentation and testing.

## Input Triggers
- Gmail (new email received)
- Manual Trigger (for testing)

## Output
- Airtable record creation
- Notion updates
- Structured summaries and RAG context storage

## Nodes Involved
- **Gmail**: Receives and processes incoming emails.
- **OpenAI Chat Model**: Analyzes and summarizes email content.
- **Structured Output Parser**: Extracts structured data from AI output.
- **Airtable**: Stores parsed data as new records.
- **Notion**: Updates Notion database with structured information.
- **Qdrant Vector Store**: Stores embeddings for RAG.
- **Manual Trigger**: For workflow testing.
- **Sticky Notes**: Documentation and workflow notes.

## High-Level Process Flow
- Receive new email via Gmail
- Analyze and summarize content using OpenAI
- Parse structured output
- Store data in Airtable and Notion
- Update vector store for RAG

## Detailed Process Description
1. **Gmail Trigger**: Activated when a new email is received.
2. **OpenAI Chat Model**: Processes the email and generates summaries.
3. **Structured Output Parser**: Extracts fields such as sender, subject, summary, and actionable items.
4. **Airtable Node**: Stores structured data in Airtable.
5. **Notion Node**: Updates Notion with parsed insights.
6. **Qdrant Vector Store**: Saves embeddings for future RAG queries.
7. **Manual Trigger**: Allows for workflow testing.
8. **Sticky Notes**: Provide documentation and context for maintainers.

## Additional Notes
- Requires API credentials for Gmail, OpenAI, Airtable, Notion, and Qdrant.
- Designed for extensibility; add or modify nodes as needed for your use case.
- Ensure all external services are configured and credentials are valid before activating.
