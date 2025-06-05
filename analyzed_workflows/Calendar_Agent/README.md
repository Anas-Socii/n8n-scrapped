# Workflow Name: 🤖Calendar Agent

## Summary
An AI-powered agent to manage Google Calendar events (create, get, delete, update) based on natural language queries.

## Description
This workflow acts as an intelligent calendar assistant. It receives a query (e.g., "schedule a meeting with John for tomorrow at 2 PM") via an `ExecuteWorkflowTrigger`. An AI Agent node, powered by an OpenAI Chat Model, interprets the query and uses a set of Google Calendar tools to perform actions like creating events (with or without attendees), fetching existing events, updating events, or deleting them. The workflow provides a success message with the agent's output or a "Try Again" message if the agent encounters an issue but continues due to its `onError: "continueErrorOutput"` setting.

## Input Triggers
-   `n8n-nodes-base.executeWorkflowTrigger` (Named: "When Executed by Another Workflow"): This workflow is designed to be triggered by another n8n workflow, passing a `query` in the input JSON (e.g., `{{ $json.query }}`).

## Output
-   If successful: A JSON object with a `response` field containing the output from the Calendar Agent (e.g., confirmation of event creation).
-   If the agent logic leads to the "Try Again" path: A JSON object with a `response` field stating "Unable to perform task. Please try again."

## Nodes Involved
-   **When Executed by Another Workflow** (`n8n-nodes-base.executeWorkflowTrigger`): Entry point for the workflow, expecting an input `query`.
-   **Calendar Agent** (`@n8n/n8n-nodes-langchain.agent`): The core AI agent that processes the input `query`. It utilizes an OpenAI model and a suite of Google Calendar tools. It is configured with `onError: "continueErrorOutput"`.
    -   **System Message**: Provides instructions to the AI regarding its role, the tools available (Create Event with Attendee, Create Event, Get Events, Delete Event, Update Event), and general operational guidelines (e.g., assume a 1-hour duration for events if not specified, use current date/time context `{{ $now }}`).
-   **OpenAI Chat Model** (`@n8n/n8n-nodes-langchain.lmChatOpenAi`): Supplies the `gpt-4o` language model used by the `Calendar Agent`.
-   **Create Event with Attendee** (`n8n-nodes-base.googleCalendarTool`): A tool enabling the agent to create Google Calendar events that include attendees. It uses parameters such as `eventStart`, `eventEnd`, `eventAttendeeEmail`, and `eventTitle`, which are extracted by the AI.
-   **Create Event** (`n8n-nodes-base.googleCalendarTool`): A tool for the agent to create Google Calendar events without attendees. It uses `eventStart`, `eventEnd`, and `eventTitle`.
-   **Get Events** (`n8n-nodes-base.googleCalendarTool`): A tool allowing the agent to fetch events from Google Calendar. It can filter events based on `timeMin`, `timeMax`, `q` (query), and `maxResults`.
-   **Delete Event** (`n8n-nodes-base.googleCalendarTool`): A tool for the agent to delete a specific Google Calendar event using its `eventID`.
-   **Update Event** (`n8n-nodes-base.googleCalendarTool`): A tool for the agent to update an existing Google Calendar event using its `eventID` and new `startTime` and `endTime`.
-   **Success** (`n8n-nodes-base.set`): A node that sets the final `response` to the output of the `Calendar Agent` if the main execution path is followed.
-   **Try Again** (`n8n-nodes-base.set`): A node that sets a generic error `response` ("Unable to perform task. Please try again.") if the `Calendar Agent`'s error path is taken (due to `onError: "continueErrorOutput"`).

