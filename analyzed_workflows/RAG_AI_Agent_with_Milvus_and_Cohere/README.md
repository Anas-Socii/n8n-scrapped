# RAG AI Agent with Milvus and Cohere

## Summary
Automates retrieval-augmented generation (RAG) by integrating LangChain, Milvus, and Cohere for document search, embedding, and chat-based responses.

## Description
This workflow enables advanced retrieval-augmented generation (RAG) using n8n. It watches for new files in a specific Google Drive folder, loads and embeds documents using Cohere, and responds to chat messages with context-aware answers leveraging LangChain and Milvus. The setup is ideal for intelligent document Q&A, knowledge base assistants, or AI-powered search in enterprise environments.

## Input Triggers
- Google Drive Trigger (watches for new files in a folder)
- Chat Trigger (listens for incoming chat messages)

## Output
- Embedded documents in Milvus for semantic search
- AI-powered chat responses based on uploaded documents

## Nodes Involved
- **Watch New Files**: Monitors a Google Drive folder for new files to process.
- **Default Data Loader**: Loads new documents for further processing.
- **Embeddings Cohere**: Generates vector embeddings for documents using Cohere.
- **When chat message received**: Triggers the workflow when a chat message is received for context-aware responses.

## High-Level Process Flow
1. Google Drive trigger detects new files in a specific folder.
2. Default Data Loader loads the file content.
3. Embeddings Cohere node generates embeddings for the document and stores them in Milvus.
4. Chat Trigger listens for incoming chat messages and initiates context-aware responses.

## Detailed Process Description
1. **Watch New Files**: Uses Google Drive Trigger to watch a folder for new files, triggering the workflow on new uploads.
2. **Default Data Loader**: Loads the new document for embedding.
3. **Embeddings Cohere**: Generates and stores vector embeddings in Milvus for semantic search and retrieval.
4. **When chat message received**: Listens for chat messages and, using LangChain, retrieves relevant context from Milvus and generates a response.

## Additional Notes
- Requires Cohere, Google Drive, and Milvus credentials.
- Folder and chat webhook IDs must be configured for your environment.
- Extendable to support additional data sources, models, or output channels.
