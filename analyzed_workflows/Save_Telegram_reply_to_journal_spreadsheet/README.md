# Save Telegram Reply to Journal Spreadsheet

## Summary
Automatically saves Telegram replies to a Google Sheets journal spreadsheet.

## Description
This workflow listens for replies in a Telegram chat, parses the reply content and date, and appends the entry to a specified Google Sheets document. It is useful for journaling, note-taking, or collecting user input from Telegram into a structured spreadsheet.

## Input Triggers
- **Telegram Trigger**: Listens for reply messages in a Telegram chat.

## Output
- New row appended to a Google Sheets spreadsheet with the journal entry and date.

## Nodes Involved
- **Telegram Trigger**: Captures reply messages.
- **Parse Message**: Extracts journal entry and date from the reply.
- **Add Entry to Sheet**: Appends the parsed data to Google Sheets.

## High-Level Process Flow
- Wait for a reply in Telegram.
- Parse the reply for entry text and date.
- Add the entry to Google Sheets as a new row.

## Detailed Process Description
1. **Telegram Trigger**: Detects reply messages from the user.
2. **Parse Message**: Checks if the reply is to the bot and extracts the journal entry and date.
3. **Add Entry to Sheet**: Appends the extracted data to the specified Google Sheets document.

## Additional Notes
- **Credentials**: Requires Telegram Bot and Google Sheets API credentials.
- **Customization**: Bot username, user, and spreadsheet ID must be set in the workflow.
- **Performance**: Fast, dependent on Telegram and Google Sheets API response.
- **Disclaimer**: Ensure compliance with Telegram and Google API usage policies.
