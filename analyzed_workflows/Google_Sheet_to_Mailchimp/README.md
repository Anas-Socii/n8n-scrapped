# Google Sheet to Mailchimp

## Summary
Syncs email addresses from a Google Sheet to a Mailchimp list, supporting both manual and interval-based execution.

## Description
- Can be triggered manually or by an interval node.
- Reads email addresses and related data from a specified Google Sheet.
- Subscribes each email to a Mailchimp list.
- Automates the process of growing and updating a Mailchimp mailing list from spreadsheet data.

## Input Triggers
- Manual Trigger (`n8n-nodes-base.manualTrigger`)
- Interval Trigger (`n8n-nodes-base.interval`)

## Output
- New or updated subscriber entries in the specified Mailchimp list.

## Nodes Involved
- **Manual Trigger:** Allows on-demand execution.
- **Interval:** Runs the workflow every 2 units (minutes/hours as configured).
- **Google Sheets:** Reads data from the specified sheet and range.
- **Mailchimp:** Subscribes each email to the Mailchimp list.

## High-Level Process Flow
1. Triggered manually or by interval.
2. Reads rows from the Google Sheet.
3. Subscribes each email to the Mailchimp list.

## Detailed Process Description
- **Manual/Interval Trigger:** Starts the workflow.
- **Google Sheets:** Reads email and other data from the specified range.
- **Mailchimp:** Subscribes each email from the sheet to the list.

## Additional Notes
- Requires Google Sheets and Mailchimp API credentials.
- Sheet ID, range, and Mailchimp list ID must be configured.
- Demonstrates spreadsheet-to-marketing automation.
