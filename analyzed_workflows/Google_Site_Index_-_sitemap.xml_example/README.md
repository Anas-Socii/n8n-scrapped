# Google Site Index - sitemap.xml example

## Summary
This workflow automates the process of extracting URLs from a sitemap.xml, checking their status with the Google Indexing API, and notifying Google of updated URLs. It supports both manual and scheduled triggers.

## Description
- **Purpose:** Streamlines the submission and status checking of site URLs for Google Indexing, ensuring that new or updated pages are promptly indexed.
- **Automation:** Extracts URLs, checks their indexing status, and sends update notifications to Google, with batching and waiting to comply with API rate limits.

## Workflow Structure
- **Triggers:**
  - **Manual Trigger:** For ad-hoc runs.
  - **Schedule Trigger:** For automated, periodic execution.
- **Main Nodes:**
  - **Split Out:** Extracts individual URLs from the sitemap.
  - **Check status:** Queries the Google Indexing API for each URL's current status.
  - **Loop Over Items:** Processes URLs in batches.
  - **is new?:** Determines if a URL is new or updated since the last notification.
  - **URL Updated:** Notifies Google Indexing API of updated URLs.
  - **Wait:** Adds a delay to respect API limits.
  - **Sticky Notes:** Document workflow logic and provide user instructions.

## Process Flow
1. **Trigger:** Workflow is started manually or on a schedule.
2. **Extract URLs:** Split Out node extracts URLs from the sitemap.
3. **Check Status:** Each URL's indexing status is checked.
4. **Batch Processing:** URLs are processed in batches with delays.
5. **Update Notification:** For new/updated URLs, a notification is sent to Google Indexing API.

## Credentials
- **Google OAuth2:** Required for authenticating with the Google Indexing API.

## Usage Instructions
- Configure the trigger (manual or schedule) as needed.
- Ensure Google OAuth2 credentials are set up in n8n.
- Adjust batch and wait settings to comply with Google API usage policies.

## Notes
- The workflow is modular and can be extended for additional sitemap processing or notification logic.
- Sticky Notes provide guidance for setup and customization.

---
*Last processed: 10/06/2025 13:10*
