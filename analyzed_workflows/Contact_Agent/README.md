# Workflow Name: 🤖Contact Agent

## Summary
An AI-powered agent for managing contact records in Airtable—searching, adding, and updating contacts through natural language queries.

## Description
This workflow acts as an intelligent contact management assistant. It receives a query (e.g., “find John Doe’s email” or “add Jane Smith, jane@example.com, 555-1234”) via an `ExecuteWorkflowTrigger`. The Contact Agent node, powered by an OpenAI Chat Model, interprets the query and uses Airtable tools to search for contacts or add/update them. The workflow outputs a response with the requested information or a confirmation of the performed action, or a generic error message if the agent encounters an issue.

## Input Triggers
- `n8n-nodes-base.executeWorkflowTrigger` (Named: "When Executed by Another Workflow"): This workflow is designed to be triggered by another n8n workflow, passing a `query` in the input JSON.

## Output
- If successful: A JSON object with a `response` field containing the agent’s output (e.g., contact details or confirmation).
- If the agent logic leads to the "Try Again" path: A JSON object with a `response` field stating "An error occurred. Please try again."

## Nodes Involved
- **When Executed by Another Workflow** (`n8n-nodes-base.executeWorkflowTrigger`): Entry point for the workflow.
- **Contact Agent** (`@n8n/n8n-nodes-langchain.agent`): The core AI agent that processes the input query, with a system message defining its role and available tools.
- **OpenAI Chat Model** (`@n8n/n8n-nodes-langchain.lmChatOpenAi`): Supplies the `gpt-4o` language model used by the `Contact Agent`.
- **Get Contacts** (`n8n-nodes-base.airtableTool`): Searches Airtable for contact records.
- **Add or Update Contact** (`n8n-nodes-base.airtableTool`): Adds a new contact or updates an existing one in Airtable.
- **Response** (`n8n-nodes-base.set`): Sets the final response to the agent’s output.
- **Try Again** (`n8n-nodes-base.set`): Sets a generic error response if the agent’s error path is taken.

## High-Level Process Flow
1. Workflow is triggered with an input `query`.
2. The `Contact Agent` node receives the `query`.
3. The agent, leveraging the OpenAI Chat Model, interprets the query and determines whether to search for or add/update a contact in Airtable.
4. The relevant Airtable tool node executes the specified action.
5. The result is returned to the agent, which formulates the final output.
6. If successful, the `Response` node outputs the agent’s result; otherwise, the `Try Again` node outputs a generic error message.

## Detailed Process Description
1. **Trigger:** Workflow is called by another workflow, passing a `query` field.
2. **Agent Invocation:** The query is passed to the Contact Agent node, which is configured with a system message instructing it to use "Get Contacts" or "Add or Update Contact" as appropriate.
3. **Airtable Tools:** 
    - `Get Contacts` searches the specified Airtable base/table for matching records.
    - `Add or Update Contact` uses field mappings (name, email, phoneNumber) extracted by the AI from the query to add or update a record.
4. **Output Handling:** 
    - On success, the agent’s output is set as the `response` field.
    - On error (with `onError: continueErrorOutput`), the workflow outputs a generic error message.

## Additional Notes
- **Credentials Required:**
    - "OpenAi account" for the OpenAI Chat Model.
    - "Nate Airtable" for the Airtable nodes.
- **Airtable Base/Table:** All operations target base `appK0rbtvf9e7vt6w`, table `tbl08JGCfUK1RhXsG` ("Contacts").
- **AI Model:** Uses the `gpt-4o` model.
- **Error Handling:** Relies on the agent’s `continueErrorOutput` setting for graceful error responses.
- **Workflow Status:** The workflow JSON indicates `active: false`.
- **Instance ID:** The `meta` object includes `instanceId`: `95e5a8c2e51c83e33b232ea792bbe3f063c094c33d9806a5565cb31759e1ad39`.
