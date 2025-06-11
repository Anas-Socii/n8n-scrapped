# Exponential Backoff for Google APIs

## Summary
Implements exponential backoff logic for handling Google API rate limits or errors, ensuring reliable and resilient workflow execution.

## Description
This workflow demonstrates how to use exponential backoff when making repeated requests to Google APIs (such as Google Sheets) to avoid hitting rate limits. It loops over items, attempts API requests, and waits for an exponentially increasing delay before retrying failed requests. If the maximum number of retries is exceeded, the workflow stops with an error message.

## Input Triggers
- Manual Trigger (for testing or manual execution)
- (Can be extended to run on schedule or webhook)

## Output
- Data written to Google Sheets, or an error message if retries are exhausted.

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually.
- **Loop Over Items**: Splits input data into batches for processing.
- **Google Sheets**: Attempts to write data to a Google Sheet; continues on error.
- **Exponential Backoff**: Calculates and applies exponential delay between retries.
- **Wait**: Waits for the calculated delay period before retrying.
- **Stop and Error**: Stops the workflow if the maximum number of retries is reached.

## High-Level Process Flow
1. Workflow is triggered manually or by schedule.
2. Data is processed in batches.
3. Google Sheets node attempts to write data; on error, the workflow proceeds to backoff logic.
4. Exponential Backoff node calculates the next wait time.
5. Wait node pauses execution for the calculated delay.
6. If retries remain, the process repeats; otherwise, Stop and Error node ends the workflow.

## Detailed Process Description
1. **Manual Trigger**: Initiates the workflow for testing or manual execution.
2. **Loop Over Items**: Splits incoming items into manageable batches.
3. **Google Sheets**: Attempts to write each item to a Google Sheet using service account credentials. Continues on error.
4. **Exponential Backoff**: Calculates the wait time before the next retry, doubling the delay with each attempt up to a maximum.
5. **Wait**: Pauses the workflow for the computed delay period.
6. **Stop and Error**: If the maximum number of retries is exceeded, stops the workflow and logs an error message.

## Additional Notes
- Requires Google API service account credentials.
- Sheet/document URLs and names must be configured in the Google Sheets node.
- The workflow can be adapted for other APIs or error-handling scenarios.
