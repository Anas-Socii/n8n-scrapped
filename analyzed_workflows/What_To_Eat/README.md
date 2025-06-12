# What To Eat

## Summary
Sends daily personalized recipe suggestions via email based on user-defined dietary criteria and preferences.

## Description
This workflow automates the process of recommending recipes according to dietary needs, calorie limits, and ingredient preferences. It queries the Edamam API, formats the results, and sends the top recipes to the user’s email every day.

## Input Triggers
- Cron (scheduled daily at 10:00 AM)

## Output
- Email with a curated list of recipes matching the user’s preferences

## Nodes Involved
- **Cron**: Triggers the workflow on a schedule.
- **Set**: Defines search criteria (diet, calories, ingredients, etc.).
- **Function**: Prepares and randomizes query parameters.
- **HTTP Request**: Fetches recipe data from Edamam API.
- **EmailSend**: Sends the recipe results to the user.
- **Create Email Body in HTML**: Formats the recipe list for email.

## High-Level Process Flow
- Trigger daily at 10:00 AM
- Set and randomize recipe search criteria
- Query Edamam API for available recipes
- Format the recipes into an HTML email
- Send the email to the user

## Detailed Process Description
1. **Cron** node triggers the workflow at the scheduled time.
2. **Set** and **Function** nodes establish and randomize dietary search parameters.
3. **HTTP Request** nodes retrieve recipe counts and details from the Edamam API.
4. **Set Counts** node stores the number of available recipes and determines how many to return.
5. **Create Email Body in HTML** node builds a user-friendly email body listing recipe links.
6. **EmailSend** node delivers the email to the specified address.

## Additional Notes
- Requires valid Edamam API credentials (AppID and AppKey).
- SMTP credentials must be configured for email delivery.
- The workflow can be customized for different dietary or scheduling needs.
