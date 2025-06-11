# Telegram RAG pdf

## Summary
A workflow that enables retrieval-augmented generation (RAG) using Telegram as the interface and PDF documents as the knowledge source.

## Description
This workflow allows users to interact with a Telegram bot, upload PDF documents, split and embed the text, and perform retrieval-augmented generation using OpenAI embeddings. It is designed for chat-based Q&A and document analysis scenarios.

## Input Triggers
- **Telegram Trigger**: Listens for incoming Telegram messages.

## Output
- Answers to user queries based on uploaded PDF content.

## Nodes Involved
- **Telegram Trigger**: Receives messages and files from Telegram users.
- **Default Data Loader**: Loads PDF data for processing.
- **Recursive Character Text Splitter**: Splits PDF text into manageable chunks.
- **Embeddings OpenAI**: Generates vector embeddings for the text.

## High-Level Process Flow
- User sends a message or PDF to the Telegram bot.
- PDF is loaded and split into chunks.
- Chunks are embedded using OpenAI.
- User queries are answered using the embedded knowledge.

## Detailed Process Description
1. **Telegram Trigger**: Receives messages or documents from users.
2. **Default Data Loader**: Loads uploaded PDF files.
3. **Recursive Character Text Splitter**: Splits the text for embedding.
4. **Embeddings OpenAI**: Creates embeddings for RAG.

## Additional Notes
- **Credentials**: Requires Telegram and OpenAI API credentials.
- **Customization**: Chunk size and overlap can be adjusted.
- **Disclaimer**: Ensure compliance with Telegram and OpenAI usage policies.
