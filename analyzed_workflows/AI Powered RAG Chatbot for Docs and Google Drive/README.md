# AI Powered RAG Chatbot for Docs and Google Drive

## Summary
Provides a Retrieval-Augmented Generation (RAG) chatbot that can search, analyze, and answer questions over documents from Google Drive using Gemini, Qdrant, and OpenAI embeddings.

## Description
This workflow enables users to interact with a chatbot that leverages documents from Google Drive. It loads, processes, and embeds documents, stores them in a Qdrant vector database, and uses Gemini and OpenAI models for intelligent retrieval and question answering. Metadata extraction, chunking, and advanced search allow for context-aware responses, making it ideal for knowledge management, support, or research use cases.

## Input Triggers
- Manual trigger (for testing)
- Google Drive folder selection

## Output
- Answers to user queries based on the ingested documents
- Document metadata and insights

## Nodes Involved
- **Google Drive**: Finds and downloads files from a specified folder
- **Extract From File**: Reads file contents
- **Information Extractor**: Extracts metadata and insights from documents
- **OpenAI Embeddings**: Embeds document chunks for semantic search
- **Qdrant Vector Store**: Stores and retrieves vectorized document data
- **Gemini Chat Model**: Generates responses to user queries
- **Text Splitter**: Chunks documents for embedding
- **Set**: Prepares folder and collection IDs
- **Wait**: Manages workflow timing
- **Code**: Custom logic for Qdrant cleanup

## High-Level Process Flow
- Set Google Drive folder ID
- Find and download files from Google Drive
- Extract and process file contents
- Extract metadata and insights
- Split text into chunks and embed using OpenAI
- Store embeddings in Qdrant
- Use Gemini model to answer queries over stored documents

## Detailed Process Description
1. **Set Node**: Defines the target Google Drive folder.
2. **Google Drive Node**: Finds file IDs in the folder.
3. **Download File Node**: Downloads each file.
4. **Extract From File Node**: Reads file content.
5. **Information Extractor**: Extracts metadata and key insights.
6. **Text Splitter**: Chunks text for embedding.
7. **OpenAI Embeddings**: Embeds each chunk.
8. **Qdrant Vector Store**: Stores embeddings for semantic search.
9. **Gemini Chat Model**: Answers user questions using retrieved context.
10. **Code Node**: Handles Qdrant cleanup by file ID.

## Additional Notes
- Requires Google Drive, Qdrant, Gemini, and OpenAI API credentials
- Designed for RAG chatbot and document Q&A scenarios
- Can be extended to additional sources or models as needed
