# Perplexity Research to HTML: AI-Powered Content Creation

## Summary
This workflow leverages Perplexity AI and GPT-4o-mini to research a user-provided topic, generate a structured article, and convert it into clean, professional HTML content suitable for publishing.

## Description
- Accepts a research topic from the user.
- Uses Perplexity AI and GPT-4o-mini to generate a structured article with metadata, sections, and hashtags.
- Converts the article JSON into HTML following strict formatting rules (no <html>, <body>, <style>, <head> tags, uses <h1>, <h2>, <p>, <blockquote>, etc.).
- Returns a JSON response containing only the article title and HTML content, ready for publishing or further automation.

## Input Triggers
- Likely a webhook or manual trigger for user topic submission.

## Output
- JSON object with `title` and `content` (HTML-formatted article).

## Nodes Involved
- **ai_tool (gpt-4o-mini-2024-07-18):** Main language model for content generation.
- **Perplexity Researcher:** Calls Perplexity API for research.
- **Structured Output Parser:** Ensures output matches schema.
- **If/Branch Nodes:** Handles missing topic or error cases.
- **Webhook/Manual Trigger:** Receives user topic.
- **Telegram Node (optional):** May send results to Telegram chat.

## High-Level Process Flow
1. Receive topic from user (webhook or manual).
2. Call Perplexity AI to research the topic.
3. Use GPT-4o-mini to generate a structured article.
4. Convert article JSON to HTML with strict formatting.
5. Return or send the HTML article.

## Detailed Process Description
- Receives a topic and validates its presence.
- Calls Perplexity for research and GPT-4o-mini for article generation.
- Parses and validates the structured output.
- Converts the article into HTML, applying formatting guidelines.
- Returns a JSON with the article `title` and HTML `content`.

## Additional Notes
- Requires valid Perplexity and OpenAI API credentials.
- Strict HTML formatting is enforced for publishing compatibility.
- Can optionally output to Telegram or other channels.
