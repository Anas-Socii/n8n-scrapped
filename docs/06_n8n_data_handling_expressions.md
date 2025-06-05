# n8n Data Handling and Expressions

Understanding how n8n processes and allows manipulation of data is crucial for interpreting workflow logic. n8n's data system is primarily based on JSON items, and expressions provide the power to interact with this data.

## The Concept of "Items"

-   **Core Unit of Data**: In n8n, data flows between nodes as a series of "items." An item is essentially a JSON object.
-   **List of Items**: A node typically receives a list (array) of items as its input and produces a list of items as its output. Even if a node only processes or produces a single piece of data, it's usually wrapped in a list containing one item.
-   **Execution per Item**: Many nodes execute their logic once for each item they receive as input. For example, if a Set node receives 3 items, it will apply its transformations to each of the 3 items individually. Some nodes (like aggregation nodes) might behave differently, consuming all input items to produce a single output item.

## Standard Data Structure

Each item in n8n has a standard structure, primarily consisting of two top-level keys: `json` and `binary`.

-   **`json` (object)**: This is where most of the structured data resides. It's a regular JSON object containing the key-value pairs that make up the item's data.
    ```json
    {
      "json": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "orderCount": 5,
        "details": {
          "isCustomer": true,
          "lastLogin": "2023-10-26T10:00:00Z"
        }
      }
      // binary data might also be present
    }
    ```
-   **`binary` (object, optional)**: This key holds binary data associated with the item. Each key under `binary` represents a distinct binary property.
    *   This is used for files (images, PDFs, etc.) or any raw binary content.
    *   Each binary property itself is an object containing:
        *   `data` (string): Base64 encoded string of the binary data.
        *   `mimeType` (string): The MIME type of the data (e.g., "image/png", "application/pdf").
        *   `fileName` (string): The name of the file.
        *   `fileExtension` (string): The file extension.
    ```json
    {
      "json": { "userId": 123 },
      "binary": {
        "profilePicture": {
          "data": "iVBORw0KGgoAAAANSUhEUgAAAAUA...", // Base64 data
          "mimeType": "image/png",
          "fileName": "avatar.png",
          "fileExtension": "png"
        }
      }
    }
    ```

An AI agent must always expect data to be structured this way, primarily accessing data via `item.json.propertyName` or `item.binary.propertyName`.

## Data Flow and Node Inputs/Outputs

-   **Output to Input**: The output items of one node become the input items for the next connected node.
-   **Multiple Inputs**: Some nodes can have multiple input connections (e.g., a Merge node). How they combine these inputs depends on the node's configuration.
-   **Data Referencing**: Nodes can typically access data from:
    *   The current item being processed.
    *   Any other item from the same input (using index).
    *   The output of any previously executed node in the workflow.

## Expressions

Expressions are how you dynamically access, manipulate, and reference data within node parameters. n8n uses a JavaScript-like syntax for expressions, typically enclosed in double curly braces: `{{ }}`.

### Common Expression Variables and Objects:

-   **`$json`**: Refers to the `json` property of the *current item* being processed by the node from its direct input.
    *   Example: `{{ $json.email }}` retrieves the value of the `email` field from the current item's JSON data.
    *   Example: `{{ $json.userDetails.address.city }}` for nested properties.
-   **`$binary`**: Refers to the `binary` property of the *current item*.
    *   Example: `{{ $binary.profileImage.fileName }}`.
-   **`$item(index)`**: Allows access to a specific item from the input list by its zero-based index.
    *   Example: `{{ $item(0).$json.id }}` gets the `id` from the JSON data of the first item in the input list.
-   **`$items(nodeNameOrId, outputIndex = 0, runIndex = 0)`**: Accesses all output items from a specific, previously executed node.
    *   `nodeNameOrId`: The name or ID of the node.
    *   `outputIndex`: If the node has multiple output ports (e.g., If node), this specifies which port's data to get (0 for the first/main, 1 for the second, etc.).
    *   `runIndex`: If the node executed multiple times (e.g., in a loop or split-in-batches), this specifies which run's data.
    *   Returns an array of items.
    *   Example: `{{ $items('Previous Node Name')[0].json.someProperty }}` gets `someProperty` from the first item of the output of 'Previous Node Name'.
-   **`$node['nodeNameOrId'].context(key)`**: Accesses context data set by a node. Less common for general data flow.
-   **`$node['nodeNameOrId'].json` / `$node['nodeNameOrId'].binary`**: Accesses the JSON/binary data of the *first item* from the output of a specified node. This is a shortcut for `{{ $items('nodeNameOrId')[0].json }}`.
    *   Example: `{{ $node["Error Trigger"].json["workflow"]["name"] }}` (as seen in error handling).
-   **`$workflow`**: An object containing information about the current workflow (e.g., `id`, `name`).
    *   Example: `{{ $workflow.name }}`.
-   **`$input`**: Refers to the current item being processed by the node, specifically when mapping data in a node's UI. It's often equivalent to `$json` for the `json` part.
    *   Example: `{{ $input.item.json.name }}` (from `context7` output).
-   **`$runIndex`**: The index of the current run if the node is part of a loop or batch.
-   **`$vars`**: Accesses global variables defined for the n8n instance or workflow (read-only).
    *   Example: `{{ $vars.myGlobalAPIKey }}` (though API keys should ideally be in credentials).

### JavaScript in Expressions:

You can use JavaScript methods and operators within expressions:
-   String methods: `{{ $json.name.toUpperCase() }}`
-   Array methods: `{{ $json.tags.includes('important') }}`
-   Ternary operator: `{{ $json.variable_name ? $json.variable_name : "not found" }}`
-   Arithmetic: `{{ $json.price * (1 + $json.taxRate) }}`
-   Date manipulation (often using `Date` object or Luxon if available): `{{ new Date($json.timestamp).toLocaleDateString() }}`

### Built-in Methods:

n8n provides some built-in helper methods that can be used on items or data.
-   Example (general syntax from `context7`): `{{ dataItem.function() }}`.
-   These are often specific to data types (e.g., methods for handling arrays or objects). Refer to n8n documentation for a full list.

### Considerations for AI Agents:

-   When analyzing a workflow JSON, expressions will be found as string values within the `parameters` object of nodes.
-   The agent needs to parse these expressions to understand data dependencies and transformations.
-   Recognize the different `$variable` syntaxes to trace data origins.
-   Be aware that the actual data is not present in the workflow JSON, only the logic to process it.

This deeper understanding of data handling and expressions will allow an AI agent to more accurately model the behavior of an n8n workflow.
