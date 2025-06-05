# Workflow Name: ⚡AI-Powered YouTube Video Summarization & Analysis

## Summary
Automates the extraction, summarization, and analysis of YouTube video content. Uses webhooks, transcript extraction, OpenAI GPT-4o, and messaging integrations to deliver concise video summaries and insights via webhook response and Telegram.

## Description
This workflow receives a YouTube video URL via webhook, extracts the transcript, summarizes and analyzes the content using OpenAI GPT-4o, and sends a structured summary (including title, description, and topics) as a webhook response and via Telegram. It includes video metadata extraction and various formatting steps to ensure clear, actionable output.

## Input Triggers
- **Webhook**: Receives POST requests with a YouTube video URL.

## Output
- Webhook response containing a summary, topics, title, description, and video ID.
- Telegram message with video title and link.

## Nodes Involved
- **Webhook**: Entry point for YouTube URLs.
- **Get YouTube URL (set)**: Extracts and normalizes the URL from the webhook body.
- **YouTube Video ID (code)**: Extracts the YouTube video ID from the URL.
- **Get YouTube Video**: Retrieves video metadata.
- **YouTube Transcript**: Extracts transcript from the video.
- **Split Out**: Splits transcript into segments.
- **Concatenate**: Aggregates transcript segments.
- **gpt-4o-mini (@n8n/n8n-nodes-langchain.lmChatOpenAi)**: LLM for advanced analysis.
- **Summarize & Analyze Transcript (@n8n/n8n-nodes-langchain.chainLlm)**: Generates summary and insights from transcript.
- **Response Object (set)**: Structures the summary and metadata for output.
- **Respond to Webhook**: Sends structured response to the original webhook caller.
- **Telegram**: Sends video summary to Telegram.

## High-Level Process Flow
1. Webhook receives YouTube URL.
2. URL is parsed and video ID extracted.
3. Video metadata and transcript are retrieved.
4. Transcript is split and concatenated.
5. OpenAI GPT-4o summarizes and analyzes the transcript.
6. Structured summary is created and returned via webhook and Telegram.

## Detailed Process Description
- **Webhook**: Receives POST with `{ youtubeUrl: string }`.
- **Get YouTube URL**: Extracts URL from request body.
- **YouTube Video ID**: JS code parses the video ID.
- **Get YouTube Video**: Fetches metadata (title, description, id).
- **YouTube Transcript**: Gets transcript for the video.
- **Split Out/Concatenate**: Prepares transcript for LLM.
- **gpt-4o-mini & Summarize & Analyze Transcript**: LLM nodes summarize and extract topics.
- **Response Object**: Packages output fields.
- **Respond to Webhook/Telegram**: Delivers results to user.

## Additional Notes
- **Credentials Required**: YouTube Data API, OpenAI API, Telegram Bot API.
- **Formatting**: Output includes summary, topics (array), title, description, and YouTube URL.
- **Workflow Status**: The workflow JSON indicates `active: false`.
- **Tags**: None
