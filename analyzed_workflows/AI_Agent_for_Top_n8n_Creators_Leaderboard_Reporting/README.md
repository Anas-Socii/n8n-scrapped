# AI Agent for Top n8n Creators Leaderboard Reporting

## Summary
Aggregates and reports leaderboard statistics for top n8n creators using external data sources and OpenAI for analysis.

## Description
This workflow fetches and aggregates creator and workflow statistics from GitHub-hosted JSON files, processes the data, and uses an AI agent (GPT-4o-mini) for reporting and insights. It is designed for community analytics, leaderboard reporting, and data-driven insights for n8n creators.

## Input Triggers
- Execute Workflow Trigger

## Output
- Aggregated statistics and AI-generated reports on top n8n creators

## Nodes Involved
- **Global Variables**: Sets up URLs and filenames for data sources.
- **stats_aggregate_creators / stats_aggregate_workflows**: Fetches JSON data from GitHub.
- **Parse Workflow Data / Parse Creators Data**: Processes and parses fetched data.
- **Aggregate**: Aggregates all item data.
- **gpt-4o-mini**: Uses OpenAI for AI-powered insights.
- **Workflow Tool**: Exposes the workflow as a callable tool.

## High-Level Process Flow
- Trigger workflow execution.
- Fetch creator and workflow data from GitHub.
- Parse and aggregate the data.
- Use AI agent for analysis and reporting.

## Detailed Process Description
1. **Global Variables**: Defines URLs and filenames for data fetch.
2. **stats_aggregate_creators / stats_aggregate_workflows**: HTTP requests to obtain the latest stats.
3. **Parse Workflow Data / Parse Creators Data**: Parses JSON arrays for further processing.
4. **Aggregate**: Aggregates all relevant data.
5. **gpt-4o-mini**: Generates insights and summary.
6. **Workflow Tool**: Makes the workflow callable by other workflows or tools.

## Additional Notes
- **Credentials**: Requires OpenAI API credentials.
- **Customization**: Data sources and aggregation logic can be adjusted.
- **Usage**: Can be triggered manually or by another workflow.
