---
description: N8n Documentation in loop
---


### 📁 INPUTS:

* JSON workflow files are located in the `@data/input` directory.
* Supporting documentation about `n8n` is available in the `docs/` folder.
* You can use `brave search` and `context7` to search online for missing or unclear references about n8n components.

---

### 🧠 TASK OBJECTIVE:

Process **each** `.json` workflow file found in the `/data/input/` directory **independently** and **completely** by following these five sequential steps:

1. **Read & Analyze** the workflow file. Understand its structure, logic, triggers, components, and process flow using local `docs` and online sources (if needed).
2. **Create a folder** inside `processed_workflows/` with a meaningful, human-readable name describing the workflow’s function.
3. **Move** and **rename** the original JSON file into the newly created folder as `workflow.json`.
4. **Generate a `README.md` file** within the same folder documenting the workflow using the template described below.
5. **Append an entry** to the cumulative JSON file at `output/processing_results.json` with the structured summary of the processed workflow.

> ⚠️ **Important:**
> These steps must be executed **in full for each workflow**, one at a time.
> Workflows must be processed **independently** to avoid cross-contamination.
> The agent must **continue running** until **all files** in `/data/input` have been successfully processed.

---

### 📤 OUTPUT STRUCTURE (PER WORKFLOW):

#### 1. Workflow Folder:

Create a directory:

```
analyzed_workflows/{Descriptive_Workflow_Name}/
```

#### 2. Moved Workflow File:

```
analyzed_workflows/{Descriptive_Workflow_Name}/workflow.json
```

#### 3. README.md Template:

```
# Workflow Name

## Summary
{One-line summary of the workflow’s function.}

## Description
{What the workflow achieves and its business or technical context.}

## Input Triggers
{List of initial triggers, e.g., Webhook, Cron, Manual.}

## Output
{What the workflow produces or where it sends results.}

## Nodes Involved
{List and briefly explain each node type used.}

## High-Level Process Flow
{Bullet-point outline of the main steps in the workflow.}

## Detailed Process Description
{Step-by-step explanation of each node’s role and interaction.}

## Additional Notes
{Any credentials, required services, special considerations, or caveats.}
```

#### 4. Append to `output/processing_results.json`:

Each processed workflow should append the following structured JSON object:

```json
{
  "input_workflow_name": "original_filename.json",
  "output_workflow_name": "Descriptive_Workflow_Title",
  "output_workflow_file_path": "processed_workflows/Descriptive_Workflow_Title/workflow.json",
  "output_readme_file_path": "processed_workflows/Descriptive_Workflow_Title/README.md",
  "summary": "Short summary of the workflow purpose",
  "inputs": ["Webhook", "Trigger", "..."],
  "nodes_used": ["HTTP Request", "Function", "..."],
  "outputs": ["Slack Message", "Database Entry", "..."],
  "processed_at": "DD/MM/YYYY HH:MM"
}
```

> 🔁 This JSON log should **only be appended to**.
> Do **not delete or overwrite** any existing entries.

---

### 🔍 REMINDERS:

* Use local `docs/` directory for understanding first; use Brave Search or Context7 only when necessary.
* All operations must be **atomic per workflow** — failure in one must not affect others.
* Ensure safe and consistent naming conventions; handle duplicate workflow names gracefully (e.g., appending numbers or UUIDs).
* Documentation should be readable and useful to both technical and semi-technical users.

