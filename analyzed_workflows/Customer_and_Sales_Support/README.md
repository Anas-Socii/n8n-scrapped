# Customer and Sales Support

## Summary
Automates customer and sales support for "My Apple Case" by handling chat-based customer queries, placing orders, and updating inventory in Google Sheets using AI-powered agent logic.

## Description
This workflow serves as a virtual customer support agent for an e-commerce business selling Apple phone cases. It receives customer messages, uses an AI agent to interpret requests, checks inventory, places orders, and updates stock in real time. The workflow leverages advanced AI and Google Sheets integration to streamline support and order management, providing a seamless experience for both customers and operators.

## Input Triggers
- Chat message received (LangChain Chat Trigger)

## Output
- Orders appended to Google Sheets
- Inventory updated in Google Sheets
- AI-powered chat responses to customers

## Nodes Involved
- **@n8n/n8n-nodes-langchain.chatTrigger**: Listens for incoming chat messages from customers.
- **@n8n/n8n-nodes-langchain.lmChatOpenAi**: Processes customer messages using OpenAI's GPT-4.1 model for natural language understanding.
- **@n8n/n8n-nodes-langchain.memoryBufferWindow**: Maintains chat context for ongoing conversations.
- **n8n-nodes-base.googleSheetsTool**: Appends new orders and updates inventory in Google Sheets.
- **@n8n/n8n-nodes-langchain.agent**: Implements the customer support agent's logic, tool usage, and response rules.

## High-Level Process Flow
- Receive chat message from customer
- Use AI agent to interpret and respond
- Check stock for requested phone case
- Place order if stock is available
- Update inventory after order placement
- Respond to customer with order status and stock updates

## Detailed Process Description
1. **Chat Trigger**: Activates workflow when a customer sends a message.
2. **Simple Memory**: Stores conversation history for context.
3. **OpenAI Chat Model**: Analyzes customer intent and generates responses.
4. **Support Agent (LangChain Agent)**: Follows strict logic for stock checking, order placement, and updating inventory, ensuring correct case selection and customer interaction.
5. **GetStock (Google Sheets Tool)**: Queries inventory for requested phone model and returns available cases.
6. **Place Order (Google Sheets Tool)**: Appends order details to the sales sheet.
7. **Update Stock (Google Sheets Tool)**: Updates inventory quantities after a successful order.
8. **AI-powered chat responses**: Keeps the customer informed at every step, with multilingual support and embedded images if available.

## Additional Notes
- Requires Google Sheets and OpenAI API credentials.
- Designed for atomic operation—each customer interaction is handled independently.
- System messages and tool usage strictly follow business rules for accuracy and compliance.
- Multilingual support for English and Roman-Nepali.
