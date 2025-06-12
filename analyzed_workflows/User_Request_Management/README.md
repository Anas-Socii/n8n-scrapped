# User Request Management

## Summary
This workflow manages user requests submitted via a Typeform form and organizes them in ClickUp based on request type and urgency.

## Description
The workflow automates the intake, categorization, and logging of user requests. It collects details via a Typeform form, determines the request type (document, presentation, update, workflow), and creates a corresponding task in ClickUp with all relevant details. The workflow ensures requests are properly categorized and prioritized for efficient handling.

## Input Triggers
- Typeform Trigger (form submission)

## Output
- New task created in ClickUp with all request details

## Nodes Involved
- **Typeform Trigger:** Listens for new Typeform submissions.
- **Pick List (Switch):** Determines the type of request and routes accordingly.
- **Set Nodes (ListID ...):** Assigns the correct ClickUp List ID based on request type.
- **ClickUp:** Creates a new task in ClickUp with provided details.

## High-Level Process Flow
- Wait for a Typeform submission
- Determine request type (Document, Presentation, Update, Workflow)
- Assign the corresponding ClickUp List ID
- Create a task in ClickUp with all form details

## Detailed Process Description
1. **Typeform Trigger**: Fires when a user submits the form. Captures all relevant fields (title, description, urgency, user info, etc.).
2. **Pick List (Switch)**: Examines the request type and routes the workflow to the appropriate Set node.
3. **Set Nodes (ListID ...)**: Each node sets a specific List ID for ClickUp, corresponding to the request type.
4. **ClickUp**: Uses the set List ID and form data to create a well-documented task in ClickUp, including urgency and user-provided details.

## Additional Notes
- Requires valid ClickUp OAuth2 credentials and Typeform API key.
- The workflow is modular and can be extended for new request types by adding new Switch rules and Set nodes.
- Ensure the correct mapping of Typeform fields to ClickUp task fields for accurate data transfer.
