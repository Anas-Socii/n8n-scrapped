# Publish post to a publication

## Summary
Publishes a post to Medium (or similar platform) using a manual trigger in n8n.

## Description
This workflow allows users to publish a post to a Medium publication by executing the workflow manually. It demonstrates integration with Medium's API for content publishing, useful for bloggers and content marketers.

## Input Triggers
- Manual Trigger (On clicking 'execute')

## Output
- Post published to the specified Medium publication

## Nodes Involved
- **Manual Trigger**: Starts the workflow.
- **Medium**: Publishes the post using Medium API.

## High-Level Process Flow
- Manually trigger the workflow.
- Publish the post to Medium.

## Detailed Process Description
1. **Manual Trigger**: User starts the workflow.
2. **Medium**: Uses API credentials to publish the post.

## Additional Notes
- **Credentials**: Requires Medium API credentials.
- **Customization**: Can be extended for other platforms or additional fields.
