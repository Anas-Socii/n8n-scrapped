# DeepSeek V3 Chat & R1 Reasoning Quick Start

## Summary
This workflow provides a quick start for conversational AI and advanced reasoning using DeepSeek V3 and DeepSeek-R1 models. It supports chat triggers, agent-based reasoning, memory, and multiple LLM integrations (DeepSeek API, Ollama local, HTTP requests), making it suitable for advanced chatbot and reasoning applications.

## Description
The workflow is designed to demonstrate the integration of DeepSeek’s conversational and reasoning models within n8n. It features a chat trigger, memory buffer, agent orchestration, and multiple model invocation strategies (API, Ollama local, HTTP). Sticky Notes provide in-workflow documentation and API tips.

## Input Triggers
- Chat message received (via @n8n/n8n-nodes-langchain.chatTrigger)

## Output
- AI-generated response to the chat input

## Nodes Involved
- **When chat message received**: Triggers the workflow on new chat input
- **AI Agent**: Orchestrates conversational logic and invokes LLMs
- **DeepSeek**: Calls DeepSeek-R1 via API for advanced reasoning
- **Window Buffer Memory**: Maintains conversation history for context
- **Basic LLM Chain2**: Simple LLM invocation for initial responses
- **Ollama DeepSeek**: Calls DeepSeek-R1 model locally via Ollama
- **Sticky Notes**: Embedded documentation, API reference, and usage examples

## High-Level Process Flow
1. Chat message is received and triggers the workflow.
2. The agent and memory buffer manage context and orchestrate the response.
3. DeepSeek API or Ollama local model is invoked for reasoning.
4. AI-generated response is returned to the user.

## Detailed Process Description
1. **When chat message received**: Listens for incoming chat messages.
2. **Basic LLM Chain2**: Generates initial response using a simple LLM chain.
3. **Ollama DeepSeek**: Optionally invokes DeepSeek-R1 model locally for reasoning.
4. **DeepSeek**: Calls DeepSeek-R1 via API for advanced reasoning.
5. **AI Agent**: Orchestrates LLM calls and manages logic.
6. **Window Buffer Memory**: Stores conversation history for contextual responses.
7. **Sticky Notes**: Provide in-workflow documentation, API links, and integration tips.

## Additional Notes
- Requires DeepSeek API credentials or Ollama local setup.
- Supports both cloud and local LLM inference.
- Sticky Notes provide API docs, sample configs, and usage notes.
- Designed for chatbot, reasoning, and conversational agent use cases.
