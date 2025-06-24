# Receive Updates When a Form Submission Occurs in Your Webflow Website

## Summary
This workflow listens for form submissions on a specified Webflow site and triggers actions in n8n.

## Description
The workflow is designed to receive updates whenever a form is submitted on your Webflow website. It leverages the Webflow Trigger node to detect form submissions and can be extended to automate follow-up actions, notifications, or integrations with other services.

## Input Triggers
- Webflow Trigger (listens for form submissions via webhook)

## Output
- Currently, no direct output or further processing is defined. The workflow can be extended to send notifications, store data, or trigger other processes.

## Nodes Involved
- **Webflow Trigger:** Initiates the workflow when a form submission occurs on the specified Webflow site. Uses OAuth2 authentication.

## High-Level Process Flow
- Wait for a form submission event from Webflow
- (Extendable) Process the submission or trigger additional actions

## Detailed Process Description
1. **Webflow Trigger:**
    - Listens for form submissions on the configured Webflow site.
    - Uses OAuth2 credentials for secure access.
    - Triggers the workflow in n8n when a form is submitted.
2. *(No additional nodes present in this workflow)*

## Additional Notes
- Requires valid Webflow OAuth2 credentials.
- The workflow can be extended by adding nodes to process the form data, send notifications, or integrate with other systems.
- Ensure the webhook URL is registered with your Webflow site for form submissions.
