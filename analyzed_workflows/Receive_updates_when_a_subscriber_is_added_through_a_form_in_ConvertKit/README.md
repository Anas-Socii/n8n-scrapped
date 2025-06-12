# Receive updates when a subscriber is added through a form in ConvertKit

## Summary
This workflow listens for new subscribers added via a ConvertKit form and triggers an update process.

## Description
Whenever a new subscriber is added through a specified ConvertKit form, this workflow is triggered. It is typically used for automating follow-up actions, notifications, or integrations when a new lead is captured via ConvertKit.

## Input Triggers
- ConvertKit Trigger (event: formSubscribe)

## Output
- Initiates downstream actions (not specified in this minimal workflow)

## Nodes Involved
- **ConvertKit Trigger**: Listens for the `formSubscribe` event from ConvertKit forms.

## High-Level Process Flow
- Wait for a subscriber to be added via a ConvertKit form
- Trigger the workflow for further processing

## Detailed Process Description
1. **ConvertKit Trigger**: Activated when a new subscriber is added to a specific form (formId: 1657198). The trigger uses the `convertKitApi` credential and listens for the `formSubscribe` event.
2. No further nodes are defined in this workflow; it is a basic trigger setup.

## Additional Notes
- Requires ConvertKit API credentials (`convertKitApi`).
- The workflow is inactive by default (`"active": false`).
- Extend this workflow by adding nodes for notifications, CRM updates, or other automations as needed.
