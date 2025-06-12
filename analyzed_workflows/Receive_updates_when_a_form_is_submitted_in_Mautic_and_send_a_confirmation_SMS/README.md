# Receive updates when a form is submitted in Mautic, and send a confirmation SMS

## Summary
Sends a confirmation SMS via Twilio when a form is submitted in Mautic.

## Description
This workflow listens for form submission events in Mautic. When a form is submitted, it triggers the workflow and sends a personalized SMS confirmation to the submitter using Twilio. This is useful for webinars, sign-ups, or any event where instant confirmation is needed.

## Input Triggers
- Mautic webhook for form submission (`mautic.form_on_submit`)

## Output
- SMS confirmation sent to the phone number provided in the form

## Nodes Involved
- **Mautic Trigger**: Listens for form submission events in Mautic.
- **Twilio**: Sends a personalized SMS to the form submitter.

## High-Level Process Flow
- Form is submitted in Mautic
- Workflow is triggered by webhook
- SMS confirmation is sent to the submitter

## Detailed Process Description
1. **Mautic Trigger** node listens for the `mautic.form_on_submit` event.
2. When triggered, it extracts the phone number and name from the form submission.
3. **Twilio** node sends a confirmation SMS to the extracted phone number, including the submitter’s name and event details.

## Additional Notes
- Requires valid Mautic and Twilio credentials configured in n8n.
- The SMS message can be customized for different events or workflows.
- Useful for event registration, webinar sign-ups, and instant notifications.
