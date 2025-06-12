# Tools / Backup Gitlab

## Summary
Automates backup of n8n workflows and credentials to a Gitlab repository using scheduled and manual triggers.

## Description
This workflow exports all n8n workflows and credentials, adds them to a local git repo, commits with a timestamp, and pushes to a remote Gitlab repository. It can be triggered manually or on a schedule (every 6 hours). This ensures regular, versioned backups for disaster recovery and auditing.

## Input Triggers
- Manual execution (via 'execute')
- Scheduled (Cron: every 6 hours)

## Output
- Workflows and credentials exported and pushed to Gitlab repository

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually.
- **Cron**: Triggers scheduled backups every 6 hours.
- **ExecuteCommand (Export Workflows)**: Exports all workflows to a local directory.
- **ExecuteCommand (Export Credentials)**: Exports all credentials to a local directory.
- **ExecuteCommand (git add/commit/push)**: Adds, commits, and pushes changes to the repo.

## High-Level Process Flow
- Trigger workflow manually or on schedule
- Export workflows and credentials
- Add, commit, and push to Gitlab repo

## Detailed Process Description
1. **Manual Trigger** or **Cron** node starts the workflow.
2. **Export Workflows** node exports all workflows to repo/workflows/.
3. **Export Credentials** node exports all credentials to repo/credentials/.
4. **git add** node stages all changes.
5. **git commit** node commits with a timestamped message.
6. **git push** node pushes to the remote Gitlab repo.

## Additional Notes
- Requires local git repo and Gitlab credentials configured in n8n.
- The workflow can be adapted for different backup intervals or additional resources.
- Useful for version control, disaster recovery, and compliance.
