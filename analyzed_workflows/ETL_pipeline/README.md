# ETL pipeline

## Summary
Extracts tweets, performs sentiment analysis, stores results in MongoDB and Postgres, and notifies via Slack.

## Description
This workflow automates an ETL (Extract, Transform, Load) process for Twitter data. It searches for tweets with a specific hashtag, analyzes their sentiment, stores the results in both MongoDB and Postgres databases, and sends notifications to a Slack channel. This is useful for social media analytics and monitoring.

## Input Triggers
- **None (scheduled or manual execution assumed)**

## Output
- Tweets with sentiment scores stored in databases and posted to Slack.

## Nodes Involved
- **Twitter**: Searches for tweets with a specific hashtag.
- **MongoDB**: Inserts tweet text into a MongoDB collection.
- **Postgres**: Stores tweet text, sentiment score, and magnitude in a Postgres table.
- **Slack**: Sends a notification with tweet details and sentiment analysis.
- **IF**: Conditional logic for workflow branching.

## High-Level Process Flow
- Search for tweets.
- Insert tweet text into MongoDB.
- Analyze sentiment and store in Postgres.
- Notify via Slack.
- Branch workflow as needed.

## Detailed Process Description
1. **Twitter**: Searches for tweets with the hashtag `#OnThisDay`.
2. **MongoDB**: Inserts tweet text into the `tweets` collection.
3. **Postgres**: Stores tweet text, sentiment score, and magnitude in the `tweets` table.
4. **Slack**: Sends a message to the `tweets` channel with tweet details and sentiment.
5. **IF**: Handles branching logic for further processing.

## Additional Notes
- **Credentials**: Requires Twitter, MongoDB, Postgres, and Slack API credentials.
- **Customization**: Hashtag, database tables, and Slack channel can be adjusted.
- **Performance**: Efficient for small to moderate tweet volumes.
- **Disclaimer**: Ensure compliance with all API usage and data privacy policies.
