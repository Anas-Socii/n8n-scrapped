# Create, Update, and Get a Contact in Google Contacts

## Summary
Automates the process of creating a new contact, updating the contact with organization details, and retrieving the contact's organization information in Google Contacts.

## Description
This workflow demonstrates how to manage Google Contacts programmatically using n8n. It performs three main actions: creates a new contact, updates the contact with company information, and retrieves the updated contact's organization details.

## Input Triggers
- Manual Trigger (on workflow execution)

## Outputs
- Google Contact created, updated, and fetched for organization details

## Nodes Involved
- **Manual Trigger:** Starts the workflow manually.
- **Google Contacts:** Creates a new contact with given and family name.
- **Google Contacts1:** Updates the created contact with company/organization information.
- **Google Contacts2:** Retrieves the organization details for the contact.

## High-Level Process Flow
1. **Manual Trigger** → 2. **Create Contact** → 3. **Update Contact with Organization** → 4. **Get Organization Details**

## Detailed Process Description
- The workflow is manually triggered.
- A new contact is created in Google Contacts with the given and family name 'n8n'.
- The contact is updated to include company details (name: n8n, title: n8n, domain: n8n.io, current: true).
- The workflow fetches the organization details for the contact to confirm the update.

## Additional Notes
- Requires valid Google Contacts OAuth2 credentials.
- Useful as a template for contact management automation.
- Can be extended to handle additional fields or batch operations.
