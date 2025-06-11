# Error Notification via Mailgun

## Summary
Sends an email notification with error details whenever any workflow fails in n8n.

## Description
This workflow uses the Error Trigger node to listen for any workflow execution failures. When triggered, it formats the error message and stack trace, then sends an email notification using the Mailgun node. Useful for monitoring and alerting on workflow errors in production environments.

## Input Triggers
- Error Trigger (fires when any workflow fails)

## Output
- Email notification with error details (error message and stack trace).

## Nodes Involved
- Error Trigger: Listens for workflow errors.
- Mailgun: Sends formatted error details via email.

## High-Level Process Flow
- Listen for any workflow error
- Format error message and stack trace
- Send error details via email

## Detailed Process Description
1. **Error Trigger** node activates when any workflow fails.
2. **Mailgun** node receives the error message and stack trace, formats them, and sends an email notification to the specified address.

## Additional Notes
- Requires Mailgun API credentials configured in n8n.
- Make sure to specify the correct recipient and sender email addresses in the Mailgun node.