## High-Level Process Flow
1.  The workflow is triggered with an input `query`.
2.  The `Calendar Agent` node receives the `query`.
3.  The `Calendar Agent`, leveraging the `OpenAI Chat Model`, interprets the query and determines the appropriate Google Calendar tool to use (Create, Get, Delete, Update).
4.  The selected Google Calendar tool executes the specified action on the user's calendar.
5.  The result from the tool is returned to the `Calendar Agent`.
6.  The `Calendar Agent` formulates a final output based on the tool's execution.
7.  If the agent's execution is successful, the `Success` node passes the agent's output as the workflow's final response.
8.  If the agent encounters an error but `continueErrorOutput` is active, the `Try Again` node provides a generic error message as the workflow's response.

## Detailed Process Description
1.  **Trigger**: The workflow initiates when called by another workflow through the `When Executed by Another Workflow` node. It anticipates input data containing a `query` field (e.g., accessible via `{{ $json.query }}`).
2.  **Agent Invocation**: The received `query` is passed to the `Calendar Agent` node.
    *   This agent is configured with a detailed system message that defines its persona as a calendar assistant, outlines the available tools, and specifies operational rules (e.g., handling event durations, incorporating the current time `{{ $now }}`).
    *   It is linked to the `OpenAI Chat Model` (using `gpt-4o`) for its natural language understanding and reasoning capabilities.
    *   It has access to five distinct Google Calendar tools:
        *   `Create Event with Attendee`: Parameters `eventStart`, `eventEnd`, `eventAttendeeEmail`, `eventTitle` are dynamically filled by the AI (using `$fromAI("parameterName")`).
        *   `Create Event`: Parameters `eventStart`, `eventEnd`, `eventTitle` are filled by the AI.
        *   `Get Events`: Parameters `timeMin`, `timeMax`, `q` (search query), `maxResults` are filled by the AI.
        *   `Delete Event`: Parameter `eventId` is filled by the AI.
        *   `Update Event`: Parameters `eventId`, `startTime`, `endTime` are filled by the AI.
    *   All Google Calendar tool nodes are configured to operate on the calendar `nateherk88@gmail.com` and utilize Google Calendar credentials named "Google Calendar account" (ID: `HYMNtkm0oglf42QP`).
    *   The `Calendar Agent` node itself is set with `onError: "continueErrorOutput"`. This crucial setting ensures that if the agent encounters an internal issue (e.g., difficulty in selecting a tool, or a tool returns an error it cannot gracefully handle), it will output data to its designated error path rather than causing the entire workflow to halt.
3.  **Output Handling**: The workflow concludes by routing the agent's result through one of two paths:
    *   **Success Path**: If the `Calendar Agent` completes its task successfully and outputs to its standard output port, the data flows to the `Success` node. This node takes the `output` field from the agent's JSON result (accessed via `{{$json.output}}`) and sets it as a field named `response` in the final output of the workflow.
    *   **Error Path (via `continueErrorOutput`)**: If the `Calendar Agent` outputs to its error path (because of an internal error and the `continueErrorOutput` setting), the data flows to the `Try Again` node. This node sets a predefined static string, "Unable to perform task. Please try again.", as the `response` field in the final output.

## Additional Notes
-   **Credentials Required**:
    -   "OpenAi account" (ID: `BP9v81AwJlpYGStD`) for the `OpenAI Chat Model`.
    -   "Google Calendar account" (ID: `HYMNtkm0oglf42QP`) for all `n8n-nodes-base.googleCalendarTool` nodes.
-   **Target Calendar ID**: All Google Calendar operations are hardcoded to use the calendar ID `nateherk88@gmail.com`.
-   **AI Model**: The workflow utilizes the `gpt-4o` model from OpenAI.
-   **Error Handling Strategy**: The primary error handling relies on the `Calendar Agent`'s `continueErrorOutput` setting, allowing the workflow to provide a user-facing message even if the core agent logic fails.
-   **Workflow Status**: The workflow JSON indicates `active: false`.
-   **Instance ID**: The `meta` object in the workflow JSON includes an `instanceId`: `95e5a8c2e51c83e33b232ea792bbe3f063c094c33d9806a5565cb31759e1ad39`.
