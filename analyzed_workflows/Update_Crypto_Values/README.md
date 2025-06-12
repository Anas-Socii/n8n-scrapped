# Update Crypto Values

## Summary
Automatically updates cryptocurrency values in an Airtable portfolio using CoinGecko API and logs the total portfolio value.

## Description
This workflow retrieves the latest crypto prices from CoinGecko, updates each asset's value in an Airtable "Portfolio" table, and appends the total portfolio value to a separate log table. It is scheduled to run at the top of every hour, keeping portfolio data up to date for reporting and analysis.

## Input Triggers
- Scheduled (Cron: every hour)

## Output
- Updated crypto values in Airtable table
- Total portfolio value appended to log

## Nodes Involved
- **Cron (Run Top of Hour)**: Triggers the workflow every hour.
- **Airtable (Get Portfolio)**: Retrieves current portfolio entries.
- **CoinGecko**: Gets the latest price for each crypto asset.
- **Set**: Prepares updated values for Airtable.
- **Airtable (Update Values)**: Updates asset values in Airtable.
- **Airtable (Get Portfolio Values)**: Fetches updated values for total calculation.
- **Function (Determine Total Value)**: Sums up all asset values.
- **Airtable (Append Portfolio Value)**: Appends the total value to a log table.

## High-Level Process Flow
- Trigger hourly
- Retrieve portfolio assets from Airtable
- For each asset, fetch price from CoinGecko and update in Airtable
- Calculate total portfolio value
- Append total value to log table

## Detailed Process Description
1. **Cron** node triggers the workflow every hour.
2. **Airtable (Get Portfolio)** node lists all assets (symbols) in the portfolio.
3. For each asset, **CoinGecko** node fetches the latest price.
4. **Set** node prepares the price and asset ID for update.
5. **Airtable (Update Values)** node updates each asset's value in Airtable.
6. **Airtable (Get Portfolio Values)** node fetches all updated values.
7. **Function (Determine Total Value)** node sums up all present values.
8. **Airtable (Append Portfolio Value)** node logs the total value.

## Additional Notes
- Requires Airtable and CoinGecko credentials configured in n8n.
- The workflow can be adapted for other assets or custom reporting.
- Useful for automated portfolio tracking and analytics.
