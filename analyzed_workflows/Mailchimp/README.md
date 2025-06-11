# Mailchimp

## Summary
Automates the addition of new subscribers to a Mailchimp list via a manual trigger in n8n.

## Description
This workflow allows users to add new subscribers to a Mailchimp list by executing the workflow manually. It is useful for testing, demos, or controlled batch additions of contacts with predefined data. The workflow can be extended to accept dynamic input or be triggered by other events.

## Input Triggers
- Manual Trigger (user clicks 'execute' in n8n)

## Output
- New subscriber added to the specified Mailchimp list.

## Nodes Involved
- **On clicking 'execute'**: Manual trigger to start the workflow.
- **Mailchimp**: Adds a subscriber to a Mailchimp list with specified email, status, and merge fields.

## High-Level Process Flow
1. User manually executes the workflow.
2. Mailchimp node adds the specified email address to the target list with the given status and merge fields.

## Detailed Process Description
1. **On clicking 'execute'**: Initiates the workflow manually from the n8n UI.
2. **Mailchimp**: Uses the Mailchimp API to subscribe the user, setting fields such as first name and status.

## Additional Notes
- Requires Mailchimp API credentials.
- List ID, email, and merge fields must be set in the workflow node.
- Can be extended for dynamic input, error handling, or integration with forms and other triggers.
