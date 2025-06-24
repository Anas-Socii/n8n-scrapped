# LLM Chaining Examples with Anthropic and HTTP

## Summary
This workflow demonstrates advanced LLM chaining techniques in n8n, integrating Anthropic Chat Models, HTTP requests, and memory management for sequential and parallel language model operations.

## Description
The workflow showcases how to chain multiple large language model (LLM) calls, both sequentially and in parallel, using Anthropic's Claude models. It includes manual triggers, HTTP requests to external APIs, markdown rendering, sticky notes for documentation, and memory management for LLM state. The workflow is ideal for demonstrating LLM orchestration, prompt engineering, and integration with external data sources.

## Input Triggers
- Manual Trigger ("When clicking ‘Test workflow’")
- Webhook (for external triggers)

## Output
- Processed LLM results (can be extended to output to databases, notifications, or external systems)
- Markdown-rendered content from HTTP requests

## Nodes Involved
- **Manual Trigger:** Starts the workflow manually for testing.
- **Webhook:** Allows external systems to trigger the workflow.
- **HTTP Request:** Fetches data from external sources (e.g., n8n blog).
- **Markdown:** Renders HTML or text as Markdown.
- **Anthropic Chat Model:** Multiple nodes for interacting with Anthropic Claude models.
- **Merge, Split Out:** Control flow for combining and splitting data streams.
- **Memory Manager:** Manages LLM memory state.
- **Set:** Prepares and assigns prompt data.
- **Sticky Note:** Provides workflow documentation and guidance.
- **NoOp:** Connects or groups nodes for organizational clarity.

## High-Level Process Flow
- Trigger workflow (manual or webhook)
- Fetch and render external data (HTTP + Markdown)
- Prepare prompts and memory
- Sequential and parallel LLM chains using Anthropic models
- Merge and split results as needed
- Manage and clean LLM memory

## Detailed Process Description
1. **Manual Trigger / Webhook:** Initiates the workflow for testing or via external call.
2. **HTTP Request:** Retrieves data (e.g., from n8n blog).
3. **Markdown:** Converts fetched data to markdown format.
4. **Set / Initial Prompts:** Prepares prompt data for LLM processing.
5. **Anthropic Chat Model Nodes:** Multiple steps for LLM chaining, both sequential and parallel, using Anthropic Claude models.
6. **Merge / Split Out:** Combines or splits data streams for multi-step LLM workflows.
7. **Memory Manager:** Handles LLM memory, including cleaning and updating state.
8. **Sticky Notes:** Embedded documentation and process guidance.
9. **NoOp:** Used for organizing workflow connections.

## Additional Notes
- Requires valid Anthropic API credentials for LLM nodes.
- Demonstrates both sequential and parallel LLM chaining.
- Can be extended to integrate with other LLM providers or external APIs.
- Useful for advanced prompt engineering, AI orchestration, and workflow automation demos.
- Review sticky notes inside the workflow for additional usage tips and context.
