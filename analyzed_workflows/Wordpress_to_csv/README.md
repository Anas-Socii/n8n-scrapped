# Wordpress-to-csv

## Summary
Exports all Wordpress posts to a CSV file.

## Description
- Manual trigger starts the workflow.
- Wordpress node fetches all posts.
- Spreadsheet File node converts posts to CSV.
- Write Binary File node saves the CSV to disk.

## Input Triggers
- Manual Trigger

## Output
- CSV file containing all Wordpress posts.

## Nodes Involved
- **Manual Trigger:** Starts the workflow.
- **Wordpress:** Fetches all posts.
- **Spreadsheet File:** Converts posts to CSV.
- **Write Binary File:** Saves the CSV to disk.

## High-Level Process Flow
1. Manual trigger starts the workflow.
2. Wordpress node fetches posts.
3. Spreadsheet File node converts to CSV.
4. Write Binary File node saves the file.

## Detailed Process Description
- Manual trigger initiates.
- Wordpress node fetches all posts.
- Spreadsheet File node formats as CSV.
- Write Binary File node saves to disk.

## Additional Notes
- Requires Wordpress API credentials.
