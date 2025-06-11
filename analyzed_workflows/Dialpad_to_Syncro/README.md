# Dialpad to Syncro

## Summary
Integrates Dialpad call events with Syncro ticketing and Google Sheets for automated customer lookup, ticket creation, and logging.

## Description
- Triggered by a webhook from Dialpad.
- Looks up customers in Syncro using the external phone number from the webhook.
- Checks for existing open tickets; if none, creates a new ticket in Syncro.
- Updates tickets with call details and logs call/ticket IDs in Google Sheets.
- Automates the process of tracking phone call interactions and ticket management.

## Input Triggers
- Webhook (`n8n-nodes-base.webhook`)

## Output
- Tickets created or updated in Syncro.
- Call and ticket IDs logged in Google Sheets.

## Nodes Involved
- **Webhook:** Receives call event data from Dialpad.
- **GetCustomer (HTTP Request):** Searches Syncro for customer by phone number.
- **GetTicket (HTTP Request):** Checks for existing open tickets for the contact.
- **IFMoreThanOne (If):** Determines if more than one ticket exists.
- **CreateTicket (HTTP Request):** Creates a new ticket in Syncro if needed.
- **UpdateTicket (HTTP Request):** Updates an existing ticket with call details.
- **ForGoogle (Set):** Prepares call/ticket data for logging.
- **Google Sheets:** Appends call/ticket info to a spreadsheet.

## High-Level Process Flow
1. Webhook receives call event from Dialpad.
2. Customer is looked up in Syncro.
3. Open tickets are checked; if none, a new ticket is created.
4. Ticket is updated with call details.
5. Call/ticket IDs are logged in Google Sheets.

## Detailed Process Description
- **Webhook:** Triggered by POST from Dialpad, parses event data.
- **GetCustomer:** Uses Syncro API to find customer by phone number.
- **GetTicket:** Checks for open tickets for the contact.
- **IFMoreThanOne:** Branches logic based on ticket existence.
- **CreateTicket:** Creates a new ticket if no open ticket exists.
- **UpdateTicket:** Adds call details to the ticket.
- **ForGoogle & Google Sheets:** Logs call and ticket IDs for record-keeping.

## Additional Notes
- Requires Syncro and Google Sheets API credentials.
- Environment variables must be configured for Syncro base URL and user IDs.
- Demonstrates advanced API integration and branching logic.
