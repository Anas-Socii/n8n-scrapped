# Structured Data Extract, Data Mining with Bright Data & Google Gemini

## Summary
Extracts structured data from web pages using Bright Data Web Unlocker and analyzes it with Google Gemini AI for sentiment, topics, and trends.

## Description
This workflow automates the process of extracting, transforming, and analyzing web content. It uses Bright Data Web Unlocker to fetch web pages, processes the content to extract textual data, and leverages Google Gemini AI models for sentiment analysis, topic extraction, and trend clustering. Results are optionally sent to webhooks and saved to disk as structured files. The workflow is modular and demonstrates advanced n8n AI node usage for data mining and information extraction.

## Input Triggers
- Manual Trigger (When clicking ‘Test workflow’)

## Output
- Structured topic/trend data as files
- Webhook notifications with extracted content
- AI-analyzed sentiment, topics, and trends

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually
- **Set URL and Bright Data Zone**: Sets target URL and proxy zone for Bright Data
- **Perform Bright Data Web Request**: Fetches web page content using Bright Data Web Unlocker
- **Markdown to Textual Data Extractor**: Converts markdown content to plain text using LLM
- **Initiate Webhook Notification**: Sends extracted content to a webhook
- **Topic Extractor with structured response**: Extracts topics from text using AI
- **Trends by location and category**: Clusters trends by location and category using AI
- **Google Gemini Chat Model**: Calls Gemini for advanced analysis
- **Create binary data for topics/trends**: Prepares files for disk writing
- **Write file to disk**: Saves output as JSON
- **Sticky Notes**: Embedded documentation and usage notes

## High-Level Process Flow
1. Workflow is triggered manually.
2. Target URL and Bright Data proxy zone are set.
3. Web page is fetched using Bright Data Web Unlocker.
4. Content is processed to extract plain text.
5. AI nodes analyze text for sentiment, topics, and trends.
6. Results are sent to webhooks and written to disk as structured files.

## Detailed Process Description
1. **Manual Trigger**: User starts the workflow.
2. **Set URL and Bright Data Zone**: Specifies which URL to scrape and which Bright Data proxy zone to use.
3. **Perform Bright Data Web Request**: Fetches the web page content.
4. **Markdown to Textual Data Extractor**: Converts fetched markdown to plain text for analysis.
5. **Initiate Webhook Notification for Markdown/Text Extraction**: Sends extracted text to a webhook endpoint.
6. **Topic Extractor**: Uses AI to extract topics from the plain text.
7. **Trends by location and category**: Uses AI to cluster trends by location and category.
8. **Google Gemini Chat Model**: Runs AI models for sentiment and advanced analysis.
9. **Create binary data for topics/trends**: Prepares analysis results as files.
10. **Write file to disk**: Saves results as JSON files.
11. **Sticky Notes**: Provide instructions and explain workflow logic.

## Additional Notes
- Requires Bright Data and Google Gemini API credentials.
- Update the URL and webhook endpoints as needed in the set node.
- Designed for advanced data mining, information extraction, and AI-powered analysis.
