# Error Alert and Summarizer

## Summary
Automatically detects workflow errors, summarizes them using OpenAI, and sends structured alerts via email or other channels.

## Description
This workflow is triggered by errors in n8n workflows. It collects error details, uses OpenAI to generate a summary and suggested resolution, and formats the output for notification. This enables rapid response and troubleshooting of automation failures.

## Input Triggers
- **Error Trigger**: Fires when any workflow error occurs in n8n.

## Output
- Structured error summary, diagnosis, cause, and resolution, ready for notification.

## Nodes Involved
- **Error Trigger**: Captures workflow errors.
- **OpenAI Chat Model**: Summarizes and diagnoses errors using GPT-4o.
- **Structured Output Parser**: Formats the AI summary into JSON.
- **Set (SET EMAIL)**: Prepares recipient and CC addresses for notifications.

## High-Level Process Flow
- Detect workflow errors in n8n.
- Summarize and analyze error details using OpenAI.
- Format output and send notifications.

## Detailed Process Description
1. **Error Trigger**: Captures error details from any workflow.
2. **OpenAI Chat Model**: Summarizes and suggests resolutions via GPT-4o.
3. **Structured Output Parser**: Parses the AI output into structured JSON.
4. **Set (SET EMAIL)**: Specifies notification recipients.
5. **Notification**: Sends the structured summary to the intended recipients.

## Additional Notes
- **Credentials**: Requires OpenAI API credentials and email configuration.
- **Customization**: Recipients and output format can be changed.
- **Performance**: Fast, but depends on OpenAI API response times.
- **Disclaimer**: Review AI-generated resolutions before acting on them.
