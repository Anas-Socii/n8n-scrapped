# Creating an Onfleet Task for a new Shopify Fulfillment

## Summary
Automatically creates a new Onfleet delivery task whenever a Shopify fulfillment is created.

## Description
This workflow listens for new fulfillment events from Shopify. When a fulfillment is created, it triggers the workflow and sends the relevant data to Onfleet to create a corresponding delivery task. This automation streamlines the logistics process for e-commerce businesses using Shopify and Onfleet.

## Input Triggers
- Shopify webhook for `fulfillments/create`

## Output
- Delivery task created in Onfleet

## Nodes Involved
- **Shopify Trigger**: Listens for new fulfillment events from Shopify.
- **Onfleet**: Creates a new delivery task in Onfleet using the fulfillment data.

## High-Level Process Flow
- Shopify fulfillment is created
- Workflow is triggered by Shopify webhook
- Data is sent to Onfleet to create a delivery task

## Detailed Process Description
1. **Shopify Trigger** node listens for the `fulfillments/create` event from Shopify.
2. When triggered, the workflow passes the fulfillment data to the **Onfleet** node.
3. **Onfleet** node creates a new delivery task using the received data.

## Additional Notes
- Requires valid Shopify and Onfleet credentials configured in n8n.
- The workflow can be extended to include additional data mapping or validation as needed.
- Useful for automating logistics for Shopify stores.
