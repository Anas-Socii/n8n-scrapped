# Typeform to Google Sheets, Slack & Email Workflow

## Summary
This workflow automates the process of collecting Typeform responses, storing them in Google Sheets, and sending notifications via Slack and email based on the severity of the reported problem.

## Description
Whenever a user submits a response to a Typeform form, the workflow appends the data to a Google Sheet. If the reported problem's severity is above a certain threshold, notifications are sent to a Slack channel and an email is dispatched to notify relevant stakeholders.

## Input Triggers
- Typeform Trigger (formId: UXuY0A)

## Output
- Google Sheets row append
- Slack notification (if severity > 7)
- Email notification (if severity > 7)

## Nodes Involved
- **Typeform Trigger**: Listens for new responses from a Typeform form.
- **Google Sheets**: Appends received data to a specified sheet.
- **IF**: Checks if the severity value is greater than 7.
- **Slack**: Sends a message to a designated Slack channel if the condition is met.
- **Send Email**: Sends an email notification if the condition is met.

## High-Level Process Flow
- Wait for a new Typeform response
- Append data to Google Sheets
- Check severity value
- If severity > 7:
  - Send Slack notification
  - Send email notification

## Detailed Process Description
1. **Typeform Trigger**: Activated when a user submits a Typeform response.
2. **Google Sheets**: The form data is appended to the "Problems!A:D" range in the specified sheet.
3. **IF Node**: Evaluates if the Severity field is greater than 7.
4. **Slack Node**: Sends a formatted message to the "problems" channel if the condition is true.
5. **Send Email Node**: Sends a formatted email if the condition is true.

## Additional Notes
- Requires valid credentials for Typeform, Google Sheets, Slack, and email provider.
- Ensure the Google Sheets range and Slack channel exist and are accessible.
- Modify severity threshold as needed for your use case.
