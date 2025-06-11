# AI-Powered YouTube Video Summarization & Analysis

## Summary
This workflow automatically extracts transcripts from YouTube videos, summarizes and analyzes them using AI, and delivers the results via Telegram and webhook response.

## Description
This n8n workflow takes a YouTube video URL as input (via webhook), extracts the transcript, processes and summarizes the content using AI (LangChain/OpenAI), and sends the summarized insights to both a Telegram chat and as a webhook response. It leverages a mix of code, HTTP requests, and AI nodes for end-to-end automation.

## Input Triggers
- Webhook (POST to `/ytube`)

## Output
- Telegram message with video summary & link
- Webhook response with summarized data

## Nodes Involved
- **Webhook**: Receives incoming requests with YouTube URLs
- **Get YouTube URL**: Extracts the URL from the request
- **YouTube Video ID**: Extracts the video ID from the URL
- **Get YouTube Video**: Fetches video metadata
- **YouTube Transcript**: Retrieves the transcript
- **Split Out**: Splits transcript into manageable chunks
- **Concatenate**: Recombines transcript text
- **gpt-4o-mini**: AI language model for advanced processing
- **Summarize & Analyze Transcript**: Uses AI to summarize and analyze
- **Response Object**: Prepares the output object
- **Respond to Webhook**: Sends the response
- **Telegram**: Sends a message to Telegram

## High-Level Process Flow
1. Webhook receives a POST with a YouTube URL.
2. The URL is extracted and the video ID is parsed.
3. Video metadata is fetched from YouTube.
4. Transcript is retrieved for the video.
5. Transcript is split and concatenated for processing.
6. AI nodes (gpt-4o-mini, Summarize & Analyze Transcript) generate a summary and analysis.
7. Results are formatted and sent both as a webhook response and as a Telegram message.

## Detailed Process Description
1. **Webhook**: Listens for POST requests at `/ytube` and extracts the `youtubeUrl` from the body.
2. **Get YouTube URL**: Sets the extracted URL for downstream nodes.
3. **YouTube Video ID**: Runs custom JS to extract the video ID from the URL.
4. **Get YouTube Video**: Uses the video ID to fetch metadata (title, description, ID).
5. **YouTube Transcript**: Pulls the transcript for the video.
6. **Split Out**: Splits the transcript into segments for easier processing.
7. **Concatenate**: Joins split transcript segments into a single text block.
8. **gpt-4o-mini**: (LangChain/OpenAI) Used for advanced language processing.
9. **Summarize & Analyze Transcript**: AI summarizes and analyzes the transcript.
10. **Response Object**: Collects summary, topics, title, description, ID, and original URL.
11. **Respond to Webhook**: Returns the processed summary as the webhook response.
12. **Telegram**: Sends a formatted message with the summary and video link to Telegram.

## Additional Notes
- Requires valid credentials for YouTube and Telegram API nodes.
- AI nodes (LangChain/OpenAI) may need API keys/configuration.
- The workflow is modular and can be extended for other messaging platforms.
- Handles errors by responding to the webhook and Telegram with status messages.
