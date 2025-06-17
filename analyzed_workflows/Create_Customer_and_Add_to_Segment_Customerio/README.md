# Create Customer and Add to Segment in Customer.io

## Summary
Creates a customer in Customer.io and adds them to a segment using a manual trigger.

## Description
This workflow is designed to automate the process of creating a new customer in Customer.io and then immediately adding that customer to a specific segment. It is useful for onboarding flows, marketing automation, or any scenario where customer segmentation is required after creation.

## Input Triggers
- Manual Trigger (On clicking 'execute')

## Output
- The customer is created in Customer.io
- The customer is added to a specified segment in Customer.io

## Nodes Involved
- **Manual Trigger**: Starts the workflow when executed manually.
- **CustomerIo**: Creates a new customer in Customer.io with custom properties.
- **CustomerIo1**: Adds the newly created customer to a segment in Customer.io.

## High-Level Process Flow
- Manual execution starts the workflow
- Customer is created in Customer.io
- The created customer is added to a segment

## Detailed Process Description
1. **Manual Trigger**: The workflow begins when manually executed by a user.
2. **CustomerIo Node**: Creates a customer in Customer.io, assigning custom properties (e.g., Name: n8n).
3. **CustomerIo1 Node**: Takes the ID of the newly created customer and adds them to a specified segment in Customer.io.

## Additional Notes
- Requires valid Customer.io API credentials (`customerIoApi`).
- Ensure the segment ID and custom properties are set appropriately for your use case.
- This workflow is inactive by default and must be manually triggered.
