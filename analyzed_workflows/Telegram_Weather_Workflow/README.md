# Telegram Weather Workflow

## Summary
Provides current weather updates in a Telegram chat upon receiving a message trigger.

## Description
This workflow listens for incoming Telegram messages, fetches the latest weather data for a specified city from OpenWeatherMap, and responds in the chat with a formatted weather update. It demonstrates real-time integration between Telegram and weather APIs.

## Input Triggers
- Telegram Trigger (on new message)

## Output
- Weather update message sent to the Telegram chat.

## Nodes Involved
- **Telegram Trigger**: Listens for new messages in a Telegram chat.
- **OpenWeatherMap**: Fetches current weather data for the configured city.
- **Telegram**: Sends the weather update message to the chat.

## High-Level Process Flow
1. Telegram Trigger node receives a new message.
2. OpenWeatherMap node fetches weather data for the specified city.
3. Telegram node sends a weather update message back to the chat.

## Detailed Process Description
1. **Telegram Trigger**: Initiates the workflow when a new message is received in the chat.
2. **OpenWeatherMap**: Uses the city name to retrieve current weather and temperature data.
3. **Telegram**: Formats and sends a message with weather conditions and temperature to the chat.

## Additional Notes
- Requires valid Telegram Bot API and OpenWeatherMap API credentials.
- The city name can be customized in the workflow configuration.
- The workflow is active and ready to respond to Telegram messages.
