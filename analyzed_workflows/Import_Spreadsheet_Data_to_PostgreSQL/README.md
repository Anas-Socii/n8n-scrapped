# Import Spreadsheet Data to PostgreSQL

## Summary
Reads an Excel spreadsheet, parses it, and inserts product data into a PostgreSQL database.

## Description
- Reads a binary Excel file (`spreadsheet.xls`).
- Parses the spreadsheet into rows.
- Inserts each row as a product record (name, EAN) into a PostgreSQL table.

## Input Triggers
- No explicit trigger (assumes manual or automated execution in n8n).

## Output
- New rows in the `product` table in PostgreSQL.

## Nodes Involved
- **Read Binary File:** Reads the spreadsheet file.
- **Spreadsheet File:** Parses the Excel file.
- **Insert Rows1 (Postgres):** Inserts data into the database.

## High-Level Process Flow
1. Read spreadsheet file.
2. Parse rows.
3. Insert each row into PostgreSQL.

## Detailed Process Description
- **Read Binary File** node loads the Excel file.
- **Spreadsheet File** node parses data.
- **Insert Rows1** node inserts each row into the `product` table.

## Additional Notes
- Requires PostgreSQL credentials.
- File path and table/column names must be configured.
