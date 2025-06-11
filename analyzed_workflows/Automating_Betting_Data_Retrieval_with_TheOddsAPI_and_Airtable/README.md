# Automating Betting Data Retrieval with TheOddsAPI and Airtable

## Summary
Automates the retrieval of betting data from TheOddsAPI and stores results in Airtable.

## Description
This workflow uses scheduled triggers to pull betting data at the start and end of the day, retrieves odds and scores for a selected sport, and updates Airtable with the results. Sticky notes provide documentation and usage tips.

## Input Triggers
- **Schedule Triggers**: Pull data at specific times (e.g., 7:00am and 11:00pm).

## Output
- Betting odds and results stored in Airtable.

## Nodes Involved
- **Schedule Triggers**: Initiate data pulls at set times.
- **HTTP Requests**: Retrieve betting data and scores.
- **Sticky Notes**: Document workflow steps and provide links to API docs.
- **Other Nodes**: (Not fully visible) Likely handle data merging and Airtable integration.

## High-Level Process Flow
- Trigger workflow at scheduled times.
- Retrieve betting data from TheOddsAPI.
- Store and update records in Airtable.

## Detailed Process Description
1. **Morning Trigger**: Pulls data at the start of the day.
2. **HTTP Requests**: Retrieve and process betting data.
3. **Evening Trigger**: Pulls scores and updates records at the end of the day.
4. **Sticky Notes**: Provide documentation and links to API resources.
5. **Other Nodes**: (Not fully visible) Likely handle merging and Airtable updates.

## Additional Notes
- **Credentials**: Requires TheOddsAPI and Airtable API credentials.
- **Customization**: Sport, schedule, and Airtable settings can be adjusted.
- **Disclaimer**: Ensure compliance with TheOddsAPI and Airtable usage policies.
