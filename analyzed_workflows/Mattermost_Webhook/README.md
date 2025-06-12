# Mattermost Webhook

## Summary
Receives a webhook, fetches a random cocktail recipe, and posts it to a Mattermost channel with an image and instructions.

## Description
This workflow is triggered by an incoming HTTP POST webhook. Upon receiving the webhook, it fetches a random cocktail recipe from TheCocktailDB API and posts the recipe details, including an image and instructions, to a specified Mattermost channel. The channel is determined by the incoming webhook payload.

## Input Triggers
- HTTP POST webhook (path: `/webhook`)

## Output
- Cocktail recipe message (with image and instructions) sent to a Mattermost channel

## Nodes Involved
- **Webhook**: Receives incoming HTTP POST requests to trigger the workflow.
- **HTTP Request**: Fetches a random cocktail recipe from TheCocktailDB.
- **Mattermost**: Posts the cocktail recipe to a Mattermost channel.

## High-Level Process Flow
- Receive HTTP POST request via webhook
- Fetch random cocktail recipe from TheCocktailDB
- Format and post recipe details to Mattermost channel

## Detailed Process Description
1. **Webhook** node receives an HTTP POST request, extracting the target Mattermost channel ID from the payload.
2. **HTTP Request** node fetches a random cocktail recipe from TheCocktailDB API.
3. **Mattermost** node formats a message with the cocktail name, instructions, glass type, and image, then posts it to the specified channel.

## Additional Notes
- Requires Mattermost API credentials configured in n8n.
- The workflow can be used for fun team engagement or daily random recipe sharing.
- The webhook path and Mattermost channel can be customized as needed.
