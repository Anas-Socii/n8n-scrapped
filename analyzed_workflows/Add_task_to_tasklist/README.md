# Add task to tasklist

## Summary
Adds a new task to a Google Tasklist using a manual trigger in n8n.

## Description
This workflow allows users to manually add a new task to their Google Tasklist by executing the workflow. It uses the Google Tasks node to create a task with provided details. The workflow is straightforward and can be extended for additional automation.

## Input Triggers
- Manual Trigger (On clicking 'execute')

## Output
- New task created in the specified Google Tasklist

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually
- **Google Tasks**: Adds the new task to the Google Tasklist

## High-Level Process Flow
1. User manually triggers the workflow.
2. Google Tasks node creates a new task in the specified tasklist.

## Detailed Process Description
1. **Manual Trigger**: The workflow starts when the user clicks 'execute'.
2. **Google Tasks**: Uses the provided credentials to add a new task to the user's Google Tasklist.

## Additional Notes
- Requires Google Tasks OAuth2 credentials.
- The workflow can be customized to include more task details or to trigger automatically from other sources.
