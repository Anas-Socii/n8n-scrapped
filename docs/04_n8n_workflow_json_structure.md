# n8n Workflow JSON Structure

When an n8n workflow is exported, it's saved as a JSON file. This file contains all the information needed to reconstruct the workflow in an n8n instance. Understanding this structure is essential for AI agents to analyze and interpret n8n workflows programmatically.

## Top-Level Structure

A typical n8n workflow JSON has a main object with several top-level properties. The most important ones are:

-   `name` (string): The human-readable name of the workflow.
-   `nodes` (array): An array of node objects. This is where the core logic of the workflow is defined.
-   `connections` (object): An object describing how the nodes are connected to each other.
-   `active` (boolean): Indicates if the workflow is active (true) or inactive (false). Active workflows run automatically based on their triggers.
-   `settings` (object): Contains workflow-specific settings, like error workflow, timezone, etc.
-   `id` (string): A unique identifier for the workflow itself.
-   `tags` (array, optional): Tags associated with the workflow for organization.

```json
{
  "name": "My Sample Workflow",
  "nodes": [ /* ... Node objects go here ... */ ],
  "connections": { /* ... Connection objects go here ... */ },
  "active": false,
  "settings": {},
  "id": "123",
  "tags": []
}
```

## The `nodes` Array

Each object in the `nodes` array represents a single node in the workflow.

Key properties of a node object:

-   **`parameters`** (object): Contains the specific configuration for this node. The structure of `parameters` varies greatly depending on the node `type`.
    *   It can include simple values (strings, numbers, booleans), arrays, or nested objects.
    *   Expressions are often stored as strings within parameter values, e.g., `"value": "{{ $json.someData }}"`.
-   **`id`** (string): A unique identifier for this node instance within the workflow. This ID is used in the `connections` object to define links.
-   **`name`** (string): The display name of the node in the n8n editor (e.g., "HTTP Request to API", "Filter Data").
-   **`type`** (string): The type identifier of the node (e.g., `n8n-nodes-base.httpRequest`, `n8n-nodes-base.if`). This tells n8n what kind of node it is.
-   **`typeVersion`** (number or string): The version of the node's logic.
-   **`position`** (array): An array of two numbers `[x, y]` representing the node's coordinates on the visual workflow canvas.
-   **`credentials`** (object, optional): If the node uses credentials, this object will contain a reference to the stored credential.
    *   The key within `credentials` often indicates the type of credential (e.g., `googleApi`, `httpBasicAuth`).
    *   The value is an object with an `id` (the ID of the credential in n8n's database) and `name` (human-readable name of the credential).
    *   Example:
        ```json
        "credentials": {
          "googleSheetsOAuth2Api": {
            "id": "15",
            "name": "My Google Sheets Account"
          }
        }
        ```

Example of a simple node object:
```json
{
  "parameters": {
    "url": "https://api.example.com/data",
    "options": {}
  },
  "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "name": "Fetch Data",
  "type": "n8n-nodes-base.httpRequest",
  "typeVersion": 1,
  "position": [450, 300]
}
```

## The `connections` Object

The `connections` object defines how nodes are linked. The keys in this object are the **output node IDs**. The value for each key is an object where keys are output port names (often "main"), and values are arrays of connection objects.

Each connection object specifies the **input node ID** and the input port name (often "main") it connects to.

-   **Structure**: `connections.<outputNodeId>.<outputPortName> = [ { "node": "<inputNodeId>", "type": "<inputPortName>" } ]`
-   Most standard nodes have one output port named `main` and one input port named `main`.
-   Nodes like `If` might have multiple output ports (e.g., `main` for true, `main.0` or a custom name for false).
-   A single output port can connect to multiple input ports of different nodes.

Example of a `connections` object:
```json
"connections": {
  "TriggerNodeId": { // ID of the node whose output is being connected
    "main": [ // Output port name (usually 'main')
      {
        "node": "ActionNode1Id", // ID of the node receiving the input
        "type": "main" // Input port name (usually 'main')
      }
    ]
  },
  "ActionNode1Id": {
    "main": [ 
      {
        "node": "IfNodeId",
        "type": "main"
      }
    ]
  },
  "IfNodeId": { // An 'If' node might have multiple outputs
    "main": [ // Output for 'true' condition
      {
        "node": "TrueBranchNodeId",
        "type": "main"
      }
    ],
    "main.0": [ // Output for 'false' condition (or a different named output)
      {
        "node": "FalseBranchNodeId",
        "type": "main"
      }
    ]
  }
}
```
*Note: The exact naming of output ports for false branches or additional outputs (e.g., `main.0`, `main.1` or custom names like `output_false`) can vary based on the node type and its version. The agent should be prepared to see different patterns here.*

## `settings` Object

This object can contain various settings for the workflow:
-   `errorWorkflow`: ID of another workflow to execute if this one fails.
-   `timezone`: Timezone for schedule triggers.
-   `executionOrder`: For workflows with multiple triggers, defines the order.
-   Other specific execution settings.

Example:
```json
"settings": {
  "executionTimeout": 3600, // Timeout in seconds
  "errorWorkflow": "workflowErrorHandlingId",
  "saveExecutionProgress": true,
  "timezone": "America/New_York"
}
```

## Importance for AI Agents

An AI agent analyzing an n8n workflow JSON should:
1.  Parse the top-level structure.
2.  Iterate through the `nodes` array to understand each configured step.
    *   Pay close attention to `type` to know what the node does.
    *   Analyze `parameters` to understand its specific configuration.
    *   Note any `credentials` used.
3.  Parse the `connections` object to build a directed graph representing the workflow's flow of execution and data.
4.  Check the `active` status and any relevant `settings`.

By understanding these components, an agent can determine the purpose of the workflow, the services it interacts with, the data it processes, and the logic it implements.
