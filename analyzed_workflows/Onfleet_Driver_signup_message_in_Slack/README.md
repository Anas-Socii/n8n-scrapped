# Onfleet Driver Signup Message in Slack

## Summary
Sends a Slack notification when a new Onfleet driver signs up.

## Description
This workflow listens for new driver signups in Onfleet and posts a notification message to a designated Slack channel. It automates team awareness of new drivers joining the fleet.

## Input Triggers
- Onfleet webhook (workerCreated event)

## Output
- Slack message announcing a new driver signup

## Nodes Involved
- **Onfleet Trigger**: Listens for new driver (worker) creation events in Onfleet.
- **Slack**: Posts a message to a specified Slack channel when a new driver is created.

## High-Level Process Flow
- Trigger on new driver signup in Onfleet
- Send message to Slack channel

## Detailed Process Description
1. **Onfleet Trigger** node activates when a new driver (worker) is created in Onfleet.
2. **Slack** node sends a notification to the #new-driver-signup channel announcing the new signup.

## Additional Notes
- Requires Onfleet and Slack credentials configured in n8n.
- The Slack channel and message can be customized as needed.
- Useful for operations teams to stay updated on new driver onboarding.
