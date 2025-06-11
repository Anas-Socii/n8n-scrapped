# Generate Exam Questions

## Summary
Automates the generation, embedding, and storage of exam questions using AI models and vector databases for downstream retrieval and analysis.

## Description
This workflow creates a pipeline to generate exam questions, convert them to embeddings, and store them in Qdrant, a vector database. It leverages OpenAI and Google Gemini for language processing, Google Docs for content, and supports document vectorization and retrieval for AI-powered question-answering or study tools.

## Input Triggers
- Manual Trigger (n8n manualTrigger node)

## Output
- Exam questions embedded and stored in Qdrant vector store
- Markdown and text file versions of questions
- Processed Google Docs content

## Nodes Involved
- **n8n-nodes-base.manualTrigger**: Starts the workflow manually.
- **n8n-nodes-base.httpRequest**: Creates and refreshes Qdrant collections.
- **@n8n/n8n-nodes-langchain.vectorStoreQdrant**: Inserts vectorized questions into Qdrant.
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi**: Generates embeddings for questions using OpenAI.
- **@n8n/n8n-nodes-langchain.textSplitterTokenSplitter**: Splits text for embedding.
- **n8n-nodes-base.googleDocs**: Loads content from Google Docs.
- **n8n-nodes-base.code**: Converts Google Docs JSON to Markdown.
- **n8n-nodes-base.convertToFile**: Converts Markdown to a downloadable file.
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini**: Generates questions or answers using Gemini.
- **@n8n/n8n-nodes-langchain.retrieverVectorStore**: Retrieves questions from Qdrant.
- **n8n-nodes-base.splitInBatches**: Loops over items for batch processing.
- **@n8n/n8n-nodes-langchain.outputParserItemList**: Parses list outputs from AI models.
- **n8n-nodes-base.stickyNote**: Provides workflow instructions and context.

## High-Level Process Flow
- Manually trigger the workflow
- (Optionally) Create or refresh Qdrant collection
- Load questions/content from Google Docs
- Convert content to Markdown
- Split text and generate embeddings
- Insert embeddings into Qdrant
- Retrieve and parse stored questions for downstream use

## Detailed Process Description
1. **Manual Trigger**: Initiates the workflow.
2. **Sticky Notes**: Document workflow steps and required changes.
3. **Create/Refresh Qdrant Collection**: Set up or clear the vector store for new data.
4. **Get Doc**: Loads exam content from Google Docs.
5. **Convert to Markdown**: Converts Google Docs JSON to Markdown for easier processing.
6. **Token Splitter**: Splits content into manageable chunks.
7. **Embeddings OpenAI**: Generates vector embeddings from chunks.
8. **Qdrant Vector Store**: Inserts embeddings into Qdrant for retrieval.
9. **Google Gemini Chat Model**: Generates or answers questions using Gemini.
10. **Output Parsers**: Parses question lists from AI outputs.
11. **Convert to File**: Exports Markdown as a downloadable file.
12. **Retriever & Loop**: Retrieves and processes stored questions in batches.

## Additional Notes
- Requires Qdrant, OpenAI, and Google Docs API credentials.
- Qdrant collection and URLs must be set appropriately.
- Designed for atomic, repeatable exam question generation and storage.
- Supports downstream retrieval and AI-powered analysis or study tools.
