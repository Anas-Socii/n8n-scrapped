# n8n Nodes

## What are Nodes?

Nodes are the individual building blocks of n8n workflows. Each node represents a specific action, integration with an application/service, or a generic function like data transformation or flow control.

In a workflow, nodes are connected to pass data from one to another. Each node typically:
1.  Receives input data (usually a list of JSON items) from preceding nodes or its trigger.
2.  Performs its configured operation on this data.
3.  Produces output data (again, a list of JSON items) that is passed to subsequent connected nodes.

## Types of Nodes

Nodes in n8n can be broadly categorized into:

1.  **Trigger Nodes**:
    *   These nodes initiate workflow executions. They "trigger" the workflow based on specific events or conditions.
    *   A workflow must have at least one trigger node to run automatically.
    *   Examples:
        *   `Schedule`: Triggers the workflow at regular time intervals (e.g., every hour, daily).
        *   `Webhook`: Provides a unique URL that can be called by external services to trigger the workflow.
        *   `On App Event`: Listens for specific events in third-party applications (e.g., new email in Gmail, new row in Google Sheets, new message in Slack).
        *   `Manual Trigger`: Allows manual initiation from the n8n editor, often used for testing.

2.  **Regular (Action/Logic) Nodes**:
    *   These nodes perform the actual work of the workflow.
    *   **Action Nodes**: Interact with applications or services, or perform general tasks.
        *   Examples: `HTTP Request` (call any API), `Send Email`, `Google Sheets` (read/write data), `OpenAI` (interact with AI models), `Execute Command`.
    *   **Data Transformation Nodes**: Modify, restructure, or generate data.
        *   Examples: `Set` (add or modify fields), `Edit Fields` (rename, move, delete fields), `Function` (run custom JavaScript code), `Code` (run custom Python/JavaScript code in a more structured way), `Merge` (combine data from different branches).
    *   **Logic & Flow Control Nodes**: Control the path of execution within the workflow.
        *   Examples: `If` (conditional execution), `Switch` (route data based on multiple conditions), `Wait` (pause execution), `Split in Batches` (process items in chunks).

## Node Anatomy (Common Properties)

When you inspect a node in the n8n editor or its JSON representation, you'll find common properties:

*   **`name`**: A user-defined, human-readable name for this specific instance of the node in the workflow (e.g., "Fetch User Data", "Send Welcome Email").
*   **`type`**: The unique identifier for the kind of node it is (e.g., `n8n-nodes-base.httpRequest`, `n8n-nodes-base.if`, `n8n-nodes-google.sheets`). This tells n8n what functionality the node provides.
*   **`typeVersion`**: The version of the node's underlying logic. This helps manage updates and compatibility.
*   **`parameters`**: An object containing the specific configuration settings for the node. This is where you define what the node should do (e.g., the URL for an HTTP Request, the conditions for an If node, the sheet name for a Google Sheets node).
*   **`credentials`**: For nodes that interact with external services requiring authentication, this property links to the stored credentials (e.g., API keys, OAuth tokens). Credentials are managed separately and securely in n8n.
*   **`position`**: An array `[x, y]` indicating the node's visual position on the workflow canvas.
*   **`id`**: A unique identifier for this node instance within the workflow's JSON structure.

## Core Nodes vs. Community Nodes

n8n's node ecosystem consists of two main types:

1.  **Core Nodes**:
    *   Developed, maintained, and officially supported by the n8n team.
    *   These nodes cover a wide range of common applications (e.g., Google services, AWS, popular SaaS tools) and essential generic functions (HTTP, data manipulation, scheduling).
    *   Documentation is typically found on the official n8n documentation website (`docs.n8n.io`).

2.  **Community Nodes**:
    *   Developed and maintained by the n8n user community.
    *   Greatly extend n8n's capabilities by providing integrations for a vast array of other services, niche tools, or custom functionalities.
    *   The quality, features, and documentation level can vary.
    *   **Finding Community Node Documentation**:
        *   **n8n Integrations Page**: Many community nodes are listed on the official n8n.io website under "Integrations". This page often links to their documentation or source repository.
        *   **Node's Description in n8n**: When you add a community node in the n8n editor, its description panel might include a link to its documentation or GitHub repository.
        *   **GitHub**: Most community nodes are open-source and hosted on GitHub. Searching GitHub for `n8n-nodes-<service-name>` (e.g., `n8n-nodes-discord`) is often effective. The repository's README is the primary source of documentation.
        *   **npm (Node Package Manager)**: Community nodes are typically published as npm packages. Searching `npmjs.com` for `n8n-nodes-<service-name>` can also lead to their package page, which usually links to the GitHub repository.

## Node Operations

Many nodes, especially those integrating with complex services, offer multiple "operations" or "resources."
*   Within a node's parameters, you'll often find a dropdown (e.g., "Resource", "Operation") that lets you select the specific action the node should perform.
*   For example, a `Google Drive` node might have operations like "File: Upload", "File: Download", "Folder: Create", "Folder: List".
*   A `Customer Relationship Management (CRM)` node might have resources like "Contact", "Company", "Deal", and for each resource, operations like "Create", "Update", "Get", "Delete", "List".
*   Understanding the available resources and operations is key to using a node effectively. This information is found in the node's documentation.

## Integrations

The term "integration" in the n8n context generally refers to the capability of n8n to connect with and automate a specific third-party application or service (e.g., "Slack integration," "Shopify integration"). This capability is provided through one or more n8n nodes specific to that service. So, when discussing integrations, we are essentially talking about the set of nodes available for a particular app.
