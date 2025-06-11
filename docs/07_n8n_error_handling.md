# Error Handling in n8n Workflows

Robust workflows require mechanisms to handle errors gracefully. n8n provides several ways to manage and react to errors that occur during workflow execution.

## How Errors Occur

Errors can happen in various situations:
-   A node fails to execute its operation (e.g., an HTTP Request node gets a 500 error, a database node cannot connect).
-   Data is not in the expected format, causing a node's logic to fail.
-   Expressions evaluate incorrectly or reference non-existent data.
-   Custom code in `Function` or `Code` nodes throws an exception.

## Default Behavior

By default, if a node in a workflow encounters an error:
1.  That node stops processing.
2.  The execution of that specific path in the workflow halts.
3.  The overall workflow execution is marked as "failed."
4.  No subsequent nodes in that direct path are executed.

## Node-Specific Error Handling: "Continue on Fail"

Many nodes have a "Settings" tab in their parameter configuration panel where you can find an option like **"Continue on Fail"**.

-   **Purpose**: If this option is enabled for a node and that node encounters an error:
    *   The node itself will output error information (often under an `error` key in its output JSON).
    *   Crucially, the workflow execution **will not stop** at this node. It will proceed to the next connected node(s), passing along the error information as part of its output.
-   **Use Case**:
    *   Attempting an operation that might sometimes fail but isn't critical to the entire workflow.
    *   Implementing custom error logging or alternative actions within the same workflow path.
    *   Checking if an optional resource exists before proceeding.
-   **Output on Error**: When "Continue on Fail" is active, the node that errored will typically output an item containing details about the error. This allows subsequent nodes (like an `If` node) to check for the presence of this error data and route the workflow accordingly.
    ```json
    // Example output from a node with "Continue on Fail" that errored
    {
      "json": {
        // Potentially some input data or default values
      },
      "error": {
        "message": "The error message from the node",
        "stack": "Stack trace...",
        "name": "NodeOperationError"
        // Other error-specific details
      }
    }
    ```

## Dedicated Error Workflows

For more centralized and sophisticated error management, n8n allows you to designate a specific workflow as an "Error Workflow."

1.  **Configuration**: In a workflow's main settings, you can specify another workflow to be executed if the current workflow fails.
2.  **`Error Trigger` Node**: The designated Error Workflow must start with an **`n8n-nodes-base.errorTrigger`** node.
    *   This trigger activates automatically when any monitored workflow linked to it fails.
    *   It receives detailed information about the failed execution.

3.  **Data Received by `Error Trigger`**: The `Error Trigger` node outputs a JSON object containing rich information about the failure. Key properties include:
    *   `error`:
        *   `message` (string): The error message.
        *   `name` (string): The type of error (e.g., "NodeApiError", "WorkflowExecutionError").
        *   `stack` (string): The stack trace.
        *   `node`: Details about the node that failed, including its `name`, `type`, and `id`.
    *   `execution`: Information about the failed workflow execution.
        *   `id` (string): The ID of the failed execution.
        *   `url` (string): A direct link to the failed execution log in the n8n editor.
        *   `mode` (string): e.g., 'manual', 'trigger'.
        *   `retryOf` (string, optional): ID of the execution this was a retry of.
        *   `status` (string): Should be 'failed'.
    *   `workflow`: Information about the workflow that failed.
        *   `id` (string): The ID of the failed workflow.
        *   `name` (string): The name of the failed workflow.
    *   `meta`:
        *   `instanceId` (string): ID of the n8n instance.

    Example structure (simplified from `context7` output):
    ```json
    {
      "json": {
        "error": {
          "message": "NodeExecuteError: Value is not a valid email address",
          "name": "NodeExecuteError",
          "stack": "...",
          "node": {
            "parameters": { /* node parameters */ },
            "name": "Validate Email",
            "type": "n8n-nodes-base.someValidationNode",
            "typeVersion": 1,
            "id": "node_123"
          }
        },
        "execution": {
          "id": "exec_abc",
          "url": "https://n8n.example.com/workflow/exec_abc",
          "mode": "trigger",
          "status": "failed"
        },
        "workflow": {
          "id": "wf_xyz",
          "name": "Customer Onboarding"
        }
      }
    }
    ```

4.  **Usage**: Inside the Error Workflow, you can use the data from the `Error Trigger` to:
    *   Send notifications (e.g., via Slack, Email) with details about the failure.
        *   Example expression for a Slack message: `This workflow {{$node["Error Trigger"].json["workflow"]["name"]}} failed. Have a look at it here: {{$node["Error Trigger"].json["execution"]["url"]}}`
    *   Log errors to external systems (databases, logging services).
    *   Attempt automated recovery actions.

## Try-Catch Patterns (Manual Implementation)

While n8n doesn't have a native "try-catch" node, you can simulate this pattern:
1.  **"Try" Branch**: The main sequence of nodes you want to execute.
2.  **Error Detection**:
    *   Enable "Continue on Fail" for nodes in the "try" branch that might fail.
    *   After these nodes, use an `If` node to check if an `error` object exists in the output of the preceding node.
    *   Example condition in `If` node: `{{ $json.error !== undefined }}`.
3.  **"Catch" Branch**: If the `If` node detects an error (routes to its "true" output), connect this to a sequence of nodes that handle the error (e.g., log it, send a notification, set a default value).
4.  **"Finally" / Normal Path**: The "false" output of the `If` node (meaning no error) continues the normal workflow. You might merge the "catch" branch back if appropriate using a `Merge` node.

## Importance for AI Agents

-   **Identify "Continue on Fail"**: When analyzing a node's JSON, check its `settings` or `parameters` for properties like `continueOnFail: true`. This indicates a potential point where errors are handled locally.
-   **Recognize Error Workflows**: If a workflow's `settings` object contains an `errorWorkflow` property, the agent should understand that failures in this workflow will trigger the specified error workflow.
-   **Understand `Error Trigger` Data**: For workflows identified as error workflows (starting with `n8n-nodes-base.errorTrigger`), the agent should know the structure of the data this trigger provides to correctly interpret the error handling logic.
-   **Detect Try-Catch Patterns**: Look for sequences involving "Continue on Fail" followed by an `If` node checking for an error property.

By understanding these error handling mechanisms, an AI agent can better predict workflow behavior under failure conditions and understand the robustness of the automation.
