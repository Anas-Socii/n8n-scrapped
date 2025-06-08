# Email Form

## Summary
Automates email collection from a web form, verifies email validity using Hunter.io, and adds valid contacts to a SendGrid mailing list.

## Description
This workflow provides a simple email capture and validation system. When a user submits their email address via a web form, the workflow verifies the email using Hunter.io’s API. If the email is valid, it is added to a SendGrid contact list for future communications. Invalid emails are ignored. The workflow includes sticky notes with links to a relevant case study and YouTube tutorial, as well as setup instructions for Hunter.io API credentials.

## Input Triggers
- Form Trigger: Submits email addresses from a web form ("Join my mailing list now").

## Output
- Adds valid email addresses to a SendGrid contact list.
- Ignores invalid emails.

## Nodes Involved
- **Form Trigger**: Captures email submissions from users.
- **Verify email**: Uses Hunter.io to check if the email is valid.
- **Check if the email is valid**: IF node to branch logic based on Hunter.io’s response.
- **Add contact to list**: Adds valid emails to SendGrid.
- **Email is not valid, do nothing**: No-op if email is invalid.
- **Sticky Notes**: Provide documentation links and setup instructions.

## High-Level Process Flow
1. User submits email via the form.
2. The email is verified using Hunter.io.
3. If valid, the email is added to SendGrid; if not, the workflow ends.

## Detailed Process Description
1. **Form Trigger**: Presents a web form with an email field and description. On submit, triggers the workflow.
2. **Verify email**: Calls Hunter.io’s email verifier on the submitted email.
3. **Check if the email is valid**: IF node checks if Hunter.io marks the email as "valid".
4. **Add contact to list**: If valid, adds the email to a specified SendGrid list.
5. **Email is not valid, do nothing**: If not valid, the workflow ends with no further action.
6. **Sticky Notes**: Contain case study and tutorial links, and instructions for obtaining a Hunter.io API key.

## Additional Notes
- Requires Hunter.io and SendGrid API credentials.
- Hunter.io offers 50 free credits per month.
- See the sticky notes for helpful links and setup guidance.
- Useful for growing a mailing list with verified, high-quality leads.
