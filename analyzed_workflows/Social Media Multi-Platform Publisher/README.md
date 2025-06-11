# Social Media Multi-Platform Publisher

## Summary
Automates publishing videos and images to multiple social media platforms using Blotato as the backend.

## Description
This workflow streamlines the process of sharing media content (videos and images) across various social media platforms. It fetches content and metadata from Airtable, prepares the data, uploads media to Blotato, and posts to Instagram, Facebook, LinkedIn, TikTok, Pinterest, YouTube, Threads, Twitter, and Bluesky using HTTP requests. This ensures consistent and efficient multi-platform publishing for marketing or content teams.

## Input Triggers
- Manual trigger (e.g., via Airtable Record ID or n8n manual execution)

## Output
- Posts (videos/images) published on multiple social media platforms
- Airtable updated with posted status

## Nodes Involved
- **Airtable**: Fetches content and metadata for posts
- **Set**: Prepares data for publishing
- **HTTP Request**: Uploads media and posts to social platforms via Blotato API
- **Sticky Note**: Internal documentation

## High-Level Process Flow
- Fetch content and metadata from Airtable
- Prepare data for each target platform
- Upload media (video/image) to Blotato
- Publish to each social media platform via HTTP requests
- Update Airtable with post status

## Detailed Process Description
1. **Airtable**: Retrieves relevant content, media URLs, and metadata for the post.
2. **Prepare for Publish (Set)**: Structures data for downstream nodes, including platform-specific IDs and text.
3. **Upload Image/Video to Blotato**: Uploads media files to Blotato for centralized handling.
4. **HTTP Request Nodes**: For each platform (Instagram, Facebook, LinkedIn, TikTok, Pinterest, YouTube, Threads, Twitter, Bluesky), sends a POST request to Blotato's API with the appropriate payload and credentials.
5. **Airtable Update**: Marks the post as published on Airtable after successful posting.
6. **Sticky Notes**: Provide in-workflow documentation and guidance.

## Additional Notes
- Requires Blotato API credentials (httpHeaderAuth)
- Requires Airtable API credentials
- Ensure all platform-specific IDs and tokens are valid
- Workflow is modular and can be extended to additional platforms if needed
