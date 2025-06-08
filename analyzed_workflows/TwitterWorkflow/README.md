# TwitterWorkflow

## Summary
Monitors Twitter for mentions of `@n8n_io`, filters new tweets, and posts notifications to RocketChat.

## Description
- Scheduled via Cron to run every minute.
- Searches Twitter for mentions of `@n8n_io`.
- Filters and formats tweet data.
- Detects only new tweets since the last run.
- Posts formatted notifications to a RocketChat channel.

## Input Triggers
- Cron Trigger (every minute)

## Output
- RocketChat message for each new mention.

## Nodes Involved
- **Cron:** Triggers the workflow every minute.
- **Twitter (search):** Fetches mentions of `@n8n_io`.
- **Set:** Formats tweet data.
- **Function:** Filters out tweets already seen.
- **RocketChat:** Posts notification for each new mention.

## High-Level Process Flow
1. Cron triggers search.
2. Twitter node fetches mentions.
3. Set node formats tweet data.
4. Function node filters new tweets.
5. RocketChat node posts notification.

## Detailed Process Description
- Cron triggers the workflow.
- Twitter node searches for mentions.
- Set node extracts and formats relevant fields.
- Function node checks for new tweets using static data.
- RocketChat node posts a notification for each new mention.

## Additional Notes
- Requires Twitter and RocketChat credentials.
- Uses workflow static data for deduplication.
