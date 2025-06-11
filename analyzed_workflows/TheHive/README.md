# TheHive

## Summary
Automates alert creation, reading, and resolution in TheHive, with integration to SIGNL4 for alert notifications and resolution, triggered by webhooks, scheduled, or manual triggers.

## Description
This workflow manages security alerts in TheHive, allowing for alert creation, reading, and automated resolution. Alerts can be triggered by webhooks or manually, with notifications and resolutions handled via SIGNL4. The workflow includes conditional logic to determine if an alert should be sent or resolved based on webhook input.

## Input Triggers
- Manual Trigger (Start (Testing))
- Webhook (TheHive Webhook Request)

## Output
- Alerts created in TheHive
- Alerts read from TheHive
- Alerts sent to SIGNL4
- Alerts resolved in SIGNL4

## Nodes Involved
- **Start (Testing)**: Manual trigger for testing the workflow.
- **TheHive Create Alert**: Creates an alert in TheHive.
- **TheHive Read Alerts**: Reads alerts from TheHive.
- **TheHive Webhook Request**: Receives webhook POSTs for alert actions.
- **IF**: Conditional logic to check alert status/stage.
- **SIGNL4 Send Alert**: Sends alert notification to SIGNL4.
- **SIGNL4 Resolve Alert**: Resolves alert in SIGNL4.

## High-Level Process Flow
1. Triggered manually or by webhook.
2. Creates or reads alerts in TheHive.
3. Webhook triggers conditional logic (IF node) to determine if an alert should be sent or resolved.
4. Sends alert to SIGNL4 or resolves it based on the condition.

## Detailed Process Description
1. **Start (Testing)**: Allows manual workflow execution for testing.
2. **TheHive Create Alert**: Creates a new alert in TheHive with provided details.
3. **TheHive Read Alerts**: Retrieves all alerts from TheHive.
4. **TheHive Webhook Request**: Handles incoming webhook requests for alert actions.
5. **IF**: Checks if the alert is not closed; if not, proceeds to send the alert to SIGNL4.
6. **SIGNL4 Send Alert**: Notifies SIGNL4 with alert details.
7. **SIGNL4 Resolve Alert**: Resolves the alert in SIGNL4 if required.

## Additional Notes
- Requires TheHive and SIGNL4 API credentials.
- Webhook path and alert details must be configured in the workflow nodes.
- Can be extended for more advanced alert handling or integrations.
