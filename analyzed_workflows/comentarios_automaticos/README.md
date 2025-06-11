# comentarios automaticos

## Summary
Handles Instagram webhook verification and generates automated, context-aware responses to comments using AI.

## Description
This workflow verifies Instagram webhook setup and uses AI to analyze and respond to comments on Instagram posts. It ensures only relevant comments receive thoughtful replies, while spam or irrelevant messages are ignored as per defined rules.

## Input Triggers
- **Webhook**: Receives events from Instagram's API.

## Output
- Automated responses to Instagram comments, or ignores spam/irrelevant content.

## Nodes Involved
- **Webhook**: Handles incoming webhook events.
- **Respond to Webhook**: Sends verification or response.
- **AI Agent**: Analyzes comments and generates responses.
- **OpenRouter Chat Model**: Uses AI model for response generation.

## High-Level Process Flow
- Receive webhook event from Instagram.
- Verify webhook setup if required.
- Analyze comment content and context.
- Generate and send an appropriate response, or ignore spam.

## Detailed Process Description
1. **Webhook**: Receives and verifies webhook events from Instagram.
2. **Respond to Webhook**: Confirms webhook setup or responds to comment.
3. **AI Agent**: Analyzes comment intent and generates a context-aware reply.
4. **OpenRouter Chat Model**: Uses AI to craft the response in Brazilian Portuguese.

## Additional Notes
- **Credentials**: Requires Instagram App and OpenRouter API credentials.
- **Customization**: AI prompt and filtering rules can be adjusted.
- **Performance**: Dependent on Instagram and AI API response times.
- **Disclaimer**: Ensure compliance with Instagram and data privacy policies.
