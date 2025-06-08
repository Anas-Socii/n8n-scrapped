# Nostr Damus AI Powered Reporting + Gmail + Telegram

## Summary
Automates the extraction, analysis, and reporting of Nostr (#damus) threads, generating AI-powered summaries and distributing reports via Gmail and Telegram.

## Description
This workflow leverages n8n’s integration with LangChain, Gmail, and Markdown processing to analyze Nostr threads tagged with #damus. It extracts themes and common threads using AI, converts markdown to HTML, and sends the results via email. The workflow can be triggered manually for flexible operation.

## Input Triggers
- Manual Trigger (When clicking ‘Test workflow’)

## Output
- HTML and email reports summarizing Nostr #damus threads and their main themes, sent via Gmail.

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually for ad hoc reporting.
- **Get HTML / Get HTML Report**: Converts markdown content to HTML for reporting.
- **Gmail Themes**: Sends themed reports via Gmail.
- **#damus Themes List**: Uses LangChain to extract a list of themes from Nostr thread content.
- **#damus Thread Themes**: Uses LangChain to summarize thread themes and highlight main reasons for #damus hashtagging.

## High-Level Process Flow
1. Workflow is manually triggered.
2. Content is processed to extract and define themes using LangChain nodes.
3. Markdown reports are converted to HTML.
4. Email with the themed report is sent via Gmail.

## Detailed Process Description
1. **Manual Trigger**: User initiates the workflow for a new report.
2. **#damus Thread Themes**: AI analyzes thread content to identify main themes and reasons for #damus hashtagging.
3. **#damus Themes List**: AI extracts a concise list of themes from the thread text.
4. **Get HTML / Get HTML Report**: Converts markdown results to HTML for better email formatting.
5. **Gmail Themes**: Sends the HTML report to the specified recipient.

## Additional Notes
- Requires Gmail OAuth2 credentials and LangChain node setup.
- Ensure the email recipient and content sources are configured as needed.
- The workflow can be extended to send reports to Telegram or other channels if desired.
