# Get Only New RSS with Photo

## Summary
Fetches new RSS feed items from The Verge every 5 minutes, extracts image and metadata, and outputs only unseen items.

## Description
This workflow periodically polls The Verge RSS feed, extracts relevant fields and images from each entry, and filters out any items that have already been processed, ensuring only new articles with images are output. Useful for building up-to-date news digests or media feeds.

## Input Triggers
- Cron (every 5 minutes)

## Output
- New RSS items with images and metadata (title, subtitle, author, URL, date, content).

## Nodes Involved
- Cron: Triggers the workflow on a schedule.
- RSS Feed Read: Fetches RSS items from a specified feed.
- Set: Extracts and formats relevant fields from each RSS item.
- Function: Filters out items already processed using workflow static data.
- HTML Extract: Extracts the image URL from the RSS item's HTML content.

## High-Level Process Flow
- Trigger every 5 minutes
- Fetch latest RSS items
- Extract and format relevant fields
- Filter out previously seen items
- Extract image from content

## Detailed Process Description
1. **Cron** triggers the workflow every 5 minutes.
2. **RSS Feed Read** fetches items from The Verge RSS feed.
3. **Set** node extracts fields such as title, subtitle, author, URL, date, and content.
4. **Function** node checks which items are new by comparing dates with stored static data.
5. **HTML Extract** node extracts the first image URL from the content HTML.

## Additional Notes
- The workflow stores seen RSS item dates in workflow static data, so it only outputs new items each run.
- Make sure the RSS feed URL is correct and accessible from your n8n instance.
