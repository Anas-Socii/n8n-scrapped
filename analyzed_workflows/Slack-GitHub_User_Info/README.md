# Slack-GitHub User Info

## Summary
Retrieves GitHub user information and emails, and posts the details to a Slack channel.

## Description
This workflow receives a webhook trigger (typically from Slack), queries GitHub's GraphQL API for user details and recent commit emails, filters out non-public and noreply addresses, and posts the results to Slack. It helps teams quickly obtain GitHub user info for collaboration or audit purposes.

## Input Triggers
- **Webhook**: Receives POST requests with Slack user info.

## Output
- Slack message with GitHub user details and emails.

## Nodes Involved
- **Webhook**: Receives the request from Slack.
- **GraphQL**: Queries GitHub for user info and commits.
- **Function**: Extracts and filters emails from commit history.
- **Slack**: Posts the formatted details to a Slack channel.

## High-Level Process Flow
- Receive webhook from Slack.
- Query GitHub for user details.
- Extract and filter emails.
- Post results to Slack channel.

## Detailed Process Description
1. **Webhook**: Receives Slack user info (username, channel, etc.).
2. **GraphQL**: Fetches user details and commit emails from GitHub.
3. **Function**: Filters emails, removing duplicates and noreply addresses.
4. **Slack**: Posts the details to the specified Slack channel.

## Additional Notes
- **Credentials**: Requires GitHub and Slack API credentials.
- **Customization**: GraphQL query and Slack formatting can be adjusted.
- **Performance**: Fast for single-user lookups.
- **Disclaimer**: Ensure compliance with GitHub and Slack API usage policies.
