# SIGNL4 Alert

## Summary
Automates the creation and processing of alert data files, converting between JSON and binary formats, and marking alerts as processed.

## Description
This workflow triggers hourly to handle alert data. It reads and writes alert information in binary and JSON formats, processes the data, and marks alerts as done. The workflow is useful for automating alert management and data transformation tasks.

## Input Triggers
- Cron Trigger (every hour)

## Output
- Alert data processed and marked as done, stored in binary and JSON files.

## Nodes Involved
- **Cron**: Triggers the workflow every hour.
- **Write Binary File**: Writes alert data to a binary file.
- **Read Binary File**: Reads alert data from the binary file.
- **Binary to JSON**: Converts binary data to JSON.
- **JSON to Binary**: Converts JSON data back to binary.
- **Mark as Done (Function)**: Marks the alert as processed and updates status fields.
- **IF**: Checks if the alert has been marked as done.

## High-Level Process Flow
1. Cron node triggers the workflow every hour.
2. Write Binary File node saves alert data.
3. Read Binary File node loads the alert data.
4. Binary to JSON node converts the data for processing.
5. Mark as Done function updates the alert status.
6. IF node checks if the alert is marked as done.
7. JSON to Binary node converts the processed data back to binary.

## Detailed Process Description
1. **Cron**: Initiates the workflow every hour.
2. **Write Binary File**: Writes new alert data to `alert-data.json` in binary.
3. **Read Binary File**: Reads the `alert-data.json` file.
4. **Binary to JSON**: Converts the binary alert data to JSON for easier processing.
5. **Mark as Done (Function)**: Updates the alert's status and event IDs.
6. **IF**: Checks if the alert has been marked as done (boolean check).
7. **JSON to Binary**: Converts the processed JSON data back to binary for storage or further use.

## Additional Notes
- Ensure the workflow has read/write access to the working directory.
- The workflow is generic and can be adapted for other binary/JSON data processing scenarios.
