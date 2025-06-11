# Vision-Based AI Agent Scraper - with Google Sheets, ScrapingBee, and Gemini

## Summary
This workflow scrapes structured data from web pages using a vision-based AI agent, integrating Google Sheets for URL management, ScrapingBee for screenshots and HTML, and Gemini for AI-powered data extraction.

## Description
The workflow is designed for e-commerce and similar use cases where structured data extraction is needed. It reads URLs from a Google Sheet, uses ScrapingBee to capture screenshots and HTML, and leverages the Gemini-1.5-Pro model for vision-based data extraction. If vision extraction fails, it falls back to HTML scraping. Extracted data is parsed and stored back into Google Sheets.

## Input Triggers
- Manual Trigger ("When clicking ‘Test workflow’")
- Can be changed to any other trigger as needed

## Output
- Structured product data appended to a Google Sheet
- Screenshots and extracted information for each processed URL

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually
- **Google Sheets - Get list of URLs**: Reads URLs to process
- **ScrapingBee - Get page screenshot**: Captures webpage screenshots
- **ScrapingBee- Get page HTML**: Retrieves HTML for fallback extraction
- **Google Gemini Chat Model**: AI-powered vision-based data extraction
- **Structured Output Parser**: Formats AI output into structured JSON
- **Split Out**: Splits parsed output for row-wise processing
- **HTML-based Scraping Tool**: Fallback HTML extraction
- **Google Sheets - Create Rows**: Writes structured results to Google Sheets
- **Sticky Notes**: Document logic and instructions inside the workflow

## High-Level Process Flow
1. Manually trigger the workflow.
2. Read URLs from a Google Sheet.
3. For each URL:
   - Capture a screenshot with ScrapingBee.
   - Retrieve HTML with ScrapingBee.
   - Use Gemini AI for vision-based extraction.
   - If vision fails, use HTML-based extraction.
   - Parse and structure the output.
   - Write results back to Google Sheets.

## Detailed Process Description
1. **Manual Trigger**: Initiates the workflow.
2. **Google Sheets - Get list of URLs**: Fetches URLs to scrape.
3. **ScrapingBee - Get page screenshot**: Captures a screenshot for AI analysis.
4. **ScrapingBee- Get page HTML**: Retrieves raw HTML for fallback.
5. **Google Gemini Chat Model**: Processes screenshot (or HTML) to extract product data.
6. **Structured Output Parser**: Parses Gemini's output into a structured format.
7. **Split Out**: Splits structured output for individual row processing.
8. **HTML-based Scraping Tool**: Used if vision-based extraction fails.
9. **Google Sheets - Create Rows**: Appends structured data to the target Google Sheet.
10. **Sticky Notes**: Provide in-workflow documentation, legal reminders, and customization hints.

## Additional Notes
- Requires Google Sheets and ScrapingBee API credentials.
- Gemini-1.5-Pro access is needed for vision-based AI extraction.
- Designed for e-commerce, but can be adapted to other domains.
- Legal compliance for web scraping is the user's responsibility.
- The workflow is modular and can be extended for other data sources or output formats.
