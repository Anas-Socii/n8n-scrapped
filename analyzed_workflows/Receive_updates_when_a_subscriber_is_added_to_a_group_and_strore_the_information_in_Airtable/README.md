# Receive updates when a subscriber is added to a group and store the information in Airtable

## Summary
This workflow listens for new subscribers added to a MailerLite group and stores their information in Airtable for further processing or record-keeping.

## Description
Whenever a subscriber is added to a specific group in MailerLite, this workflow is triggered. It collects the subscriber's details, optionally processes or maps the data using a Set node, and then creates a new record in Airtable. This enables seamless integration between mailing list management and database storage.

## Input Triggers
- MailerLite Trigger (event: subscriber added to group)

## Output
- New record created in Airtable with subscriber information

## Nodes Involved
- **MailerLite Trigger**: Listens for new subscribers added to a group.
- **Set**: (Optional) Maps or processes incoming subscriber data.
- **Airtable**: Inserts the subscriber data as a new record.

## High-Level Process Flow
- Wait for a subscriber to be added to a MailerLite group
- (Optional) Process or map the data using a Set node
- Add the subscriber's information to Airtable

## Detailed Process Description
1. **MailerLite Trigger**: Activated when a subscriber is added to a group.
2. **Set Node**: (If present) Maps or transforms the subscriber data.
3. **Airtable Node**: Inserts the processed data into Airtable as a new record.

## Additional Notes
- Requires valid API credentials for MailerLite and Airtable.
- Ensure the Airtable base and table are properly set up to receive new records.
