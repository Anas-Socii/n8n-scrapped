# Add a Subscriber to a List and Create and Send a Campaign

## Summary
Adds a subscriber to a Sendy email list and immediately creates and sends a campaign to that list.

## Description
This workflow allows you to add a new subscriber to a specific Sendy email list and then automatically create and send a welcome campaign to that list. It is triggered manually and is ideal for onboarding new users or automating email marketing sequences.

## Input Triggers
- Manual execution (via 'execute')

## Output
- Subscriber is added to Sendy list
- Welcome campaign is created and sent to the list

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually.
- **Sendy**: Adds a subscriber to the specified list.
- **Sendy1**: Creates and sends a campaign to the list.

## High-Level Process Flow
- Trigger workflow manually
- Add subscriber to Sendy list
- Create and send campaign to the list

## Detailed Process Description
1. **Manual Trigger** node starts the workflow.
2. **Sendy** node adds a new subscriber to the specified list with name and email.
3. **Sendy1** node creates a campaign with a welcome message and sends it to the list.

## Additional Notes
- Requires Sendy API credentials configured in n8n.
- The workflow can be adapted for different lists, messages, or campaign templates.
- Useful for onboarding, newsletters, or marketing automation.
