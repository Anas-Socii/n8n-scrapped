# Daily Text Affirmations

## Summary
Sends daily affirmation messages to a Telegram user every morning at 9 AM using data from affirmations.dev.

## Description
This workflow automates the delivery of daily positive affirmations. It triggers at 9 AM each day, fetches a random affirmation from the affirmations.dev API, and sends it to a specified Telegram user. The workflow is simple, reliable, and can be easily adapted for other messaging platforms or schedules.

## Input Triggers
- Cron (Scheduled daily at 9 AM)

## Output
- Daily affirmation message sent via Telegram

## Nodes Involved
- **Cron**: Triggers the workflow on a daily schedule
- **HTTP Request**: Fetches a random affirmation from affirmations.dev
- **Telegram**: Sends the affirmation to the user

## High-Level Process Flow
1. Cron node triggers at 9 AM.
2. HTTP Request node fetches a daily affirmation.
3. Telegram node sends the affirmation message to the user.

## Detailed Process Description
1. **Cron**: Schedules the workflow to run every day at 9 AM.
2. **HTTP Request**: Calls the affirmations.dev API for a new affirmation.
3. **Telegram**: Sends the affirmation to the user using Telegram API credentials.

## Additional Notes
- Requires Telegram Bot API credentials.
- The message template can be customized for different users or languages.
- You can adjust the schedule in the Cron node as needed.
