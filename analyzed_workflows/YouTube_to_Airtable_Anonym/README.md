# YouTube to Airtable Anonym

## Summary
Extracts YouTube video transcripts and stores them in Airtable in an anonymized workflow.

## Description
This workflow retrieves the transcript of a YouTube video using an external API, processes the transcript, and stores the results in Airtable. It includes code nodes for extracting video IDs and combining transcripts. Designed for anonymized data handling and efficient transcript management.

## Input Triggers
- **None specified** (workflow likely triggered manually or by another process)

## Output
- YouTube video transcripts stored in Airtable.

## Nodes Involved
- **Get Video ID**: Extracts the video ID from a YouTube URL.
- **Get video transcript**: Calls an external API to retrieve the transcript.
- **Combine Transcripts**: Merges transcript segments.
- **Other Nodes**: (Not fully visible) May include Airtable integration and additional processing.

## High-Level Process Flow
- Extract video ID from input.
- Retrieve transcript using external API.
- Combine and process transcript.
- Store transcript in Airtable.

## Detailed Process Description
1. **Get Video ID**: Extracts the YouTube video ID from the provided URL.
2. **Get video transcript**: Retrieves the transcript via HTTP request.
3. **Combine Transcripts**: Merges transcript segments for storage.
4. **Other Nodes**: (Not fully visible) Likely handle Airtable integration.

## Additional Notes
- **Credentials**: Requires RapidAPI and Airtable API credentials.
- **Customization**: API keys and Airtable table details must be configured.
- **Disclaimer**: Ensure compliance with YouTube, RapidAPI, and Airtable usage policies.
