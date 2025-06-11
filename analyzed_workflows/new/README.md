# Fetches GitHub repository profile information

## Summary
Fetches GitHub repository profile information when triggered manually.

## Description
This workflow allows a user to manually trigger the retrieval of profile information for the n8n GitHub repository. It is useful for quickly checking repository details for monitoring or reporting purposes.

## Input Triggers
- **Manual Trigger**: Starts the workflow manually.

## Output
- GitHub repository profile data.

## Nodes Involved
- **Manual Trigger**: Initiates the workflow.
- **Github**: Fetches repository profile data from GitHub.

## High-Level Process Flow
- Manually trigger the workflow.
- Fetch repository profile information from GitHub.
- Output the results.

## Detailed Process Description
1. **Manual Trigger**: User initiates the workflow.
2. **Github**: Retrieves repository profile information for n8n.

## Additional Notes
- **Credentials**: Requires GitHub API credentials.
- **Customization**: Repository and owner can be changed in parameters.
- **Performance**: Fast for single repository lookups.
- **Disclaimer**: Ensure compliance with GitHub API usage policies.
