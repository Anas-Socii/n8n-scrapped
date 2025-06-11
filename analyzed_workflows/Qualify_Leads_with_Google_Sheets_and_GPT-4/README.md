# Qualify Leads with Google Sheets and GPT-4

## Summary
Automatically qualifies new leads in a Google Sheet using OpenAI's GPT-4 and updates the sheet with the results.

## Description
This workflow monitors a Google Sheet for new entries (leads), sends each lead's information to OpenAI's GPT-4 for qualification based on team size and email domain, and writes the qualification result and explanation back to the sheet. It is useful for automating lead qualification in sales or community onboarding processes.

## Input Triggers
- Google Sheets Trigger (on new row added, every minute)

## Output
- Updates Google Sheet with lead qualification status and explanation.

## Nodes Involved
- Google Sheets Trigger: Detects new entries.
- OpenAI: Qualifies leads using GPT-4.
- Set: Parses GPT-4 JSON response.
- Merge: Combines original and GPT-4 data.
- Google Sheets: Updates lead status.
- Sticky Notes: Embedded documentation and instructions.

## High-Level Process Flow
- Detect new lead in Google Sheet
- Send lead info to GPT-4 for qualification
- Parse GPT-4 response
- Merge qualification result with original data
- Update Google Sheet with results

## Detailed Process Description
1. **Google Sheets Trigger** detects a new row (lead) in the specified sheet every minute.
2. **Qualify leads with GPT** node sends lead info to OpenAI's GPT-4 with detailed instructions.
3. **Extract JSON reply** parses the JSON response from GPT-4 (rating and explanation).
4. **Merge** node combines the original lead data with the GPT-4 response.
5. **Update lead status** writes the qualification result and explanation back to the Google Sheet.

## Additional Notes
- Requires Google Sheets and OpenAI API credentials.
- Sheet must have columns for Timestamp, Email Address, Name, Business Area, Team Size, and Rating.
- Make sure API credentials are properly configured in n8n.
