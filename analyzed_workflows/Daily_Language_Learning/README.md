# Daily Language Learning

## Summary
Delivers daily language learning content by extracting words from top Hacker News articles, translating them, and sending them via SMS.

## Description
This workflow triggers daily, fetches top articles from Hacker News, extracts unique words, translates them to German, and sends a selection via SMS. It also stores words in Airtable for tracking.

## Input Triggers
- Cron Trigger (Daily at 8:00 AM)

## Output
- SMS with daily words and translations; records in Airtable

## Nodes Involved
- **Daily trigger**: Starts workflow every morning.
- **Get top 3 articles**: Fetches articles from Hacker News.
- **Extract words**: Extracts unique words from article titles.
- **Translate**: Translates words to German using LingvaNex.
- **Filter data**: Prepares English and translated words.
- **Save today's words**: Stores words in Airtable.
- **Craft message**: Formats message for SMS.
- **Send SMS**: Sends the message using Vonage.

## High-Level Process Flow
- Trigger daily.
- Fetch articles.
- Extract and translate words.
- Store in Airtable.
- Send SMS with the day's words.

## Detailed Process Description
1. **Daily trigger**: Initiates workflow.
2. **Get top 3 articles**: Retrieves articles.
3. **Extract words**: Splits and deduplicates words from titles.
4. **Translate**: Translates to German.
5. **Filter data**: Prepares output structure.
6. **Save today's words**: Appends to Airtable.
7. **Craft message**: Prepares SMS content.
8. **Send SMS**: Sends to user.

## Additional Notes
- **Credentials**: Requires LingvaNex, Airtable, and Vonage API credentials.
- **Customization**: Target language, message, and article source can be changed.
