# Snowflake CSV

## Summary
Automates the process of downloading a CSV file, extracting user data, and inserting it into a Snowflake database table.

## Description
This workflow is designed to streamline the ETL (Extract, Transform, Load) process for user data. It begins with a manual trigger, downloads a CSV file from a specified URL, parses the file, maps the relevant fields, and inserts the processed data into a Snowflake table. The workflow ensures that user data is consistently and accurately loaded into the database for further analysis or reporting.

## Input Triggers
- Manual Trigger (on workflow execution)

## Output
- User data rows inserted into the Snowflake database

## Nodes Involved
- **Manual Trigger:** Starts the workflow when executed.
- **HTTP Request:** Downloads the CSV file from a remote URL.
- **Spreadsheet File:** Parses the downloaded CSV file.
- **Set:** Maps and prepares the data fields for database insertion.
- **Snowflake:** Inserts the processed data into the specified Snowflake table.

## High-Level Process Flow
- Manually trigger the workflow
- Download the CSV file
- Parse and extract user data
- Map fields for database insertion
- Insert rows into Snowflake

## Detailed Process Description
1. **Manual Trigger:** Initiates the workflow.
2. **HTTP Request:** Downloads the CSV file containing user data.
3. **Spreadsheet File:** Reads and parses the CSV to extract user records.
4. **Set:** Maps the CSV fields (id, first_name, last_name) for database insertion.
5. **Snowflake:** Loads the mapped data into the 'users' table in Snowflake.

## Additional Notes
- Requires valid Snowflake credentials.
- The workflow can be adapted for other data sources or destinations.
- Ensure the CSV file format matches the expected schema for successful processing.
