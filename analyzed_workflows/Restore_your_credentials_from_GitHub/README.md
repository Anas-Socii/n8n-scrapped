# Restore your credentials from GitHub

## Summary
This workflow automates the restoration of all n8n instance credentials from backups stored in a GitHub repository. It is designed to streamline the process of retrieving, parsing, and re-importing credentials into n8n, ensuring business continuity and disaster recovery.

## Description
The workflow fetches all credential files from a specified path in a GitHub repository, converts them from JSON, and restores them into n8n. It allows users to specify the repository owner, name, and path for flexible use. The workflow includes logic to skip empty files and the n8n account API credential, as these should not be restored.

## Inputs
- **repo.owner**: GitHub username or organization (set in the `Globals` node)
- **repo.name**: Name of the GitHub repository containing the credentials backup (set in the `Globals` node)
- **repo.path**: Path within the repository where credential files are stored (set in the `Globals` node)
- **GitHub account credential**: For authenticating GitHub API requests
- **n8n account credential**: For restoring credentials into n8n

## Outputs
- Imported credentials restored into the n8n instance
- Skipped files (empty or n8n account API) are not restored

## Nodes Used
- **Manual Trigger**: Starts the workflow manually
- **Sticky Notes**: Provide setup and usage instructions
- **Set (Globals)**: Stores repository configuration values
- **HTTP Request**: Fetches list of credential files from GitHub
- **Split Out**: Iterates over each file path
- **GitHub**: Downloads file content from the repository
- **Extract From File**: Converts file content from JSON
- **If**: Checks for skipped credentials (empty or n8n account API)
- **n8n**: Restores credentials into n8n

## Process Flow
1. **Manual Trigger**: User starts the workflow.
2. **Globals**: User sets repo owner, name, and path.
3. **HTTP Request**: Fetches all files in the specified path from GitHub.
4. **Split Out**: Splits the list to process each file individually.
5. **GitHub**: Downloads each credential file.
6. **Extract From File**: Converts file content from JSON.
7. **If**: Skips files that are empty or are the n8n account API.
8. **n8n**: Restores valid credentials into n8n.

## Detailed Steps
- Edit the `Globals` node to set your GitHub repository details.
- Ensure you have valid credentials for GitHub and n8n API access.
- Run the workflow manually to start the restoration process.
- The workflow will skip empty files and the n8n account API credential.

## Additional Notes
- This workflow is intended for disaster recovery and migration scenarios.
- Ensure your GitHub repository is private and secure.
- Review the sticky notes in the workflow for setup instructions.
- The workflow does not overwrite existing credentials unless explicitly allowed in n8n settings.

---
*Generated and documented automatically as part of the n8n workflow documentation process.*
