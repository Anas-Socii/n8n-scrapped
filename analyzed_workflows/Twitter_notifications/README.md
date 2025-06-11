# Twitter notifications

## Summary
Checks Twitter for recent posts from `n8n_io` and sends notifications to Mattermost.

## Description
- Cron triggers every minute.
- Searches Twitter for recent tweets by `n8n_io`.
- Formats tweet data and filters out previously seen tweets.
- Sends notifications to a Mattermost channel.

## Input Triggers
- Cron Trigger (every minute)

## Output
- Mattermost message for each new tweet.

## Nodes Involved
- **Cron:** Triggers the workflow every minute.
- **Twitter (search):** Fetches recent tweets by `n8n_io`.
- **Set:** Formats tweet data.
- **Function:** Filters out tweets already seen.
- **Mattermost:** Posts notification for each new tweet.

## High-Level Process Flow
1. Cron triggers search.
2. Twitter node fetches recent tweets.
3. Set node formats tweet data.
4. Function node filters new tweets.
5. Mattermost node posts notification.

## Detailed Process Description
- Cron triggers the workflow.
- Twitter node searches for tweets.
- Set node extracts and formats relevant fields.
- Function node checks for new tweets using workflow static data.
- Mattermost node posts a notification for each new tweet.

## Additional Notes
- Requires Twitter and Mattermost credentials.
