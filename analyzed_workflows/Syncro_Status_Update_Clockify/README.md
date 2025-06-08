# Syncro Status Update Clockify

## Summary
Updates project status in Clockify based on incoming webhook events.

## Description
This workflow listens for webhook events, retrieves project information from Clockify, and updates project status using HTTP requests. It is useful for synchronizing external system events with Clockify project management.

## Input Triggers
- **Webhook**: Receives POST requests with project info.

## Output
- Updated project status in Clockify.

## Nodes Involved
- **Webhook**: Receives project event data.
- **Clockify**: Fetches project details from Clockify.
- **HTTP Request**: Updates project status via API.
- **IF1**: Conditional logic for workflow branching.

## High-Level Process Flow
- Receive webhook event.
- Fetch project details from Clockify.
- Update project status via HTTP request.
- Branch workflow based on conditions.

## Detailed Process Description
1. **Webhook**: Receives event data.
2. **Clockify**: Retrieves project info.
3. **HTTP Request**: Updates project status in Clockify.
4. **IF1**: Handles conditional logic for next steps.

## Additional Notes
- **Credentials**: Requires Clockify and HTTP Header Auth API credentials.
- **Customization**: Workspace/project IDs and update logic can be adjusted.
- **Performance**: Dependent on Clockify API response.
- **Disclaimer**: Ensure compliance with Clockify API usage policies.
