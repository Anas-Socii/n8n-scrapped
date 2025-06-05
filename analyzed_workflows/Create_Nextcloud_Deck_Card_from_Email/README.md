# Create Nextcloud Deck Card from Email

## Summary
Reads emails via IMAP, processes the content, and creates a new card in a Nextcloud Deck board using the email’s subject and body.

## Description
- Checks an IMAP mailbox for new emails.
- Strips HTML and cleans up the email body using a Function node.
- Sends a POST request to the Nextcloud Deck API to create a new card with the email’s subject as the card title and the cleaned body as the description.
- Designed for automated task or note creation in Nextcloud from incoming emails.

## Input Triggers
- IMAP Email (`n8n-nodes-base.emailReadImap`)

## Output
- New card created in the specified Nextcloud Deck board and stack.

## Nodes Involved
- **IMAP Email:** Reads emails from the configured mailbox.
- **Function:** Strips HTML and cleans up the email body for use as a card description.
- **HTTP Request:** Posts the card to the Nextcloud Deck API using basic authentication.

## High-Level Process Flow
1. IMAP Email node checks for new messages.
2. Function node processes and cleans up the email content.
3. HTTP Request node creates a new card in Nextcloud Deck.

## Detailed Process Description
- **IMAP Email:** Connects to the mailbox using provided credentials.
- **Function:** Removes HTML tags and formats the body for readability.
- **HTTP Request:** Sends a POST request to Nextcloud Deck API with the card title and description, using board and stack IDs.

## Additional Notes
- Requires IMAP and Nextcloud credentials.
- Board and stack IDs must be configured in the HTTP Request node.
- Demonstrates integration between email and project management tools.
