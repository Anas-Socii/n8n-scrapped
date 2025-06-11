# RAG Workflow For Company Documents stored in Google Drive

## Summary
This workflow enables Retrieval-Augmented Generation (RAG) over company documents stored in Google Drive, leveraging Pinecone for vector storage and Google Gemini for embeddings. It allows an AI agent to answer employee questions using internal documentation.

## Description
- **Purpose:** Indexes and retrieves company documents from Google Drive, enabling advanced question-answering and information retrieval for HR or internal support scenarios.
- **Automation:** Handles document download, embedding, vector storage, and retrieval, with an AI agent orchestrating the process and generating responses.

## Workflow Structure
- **Main Nodes:**
  - **Google Drive Trigger:** Detects updates to files in Google Drive.
  - **Download File:** Downloads updated files for processing.
  - **Embeddings Google Gemini:** Generates vector embeddings for document content.
  - **Pinecone Vector Store:** Stores and retrieves document embeddings.
  - **Recursive Character Text Splitter:** Splits documents into manageable chunks for embedding.
  - **Vector Store Tool:** Exposes retrieval as a tool for the AI agent.
  - **AI Agent:** Answers questions using company documents, with a custom system prompt for HR support.
  - **Sticky Note:** Documents workflow purpose and usage.

## Process Flow
1. **File Update Detection:** Google Drive trigger detects new or updated files.
2. **Download:** File is downloaded from Google Drive.
3. **Embedding:** Content is split and embedded using Google Gemini.
4. **Vector Storage:** Embeddings are stored in Pinecone for efficient retrieval.
5. **Retrieval:** On query, the AI agent uses the vector store tool to find relevant document chunks.
6. **Response Generation:** AI agent answers employee questions using retrieved content.

## Credentials
- **Google Drive:** Requires Google Drive OAuth2 credentials.
- **Pinecone:** Requires Pinecone API credentials.
- **Google Gemini:** Requires Google Gemini (PaLM) API credentials.

## Usage Instructions
- Ensure all credentials are configured in n8n.
- Add or update company documents in the monitored Google Drive folder.
- Use the AI agent node to query company policies or documentation.

## Notes
- The AI agent is configured with a system prompt to prioritize accurate, concise, and document-grounded answers.
- Retrieval is exposed as a tool called `company_documents_tool`.
- The workflow is modular and can be extended for other document types or use cases.

---
*Last processed: 10/06/2025 12:57*
