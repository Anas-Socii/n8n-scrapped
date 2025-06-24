# Cocktail Recipe Sharing

## Summary
This workflow shares a random cocktail recipe with an image to a Rocketchat channel on a scheduled basis.

## Description
The workflow is triggered on a schedule (every Friday at 18:00). It fetches a random cocktail recipe from TheCocktailDB API, generates a shareable image using Bannerbear with the cocktail's image, name, and recipe, and posts it to a Rocketchat channel as an attachment. This is ideal for community engagement or team fun.

## Input Triggers
- Cron (scheduled every Friday at 18:00)

## Output
- A message with a cocktail image and recipe posted to Rocketchat.

## Nodes Involved
- **Cron:** Triggers the workflow on a weekly schedule.
- **HTTP Request:** Fetches a random cocktail recipe from TheCocktailDB API.
- **Bannerbear:** Generates an image with the cocktail's details.
- **Rocketchat:** Posts the generated image and recipe to a Rocketchat channel.

## High-Level Process Flow
- Trigger on schedule (Friday 18:00)
- Fetch random cocktail recipe
- Generate image with recipe using Bannerbear
- Post image and recipe to Rocketchat

## Detailed Process Description
1. **Cron:** Triggers the workflow every Friday at 18:00.
2. **HTTP Request:** Calls TheCocktailDB API to get a random cocktail's details.
3. **Bannerbear:** Uses the cocktail's image, name, and instructions to generate a shareable image.
4. **Rocketchat:** Posts the image and recipe as an attachment to the specified channel.

## Additional Notes
- Requires valid Bannerbear and Rocketchat credentials.
- The Bannerbear template should be configured to accept image, title, and recipe text fields.
- Ensure the Rocketchat channel is correctly set in the node parameters.
- The workflow can be extended to post to other chat platforms or social media.
