# Automated Social Media Content Publishing Factory + System Prompt Composition

## Summary
Automates the creation and publishing of social media content (Twitter/X, Instagram, etc.) using LLMs and dynamic system prompts. Supports multi-channel routing and memory for enhanced content generation.

## Description
- Receives content prompts via chat or workflow execution.
- Uses LLMs for content generation and system prompt composition.
- Routes output to different social media platforms (Twitter/X, Instagram) using tool nodes.
- Maintains chat memory for context-aware content.
- Modular sticky notes document each section and process.

## Input Triggers
- Chat message received (`@n8n/n8n-nodes-langchain.chatTrigger`)
- Executed by another workflow (`n8n-nodes-base.executeWorkflowTrigger`)

## Output
- Published posts on Twitter/X, Instagram, and other platforms.
- Logs or responses summarizing publishing actions.

## Nodes Involved
- **Chat Trigger:** Receives user prompts.
- **Sticky Notes:** Document LLM, memory, and routing logic.
- **ToolWorkflow (X-Twitter, Instagram):** Publishes content to respective platforms.
- **Window Buffer Memory:** Maintains context for chat-driven content.

## High-Level Process Flow
1. Receive prompt via chat or workflow trigger.
2. Generate content using LLM and system prompt logic.
3. Route content to the appropriate social media tool node.
4. Publish post and log result.

## Detailed Process Description
- **Start Here:** Entry point for workflow execution.
- **Chat Memory:** Stores recent chat context for personalized output.
- **X-Twitter/Instagram Nodes:** Use toolWorkflow nodes to post content.
- **Router:** Determines which platform(s) to publish to.
- **Sticky Notes:** Provide modular documentation for each section.

## Additional Notes
- Requires credentials for social media APIs (Twitter/X, Instagram, etc.).
- System prompt composition can be customized for branding or style.
- Safe file naming and modular design for extensibility.
