# agente

## Summary
AI-powered assistant for clinical appointment rescheduling and shopping list management via Telegram.

## Description
This workflow acts as an internal assistant for a clinic, triggered by a professional via Telegram. It can reschedule appointments using Google Calendar, send WhatsApp messages to patients, and manage a shopping list using Google Tasks. The assistant follows strict procedural and language guidelines for professional communication.

## Input Triggers
- **Telegram Message**: Initiated by a professional via Telegram.

## Output
- Rescheduled appointments and updated shopping list entries.

## Nodes Involved
- **OpenAI Chat Model**: Handles conversation and intent recognition.
- **Assistente clinica interno**: Manages rescheduling and shopping list logic.
- **Google Tasks**: Adds items to the shopping list.
- **MCP Google Calendar**: Integrates with Google Calendar for appointments.

## High-Level Process Flow
- Receive message via Telegram.
- Determine intent (reschedule or add to shopping list).
- Perform the requested action using integrated tools.

## Detailed Process Description
1. **OpenAI Chat Model**: Processes Telegram message and extracts intent.
2. **Assistente clinica interno**: Handles logic for rescheduling or shopping list.
3. **Google Tasks**: Adds tasks as needed.
4. **MCP Google Calendar**: Handles appointment rescheduling.

## Additional Notes
- **Credentials**: Requires OpenAI, Google Tasks, and Google Calendar API credentials.
- **Customization**: System prompts and tool integrations can be updated for other use cases.
- **Disclaimer**: Ensure compliance with healthcare communication and data privacy regulations.
