# AI-Powered YouTube Playlist and Video Summarization and Analysis v2

## Summary
Analyzes and summarizes YouTube playlists and videos using Google Gemini and LangChain agents.

## Description
This workflow allows users to submit YouTube playlist or video URLs and receive structured, detailed summaries using Google Gemini and custom prompt logic. It is ideal for quickly understanding video content without watching.

## Input Triggers
- **Manual/Query Input**: User submits a YouTube playlist or video URL.

## Output
- Structured markdown summary of the playlist or video content.

## Nodes Involved
- **Google Gemini Chat Model**: Processes and analyzes video content.
- **LangChain Agent**: Handles user queries and orchestrates summarization.
- **Split Out**: Splits transcripts for analysis.
- **Summarize & Analyze Transcript**: Summarizes video transcripts.
- **Concatenate**: Combines results for final output.

## High-Level Process Flow
- Receive YouTube URL from user.
- Analyze video or playlist using Gemini and LangChain.
- Summarize content in markdown format.
- Return structured results to user.

## Detailed Process Description
1. **User Input**: Receives YouTube URL.
2. **LangChain Agent**: Determines query intent and orchestrates analysis.
3. **Google Gemini Chat Model**: Analyzes content.
4. **Split Out/Summarize**: Splits and summarizes transcripts.
5. **Concatenate**: Merges results for output.

## Additional Notes
- **Credentials**: Requires Google Gemini and YouTube Data API credentials.
- **Customization**: Prompt logic and summary format can be adjusted.
- **Performance**: Dependent on video length and API limits.
- **Disclaimer**: Ensure compliance with YouTube and API usage policies.
