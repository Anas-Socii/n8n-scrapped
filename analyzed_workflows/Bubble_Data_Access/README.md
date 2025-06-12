# Bubble Data Access

## Summary
Fetches user data from a Bubble app using an authenticated API request.

## Description
This workflow demonstrates how to retrieve user data from a Bubble application via its API. It uses an HTTP request node with header authentication to securely access the Bubble app's user object endpoint.

## Input Triggers
- Manual execution (via 'execute')

## Output
- User data from the Bubble app API

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually.
- **HTTP Request**: Fetches user data from the Bubble app API with header authentication.

## High-Level Process Flow
- Trigger workflow manually
- Send authenticated HTTP request to Bubble API
- Receive and process user data

## Detailed Process Description
1. **Manual Trigger** node starts the workflow.
2. **HTTP Request** node sends a GET request to the Bubble app's user endpoint using header authentication.
3. The response contains user data, which can be further processed or stored as needed.

## Additional Notes
- Requires Bubble app API and authentication credentials configured in n8n.
- The workflow can be adapted for other Bubble endpoints or objects.
- Useful for integrating Bubble app data into other automations or reporting tools.
