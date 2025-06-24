# Trigger Build with TravisCI

## Summary
This workflow triggers a TravisCI build on demand for a specified repository and branch using a manual trigger and the TravisCI node.

## Description
Initiated manually, this workflow uses the TravisCI node to start a build on TravisCI for a given repository and branch. It is useful for CI/CD automation, allowing users to trigger builds from within n8n.

## Input Triggers
- Manual Trigger (On clicking 'execute')

## Output
- Triggers a build on TravisCI for the specified repository and branch

## Nodes Involved
- **Manual Trigger:** Initiates the workflow manually.
- **TravisCI:** Triggers a build on TravisCI using provided credentials and parameters.

## High-Level Process Flow
1. Manual trigger starts the workflow.
2. TravisCI node sends a build trigger request to TravisCI for the specified repo and branch.

## Detailed Process Description
- **Manual Trigger:** User-initiated start.
- **TravisCI Node:**
    - Uses TravisCI API credentials.
    - Accepts repository slug and branch as parameters.
    - Triggers the build via TravisCI API.
    - No further nodes are present.

## Additional Notes
- Requires valid TravisCI API credentials.
- Ensure the repository slug and branch are specified in the node parameters.
- Extend this workflow by adding notifications or post-build actions as needed.
