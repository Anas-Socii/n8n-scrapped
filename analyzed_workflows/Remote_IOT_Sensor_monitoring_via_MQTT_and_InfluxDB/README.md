# Remote IOT Sensor monitoring via MQTT and InfluxDB

## Summary
Monitors remote IoT sensor data via MQTT and stores it in InfluxDB for time-series analysis.

## Description
This workflow subscribes to a remote MQTT topic to receive sensor data (temperature and humidity), processes the data, and posts it to an InfluxDB bucket. Sticky notes provide context and code explanations for each step.

## Input Triggers
- **MQTT Trigger**: Listens for sensor data on a specified topic.

## Output
- Sensor data stored in InfluxDB.

## Nodes Involved
- **MQTT Trigger**: Subscribes to the sensor topic.
- **Sticky Notes**: Explain workflow steps and logic.
- **HTTP Request**: Posts processed data to InfluxDB.
- **Other Nodes**: (Not fully visible) Likely include code for data parsing.

## High-Level Process Flow
- Subscribe to MQTT topic.
- Parse sensor data.
- Post data to InfluxDB bucket.

## Detailed Process Description
1. **MQTT Trigger**: Receives temperature and humidity data from the sensor.
2. **Sticky Notes**: Provide context and code explanations.
3. **HTTP Request**: Sends data to InfluxDB.
4. **Other Nodes**: (Not fully visible) Likely handle data parsing.

## Additional Notes
- **Credentials**: Requires MQTT and InfluxDB access.
- **Customization**: Topic and InfluxDB settings can be modified.
- **Disclaimer**: Ensure compliance with MQTT and InfluxDB usage policies.
