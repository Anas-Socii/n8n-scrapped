# Workflow Name: 🤖Email Agent

## Summary
An AI-powered agent for professional email management and automation. Integrates OpenAI, n8n agent, and Gmail nodes to automate sending, drafting, labeling, replying, and managing emails with robust error handling and workflow chaining.

## Description
This workflow automates a wide range of email-related tasks using AI and Gmail integration. It can send emails, create drafts, retrieve and label emails, mark emails as unread, and reply to emails. The workflow is orchestrated by an agent node with a detailed system prompt, ensuring professional HTML formatting and signature, and is designed for robust, hands-free operation. Error handling nodes provide fallback messaging for failed tasks.

## Input Triggers
- **Execute Workflow Trigger**: Can be invoked by other workflows or manually.

## Output
- Structured response indicating the result of the email task (sent, drafted, labeled, etc.) or error message if failed.

## Nodes Involved
- **OpenAI Chat Model**: Provides LLM capabilities for email content generation and understanding.
- **Email Agent (agent)**: Orchestrates email tasks using a detailed system prompt and AI reasoning.
- **Send Email (gmailTool)**: Sends emails via Gmail API.
- **Create Draft (gmailTool)**: Creates email drafts in Gmail.
- **Get Emails (gmailTool)**: Retrieves emails based on filters.
- **Get Labels (gmailTool)**: Retrieves available Gmail labels.
- **Label Emails (gmailTool)**: Adds labels to emails.
- **Mark Unread (gmailTool)**: Marks emails as unread.
- **Success/Try Again (set)**: Sets output response or fallback error message.
- **When Executed by Another Workflow (executeWorkflowTrigger)**: Allows workflow chaining.

## High-Level Process Flow
1. Triggered manually or by another workflow.
2. Receives a query (email task request).
3. Agent node interprets the request and determines which Gmail tool node(s) to use.
4. Executes the appropriate Gmail node (send, draft, get, label, etc.).
5. Sets the output response or error message.

## Detailed Process Description
- **OpenAI Chat Model**: Used for advanced LLM tasks and to support the agent node.
- **Email Agent**: Receives the request, interprets it using a system prompt, and orchestrates Gmail tool nodes for the required action.
- **Gmail Tool Nodes**: Perform specific email operations (send, draft, get, label, mark as unread, reply).
- **Success/Try Again**: Outputs the result or a fallback error message if the operation fails.
- **When Executed by Another Workflow**: Allows this workflow to be part of larger automation chains.

## Additional Notes
- **Credentials Required**: Gmail OAuth2 credentials and OpenAI API credentials.
- **Formatting**: All emails are formatted in HTML and signed as "Nate."
- **Workflow Status**: The workflow JSON indicates `active: false`.
- **Tags**: None
