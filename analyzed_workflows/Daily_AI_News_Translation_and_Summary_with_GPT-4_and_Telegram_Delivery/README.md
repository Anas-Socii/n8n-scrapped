# Daily AI News Translation and Summary with GPT-4 and Telegram Delivery

## Summary
Fetches, summarizes, and delivers daily AI news articles to Telegram using GPT-4 and external news APIs.

## Description
This workflow gathers AI-related news articles from GNews and NewsAPI, summarizes them using GPT-4, and sends the summary to a Telegram chat at a scheduled time. It automates the process of staying updated on AI news and provides concise, translated summaries for end users.

## Input Triggers
- **Schedule Trigger**: Runs daily at 8am.

## Output
- Summarized AI news delivered to a specified Telegram chat.

## Nodes Involved
- **Schedule Trigger**: Initiates the workflow at a set time.
- **Fetch GNews Articles**: Retrieves AI news from GNews API.
- **Fetch NewsAPI Articles**: Retrieves AI news from NewsAPI.
- **GPT-4.1 Model**: Summarizes and translates news content.
- **Send Summary to Telegram**: Sends the final summary to Telegram.

## High-Level Process Flow
- Trigger at scheduled time.
- Fetch news articles from APIs.
- Summarize and translate using GPT-4.
- Send summary to Telegram chat.

## Detailed Process Description
1. **Schedule Trigger**: Starts the workflow daily at 8am.
2. **Fetch GNews/NewsAPI Articles**: Collects news articles about AI.
3. **GPT-4.1 Model**: Summarizes articles and translates if needed.
4. **Send Summary to Telegram**: Delivers summary to the target chat.

## Additional Notes
- **Credentials**: Requires API keys for GNews, NewsAPI, OpenAI, and Telegram Bot.
- **Customization**: Keywords, delivery time, and summary style can be adjusted.
- **Performance**: Dependent on API response times.
- **Disclaimer**: Ensure compliance with API usage and data privacy policies.
