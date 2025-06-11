# Google Page Entity Extraction Template

## Summary
Extracts named entities from web pages using Google Natural Language API.

## Description
This workflow provides an endpoint to extract and analyze entities (people, organizations, locations, etc.) from any web page using Google’s Natural Language API. Users submit a URL, and the workflow fetches the page content, processes it, and returns structured entity data.

## Input Triggers
- **Webhook**: Receives POST requests with target URLs.

## Output
- JSON response with entity analysis from Google API.

## Nodes Involved
- **Webhook**: Receives analysis requests.
- **Google Entities**: Sends content to Google Natural Language API.
- **Respond to Webhook**: Returns results to the requester.
- **Sticky Note**: Provides usage instructions.

## High-Level Process Flow
- Receive POST request with URL.
- Fetch and analyze page content.
- Return structured entity data as JSON.

## Detailed Process Description
1. **Webhook**: Receives POST request with target URL.
2. **Google Entities**: Calls Google Natural Language API for entity analysis.
3. **Respond to Webhook**: Returns the results to the requester.
4. **Sticky Note**: Documents usage and response format.

## Additional Notes
- **Credentials**: Requires Google Cloud Natural Language API key.
- **Customization**: API key and endpoint can be changed.
- **Performance**: Dependent on web page size and API speed.
- **Disclaimer**: Ensure compliance with Google API and data privacy policies.
