# YogiAI

## Summary
Automates the logging and analysis of yoga practice data using AI and Google Sheets.

## Description
YogiAI is an n8n workflow that leverages Azure OpenAI for intelligent chat analysis and Google Sheets for structured logging of yoga sessions. The workflow can process daily yoga pose logs, rewrite or summarize them using AI, and store both the original and processed information in a Google Sheet for easy tracking and review.

## Input Triggers
- (Not shown in snippet) Likely a scheduled or webhook trigger for daily yoga session input.

## Output
- Appended rows in a Google Sheet containing the date, original JSON log, and AI-rewritten text summary of the yoga session.

## Nodes Involved
- **Azure OpenAI Chat Model2**: Uses Azure OpenAI to analyze or rewrite yoga session data with adjustable creativity (temperature).
- **YogaLog**: Appends the processed data to a Google Sheet, including timestamp and both original and AI-generated text.

## High-Level Process Flow
1. Trigger node receives daily yoga pose log data.
2. Azure OpenAI node rewrites or summarizes the yoga session text.
3. Google Sheets node appends the date, original JSON, and rewritten text to the YogaLog sheet.

## Detailed Process Description
1. **Trigger (not shown)**: Receives or schedules input for a new yoga session log.
2. **Azure OpenAI Chat Model2**: Processes the session data, generating a rewritten or summarized version of the input text.
3. **YogaLog**: Appends the date, original JSON log, and AI-generated summary to the specified Google Sheet.

## Additional Notes
- Requires Azure OpenAI and Google Sheets credentials.
- Sheet and document IDs must be set up in the YogaLog node.
- This workflow can be extended to include reminders, notifications, or additional analytics.
