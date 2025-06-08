# Extranet Releases

## Summary
Posts notifications to Slack when a new release occurs in a specified GitHub repository.

## Description
This workflow listens for GitHub release events and sends formatted notifications to a designated Slack channel. It is ideal for keeping teams informed about new releases in real-time.

## Input Triggers
- **GitHub Trigger**: Listens for release events from a GitHub repository.

## Output
- Slack notification with release details.

## Nodes Involved
- **Github Trigger**: Detects release events from the repository.
- **Slack**: Sends a message to the specified Slack channel with release information.

## High-Level Process Flow
- Listen for GitHub release events.
- Send formatted Slack notification.

## Detailed Process Description
1. **Github Trigger**: Monitors the repository for new releases.
2. **Slack**: Posts a message to the Slack channel with relevant release details.

## Additional Notes
- **Credentials**: Requires GitHub and Slack API credentials.
- **Customization**: Repository, channel, and message formatting can be adjusted.
- **Performance**: Near-instant notification for release events.
- **Disclaimer**: Ensure compliance with GitHub and Slack API usage policies.
