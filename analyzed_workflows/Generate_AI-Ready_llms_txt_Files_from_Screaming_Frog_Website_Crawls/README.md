# Workflow Name: Generate AI-Ready llms.txt Files from Screaming Frog Website Crawls

## Summary
Automates the creation of `llms.txt` files from Screaming Frog website crawl exports, filtering and formatting content for LLM ingestion or discovery.

## Description
This workflow processes a Screaming Frog export (CSV), extracts and filters relevant pages (e.g., indexable, status 200, HTML content), and generates a properly formatted `llms.txt` file. It supports multi-language exports and can be extended to upload the file to cloud storage. The workflow includes optional LLM-based classification for further content filtering.

## Input Triggers
- **Form Node**: User uploads a Screaming Frog export and provides website name/description.

## Output
- Downloadable or cloud-uploaded `llms.txt` file containing filtered, formatted URL/title/description rows.

## Nodes Involved
- **Form - Screaming Frog internal_html.csv upload**: Accepts file and metadata input.
- **Extract data from Screaming Frog file**: Parses CSV export.
- **Set useful fields**: Normalizes relevant columns (URL, title, description, etc.).
- **Filter URLs**: Keeps only indexable, HTML, status-200 URLs.
- **Text Classifier** (optional): Uses LLM to further classify content (disabled by default).
- **Set Field - llms.txt Row**: Formats each content row for the output file.
- **Summarize - Concatenate**: Aggregates all rows into one text block.
- **Set Fields - llms.txt Content**: Adds title and description to the file.
- **Generate llms.txt file**: Creates the downloadable file.
- **upload file anywhere** (optional): Placeholder for cloud upload.
- **Sticky Notes**: In-workflow documentation.

## High-Level Process Flow
1. User uploads Screaming Frog export and enters metadata.
2. File is parsed and relevant columns are extracted.
3. URLs are filtered for indexability, status, and content type.
4. (Optional) LLM classifies content for usefulness.
5. Each row is formatted for `llms.txt`.
6. All rows are concatenated and file metadata is added.
7. The final file is generated for download or upload.

## Detailed Process Description
- **Form Node**: Collects website name, description, and CSV file.
- **Extract Data**: Reads the CSV and outputs structured data.
- **Set Useful Fields**: Maps multilingual columns to standard keys.
- **Filter URLs**: Applies strict rules to keep only high-value pages.
- **Text Classifier**: (If enabled) LLM decides if the page is useful for LLM training/discovery.
- **Set Field - llms.txt Row**: Formats each entry as `- [title](url): description` or `- [title](url)`.
- **Summarize - Concatenate**: Joins all rows with newlines.
- **Set Fields - llms.txt Content**: Adds website title/description to the top.
- **Generate llms.txt file**: Outputs the file for download.
- **upload file anywhere**: Placeholder for cloud upload, can be replaced with a Drive node.

## Additional Notes
- **Credentials Required**: None by default; add Drive/Cloud credentials if uploading.
- **Multi-language Support**: Handles Screaming Frog exports in multiple languages.
- **LLM Filtering**: Optional, can be enabled for more intelligent content selection.
- **Workflow Status**: The workflow JSON indicates `active: false`.
- **Tags**: None
