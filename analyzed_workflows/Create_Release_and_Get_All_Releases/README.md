# Create a Release and Get All Releases

## Summary
This workflow automates the process of creating a new release in Sentry and then retrieving all releases for the specified organization or project. It is intended for managing and tracking software releases within Sentry from n8n.

## Description
- **Trigger:** The workflow is executed manually using the Manual Trigger node.
- **Create Release:** The first Sentry.io node creates a new release (version 0.0.1 by default) in Sentry.
- **Get All Releases:** The second Sentry.io node retrieves all releases for the organization or project, allowing for release management and reporting.

## Nodes Involved
- **Manual Trigger:** Starts the workflow manually.
- **Sentry.io:** Creates a new release in Sentry.
- **Sentry.io1:** Retrieves all releases from Sentry.

## Process Flow
1. **Manual Trigger** starts the workflow.
2. **Sentry.io** node creates a new release in Sentry.
3. **Sentry.io1** node retrieves all releases for the organization or project.

## Inputs
- **Sentry API credentials** (must be set up in n8n)
- **Release version** (default: 0.0.1, can be customized)
- **Organization/project identifiers** (configured in the Sentry.io nodes)

## Outputs
- New release created in Sentry
- List of all releases retrieved from Sentry

## Additional Notes
- Sentry API credentials must be configured in n8n for the workflow to function.
- The workflow is designed for manual execution but can be adapted for automated triggers.
- Organization and project identifiers can be customized as needed.

---
*Last processed: 12/06/2025 20:17 local time*
