# xSend and check TTS (Text-to-speech) Voice Calls End Email Verification

## Summary
This workflow enables users to send a verification code via a TTS (text-to-speech) phone call and then verify the code via email, combining voice and email channels for secure, multi-factor verification.

## Description
Upon form submission, the workflow generates a verification code, sends it to the provided phone number using ClickSend's TTS voice call API, and then asks the user to enter the code for verification. If the voice verification is successful, a second code is sent via email for final verification. The workflow uses ClickSend for voice, SMTP for email, and n8n forms for user input and validation.

## Input Triggers
- **Form Trigger**: User submits a form with phone number, preferred voice, language, email, and name.

## Output
- TTS voice call delivers verification code.
- Email delivers a secondary verification code.
- Success or failure messages are shown based on code entry.

## Nodes Involved
- **On form submission (Form Trigger)**: Collects user input.
- **Set voice code (Set)**: Sets the code to be spoken in the phone call.
- **Code for voice (Code)**: Generates the voice verification code.
- **Send Voice (HTTP Request)**: Sends the TTS call using ClickSend API.
- **Verify voice code (Form)**: Prompts user to enter the code received by phone.
- **Is voice code correct? (IF)**: Checks if the entered code matches.
- **Set email code (Set)**: Sets the code to be sent via email.
- **Send Email (SMTP Email)**: Sends the email with the code.
- **Verify email code (Form)**: Prompts user to enter the email code.
- **Is email code correct? (IF)**: Checks if the entered email code matches.
- **Success / Fail forms**: Show completion messages.
- **Sticky Notes**: Provide step-by-step instructions and configuration notes.

## High-Level Process Flow
1. User submits the form with contact details.
2. Workflow generates a verification code and sends it via TTS phone call.
3. User enters the received code in a form.
4. If correct, a second code is generated and sent via email.
5. User enters the email code in a form.
6. If both codes are correct, success is confirmed; otherwise, failure messages are shown.

## Detailed Process Description
1. **Form Trigger**: Collects phone, voice, language, email, and name.
2. **Set/Code for voice**: Generates and stores a random code for the voice call.
3. **Send Voice**: Calls the user’s phone using ClickSend TTS API, speaking the code.
4. **Verify voice code**: User enters code received by phone.
5. **Is voice code correct?**: If correct, proceeds; else, shows failure.
6. **Set email code**: Generates a new code for email verification.
7. **Send Email**: Sends the code to the provided email address.
8. **Verify email code**: User enters code received by email.
9. **Is email code correct?**: If correct, shows success; else, shows failure.
10. **Sticky Notes**: Embedded for user guidance and setup help.

## Additional Notes
- Requires ClickSend API credentials for TTS calls and SMTP credentials for email.
- Codes can be customized for security policy.
- All user input is collected via n8n forms.
- Designed for multi-factor verification use cases.
