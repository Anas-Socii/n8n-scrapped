# Read sitemap and filter URLs

## Summary
This workflow reads a sitemap.xml file from a given URL, converts it to JSON, and filters the entries based on custom conditions—by default, returning only PDF documents.

## Description
- **Purpose:** Automates the extraction and filtering of URLs from a sitemap.xml file for further processing or analysis.
- **Automation:** Fetches the sitemap, converts XML to JSON, splits out URL entries, and applies a filter to select relevant URLs.

## Workflow Structure
- **Trigger:** Manual trigger to start the workflow.
- **Main Nodes:**
  - **Set sitemap URL:** Defines the sitemap.xml URL to fetch.
  - **Get Sitemap:** Downloads the sitemap using HTTP request.
  - **Convert Sitemap to JSON:** Converts the XML sitemap to JSON.
  - **Split Out:** Splits out individual URL entries for processing.
  - **Filter URLs:** Filters the URLs, by default for `.pdf` files.
  - **Sticky Notes:** Provide setup instructions and workflow documentation.

## Process Flow
1. **Manual Trigger:** Initiate the workflow manually.
2. **Set sitemap URL:** Specify the sitemap.xml URL.
3. **Get Sitemap:** Fetch the sitemap from the specified URL.
4. **Convert to JSON:** Convert the XML data to JSON.
5. **Split Out:** Extract each URL entry.
6. **Filter URLs:** Apply filter logic (default: only `.pdf` URLs).

## Credentials
- No special credentials are required for the default setup (public sitemaps).

## Usage Instructions
- Edit the **Set sitemap URL** node to specify your target sitemap.xml URL.
- Edit the **Filter URLs** node to define custom filtering logic as needed.
- Run the workflow manually to process and filter the sitemap URLs.

## Notes
- The workflow is modular and can be extended for additional filtering or downstream processing.
- Default filter returns only PDF documents; adjust as needed for your use case.

---
*Last processed: 10/06/2025 13:10*
