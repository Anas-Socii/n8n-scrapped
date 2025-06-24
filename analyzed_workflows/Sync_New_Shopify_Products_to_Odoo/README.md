# Sync New Shopify Products to Odoo

## Summary
This workflow automatically synchronizes new products created in Shopify to the Odoo ERP system.

## Description
Whenever a new product is created in Shopify, this workflow checks if the product already exists in Odoo. If it does not exist, it creates a new product record in Odoo with the relevant details from Shopify. If the product exists, it can update the existing record. This ensures that Odoo always has an up-to-date catalog matching Shopify.

## Input Triggers
- Shopify Trigger (on product creation)

## Output
- New or updated product record in Odoo ERP

## Nodes Involved
- **Shopify Trigger:** Listens for new product creation events in Shopify.
- **Odoo (Odoo6):** Searches for an existing product in Odoo using Shopify's product ID.
- **Code:** Processes the data, checks if the product exists, and prepares the payload for Odoo.
- **Filter (Filter2):** Determines whether the product already exists in Odoo.
- **Odoo (Odoo7):** Creates or updates the product in Odoo based on the filter result.

## High-Level Process Flow
- Trigger on new Shopify product creation
- Search for product in Odoo
- Prepare product data
- Filter: does product exist?
  - If not, create product in Odoo
  - If yes, update product in Odoo

## Detailed Process Description
1. **Shopify Trigger:**
    - Activates the workflow when a new product is created in Shopify.
2. **Odoo6 Node:**
    - Searches for the product in Odoo by default code (Shopify product ID).
3. **Code Node:**
    - Processes data from Shopify and Odoo.
    - Returns an object indicating if the product exists and the product details.
4. **Filter2 Node:**
    - Checks if the product exists in Odoo.
5. **Odoo7 Node:**
    - If the product does not exist, creates a new product in Odoo with details from Shopify.
    - If it exists, updates the product record as needed.

## Additional Notes
- Requires valid Shopify and Odoo credentials.
- Make sure the Shopify webhook is configured for product creation events.
- Custom field mappings may be needed for your Odoo instance.
- Test thoroughly before using in production.
