# Google News RSS Decode to Clean Article Links

## Summary
Extracts and decodes Google News RSS feed URLs to produce clean, direct article links.

## Description
This workflow fetches articles from a Google News RSS feed, decodes the obfuscated Google News links, and outputs the original clean URLs for each article. It utilizes HTTP requests, HTML extraction, and custom code to reverse-engineer the decoding process. The workflow is useful for scraping or aggregating news content with direct access to source articles.

## Input Triggers
- **Manual Trigger**: Initiated by clicking 'Test workflow' in n8n.

## Output
- Clean, direct article URLs extracted from Google News RSS feed items.

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually.
- **RSS Feed Read**: Fetches items from a Google News RSS feed.
- **Limit**: Restricts the number of articles processed (default 5, suggested 3 for performance).
- **HTTP Request**: Retrieves the encoded news page and performs the decoding POST request.
- **HTML Extract**: Extracts decoding keys from the news page HTML.
- **Set**: Maps and prepares variables for decoding and output.
- **Code**: Prepares decoding payloads for Google’s internal API.
- **Sticky Notes**: Provide usage, warnings, and parameter hints.

## High-Level Process Flow
- Manually trigger the workflow.
- Fetch Google News RSS feed items.
- Limit the number of articles for processing.
- For each article:
  - Retrieve the encoded news page.
  - Extract decoding keys (signature, timestamp, base64 string).
  - Prepare and send a decoding POST request.
  - Parse and output the clean article URL.

## Detailed Process Description
1. **Manual Trigger**: User starts the workflow.
2. **RSS Feed Read**: Loads articles from the configured Google News RSS URL (customizable for region/language).
3. **Limit**: Restricts the number of articles to avoid excessive requests.
4. **HTTP Request (Get Encoded News URL)**: Loads the Google News article page for each feed item.
5. **HTML Extract**: Pulls decoding keys from the HTML attributes.
6. **Set (Map Needed Keys)**: Prepares the signature, timestamp, and base64 string for decoding.
7. **Code (Prepare Decoding Variables)**: Constructs the payload for Google’s internal decoding API.
8. **HTTP Request (Call Decoding URL)**: Sends the POST request to decode the article link.
9. **Set (Decoded URL)**: Extracts and outputs the clean article link from the API response.

## Additional Notes
- **Performance**: Limiting items is recommended due to the number of HTTP requests.
- **Reliability**: The decoding method is based on reverse engineering and may break if Google changes its API or HTML structure.
- **Credentials**: No external credentials required, but excessive use may result in IP blocking by Google.
- **Customization**: RSS feed language/region can be changed via URL parameters (see sticky notes).
- **Disclaimer**: This workflow is for educational use; respect Google’s terms and robots.txt.
