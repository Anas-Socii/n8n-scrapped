# n8n Connections and Credentials

## Connections in Workflows

In the context of an n8n workflow diagram, "connections" refer to the visual lines drawn between nodes. These lines dictate the flow of data and the order of execution.

-   **Output to Input**: Each connection links an output "port" of one node to an input "port" of another. Most nodes have one main input and one main output, but some (like `If` or `Switch`) can have multiple output ports for different branches.
-   **Data Path**: Data items produced by a node travel along these connections to the next node(s).
-   **Execution Path**: The connections also define the sequence in which nodes are executed.

## Credentials Management

A critical aspect of n8n is its ability to interact with a multitude of third-party applications and services. Most of these interactions require authentication (e.g., API keys, OAuth2 tokens, username/password). n8n provides a secure and centralized way to manage these credentials.

### What are Credentials?

-   Credentials are the authentication details needed to access a specific service on behalf of a user.
-   Instead of hardcoding sensitive information directly into workflows, n8n allows you to store them securely.
-   When a node needs to authenticate with a service (e.g., a `Google Sheets` node needing to access your Google account), it references a pre-configured credential entry.

### How Credentials Work:

1.  **Configuration**:
    *   Users add credentials in the n8n interface (usually under "Credentials" or "Connections" in the main menu, depending on the n8n version and UI).
    *   For each service, n8n provides a specific form to input the required authentication details (e.g., API Key, Client ID, Client Secret).
    *   For OAuth2-based services (common for Google, Microsoft, etc.), n8n guides the user through the OAuth2 authorization flow, where the user grants n8n permission to access their account. n8n then securely stores the resulting tokens.

2.  **Storage**:
    *   Credentials are encrypted and stored in n8n's database.
    *   The encryption key is crucial for security. In self-hosted environments, managing this key (`N8N_ENCRYPTION_KEY`) properly is very important.

3.  **Usage in Nodes**:
    *   When configuring a node that requires authentication (e.g., `Asana` node, `Twitter` node), the user selects the appropriate pre-configured credential from a dropdown list.
    *   The node's JSON definition in the workflow will store a reference (an ID) to this credential, not the credential details themselves.
    *   Example:
        ```json
        {
          "parameters": {},
          "name": "Google Sheets",
          "type": "n8n-nodes-base.googleSheets",
          "typeVersion": 1,
          "position": [800, 300],
          "credentials": { // This block indicates credentials are used
            "googleSheetsOAuth2Api": { // The type of credential
              "id": "15", // The ID of the specific credential entry in n8n's database
              "name": "My Google Sheets Account" // Human-readable name of the credential
            }
          }
        }
        ```

4.  **Execution**:
    *   When a workflow runs, n8n retrieves the necessary encrypted credential details from its database using the referenced ID.
    *   It decrypts them and uses them to make authenticated API calls to the external service.
    *   The actual sensitive values (API keys, tokens) are never directly exposed in the workflow's JSON or logs (unless explicitly made to do so by a user, which is bad practice).

### Types of Credentials Supported:

n8n supports various authentication mechanisms, including:
-   API Keys (Header Auth, Query Param Auth)
-   Basic Authentication (Username/Password)
-   OAuth1
-   OAuth2 (Client Credentials, Authorization Code)
-   Digest Authentication
-   Custom authentication flows for specific nodes.

### Importance for AI Agents:

When an AI agent analyzes an n8n workflow JSON:
-   It will see a `credentials` object within nodes that connect to external services.
-   This object will contain an **ID** and **name** for the credential, but **NOT the actual secret values**.
-   The agent should understand that this ID points to a securely stored credential configuration within the n8n instance where the workflow runs.
-   The agent cannot access or use the actual secrets from the JSON alone. It only knows *that* a credential is used and *which* pre-configured one it is.
-   This is a security feature. To execute the workflow or replicate its authenticated interactions, one would need access to the n8n instance with those credentials configured.

This document should clarify for an AI agent how n8n handles both the logical flow (connections) and the secure authentication (credentials) aspects of its workflows.
