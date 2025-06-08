# Workflow 2

## Summary
Exports product data from a PostgreSQL database to an Excel spreadsheet file.

## Description
This workflow queries a PostgreSQL database for product names and EANs, converts the results to a spreadsheet, and saves the file. It automates the process of exporting database data for reporting or sharing.

## Input Triggers
- None (manual or scheduled via external trigger)

## Output
- An Excel spreadsheet file (`spreadsheet.xls`) containing product names and EANs.

## Nodes Involved
- **Run Query (Postgres)**: Executes a SQL query to fetch product data.
- **Spreadsheet File**: Converts the query results to an Excel file.
- **Write Binary File**: Saves the spreadsheet to disk.

## High-Level Process Flow
1. Run Query node fetches product data from the PostgreSQL database.
2. Spreadsheet File node converts the data to an Excel file.
3. Write Binary File node saves the file as `spreadsheet.xls`.

## Detailed Process Description
1. **Run Query**: Executes `SELECT name, ean FROM product` against the configured PostgreSQL database.
2. **Spreadsheet File**: Takes the query output and creates an Excel file.
3. **Write Binary File**: Writes the Excel file to disk as `spreadsheet.xls`.

## Additional Notes
- Requires valid PostgreSQL credentials.
- Ensure the workflow has write access to the destination directory.
- The workflow can be scheduled or triggered manually as needed.
