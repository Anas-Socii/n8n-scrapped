# Complete Guide to Setting Up and Generating TOTP Codes in n8n

## Summary
Demonstrates how to generate Time-based One-Time Password (TOTP) codes in n8n for secure authentication workflows.

## Description
- Manual trigger initiates the workflow.
- TOTP node generates a time-based code using provided credentials.
- Designed for testing and integration with 2FA systems.

## Input Triggers
- Manual Trigger (`n8n-nodes-base.manualTrigger`)

## Output
- Generated TOTP code (for use in authentication or as output data).

## Nodes Involved
- **Manual Trigger:** Starts the workflow for testing.
- **TOTP Node:** Generates the TOTP code using credentials.

## High-Level Process Flow
1. User starts workflow manually.
2. TOTP node generates a code.
3. Output is available for use or display.

## Detailed Process Description
- **Manual Trigger:** Entry point for user-initiated runs.
- **TOTP Node:** Uses stored credentials to generate a secure code.

## Additional Notes
- Requires TOTP credentials (e.g., from authenticator app or service).
- Useful for integrating 2FA into n8n automations.
- Safe for testing and demonstration.
