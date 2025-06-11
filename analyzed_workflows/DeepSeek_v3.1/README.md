# DeepSeek v3.1

## Summary
This workflow automates smart content creation and publishing by reacting to Notion database updates, generating SEO-optimized articles, publishing them to WordPress, and notifying users via email.

## Description
- **Purpose:** Streamlines the process of content creation, publishing, and notification based on updates in a Notion database.
- **Automation:** Uses an AI Task Planner to generate articles, publish them, and update Notion and users, ensuring each step is completed before the next.

## Workflow Structure
- **Trigger:** Notion database update (polls every hour)
- **Main Nodes:**
  - **AI Task Planner:** Generates SEO-optimized articles and orchestrates the workflow.
  - **Send Email:** Notifies users with article details.
  - **Publish Blog Post:** Publishes the generated content to WordPress as a draft.
  - **Notion List Available Tools / Run a Tool:** Integrates with Notion for further automation.
  - **Sticky Notes:** Document workflow logic and provide user instructions.

## Process Flow
1. **Trigger:** Detects a page update in a specified Notion database.
2. **AI Task Planner:** Generates an SEO-optimized article based on Notion data.
3. **Publish Blog Post:** Publishes the article to WordPress as a draft.
4. **Send Email:** Sends an email with the article's title and URL to the user.
5. **Notion Integration:** Lists available Notion tools and updates the Notion database entry with article details.

## Credentials
- **Notion:** Requires Notion API credentials.
- **WordPress:** Requires WordPress API credentials.
- **Gmail:** Requires Gmail OAuth2 credentials.

## Usage Instructions
- Ensure all required credentials are configured in n8n.
- Update or add a page in the monitored Notion database to trigger the workflow.
- Review published drafts in WordPress and check your email for notifications.

## Notes
- The workflow is modular and can be extended to support additional publishing platforms or notification methods.
- The AI Task Planner ensures each step is completed sequentially for reliability.

---
*Last processed: 10/06/2025 13:10*
