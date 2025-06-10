# SHEETS RAG

## Summary
This workflow enables Retrieval-Augmented Generation (RAG) over data from Google Sheets, automating schema inference, SQL query generation, and AI-powered question answering using Google Gemini and Langchain.

## Description
- **Purpose:** Automates ingestion, transformation, and querying of Google Sheets data for advanced analytics and AI-driven insights.
- **Automation:** Detects changes in a specified Google Sheet, infers schema, creates tables, inserts data, and enables SQL-based querying with AI assistance.

## Workflow Structure
- **Trigger:** Google Drive trigger for specific file changes.
- **Main Nodes:**
  - **Google Drive Trigger:** Detects updates to a target Google Sheet.
  - **Set Node (change_this):** Configures table URL and sheet name.
  - **Code Nodes:**
    - `create table query`: Infers schema and generates SQL CREATE TABLE statement.
    - `create insertion query`: Generates SQL INSERT statements for the data.
  - **Langchain Tools:**
    - `get_postgres_schema`: Retrieves database schema.
    - `execute_query_tool`: Executes SQL queries.
    - `Google Gemini Chat Model`: AI-powered question answering over data.

## Process Flow
1. **Trigger:** Google Drive detects a change in the target sheet.
2. **Schema Inference:** Code node infers table schema from sheet data.
3. **Table Creation:** Generates and executes a CREATE TABLE statement.
4. **Data Insertion:** Formats and inserts data into the table.
5. **AI Querying:** Google Gemini and Langchain enable natural language and SQL-based queries over the data.

## Credentials
- **Google Drive:** Requires Google Drive OAuth2 credentials.
- **Google Gemini:** Requires Google Gemini (PaLM) API credentials.

## Usage Instructions
- Configure the `change_this` node with the correct table URL and sheet name.
- Ensure all required credentials are set up in n8n.
- Make changes to the monitored Google Sheet to trigger the workflow.
- Use the AI chat model or SQL tools to query the ingested data.

## Notes
- The workflow is modular and can be extended for additional data sources or downstream analytics.
- All SQL operations are dynamically generated based on the sheet's schema and data.

---
*Last processed: 10/06/2025 13:10*
