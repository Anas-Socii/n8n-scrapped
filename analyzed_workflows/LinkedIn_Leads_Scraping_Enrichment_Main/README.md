# LinkedIn Leads Scraping & Enrichment (Main)

## Summary
Automates the scraping of LinkedIn leads and enrichment of their data using form submissions and Google Sheets triggers, with AI-powered processing and enrichment.

## Description
This workflow enables users to submit lead search criteria via a form, scrape leads (e.g., from Apollo), and enrich the results using AI and Google Sheets. It supports automated triggers for new form submissions and new rows added to Google Sheets, and processes each lead for further enrichment and cleaning, such as extracting LinkedIn usernames and removing URL prefixes using OpenAI.

## Input Triggers
- Form submission (n8n Form Trigger)
- Google Sheets row addition (Google Sheets Trigger)

## Output
- Enriched lead data in Google Sheets
- Cleaned LinkedIn usernames

## Nodes Involved
- **n8n-nodes-base.formTrigger**: Starts the workflow on new form submissions for lead search.
- **n8n-nodes-base.splitOut**: Splits out each lead for individual processing.
- **n8n-nodes-base.googleSheetsTrigger**: Triggers when a new row is added to Google Sheets.
- **@n8n/n8n-nodes-langchain.openAi**: Cleans LinkedIn URLs and enriches data using AI.
- **n8n-nodes-base.stickyNote**: Documents workflow steps and logic.

## High-Level Process Flow
- User submits lead search form
- Workflow scrapes leads from Apollo (or similar)
- Each lead is split out for processing
- New rows in Google Sheets trigger enrichment
- OpenAI node cleans and processes LinkedIn URLs
- Enriched data is output to Google Sheets

## Detailed Process Description
1. **Form Trigger**: Activates workflow on new lead search form submissions.
2. **Split Out**: Iterates over each lead for individual processing.
3. **Google Sheets Trigger**: Watches for new rows in lead sheets for enrichment.
4. **OpenAI**: Cleans LinkedIn URLs and enriches data.
5. **Sticky Notes**: Document the logic for scraping and enrichment steps.

## Additional Notes
- Requires Google Sheets and OpenAI API credentials.
- Designed for atomic, repeatable lead scraping and enrichment.
- Can be extended for additional enrichment or integration with other CRMs.
- Handles special characters in filenames and ensures safe processing.
