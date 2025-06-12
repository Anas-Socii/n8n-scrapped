# Send Daily Birthday Reminders from Google Contacts to Slack

## Summary
Automates the process of sending daily birthday reminders from Google Contacts to a designated Slack channel.

## Description
This workflow retrieves contacts from Google Contacts, checks for birthdays occurring today, and sends a reminder message to a specified Slack channel. It is scheduled to run daily, ensuring that no important birthdays are missed by you or your team.

## Input Triggers
- Schedule Trigger (runs daily at a specified hour)

## Output
- Birthday reminder messages sent to Slack

## Nodes Involved
- **Schedule Trigger**: Initiates the workflow at the scheduled time.
- **Google Contacts**: Retrieves contact details including birthdays.
- **Filter**: Filters contacts to those with birthdays matching today’s date.
- **If**: Checks if any birthdays match today.
- **Slack**: Sends the birthday reminder to the Slack channel.
- **Sticky Note**: Documents workflow purpose and process.

## High-Level Process Flow
- Trigger workflow daily
- Retrieve all contacts from Google Contacts
- Filter contacts with birthdays today
- If birthdays are found, send reminder to Slack

## Detailed Process Description
1. **Schedule Trigger** node starts the workflow daily at a set time.
2. **Google Contacts** node fetches all contacts with relevant fields (email, birthday, name, etc.).
3. **Filter** node narrows the list to contacts whose birthday matches today’s date.
4. **If** node checks if any contacts remain after filtering.
5. **Slack** node sends a formatted birthday message to the designated Slack channel.
6. **Sticky Notes** provide context and documentation within the workflow.

## Additional Notes
- Requires Google Contacts and Slack credentials to be configured in n8n.
- The schedule and Slack channel can be customized as needed.
- Useful for team reminders, office culture, or personal notifications.
