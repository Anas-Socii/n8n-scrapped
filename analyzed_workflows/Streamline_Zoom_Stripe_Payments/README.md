# Streamline Your Zoom Meetings with Secure, Automated Stripe Payments

## Summary
Automates the creation of Zoom meetings and the setup of Stripe payment products for seamless, secure meeting scheduling and payment processing.

## Description
This workflow integrates Zoom and Stripe using n8n to streamline the process of scheduling meetings and handling payments. When a user submits a meeting creation form, the workflow creates a Zoom meeting and generates a corresponding Stripe product for payment. Configuration options allow for dynamic meeting topics, pricing, and currency selection. The workflow can be extended to log transactions, notify participants, or update spreadsheets.

## Input Triggers
- Form submission or manual trigger (based on workflow design, typically via a webhook or UI form node).

## Output
- A new Zoom meeting scheduled.
- A Stripe product created for payment collection.

## Nodes Involved
- **Config**: Sets up configuration values such as currency, sheet URL, and teacher email.
- **Create Zoom meeting**: Creates a new Zoom meeting with the specified topic, start time, and password.
- **Create Stripe Product**: Uses HTTP Request to create a product in Stripe with the meeting details and price.

## High-Level Process Flow
1. User submits a meeting creation form (with details like title, date, time, price).
2. Config node sets up currency and other configuration values.
3. Zoom node creates a new meeting with the provided details.
4. HTTP Request node creates a Stripe product for the meeting payment.

## Detailed Process Description
1. **Config**: Initializes workflow variables such as currency (default EUR), sheet URL, and teacher email.
2. **Create Zoom meeting**: Uses OAuth2 credentials to create a Zoom meeting with a random password and calculated start time based on form input.
3. **Create Stripe Product**: Sends an authenticated HTTP POST request to Stripe to create a product with the meeting title, price, and currency. Uses predefined Stripe credentials.

## Additional Notes
- Requires valid Zoom OAuth2 and Stripe API credentials.
- Ensure the form or trigger node is configured to provide all required fields (title, date, time, price).
- The workflow can be extended to send confirmation emails, log data to Google Sheets, or notify users.
- Update the Config node to match your environment and business requirements.
