# Create Threads on Bluesky

## Summary
Automates the process of creating threads (posts and replies) on the Bluesky social platform, including credential setup, authentication, and structured thread posting.

## Description
This workflow enables scheduled and automated thread creation on Bluesky. It manages authentication, initial post creation, replies, and sibling posts by correctly handling parent/child relationships using Bluesky's API. The workflow is suitable for content automation, social media bots, or scheduled campaigns.

## Input Triggers
- Scheduled Trigger (runs daily at 9 AM)

## Output
- Posts and threaded replies on Bluesky

## Nodes Involved
- **n8n-nodes-base.scheduleTrigger**: Schedules the workflow to run at a specific time (daily at 9 AM).
- **n8n-nodes-base.set**: Sets Bluesky handle and app password credentials.
- **n8n-nodes-base.httpRequest**: Handles API requests for session creation, posting, and replying on Bluesky.
- **n8n-nodes-base.code**: Generates reply post objects for API calls.
- **n8n-nodes-base.stickyNote**: Provides documentation and context for each step.

## High-Level Process Flow
- Schedule workflow to run daily
- Set Bluesky credentials
- Authenticate with Bluesky API
- Create initial post and capture identifiers (URI, CID)
- Create replies and sibling posts using correct parent/root references

## Detailed Process Description
1. **Scheduled Trigger**: Initiates the workflow at 9 AM daily.
2. **Set Bluesky Credentials**: Loads user handle and app password for authentication.
3. **Create Bluesky Session**: Authenticates and obtains access token.
4. **Create Initial Post**: Posts the first message and receives URI/CID.
5. **Create Reply Text**: Prepares reply post object with correct parent/root references.
6. **Create Reply**: Posts a reply using the Bluesky API.
7. **Sticky Notes**: Document the logic for authentication, post structure, and thread relationships.

## Additional Notes
- Requires valid Bluesky handle and app password (set in the workflow).
- API endpoints and post structure must match Bluesky's documentation.
- Designed for atomic, repeatable thread creation and posting.
- Useful for automated social media campaigns, bots, or scheduled content.
