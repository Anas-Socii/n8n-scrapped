# Workflow Name: 🤖Content Creator Agent

## Summary
An AI-powered agent that generates high-quality, SEO-optimized blog content using web search and advanced language models. Integrates external search (Tavily), Anthropic and agent nodes for robust, fact-checked, and well-structured blog writing.

## Description
This workflow automates the creation of engaging blog posts. It leverages Tavily for real-time web search results, Anthropic for advanced language modeling, and an agent node that orchestrates the process according to a detailed system prompt. The workflow outputs HTML-formatted, citation-rich content tailored for readability, SEO, and factual accuracy. Error handling is included to ensure graceful fallback.

## Input Triggers
- **Execute Workflow Trigger**: Can be invoked by other workflows or manually.

## Output
- Structured response containing the generated blog content in HTML format.

## Nodes Involved
- **Tavily (toolHttpRequest)**: Performs web search via Tavily API for up-to-date information and citations.
- **Content Creator Agent (agent)**: AI agent node that receives the user query and system instructions, orchestrates content creation, and integrates Tavily search.
- **Anthropic Chat Model**: Advanced LLM (Claude) for language generation.
- **Response (set)**: Sets the output response from the agent.
- **Try Again (set)**: Provides a fallback error message if content creation fails.
- **When Executed by Another Workflow (executeWorkflowTrigger)**: Allows this workflow to be triggered by other n8n workflows.

## High-Level Process Flow
1. Triggered manually or by another workflow.
2. Receives a query (blog topic).
3. Tavily node performs a web search for up-to-date information.
4. Content Creator Agent node generates the blog, integrating Tavily results and following strict formatting and tone instructions.
5. Anthropic Chat Model may be used for advanced language tasks.
6. Response is set for output; fallback error message is provided on failure.

## Detailed Process Description
- **Tavily**: Accepts a search term, queries the Tavily API, and returns structured web results for use in the blog.
- **Content Creator Agent**: Receives the user query and system instructions (HTML formatting, SEO, citation requirements, etc.), uses Tavily as a tool, and generates the blog content.
- **Anthropic Chat Model**: Optionally used for advanced LLM tasks.
- **Response**: Sets the final output (HTML blog post).
- **Try Again**: If an error occurs, outputs a user-friendly error message.
- **When Executed by Another Workflow**: Allows chaining with other workflows.

## Additional Notes
- **Credentials Required**: Tavily API key (replace `your-api-key` in the node), Anthropic API credentials for Claude.
- **Formatting**: Output is HTML with proper headings, paragraphs, bullet points, and clickable citations.
- **Workflow Status**: The workflow JSON indicates `active: false`.
- **Tags**: None
