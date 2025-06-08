# Workflow Results to Markdown Notes in Your Obsidian Vault, via Google Drive

## Summary
Automatically sends workflow results from n8n to your Obsidian Vault by saving them as Markdown files in Google Drive, with instant sync to your notes.

## Description
This workflow creates Markdown notes from workflow output and saves them in a Google Drive folder linked to your Obsidian Vault. It supports YAML frontmatter and attachments, enabling seamless integration between n8n automation and personal knowledge management.

## Input Triggers
- **Workflow Output**: Any n8n workflow can send output to this workflow for note creation.

## Output
- Markdown (.md) notes and attachments instantly available in your Obsidian Vault.

## Nodes Involved
- **Sticky Note**: Documents setup and usage instructions.
- **Google Drive**: Saves Markdown files and attachments to a specified folder.

## High-Level Process Flow
- Output from any workflow is sent to this workflow.
- Markdown content is generated and saved in Google Drive.
- Google Drive folder is synced with Obsidian Vault via symlink.

## Detailed Process Description
1. **Sticky Note**: Provides setup and usage guidance.
2. **Google Drive**: Creates Markdown files and saves attachments.
3. **Obsidian Vault Sync**: Symlink ensures files appear instantly in your notes.

## Additional Notes
- **Credentials**: Requires Google Drive OAuth and folder setup.
- **Customization**: Folder location and Markdown template can be changed.
- **Performance**: Near-instant sync with Obsidian Vault.
- **Disclaimer**: Ensure your workflow outputs are safe and appropriate for your notes.
