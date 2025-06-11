# Receive Daily Market News from FT.com to your Microsoft Outlook inbox

## Summary
This workflow automates the daily extraction and summarization of financial news headlines from FT.com and sends a structured summary email to a designated recipient via Microsoft Outlook at 7:00 AM.

## Description
- The workflow triggers every morning at 7:00 AM.
- It fetches the latest financial news from FT.com.
- Specific headlines and sections (e.g., Headline #1, Editor's Picks, Spotlight, etc.) are extracted using CSS selectors.
- The extracted news is aggregated and summarized using Google Gemini (PaLM) AI.
- The summary is formatted in HTML and emailed to the recipient using Microsoft Outlook.

## Input Triggers
- **Schedule Trigger:** Fires daily at 7:00 AM.

## Output
- Sends an HTML-formatted summary email with curated financial news to a specified Outlook recipient.

## Nodes Involved
- **Schedule Trigger:** Initiates the workflow at a set time.
- **HTTP Request:** Fetches FT.com homepage.
- **HTML Extract:** Parses and extracts specific news sections using CSS selectors.
- **Set:** Aggregates all extracted news into a single string.
- **Google Gemini Chat Model:** Summarizes the news in HTML format.
- **AI Agent:** Further processes the summary for email.
- **Microsoft Outlook:** Sends the summary email.
- **Sticky Note:** (for workflow documentation/annotation).

## High-Level Process Flow
1. Trigger at 7:00 AM.
2. Fetch FT.com homepage.
3. Extract key news sections/headlines.
4. Aggregate extracted news.
5. Summarize using AI.
6. Send summary via Outlook email.

## Detailed Process Description
- **Schedule Trigger:** Activates workflow at 7:00 AM.
- **HTTP Request:** Downloads FT.com homepage.
- **HTML Extract:** Uses CSS selectors to extract headlines, editor’s picks, spotlight, top stories, various news, and Europe news.
- **Set:** Aggregates all extracted content into a structured string.
- **Google Gemini Chat Model:** Summarizes the aggregated news.
- **AI Agent:** Formats the summary as an HTML email body.
- **Microsoft Outlook:** Sends the email to the recipient.

## Additional Notes
- Requires valid credentials for Google Gemini (PaLM) API and Microsoft Outlook.
- CSS selectors are tailored for FT.com and may need updates if the site layout changes.
- Output is in HTML for better readability.
