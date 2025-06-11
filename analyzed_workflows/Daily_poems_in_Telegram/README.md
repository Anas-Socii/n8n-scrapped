# Daily poems in Telegram

## Summary
Automatically sends a daily poem to a Telegram chat by fetching a random poem, translating it if needed, and formatting it for Telegram delivery.

## Description
This workflow uses a scheduled trigger to fetch a random poem from the Poemist API, optionally translates the poem content to British English using LingvaNex, and sends the formatted result to a Telegram chat. It is ideal for poetry enthusiasts or community channels wanting daily literary inspiration.

## Input Triggers
- Cron (scheduled daily at 10:00 AM)

## Output
- A formatted poem message sent to a Telegram chat.

## Nodes Involved
- **Cron**: Triggers the workflow daily at the set time.
- **HTTP Request**: Fetches a random poem from the Poemist API.
- **LingvaNex**: Translates the poem content to British English.
- **Telegram**: Sends the poem to a specified Telegram chat.

## High-Level Process Flow
1. Cron node triggers the workflow at 10:00 AM daily.
2. HTTP Request node fetches a random poem.
3. LingvaNex node translates the poem content.
4. Telegram node sends the formatted poem to the chat.

## Detailed Process Description
1. **Cron**: Initiates the workflow at the scheduled time.
2. **HTTP Request**: Calls the Poemist API to retrieve a random poem with title, content, and poet information.
3. **LingvaNex**: Translates the poem's content to en_GB (British English) using LingvaNex API.
4. **Telegram**: Formats and sends the poem to a Telegram chat, including title, poet, and content.

## Additional Notes
- Requires Telegram Bot and LingvaNex API credentials.
- Chat ID and API keys must be configured in the workflow nodes.
- Can be extended to support other languages, sources, or notification times.
