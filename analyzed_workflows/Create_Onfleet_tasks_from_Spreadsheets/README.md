# Create Onfleet Tasks from Spreadsheets

## Summary
Automates the creation of Onfleet delivery tasks by reading addresses and recipient details from a spreadsheet file.

## Description
This workflow reads delivery data from a spreadsheet (such as an Excel file), processes the data, and creates corresponding tasks in Onfleet. It extracts address, recipient, and task details from each row and sends them to the Onfleet API for task creation. The workflow is ideal for logistics teams needing to batch-import delivery tasks from spreadsheets.

## Input Triggers
- Manual or scheduled execution (not explicitly defined in the workflow)
- Input spreadsheet file (e.g., .xlsx)

## Output
- Delivery tasks created in Onfleet

## Nodes Involved
- **Read Binary File**: Reads the spreadsheet file from disk.
- **Spreadsheet File**: Parses spreadsheet data into structured rows.
- **Onfleet**: Creates delivery tasks in Onfleet using parsed row data.

## High-Level Process Flow
- Read spreadsheet file from disk
- Parse spreadsheet data into rows
- For each row, create a delivery task in Onfleet

## Detailed Process Description
1. **Read Binary File** node reads the spreadsheet file (e.g., an Excel sheet containing delivery tasks).
2. **Spreadsheet File** node parses the binary file into structured data rows.
3. **Onfleet** node iterates through each row, extracting address, recipient, and task details to create a new Onfleet task via the API.

## Additional Notes
- Requires a valid Onfleet API key configured in n8n.
- The spreadsheet must contain columns for address, recipient, and task details as referenced in the node parameters.
- The workflow can be triggered manually or via a schedule as needed.
