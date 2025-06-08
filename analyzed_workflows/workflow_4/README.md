# workflow_4

## Summary
Posts notifications to Slack when the n8n GitHub repository receives or loses a star.

## Description
This workflow listens for GitHub webhook events about repository stars and sends formatted notifications to a Slack channel. It helps teams stay informed about repository popularity and user engagement.

## Input Triggers
- **GitHub Trigger**: Listens for star events on a GitHub repository.

## Output
- Slack messages announcing new or removed stars, including user details and current star count.

## Nodes Involved
- **GitHub Trigger**: Captures star events from GitHub.
- **IF**: Determines if the event is a star addition or removal.
- **Slack - Add**: Sends a message when a new star is added.
- **Slack - Remove**: Sends a message when a star is removed.

## High-Level Process Flow
- Listen for GitHub star events.
- Check if the event is a star addition or removal.
- Send appropriate Slack notification.

## Detailed Process Description
1. **GitHub Trigger**: Receives webhook events for stars.
2. **IF**: Checks if the event is a new star or removal.
3. **Slack - Add**: Sends a notification for new stars.
4. **Slack - Remove**: Sends a notification for removed stars.

## Additional Notes
- **Credentials**: Requires GitHub and Slack API credentials.
- **Customization**: Channel names and formatting can be adjusted.
- **Performance**: Near-instant notifications.
- **Disclaimer**: Ensure compliance with GitHub and Slack API usage policies.
