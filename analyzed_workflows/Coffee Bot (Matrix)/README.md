# Coffee Bot (Matrix)

## Summary
Automates weekly virtual coffee group assignments and announcements in a Matrix chat room.

## Description
This workflow organizes employees into random groups for virtual coffee chats every Monday. It uses Matrix nodes to interact with the chat room, a cron trigger to schedule the process, and a function node to divide users into groups. The workflow sends group assignments to the Matrix room, fostering team engagement and collaboration.

## Input Triggers
- Weekly cron trigger (every Monday at 10:00)

## Output
- Group assignments posted to the Matrix chat room

## Nodes Involved
- **Cron Trigger**: Schedules the workflow to run weekly
- **Matrix (Greetings)**: Announces the start of the coffee chat process
- **Matrix (Employees in coffee chat channel)**: Retrieves list of users in the chat room
- **Function (Divide into groups)**: Randomly splits users into groups of three, ensuring no group has just one member
- **Matrix (Announce groups)**: Posts the group assignments to the chat room

## High-Level Process Flow
- Trigger workflow every Monday
- Announce coffee chat process in Matrix room
- Fetch users in the chat channel
- Randomly divide users into groups
- Announce group assignments in Matrix room

## Detailed Process Description
1. **Cron Trigger**: Initiates workflow every Monday at 10:00.
2. **Matrix Node (Greetings)**: Sends a greeting message to the Matrix room.
3. **Matrix Node (Employees in coffee chat channel)**: Retrieves all users in the specified Matrix room.
4. **Function Node (Divide into groups)**: Randomly assigns users to groups of three, ensuring no group has only one person.
5. **Matrix Node (Announce groups)**: Posts the group assignments in the Matrix room.

## Additional Notes
- Requires Matrix API credentials
- Group size and scheduling can be adjusted as needed
- Designed to promote team interaction and virtual engagement
