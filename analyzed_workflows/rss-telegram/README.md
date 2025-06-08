# rss-telegram

## Summary
Automates the delivery of Instagram and Weibo RSS feed updates to Telegram channels, with logic for handling images, deduplication, and message formatting.

## Description
This workflow reads RSS feeds from Instagram and Weibo, processes each entry, checks for duplicates, extracts images, and sends updates to Telegram channels. It supports both text and image posts, and uses logic nodes to determine how to format and deliver each message.

## Input Triggers
- Cron Trigger (scheduled, e.g., every minute)

## Output
- Posts sent to Telegram channels (with or without images)

## Nodes Involved
- **Cron1**: Scheduled trigger for polling RSS feeds.
- **instagram rss**: Reads Instagram RSS feed.
- **weibo rss**: Reads Weibo RSS feed.
- **SplitInBatches/SplitInBatches1**: Processes feed items one at a time.
- **Function/Function1/NaN**: Extracts, deduplicates, and processes feed content and images.
- **IF/IF1/是否重复/图片数量判断**: Conditional logic for deduplication and image presence.
- **Telegram/一张图片/其他情况/send**: Sends messages or images to Telegram channels.

## High-Level Process Flow
1. Cron triggers the workflow.
2. Reads Instagram and Weibo RSS feeds.
3. Processes each item in batches.
4. Deduplicates items using static data.
5. Extracts images if present.
6. Determines message type (image or text) and sends to Telegram.

## Detailed Process Description
1. **Cron1**: Initiates the workflow on a schedule.
2. **instagram rss / weibo rss**: Fetches latest posts from Instagram or Weibo.
3. **SplitInBatches**: Iterates through feed items.
4. **Function/Function1/NaN**: Extracts content, checks for duplicates, and manages state.
5. **IF/IF1/是否重复/图片数量判断**: Determines if the post is new and if it contains images.
6. **Telegram/一张图片/其他情况/send**: Sends the appropriate message or image to the Telegram channel.

## Additional Notes
- Requires Telegram Bot API credentials.
- RSS feed URLs and Telegram chat IDs must be set in the workflow nodes.
- Can be extended for other feeds, richer formatting, or additional deduplication logic.
