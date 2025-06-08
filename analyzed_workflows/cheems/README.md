# cheems

## Summary
Sends themed Discord notifications on specific days and intervals.

## Description
- Cron triggers for specific days (Wednesday, Friday) and every 30 minutes.
- Sends themed messages and images to Discord via webhooks.

## Input Triggers
- Cron (every Wednesday at 9am, every Friday at 9am, every 30 minutes)

## Output
- Discord notifications with themed content.

## Nodes Involved
- **Cron:** Triggers on Wednesday.
- **Discord:** Sends Wednesday message.
- **Cron1:** Triggers on Friday.
- **Discord1:** Sends Friday message.
- **Cron2:** Triggers every 30 minutes.
- **Discord2:** Sends interval message.

## High-Level Process Flow
1. Cron triggers on schedule.
2. Discord node sends themed notification.

## Detailed Process Description
- Each Cron node triggers at a specific time.
- Corresponding Discord node sends a message.

## Additional Notes
- Requires Discord webhook credentials.
