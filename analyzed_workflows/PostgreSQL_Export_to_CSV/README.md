# PostgreSQL Export to CSV

## Summary
Exports data from a specified PostgreSQL table to a CSV file using n8n.

## Description
This workflow allows users to export the contents of a PostgreSQL table (e.g., `booksRead`) to a CSV file. It is manually triggered, queries the database, and writes the results to a CSV using the Spreadsheet File node. Useful for data backup, reporting, or sharing tabular data.

## Input Triggers
- Manual Trigger (When clicking "Execute Workflow")

## Output
- CSV file containing the exported table data

## Nodes Involved
- **When clicking "Execute Workflow"**: Manual trigger to start the workflow
- **TableName (Set node)**: Specifies the table to export (default: `booksRead`)
- **Postgres**: Executes the SQL query to fetch data from the specified table
- **Spreadsheet File**: Converts the database output to a CSV file

## High-Level Process Flow
- Workflow is manually triggered
- Table name is set
- Data is queried from Postgres
- Data is exported to CSV

## Detailed Process Description
1. **Manual Trigger**: User initiates the workflow from the n8n UI.
2. **Set Table Name**: The table to export is specified (default: `booksRead`).
3. **Postgres Node**: Executes a SQL query to select all data from the specified table.
4. **Spreadsheet File Node**: Converts the query results to a CSV file for download or further processing.

## Additional Notes
- Requires valid Postgres credentials (`Postgres account`).
- The exported CSV file can be downloaded or sent to other systems.
- The workflow is inactive by default; enable it to use.
- You can change the table name in the Set node to export different tables.
