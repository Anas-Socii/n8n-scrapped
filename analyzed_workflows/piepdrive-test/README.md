# Workflow Name: piepdrive-test

## Summary
Enriches Pipedrive organization data with AI-generated notes when a new organization is created. Scrapes the organization's website, summarizes key info with OpenAI GPT-4o, and posts results to Pipedrive and Slack.

## Description
This workflow triggers when a new organization is created in Pipedrive. It scrapes the organization's website (using ScrapingBee), sends the content to OpenAI GPT-4o for enrichment (company description, products, competitors, etc.), adds a formatted note to the Pipedrive organization, and sends a summary to Slack. Includes Markdown/Slack formatting steps for optimal display.

## Input Triggers
- **Pipedrive Trigger**: Fires when an organization is created in Pipedrive.

## Output
- Note added to the Pipedrive organization.
- Slack notification with the enriched organization summary.

## Nodes Involved
- **Pipedrive Trigger**: Detects new organization creation.
- **ScrapingBee (httpRequest)**: Scrapes the organization's website homepage.
- **OpenAI - Message GPT-4o with Scraped Data**: Summarizes scraped data and extracts company info.
- **Pipedrive - Create a Note**: Adds the summary as a note to the organization in Pipedrive.
- **HTML To Markdown**: Converts HTML summary to Markdown.
- **Code - Markdown to Slack Markdown**: Adapts Markdown for Slack formatting.
- **Slack - Notify**: Sends the summary to a Slack channel.
- **Sticky Note**: In-workflow documentation and usage tips.

## High-Level Process Flow
1. Organization created in Pipedrive triggers the workflow.
2. Organization website is scraped for content.
3. Scraped content is summarized and enriched by GPT-4o.
4. Enriched summary is added as a note to the organization in Pipedrive.
5. Summary is converted to Markdown and Slack Markdown.
6. Slack notification is sent with the enriched info.

## Detailed Process Description
- **Pipedrive Trigger**: Watches for new organizations.
- **ScrapingBee**: Scrapes the homepage using provided API key.
- **OpenAI Node**: Extracts and summarizes relevant company info, formats as HTML.
- **Pipedrive Note**: Adds the AI-generated summary to the organization.
- **HTML/Markdown Conversion**: Ensures summary is readable in Slack.
- **Slack Notify**: Posts the summary to a specified Slack channel.
- **Sticky Note**: Explains workflow logic and best practices.

## Additional Notes
- **Credentials Required**: Pipedrive API, ScrapingBee API, OpenAI API, Slack OAuth2.
- **Compliance**: Ensure web scraping is legal in your jurisdiction.
- **Workflow Status**: The workflow JSON indicates `active: false`.
- **Tags**: None
