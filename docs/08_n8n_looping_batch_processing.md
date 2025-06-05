# Looping and Batch Processing in n8n

n8n workflows often need to process multiple data items, either one by one (looping) or in groups (batch processing). Understanding how n8n handles these scenarios is key to analyzing complex workflows.

## Implicit Looping (Execution per Item)

The most common form of "looping" in n8n is implicit. As described in "Data Handling," most n8n nodes are designed to execute their configured action **once for each input item** they receive.

-   **Example**: If an `HTTP Request` node receives 3 items as input, it will make 3 separate HTTP requests, one for each item (potentially using data from each item in its parameters via expressions).
-   **Behavior**: The node processes items sequentially. If one item's execution fails (and "Continue on Fail" is not enabled), the processing for subsequent items in that batch might be halted for that node.
-   **Output**: The node will typically output a list of items corresponding to the results of each input item's execution.

This item-by-item execution is the fundamental way n8n processes collections of data.

## `SplitInBatches` Node (`n8n-nodes-base.splitInBatches`)

When dealing with a very large number of items, processing them one by one can be slow or hit API rate limits. The `SplitInBatches` node helps manage this.

-   **Purpose**: Divides a large list of input items into smaller, fixed-size batches.
-   **How it Works**:
    1.  Receives a list of items.
    2.  Outputs one item at a time. This single output item represents a "batch."
    3.  The `json` property of this output item will contain an array (usually named `batch` or similar, configurable) holding the actual items of that specific batch.
    4.  Subsequent nodes in the workflow then receive these "batch items" one by one.
-   **Parameters**:
    *   `batchSize`: The number of original items to include in each batch.
    *   `options.outputFieldName`: The name of the field in the output item that will contain the array of batched items (e.g., `batch`).
-   **Use Case**:
    *   Processing large datasets more efficiently.
    *   Working with APIs that have rate limits (process a batch, then `Wait`, then process next batch).
    *   Preparing data for nodes that expect an array of items as a single field.

**Example Flow with `SplitInBatches`**:

1.  `Node A` outputs 1000 items.
2.  `SplitInBatches` (batchSize: 100) receives 1000 items.
    *   It outputs its 1st item: `{ "json": { "batch": [item1, ..., item100] } }`
    *   It outputs its 2nd item: `{ "json": { "batch": [item101, ..., item200] } }`
    *   ...and so on, for 10 batch items.
3.  `Node B` (e.g., an HTTP Request node) is connected after `SplitInBatches`.
    *   `Node B` executes 10 times (once for each batch item from `SplitInBatches`).
    *   Inside `Node B`, you would use an expression like `{{ $json.batch }}` to access the array of original items for the current batch. You might then need to use further techniques (like a `Function` node or sub-workflow) if `Node B` itself cannot directly process an array field as multiple operations.

## Manual Looping Patterns (Using `Function` or `Code` Nodes)

For more complex looping scenarios not covered by implicit item-by-item execution or `SplitInBatches`, you can implement custom loops using `Function` or `Code` nodes.

-   **JavaScript `for` or `while` loops**: Inside a `Function` node, you can write JavaScript code that iterates over an array of items (e.g., a batch received from `SplitInBatches` or data from a previous node).
    ```javascript
    // Example in a Function node, assuming input $json.myArray exists
    const results = [];
    for (const element of $json.myArray) {
      // Perform some operation with 'element'
      results.push({ processedElement: element.id * 2 });
    }
    return results.map(res => ({ json: res })); // Return as n8n items
    ```
-   **Considerations**:
    *   The `Function` node executes once per input item it receives. If you want it to loop over an array *within* a single item, ensure that array is correctly accessed (e.g., `{{ $json.batch }}` if coming from `SplitInBatches`).
    *   Be mindful of execution time limits for `Function` nodes if loops are very long.

## Looping with `Execute Workflow`

Another pattern for complex looping or iterating with a defined set of actions is to use the `Execute Workflow` node.

1.  **Main Workflow**: Prepares a list of items or parameters to iterate over.
2.  **Looping Mechanism**:
    *   Could use `SplitInBatches` to send one item/batch at a time to the `Execute Workflow` node.
    *   Or, a `Function` node could iterate and call `Execute Workflow` multiple times (though this is less common and harder to manage).
3.  **Sub-Workflow (Called Workflow)**:
    *   Designed to process a single item or a single batch of data passed to it by the `Execute Workflow` node.
    *   Performs the repetitive tasks.
    *   Returns results if needed.
4.  **Aggregation (Optional)**: After the looping construct in the main workflow, you might aggregate results from the multiple sub-workflow executions.

## "Loop Over Items" Setting (in some nodes)

Some specific nodes might have a built-in setting like "Loop Over Items" or similar. This usually applies when a node parameter expects a single value, but you want to provide an array and have the node execute for each element in that array. This is less common than the general item-by-item processing but can be found in certain nodes. The exact behavior would be specific to the node's documentation.

## Importance for AI Agents

-   **Recognize Implicit Loops**: Understand that most nodes process each input item.
-   **Identify `SplitInBatches`**: If `n8n-nodes-base.splitInBatches` is present, the agent should know that subsequent nodes are processing batches of items, not individual original items directly. The data structure changes (items become nested under a `batch` field).
-   **Analyze `Function`/`Code` Nodes for Loops**: If these nodes are present, the agent may need to analyze the code within them to detect explicit looping constructs (e.g., `for`, `while` loops in JavaScript).
-   **Trace `Execute Workflow` Patterns**: If `Execute Workflow` is used in conjunction with nodes that pass individual items or batches to it, this indicates a looping or iterative processing pattern.

Understanding these patterns is crucial for an AI agent to correctly determine how many times operations are performed and how data is processed iteratively or in bulk.
