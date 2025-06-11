# AI Agent for n8n Creators Leaderboard – Find Popular Workflows

## Summary
This workflow analyzes public n8n community leaderboard data to identify top creators and their most popular workflows, using HTTP requests, data parsing, filtering, and aggregation.

## Description
- Downloads and parses JSON data for creators and workflows from the public n8n community leaderboard GitHub repository.
- Aggregates and filters data to identify the top 25 creators.
- Allows filtering workflows by creator username.
- Aggregates workflow statistics for reporting or further analysis.
- Uses an AI node (gpt-4o-mini) for summarization or further processing.
- Designed for leaderboard analytics and workflow popularity insights.

## Input Triggers
- Likely a manual or scheduled trigger to refresh leaderboard data.

## Output
- Aggregated and filtered data on top creators and their workflows.
- Can output summaries, statistics, or filtered lists.

## Nodes Involved
- **Set (Global Variables):** Sets URLs, filenames, and runtime variables.
- **HTTP Request (stats_aggregate_creators, stats_aggregate_workflows):** Downloads leaderboard JSON data.
- **Set (Parse Workflow Data/Creators Data):** Parses downloaded JSON into arrays.
- **Limit (Take Top 25 Creators):** Selects top creators.
- **Aggregate:** Aggregates workflow statistics.
- **Filter (By Creator Username):** Filters workflows for a specific creator.
- **gpt-4o-mini:** AI node for summarization or advanced analytics.

## High-Level Process Flow
1. Set up global variables (URLs, filenames, etc.).
2. Download creators and workflows JSON data.
3. Parse and process the data.
4. Aggregate and filter for top creators and workflows.
5. Optionally use AI for summarization or reporting.

## Detailed Process Description
- **Global Variables:** Initializes all runtime variables and paths.
- **HTTP Requests:** Fetches creators and workflows data from GitHub.
- **Parsing Nodes:** Converts fetched JSON into arrays for processing.
- **Limit Node:** Restricts to top 25 creators for leaderboard.
- **Aggregate Node:** Gathers statistics on workflows.
- **Filter Node:** Enables filtering by a specific creator’s username.
- **AI Node:** Can summarize or analyze the aggregated data.

## Additional Notes
- Data is sourced from the public n8n community leaderboard GitHub repository.
- Requires internet access for HTTP requests.
- Useful for analytics, reporting, and leaderboard visualizations.
