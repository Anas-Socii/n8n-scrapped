# Private & Local Ollama Self-Hosted AI Assistant

## Summary
This workflow creates a private chat assistant using the locally hosted Ollama Llama 3.2 model, triggered by chat messages and returning structured JSON responses.

## Description
- Listens for incoming chat messages via a chat trigger node.
- Processes the user’s message through a Basic LLM Chain.
- Uses the Ollama Llama 3.2 model for generating responses.
- Returns a structured JSON object with both the original prompt and the model’s response.
- Includes nodes for error handling and flexible response formatting.
- Provides detailed sticky notes for each major component.

## Input Triggers
- Chat message received (via `@n8n/n8n-nodes-langchain.chatTrigger`).

## Output
- Structured JSON object containing the prompt and the model’s response.

## Nodes Involved
- **Chat Trigger:** Initiates workflow on new chat message.
- **Basic LLM Chain:** Processes the message and prepares prompt/response structure.
- **Ollama Model:** Calls the local Llama 3.2 model.
- **Set (JSON to Object):** Formats and maps response data.
- **Set (Structured Response):** Controls output formatting.
- **Set (Error Response):** Handles errors gracefully.
- **Sticky Notes:** Document and explain each workflow section.

## High-Level Process Flow
1. Chat message received triggers the workflow.
2. Message is processed by the Basic LLM Chain.
3. Ollama Model generates a response.
4. Set nodes format the output as a JSON object.
5. Structured response or error response is returned.

## Detailed Process Description
- **When chat message received:** Workflow starts on incoming chat.
- **Basic LLM Chain:** Prepares prompt and expected response format.
- **Ollama Model:** Processes the prompt using the Llama 3.2 model.
- **Set Nodes:** Map and format the final JSON output.
- **Structured Response Node:** Returns the prompt and response in a user-friendly format.
- **Error Response Node:** Handles and formats errors if any occur.

## Additional Notes
- Requires a local Ollama installation with the Llama 3.2 model.
- Valid Ollama API credentials must be configured in n8n.
- Designed for privacy, with all data and inference running locally.
- Sticky notes provide configuration and usage guidance for each step.
