# Get a Web Page

## Summary
This workflow retrieves and processes the contents of a web page using the FireCrawl API, making it reusable for AI agents and other workspaces that need to crawl and extract web content in markdown format.

## Description
- **Purpose:** Automates the extraction of web page content (in markdown) from a given URL by triggering an HTTP request to the FireCrawl API.
- **Reusability:** Designed for integration by other workflows or AI agents that need to crawl and parse web pages for downstream processing.

## Workflow Structure
- **Trigger:** Execute Workflow Trigger
- **Main Nodes:**
  - **FireCrawl (HTTP Request):** Sends a POST request to FireCrawl API with the target URL and requests markdown output.
  - **Edit Fields (Set Node):** Extracts the markdown response from FireCrawl and sets it in the workflow data.
  - **Sticky Note:** Documents usage instructions for reusing this workflow in other contexts.

## Process Flow
1. **Trigger:** Workflow is started (can be executed by another workflow or manually).
2. **HTTP Request:** The FireCrawl node sends the specified URL to the FireCrawl API and requests the content in markdown format.
3. **Set Node:** The markdown response is extracted and stored in the `response` field.
4. **Sticky Note:** Provides instructions for other users or agents on how to reuse this workflow.

## Credentials
- **FireCrawl:** Requires HTTP Header Auth credentials named `Firecrawl` for API access.

## Usage Instructions
To reuse this workflow, send a request with the following JSON body:
```json
{
  "url": "Some URL to Get"
}
```

## Notes
- This workflow is designed for modularity and reusability.
- Ensure the FireCrawl credentials are properly configured in n8n.
- The workflow is currently inactive by default.

## Tags
- tools
- crawl
- markdown
- integration

---
*Last processed: 10/06/2025 12:57*
