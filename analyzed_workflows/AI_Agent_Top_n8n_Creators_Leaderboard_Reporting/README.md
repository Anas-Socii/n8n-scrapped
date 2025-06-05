# AI Agent for Top n8n Creators Leaderboard Reporting

## Summary
Aggregates and reports on the top n8n creators and their most popular workflows using public leaderboard data and AI-powered analytics.

## Description
- Downloads and parses JSON data for creators and workflows from the n8n community leaderboard.
- Aggregates, filters, and analyzes data to identify trends and top performers.
- Uses LLMs for advanced reporting and summary generation.
- Supports file export and integration with other workflows.

## Input Triggers
- Manual or scheduled trigger (or execution by another workflow)

## Output
- Leaderboard reports, analytics summaries, and file exports.

## Nodes Involved
- **HTTP Request Nodes:** Download stats for creators and workflows.
- **Set (Global Variables):** Sets up runtime variables and paths.
- **Parse/Set Nodes:** Parses and structures the downloaded data.
- **Aggregate Node:** Aggregates workflow statistics.
- **LLM Node (gpt-4o-mini):** Generates summaries and analytics.
- **Workflow Tool Node:** Exposes reporting as a callable tool.
- **ConvertToFile:** Exports summary as a file.

## High-Level Process Flow
1. Download creators and workflows data.
2. Parse and aggregate statistics.
3. Generate analytics and summaries using LLM.
4. Export or report results.

## Detailed Process Description
- **HTTP Requests:** Fetch leaderboard JSON files.
- **Parsing:** Convert JSON to arrays for processing.
- **Aggregation:** Summarize and rank top creators and workflows.
- **LLM Analytics:** Use AI to generate insights.
- **Export:** Convert summary to downloadable file.

## Additional Notes
- Requires internet access for data fetching.
- LLM node requires OpenAI credentials.
- Modular and extensible for other reporting needs.
