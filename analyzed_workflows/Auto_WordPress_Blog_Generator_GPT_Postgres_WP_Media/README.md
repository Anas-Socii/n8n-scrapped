# Auto WordPress Blog Generator (GPT + Postgres + WP Media)

## Summary
Automates the creation and publishing of WordPress blog posts using AI-generated content, category selection, and media management, leveraging GPT models, Postgres, and WP Media integration.

## Description
This workflow orchestrates the end-to-end process of generating, assembling, and publishing blog posts to WordPress. It uses scheduled triggers to initiate the process, GPT models for content and title generation, filters and merges category and headline data, downloads and uploads media, and finally posts the complete article to WordPress. The workflow is modular and supports category filtering, SEO optimization, and media handling for robust automated publishing.

## Input Triggers
- Schedule Trigger (runs at defined intervals)

## Output
- Published WordPress blog post with AI-generated content and featured media

## Nodes Involved
- **Schedule Trigger:** Initiates the workflow on a set schedule.
- **OpenAI Chat Model / AI Agent Nodes:** Generate blog content and SEO-optimized titles using GPT.
- **Category and Headline Processing Nodes:** Filter and select categories and generate headlines.
- **HTTP Request (Download Image):** Downloads images for use as featured media.
- **Media Upload to WP:** Uploads images to WordPress.
- **Merge/Prepare Post JSON:** Assembles all data for final blog post.
- **Post to WP:** Publishes the post to WordPress.
- **Sticky Notes:** Provide documentation and logic explanations within the workflow.

## High-Level Process Flow
- Trigger on schedule
- Select and filter categories
- Generate headlines and content with GPT
- Download and upload media
- Merge all post data
- Publish post to WordPress

## Detailed Process Description
1. **Schedule Trigger:** Fires at configured intervals to start the workflow.
2. **Category Selection:** Loads and filters categories, picking less-used ones for diversity.
3. **Headline Generation:** Uses GPT to generate SEO-friendly headlines for the selected category.
4. **Content Generation:** GPT generates full HTML blog content based on the headline and category.
5. **Media Handling:** Downloads a relevant image and uploads it to WordPress as featured media.
6. **Merge Data:** Combines all generated and selected data into a structured post object.
7. **Publish:** Posts the assembled article to WordPress using the prepared JSON.

## Additional Notes
- Requires valid OpenAI and WordPress credentials.
- Postgres may be used for storing and tracking published posts.
- Workflow is extensible for new content types or publishing platforms.
- Sticky Notes provide in-workflow guidance and logic explanations.
