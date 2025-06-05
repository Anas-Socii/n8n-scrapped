# Workflow Name: Easily Compare LLMs Using OpenAI and Google Sheets

## Summary
A workflow for comparing the outputs of multiple large language models (LLMs) such as OpenAI's GPT and OpenRouter models, using Google Sheets for structured evaluation and result logging.

## Description
This workflow allows users to send a chat message, which is then routed through multiple LLMs (e.g., OpenAI, OpenRouter, Mistral) for response generation. The workflow compares the responses, aggregates results, and logs them in Google Sheets for further analysis. Useful for benchmarking, qualitative evaluation, and side-by-side comparison of LLMs.

## Input Triggers
- **Chat Trigger** (`@n8n/n8n-nodes-langchain.chatTrigger`): Initiates the workflow when a chat message is received.

## Output
- Aggregated and individual LLM responses
- Results written to Google Sheets for structured comparison

## Nodes Involved
- **When chat message received**: Triggers the workflow on new chat input.
- **Define Models to Compare**: Sets up the list of LLMs to be compared.
- **Split Models into Items**: Splits model list for parallel processing.
- **Set model, sessionId, chatInput, sessionIdBase**: Prepares variables for each model run.
- **Loop Over Items**: Iterates over each model.
- **OpenRouter Chat Model**: Sends prompt to OpenRouter LLM (e.g., Mistral, GPT-4.1).
- **AI Agent**: Orchestrates the LLM calls and manages logic.
- **Simple Memory**: Maintains short-term chat memory.
- **Chat Memory Manager**: Handles memory context for chat sessions.
- **Prepare Data for Chat and Google Sheets**: Formats data for logging and UI.
- **Concatenate Chat Answers**: Aggregates LLM answers for comparison.
- **Group Model Outputs for Evaluation**: Groups results for structured analysis.
- **Add Model Results to Google Sheet**: Logs results in Google Sheets.
- **Set Output for Chat UI**: Prepares output for display.

## High-Level Process Flow
1. User sends a chat message to trigger the workflow.
2. The workflow defines which LLMs to compare.
3. Each model receives the input and generates a response.
4. Responses are aggregated and grouped for evaluation.
5. Results are written to Google Sheets for analysis.

## Detailed Description
- **Model Comparison**: The workflow is designed to compare multiple LLMs side-by-side. Models can be OpenAI, OpenRouter, Mistral, etc.
- **Session Management**: Each chat session is tracked and memory is managed for context.
- **Google Sheets Integration**: Results, including model IDs, user input, and responses, are logged for later review.
- **Customizable**: The list of models and evaluation logic can be adjusted as needed.

## Additional Notes
- **Credentials Required**: Google Sheets OAuth2, OpenAI/OpenRouter API keys.
- **Workflow Status**: The workflow JSON indicates `active: false`.
- **Tags**: None
