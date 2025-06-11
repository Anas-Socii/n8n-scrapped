# Google Trend Data Extract and Summarization

## Summary
Extracts, processes, and summarizes Google Trends data using Bright Data's Web Unlocker and Google Gemini AI, with results sent via webhook and Gmail.

## Description
This workflow automates the extraction of Google Trends data from the web, transforms the raw data into structured information, and summarizes the findings using advanced AI models. It leverages Bright Data's Web Unlocker to bypass access restrictions, processes the data through Google Gemini and LangChain nodes, and delivers the summarized insights via webhook and email.

## Input Triggers
- Manual trigger

## Output
- Summarized Google Trends data delivered via webhook and Gmail

## Nodes Involved
- **Manual Trigger**: Starts the workflow
- **Set**: Configures the target URL and Bright Data zone
- **HTTP Request (Bright Data)**: Fetches web content using proxy/unlocker
- **Markdown to Textual Data Extractor**: Converts markdown to plain text
- **Google Gemini Chat Model**: Extracts and summarizes data
- **Structured Data Extractor**: Converts text to structured JSON
- **Summarization Chain**: Builds a concise summary
- **Webhook Notification**: Sends extracted text and summary to a webhook
- **Gmail**: Sends summary via email
- **Sticky Note**: In-workflow documentation

## High-Level Process Flow
- Trigger workflow manually
- Set target URL and proxy zone
- Fetch Google Trends page using Bright Data
- Extract and convert content to plain text
- Use AI models to extract structured data and summarize
- Send results via webhook and Gmail

## Detailed Process Description
1. **Manual Trigger**: Initiates the workflow.
2. **Set Node**: Specifies the Google Trends URL and Bright Data zone.
3. **HTTP Request**: Uses Bright Data Web Unlocker to fetch the Google Trends page as markdown.
4. **Markdown to Textual Data Extractor**: Converts markdown to plain text for further processing.
5. **Google Gemini Chat Model**: Processes text for data extraction and summarization.
6. **Structured Data Extractor**: Extracts structured information (topics, descriptions) from the text.
7. **Summarization Chain**: Produces a concise summary of the trends.
8. **Webhook Notification**: Sends extracted data and summary to a specified webhook endpoint.
9. **Gmail Node**: Emails the summary to a designated recipient.

## Additional Notes
- Requires Bright Data and Google Gemini API credentials
- Webhook and email destinations must be configured
- Designed for automated trend monitoring and reporting
