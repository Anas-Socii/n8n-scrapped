# Create Entry in Mailchimp from Airtable

## Summary
Syncs user records from an Airtable table to a Mailchimp list on a scheduled basis.

## Description
- Triggered by a cron schedule.
- Retrieves user data (name, email, interest) from an Airtable “Users” table.
- Adds or updates each user as a subscriber in a specified Mailchimp list, mapping fields and tags.
- Automates the process of keeping Mailchimp lists updated from Airtable records.

## Input Triggers
- Cron Trigger (`n8n-nodes-base.cron`)

## Output
- New or updated subscriber entries in the chosen Mailchimp list.

## Nodes Involved
- **Cron:** Triggers the workflow on a schedule.
- **Airtable:** Retrieves user records from the specified table.
- **Mailchimp:** Adds or updates subscribers in the Mailchimp list using data from Airtable.

## High-Level Process Flow
1. Cron node triggers the workflow.
2. Airtable node fetches user records.
3. Mailchimp node subscribes or updates each user in the target list.

## Detailed Process Description
- **Cron:** Runs at configured intervals.
- **Airtable:** Uses credentials to access the “Users” table and fetches fields: Name, Email, Interest.
- **Mailchimp:** For each Airtable record, subscribes the user to the list, mapping name and interest as tags/fields.

## Additional Notes
- Requires Airtable and Mailchimp API credentials.
- Field mappings and list IDs must be configured for your environment.
- Demonstrates integration between a database (Airtable) and an email marketing platform (Mailchimp).
