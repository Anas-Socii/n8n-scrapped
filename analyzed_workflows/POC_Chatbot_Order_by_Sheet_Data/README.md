# POC - Chatbot Order by Sheet Data

## Summary
A proof-of-concept chatbot workflow that retrieves product data from a sheet and allows users to order products via chat.

## Description
This workflow demonstrates a chatbot that interacts with users, fetches product details from a remote sheet, and places orders using HTTP requests. It leverages OpenAI for conversation, memory management, and calculation tools to enhance the chat experience.

## Input Triggers
- **Chat OpenAI**: Initiates chat-based interaction with users.

## Output
- Orders placed and product information returned to the user.

## Nodes Involved
- **Chat OpenAI**: Handles user conversation using OpenAI's API.
- **Calculator**: Performs calculations as needed within the chat.
- **Window Buffer Memory**: Maintains conversation context.
- **Get Products**: Retrieves product data from a remote sheet via HTTP request.
- **Order Product**: Places an order for the selected product via HTTP POST request.

## High-Level Process Flow
- User initiates chat.
- Chatbot fetches product data.
- User selects a product.
- Chatbot places the order.
- Conversation context and calculations are managed throughout.

## Detailed Process Description
1. **Chat OpenAI**: Receives and processes chat input from the user.
2. **Window Buffer Memory**: Maintains the state of the conversation.
3. **Get Products**: Fetches available products from a remote sheet.
4. **Order Product**: Submits the user's order via HTTP POST.
5. **Calculator**: Handles any calculations required during the chat.

## Additional Notes
- **Credentials**: Requires OpenAI API credentials.
- **Customization**: Product endpoints and chat prompts can be adjusted.
- **Disclaimer**: Ensure API endpoints are accessible and compliant with data privacy policies.
