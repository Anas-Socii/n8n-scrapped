# Create AI-Ready Vector Datasets for LLMs with Bright Data, Gemini & Pinecone

## Summary
This workflow automates the creation of vector datasets suitable for use with Large Language Models (LLMs) by leveraging Bright Data for data acquisition, Google Gemini for embeddings and language processing, and Pinecone for vector storage.

## Description
The workflow orchestrates the collection, processing, embedding, and storage of textual data. It integrates various n8n nodes (including LangChain nodes) to:
- Fetch and preprocess data
- Generate embeddings using Google Gemini
- Store vectors in Pinecone
- Optionally, format and parse results for downstream LLM applications

## Input Triggers
- **Manual Trigger**: Initiated by clicking 'Test workflow' in n8n.

## Output
- Vectorized dataset stored in Pinecone, ready for LLM search, retrieval, or fine-tuning.

## Nodes Involved
- **Manual Trigger**: Starts workflow execution manually.
- **AI Agent**: Formats search results for further processing.
- **Pinecone Vector Store**: Inserts vectorized data into Pinecone.
- **Embeddings Google Gemini**: Generates embeddings from text.
- **Default Data Loader**: Loads and formats data for processing.
- **Recursive Character Text Splitter**: Splits text into manageable chunks.
- **Google Gemini Chat Model**: Multiple nodes for language processing and enrichment.
- **Structured Output Parser**: Parses model outputs into structured JSON.

## High-Level Process Flow
- Manually trigger the workflow.
- Collect and preprocess data (potentially from Bright Data or other sources).
- Split text and generate embeddings using Gemini.
- Store embeddings in Pinecone.
- Parse and format outputs for LLM use.

## Detailed Process Description
1. **Manual Trigger**: User initiates the workflow.
2. **Data Collection**: Data is fetched and formatted for embedding.
3. **Text Splitting**: Large documents are split into smaller chunks.
4. **Embedding Generation**: Google Gemini nodes create vector embeddings for each chunk.
5. **Vector Storage**: Pinecone node stores embeddings for fast retrieval.
6. **AI Agent & Output Parser**: Optionally format, summarize, or structure results for downstream LLMs or applications.

## Additional Notes
- **Credentials**: Requires valid API credentials for Pinecone and Google Gemini.
- **Customization**: Data sources and processing logic can be adapted for different LLM or vector database needs.
- **Performance**: Efficient for large-scale dataset creation, but subject to API rate limits.
- **Use Cases**: Prepares data for semantic search, retrieval-augmented generation (RAG), or LLM fine-tuning.
- **Disclaimer**: Ensure compliance with data source terms and API usage policies.
