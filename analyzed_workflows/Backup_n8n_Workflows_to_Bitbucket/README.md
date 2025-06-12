# Backup n8n Workflows to Bitbucket

## Summary
This workflow automates the process of backing up all n8n workflows to a Bitbucket repository. It runs daily at 2 AM, retrieves all workflows from the n8n instance, checks if each workflow is new or changed, and uploads the workflow to Bitbucket if necessary. The workflow also handles Bitbucket API rate limiting.

## Description
- **Trigger:** Scheduled to run daily at 2 AM.
- **Retrieval:** Uses the n8n API to get all workflows.
- **Comparison:** For each workflow, checks Bitbucket to see if it already exists or has changed.
- **Upload:** Uploads new or changed workflows to Bitbucket using HTTP requests.
- **Rate Limiting:** Calculates and waits an appropriate amount of time to avoid hitting Bitbucket API rate limits.

## Nodes Involved
- **Run Daily at 2 AM:** Schedule trigger to start the workflow.
- **Set Bitbucket Workspace & Repository:** Sets workspace and repository slugs for Bitbucket.
- **Get All Workflows:** Retrieves all workflows from the n8n instance.
- **Loop Workflows:** Iterates over each workflow.
- **Get Existing Workflow from Bitbucket:** Checks if the workflow exists in Bitbucket.
- **New or Changed?:** IF node to determine if workflow should be uploaded.
- **Upload Workflow to Bitbucket:** Uploads the workflow via HTTP request.
- **Calculate Wait Time:** Determines the wait time based on Bitbucket's rate limit headers.
- **Wait to Avoid Rate Limiting:** Waits as needed to avoid exceeding rate limits.

## Process Flow
1. **Run Daily at 2 AM** triggers the workflow.
2. **Set Bitbucket Workspace & Repository** sets required variables.
3. **Get All Workflows** retrieves all workflows.
4. **Loop Workflows** iterates through each workflow.
5. **Get Existing Workflow from Bitbucket** fetches the workflow from Bitbucket for comparison.
6. **New or Changed?** checks if the workflow is new or has changed.
7. If new or changed, **Upload Workflow to Bitbucket** uploads the workflow.
8. **Calculate Wait Time** determines how long to wait based on Bitbucket's API rate limits.
9. **Wait to Avoid Rate Limiting** waits before proceeding to the next workflow to avoid rate limiting.

## Inputs
- **n8n API credentials** (for accessing workflows)
- **Bitbucket HTTP Basic Auth credentials** (for uploading workflows)
- **WorkspaceSlug and RepositorySlug** (Bitbucket repository details)

## Outputs
- Workflows are backed up to the specified Bitbucket repository.
- Logs and status can be monitored in Bitbucket and n8n execution logs.

## Additional Notes
- The workflow is designed to be idempotent and only uploads workflows that are new or have changed.
- Handles Bitbucket rate limiting using calculated wait times.
- Credentials must be set up in n8n for both the n8n API and Bitbucket.
- Error handling ensures the workflow continues even if some uploads fail.
- Can be customized for different backup schedules or repositories.

---
*Last processed: 12/06/2025 20:17 local time*
