# Postgres Data Ingestion

## Summary
Automates the ingestion of sensor data into a Postgres database on a scheduled basis.

## Description
This workflow is designed to periodically generate and insert simulated sensor data into a Postgres database table. It is useful for testing, monitoring, or automating the collection and storage of sensor readings.

## Input Triggers
- Cron (runs every minute)

## Output
- Sensor data is inserted into the 'n8n' table in a Postgres database.

## Nodes Involved
- **Cron**: Triggers the workflow every minute.
- **Function**: Generates simulated sensor data (sensor_id, value, timestamp, notification).
- **Postgres**: Inserts the generated data into the Postgres database.

## High-Level Process Flow
- Cron trigger fires every minute
- Function node generates sensor data
- Postgres node inserts the data into the database

## Detailed Process Description
1. **Cron Node**: Schedules the workflow to run every minute.
2. **Function Node**: Generates a random value for a sensor, assigns a timestamp, and sets notification to false.
3. **Postgres Node**: Receives the generated data and inserts it into the 'n8n' table in the connected Postgres database.

## Additional Notes
- Requires valid Postgres database credentials (`postgres`).
- Ensure the 'n8n' table exists with columns: sensor_id, value, time_stamp, notification.
- Workflow is active by default and runs automatically.
