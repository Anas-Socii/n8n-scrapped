# Coffee Bot (Mattermost)

## Summary
Automatically forms random groups for virtual coffee chats and announces them in a Mattermost channel, with calendar invites.

## Description
This workflow randomly groups users from a Mattermost channel, announces the groups, and sends calendar invites for a virtual coffee chat. It is triggered weekly and integrates with Google Calendar and Mattermost APIs.

## Input Triggers
- Cron Trigger (Weekly)

## Output
- Announcements in Mattermost and Google Calendar invites for each group

## Nodes Involved
- **Weekly trigger on monday**: Initiates the workflow every week.
- **Greetings**: Announces the start of the grouping process.
- **Employees in coffee chat channel**: Fetches employees from the channel.
- **Divide into groups**: Randomly assigns users to groups.
- **Announce groups**: Posts group assignments to Mattermost.
- **Send calendar invites**: Schedules Google Calendar events for each group.

## High-Level Process Flow
- Trigger workflow weekly.
- Fetch employees in channel.
- Randomly divide into groups.
- Announce groups in Mattermost.
- Send calendar invites.

## Detailed Process Description
1. **Weekly trigger on monday**: Triggers the workflow.
2. **Greetings**: Announces the coffee chat.
3. **Employees in coffee chat channel**: Retrieves list of participants.
4. **Divide into groups**: Randomly assigns participants to groups.
5. **Announce groups**: Posts groupings to Mattermost channel.
6. **Send calendar invites**: Schedules Google Calendar invites for each group.

## Additional Notes
- **Credentials**: Requires Mattermost and Google Calendar API credentials.
- **Customization**: Group size and message templates can be modified.
