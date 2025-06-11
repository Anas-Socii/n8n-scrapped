# Financial Tracker: Telegram Invoices to Notion with AI Summaries & Reports

## Summary
Automates the extraction of financial data from Telegram invoice photos, summarizes them with AI, records transactions in Notion, and generates weekly spending reports delivered via Telegram.

## Description
This workflow enables users to send photos of receipts/invoices to a Telegram bot. The image is processed by Google Gemini AI to extract transaction details, which are then structured and saved to a Notion database. The workflow also summarizes and categorizes expenses, generates a visual chart of spending by category, and sends periodic reports to the user or group in Telegram.

## Input Triggers
- **Telegram Trigger**: Activated when a user sends a photo to the Telegram bot.
- **Schedule Trigger**: Triggers weekly (or as configured) to generate and send spending reports.

## Output
- Transaction details and summaries sent back to Telegram.
- Transaction data recorded in Notion database.
- Weekly spending chart image sent to Telegram.

## Nodes Involved
- **Telegram Trigger**: Listens for incoming photos/messages in Telegram.
- **Get Image Info**: Extracts metadata from the received image.
- **Google Gemini Chat Model**: AI model for extracting and summarizing invoice data.
- **Basic LLM Chain**: Customizes AI prompt for invoice extraction.
- **Output Parser**: Structures AI output into JSON.
- **Split Out**: Splits transaction array for individual processing.
- **Record to Notion Database**: Saves each transaction to Notion.
- **Sendback to Chat**: Sends summary message to Telegram.
- **Notion (Get Recent Data)**: Fetches recent transactions for reporting.
- **Summarize Transaction Data**: Aggregates spending by category.
- **Convert Data to JSON Chart Payload**: Prepares chart data.
- **Generate Chart**: Creates a chart image from spending data.
- **Send Chart Image**: Sends the chart image to Telegram.
- **Sticky Notes**: Provide workflow documentation and usage hints.

## High-Level Process Flow
1. User sends an invoice photo to Telegram bot.
2. Image info is extracted.
3. Image is processed by Google Gemini AI for data extraction.
4. AI output is parsed and structured.
5. Each transaction is split and recorded to Notion.
6. A summary is sent back to the user in Telegram.
7. On schedule, recent Notion data is fetched.
8. Transactions are summarized and chart data is prepared.
9. Chart is generated and sent to Telegram as a report.

## Detailed Process Description
- **Telegram Trigger**: Initiates the workflow on receiving a photo.
- **Get Image Info**: Ensures the image is suitable for processing.
- **Google Gemini Chat Model & Basic LLM Chain**: Extracts and summarizes invoice data using a custom AI prompt.
- **Output Parser**: Converts AI text output into a structured JSON object.
- **Split Out**: Breaks down each transaction for individual database entry.
- **Record to Notion Database**: Maps transaction fields to Notion columns.
- **Sendback to Chat**: Notifies the user with a summary of what was recorded.
- **Schedule Trigger**: Periodically starts the report generation process.
- **Notion (Get Recent Data)**: Pulls recent transactions for the report period.
- **Summarize Transaction Data**: Aggregates totals by category.
- **Convert Data to JSON Chart Payload**: Formats data for charting.
- **Generate Chart**: Produces a bar chart image of spending.
- **Send Chart Image**: Delivers the chart to Telegram.

## Additional Notes
- **Credentials Required**: Telegram Bot API token, Google Gemini API key, Notion API key & Database ID.
- **Customization**: Adjust AI prompts, Notion DB structure, and report frequency as needed.
- **Environment**: Ensure all credentials are set up in n8n and database fields are mapped correctly.
- **References**: See sticky notes in the workflow for setup and customization tips.
