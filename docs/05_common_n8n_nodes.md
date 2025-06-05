# Common and Essential n8n Nodes

This document lists some of the most common and essential nodes an AI agent will encounter when analyzing n8n workflows. Understanding their basic function is key to interpreting workflow logic.

## Trigger Nodes

-   **`n8n-nodes-base.manualTrigger` (Manual)**
    *   **Purpose**: Allows a workflow to be started manually from the n8n editor.
    *   **Use Case**: Primarily for testing and development. Not used for automated production workflows.
-   **`n8n-nodes-base.schedule` (Schedule / Cron)**
    *   **Purpose**: Triggers a workflow at specified time intervals (e.g., every 5 minutes, daily at 9 AM, weekly on Mondays).
    *   **Use Case**: Regular, automated tasks like report generation, data synchronization, reminders.
    *   **Key Parameters**: `mode` (e.g., 'everyMinute', 'cron'), `cronTime` (cron expression), `hour`, `minute`.
-   **`n8n-nodes-base.webhook` (Webhook)**
    *   **Purpose**: Provides a unique URL. When this URL receives an HTTP request (usually POST or GET), the workflow triggers.
    *   **Use Case**: Integrating with external systems that can send webhooks (e.g., GitHub, Stripe, custom applications), creating APIs.
    *   **Key Parameters**: `httpMethod` (e.g., 'POST', 'GET'), `path` (custom part of the URL), `authentication` (e.g., 'none', 'headerAuth').
-   **App-Specific Triggers** (e.g., `n8n-nodes-google.sheetsTrigger`, `n8n-nodes-github.trigger`)
    *   **Purpose**: Trigger a workflow based on an event in a specific application (e.g., new row in Google Sheets, new commit in GitHub).
    *   **Use Case**: Event-driven automation.
    *   **Key Parameters**: Vary by application, but usually involve selecting an event and authentication.

## Action & Logic Nodes

-   **`n8n-nodes-base.httpRequest` (HTTP Request)**
    *   **Purpose**: Make HTTP requests to any API or URL.
    *   **Use Case**: Interacting with any web service that has an API, fetching data, sending data.
    *   **Key Parameters**: `url`, `method` (GET, POST, PUT, etc.), `authentication`, `headers`, `bodyParameters`, `queryParameters`.
-   **`n8n-nodes-base.set` (Set)**
    *   **Purpose**: Add new fields to items, modify existing fields, or change their values. Can use static values or dynamic expressions.
    *   **Use Case**: Data preparation, enrichment, transformation.
    *   **Key Parameters**: `values` (an array of objects defining what to set, e.g., `name`, `value`, `type`), `keepOnlySet` (boolean).
-   **`n8n-nodes-base.editFields` (Edit Fields / Item Lists)** (Formerly often referred to as Item Lists or similar, now more consolidated)
    *   **Purpose**: Manipulate the structure of items and their fields: rename, duplicate, delete fields, convert data types, split items into multiple, combine multiple items into one.
    *   **Use Case**: Advanced data restructuring, normalization, aggregation.
    *   **Key Parameters**: `mode` (e.g., 'renameKeepAndRename', 'filterFields'), `fields` (array of operations).
-   **`n8n-nodes-base.function` (Function)**
    *   **Purpose**: Execute custom JavaScript code to process items. Provides full flexibility for complex data manipulation or logic that's hard to achieve with other nodes.
    *   **Use Case**: Custom transformations, complex calculations, interacting with external libraries (if n8n instance allows).
    *   **Key Parameters**: `jsCode` (the JavaScript code to execute).
-   **`n8n-nodes-base.code` (Code)**
    *   **Purpose**: Similar to the Function node but often provides a more structured environment, potentially supporting other languages like Python (depending on n8n version and configuration). Allows for defining input/output schemas.
    *   **Use Case**: Complex custom logic, data processing, integrations where a dedicated node doesn't exist.
    *   **Key Parameters**: `language` (e.g., 'javascript', 'python'), `code`.
-   **`n8n-nodes-base.if` (If)**
    *   **Purpose**: Routes items based on one or more conditions. Sends items to a "true" output if conditions are met, and to a "false" output otherwise.
    *   **Use Case**: Conditional logic, decision making in workflows.
    *   **Key Parameters**: `conditions` (an array of condition groups, each with multiple conditions).
-   **`n8n-nodes-base.switch` (Switch)**
    *   **Purpose**: Routes items to different output branches based on the value of a single input field. More powerful than an `If` node for multiple distinct cases.
    *   **Use Case**: Multi-path routing based on a specific data point (e.g., status, type).
    *   **Key Parameters**: `fieldToMatch` (expression for the value to check), `rules` (array defining values and corresponding output port).
-   **`n8n-nodes-base.merge` (Merge)**
    *   **Purpose**: Combines items from different branches of a workflow.
    *   **Use Case**: Bringing data back together after an `If` or `Switch` node, or after parallel processing.
    *   **Key Parameters**: `mode` (e.g., 'mergeByPosition', 'mergeByKey'), `join` (e.g., 'inner', 'left').
-   **`n8n-nodes-base.wait` (Wait)**
    *   **Purpose**: Pauses the workflow execution for a specified duration or until a specific time.
    *   **Use Case**: Introducing delays, waiting for external processes to complete, rate limiting.
    *   **Key Parameters**: `time`, `unit` (e.g., 'seconds', 'minutes'), `resumeTime`.
-   **`n8n-nodes-base.noOp` (NoOp, "No Operation")**
    *   **Purpose**: Does nothing. Passes data through unchanged.
    *   **Use Case**: Placeholder, organizing complex workflows, debugging, or as a known endpoint for branches.
-   **`n8n-nodes-base.executeWorkflow` (Execute Workflow)**
    *   **Purpose**: Calls another n8n workflow, passing data to it and potentially receiving data back.
    *   **Use Case**: Modularizing complex automation, reusing common workflow logic.
    *   **Key Parameters**: `workflowId`.

## Application-Specific Nodes

Beyond these base nodes, there are hundreds of nodes for specific applications and services (e.g., `n8n-nodes-google.sheets`, `n8n-nodes-openai.chat`, `n8n-nodes-airtable.append`, `n8n-nodes-brevo.sendEmail`).
-   **Purpose**: Interact with the API of a specific service (e.g., read/write to Google Sheets, send a message via Slack, create a task in Asana).
-   **Key Parameters**: Highly variable depending on the service and the chosen "Resource" and "Operation" within the node. Always involve authentication (credentials) and parameters specific to the API call.

An AI agent should be able to identify the `type` of a node to understand its general category and then look at its `parameters` (and potentially its "Resource" and "Operation" settings if it's an app node) to determine its specific action.
