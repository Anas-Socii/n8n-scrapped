# Automate Figma Versioning and Jira Updates with n8n Webhook Integration

## Summary
Automates Figma versioning updates and posts comments to Jira issues via webhook integration.

## Description
This workflow integrates Figma and Jira, allowing design version updates from Figma to automatically trigger comments and updates in Jira issues. It streamlines the collaboration between design and development teams.

## Input Triggers
- **Figma Trigger**: Listens for Figma file version updates via webhook.

## Output
- Comment added to the corresponding Jira issue.

## Nodes Involved
- **Figma Trigger**: Receives webhook from Figma Commit Plugin.
- **Find Jira Issue**: Retrieves the Jira issue to update.
- **Add Comment in Issue**: Posts a comment to the Jira issue.
- **Sticky Note**: Provides setup and usage instructions.

## High-Level Process Flow
- Listen for Figma version update webhook.
- Find the relevant Jira issue.
- Add a comment with version details.

## Detailed Process Description
1. **Figma Trigger**: Receives version update event from Figma plugin.
2. **Find Jira Issue**: Looks up the Jira issue by key.
3. **Add Comment in Issue**: Posts version and design details as a comment.
4. **Sticky Note**: Offers setup instructions for users.

## Additional Notes
- **Credentials**: Requires Figma Commit Plugin, Jira API credentials.
- **Customization**: Issue key and comment template can be adjusted.
- **Performance**: Fast for single-issue updates.
- **Disclaimer**: Ensure compliance with Figma and Jira API usage policies.
