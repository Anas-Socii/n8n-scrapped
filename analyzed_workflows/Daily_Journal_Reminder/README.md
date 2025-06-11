# Daily Journal Reminder

## Summary
Sends a daily Telegram reminder each morning, prompting the user to log their journal entry for the previous day.

## Description
- Triggered every morning at 6 AM by a cron schedule.
- Formats a message asking “What did you do: YYYY-MM-DD” (for yesterday’s date).
- Sends the message to a specified Telegram chat.
- Designed to build a daily journaling habit via messaging.

## Input Triggers
- Cron Trigger (`n8n-nodes-base.cron`)

## Output
- Telegram message reminder sent to the user.

## Nodes Involved
- **Cron (Morning reminder):** Triggers the workflow daily at 6 AM.
- **Function Item (format reminder):** Formats the reminder message with yesterday’s date.
- **Telegram (Send journal reminder):** Sends the formatted message to the configured Telegram chat.

## High-Level Process Flow
1. Cron node triggers at 6 AM.
2. Function formats the reminder message.
3. Telegram node sends the reminder to the user.

## Detailed Process Description
- **Morning reminder:** Cron node triggers the workflow at the specified time.
- **format reminder:** Generates the message: “What did you do: YYYY-MM-DD” for yesterday.
- **Send journal reminder:** Sends the message to the configured Telegram chat ID.

## Additional Notes
- Requires Telegram API credentials and chat ID.
- Time and message can be customized as needed.
- Demonstrates scheduled messaging and habit formation automation.
