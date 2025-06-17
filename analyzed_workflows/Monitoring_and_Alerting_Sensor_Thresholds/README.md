# Monitoring and Alerting: Sensor Thresholds

## Summary
Monitors sensor readings in a Postgres database and sends an SMS alert via Twilio if a threshold is exceeded, then updates the notification status.

## Description
This workflow checks the 'n8n' table in a Postgres database for sensor readings above a specified value (greater than 70) that have not yet triggered a notification. If such readings are found, it sends an alert message via Twilio SMS and marks the notification as sent in the database. This pattern is useful for IoT, facility monitoring, or any scenario requiring threshold-based alerts.

## Input Triggers
- Cron (periodic check, schedule configurable)

## Output
- SMS alert sent via Twilio when a sensor value exceeds the threshold
- Database updated to mark notification as sent

## Nodes Involved
- **Cron**: Triggers the workflow on a schedule
- **Postgres**: Executes a query to find sensor readings above threshold
- **Twilio**: Sends an SMS alert
- **Set**: Prepares update payload for the database
- **Postgres1**: Updates the notification status in the database

## High-Level Process Flow
- Cron triggers periodic check
- Query Postgres for high sensor readings
- If found, send SMS alert and update notification status

## Detailed Process Description
1. **Cron Node**: Triggers the workflow periodically.
2. **Postgres Node**: Executes a query to find sensor readings where value > 70 and notification is false.
3. **Twilio Node**: Sends an SMS alert for each qualifying sensor reading.
4. **Set Node**: Prepares the update for the notification status.
5. **Postgres1 Node**: Updates the notification field in the database to prevent duplicate alerts.

## Additional Notes
- Requires valid Postgres and Twilio credentials.
- Edit the Twilio phone numbers and threshold as needed.
- The workflow is inactive by default and must be enabled to run.
