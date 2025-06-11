# Auto-generate Documentation for n8n Workflows with GPT and Docsify

## Summary
This workflow automates the creation of documentation for n8n workflows using Docsify and GPT, generating and serving user-friendly HTML documentation for all workflows in a given instance.

## Description
- The workflow is designed to scan, extract, and convert n8n workflow metadata into markdown/HTML documentation.
- It uses configuration nodes to set project paths, instance URLs, and HTML headers/styles for the Docsify frontend.
- Workflows are sorted, extracted, and converted to files.
- The Docsify framework is used to serve the documentation, with support for mermaid diagrams and markdown previews.
- The system can display an overview table of all workflows, their status, documentation links, creation and update times, nodes, and triggers.

## Input Triggers
- Trigger is not explicitly shown in the snippet, but this workflow is typically run manually or on a schedule to refresh documentation.

## Output
- Generates and serves HTML documentation for all n8n workflows using Docsify.
- Produces markdown and HTML files, including a main page and an instance overview.

## Nodes Involved
- **Set (CONFIG):** Sets configuration values for Docsify and HTML.
- **Convert to File:** Converts workflow data to text files.
- **If (HasFile?):** Checks if a file exists or if data is available.
- **Extract from File:** Reads workflow data from files.
- **HTML (Main Page):** Generates the Docsify HTML main page.
- **HTML (Instance overview):** Generates an overview table of all workflows.
- **Sort:** Sorts workflows by update time.
- **Switch (doc action):** Handles documentation actions (e.g., view).

## High-Level Process Flow
1. Set up configuration for Docsify and HTML.
2. Sort and extract workflow data.
3. Convert workflow data to markdown/HTML files.
4. Generate Docsify main page and instance overview.
5. Serve documentation via Docsify frontend.

## Detailed Process Description
- **CONFIG:** Sets project path, instance URL, HTML headers/styles, and Docsify includes.
- **Sort-workflows:** Sorts workflows by their last update time.
- **HasFile?:** Checks if workflow file/data exists.
- **Extract from File:** Reads workflow data for processing.
- **Convert to File:** Converts extracted workflow data to text for Docsify.
- **Main Page:** Generates the HTML main page using Docsify, including mermaid diagram support.
- **Instance overview:** Creates a markdown table summarizing all workflows.
- **doc action:** Switches between documentation actions (e.g., view).

## Additional Notes
- Requires Docsify and mermaid.js for frontend rendering.
- Environment variables (`N8N_PROTOCOL`, `N8N_HOST`) are used for dynamic URLs.
- HTML and CSS are injected for custom styling and layout.
- The workflow is intended for technical and semi-technical users to quickly generate, update, and serve documentation for all n8n workflows.
