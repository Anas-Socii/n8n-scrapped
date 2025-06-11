# AI Agent with charts capabilities using OpenAI Structured Output

## Summary
AI agent workflow that generates charts based on user queries using OpenAI's structured output and integrated tools.

## Description
This workflow enables users to interact with an AI agent that can generate charts on demand. It uses OpenAI for natural language understanding, memory for conversation context, and a tool workflow for chart generation. Designed for data analysis and visualization scenarios.

## Input Triggers
- **None specified** (likely triggered by user query or another process)

## Output
- Charts generated based on user queries.

## Nodes Involved
- **OpenAI Chat Model**: Handles user queries and generates structured output.
- **Window Buffer Memory**: Maintains conversation context.
- **Generate a chart**: Tool node for chart generation.
- **Execute "Generate a chart" tool**: Triggers the chart generation workflow.
- **OpenAI - Generate Chart definition with Structured Output**: HTTP request for chart definition.

## High-Level Process Flow
- Receive user query.
- Generate chart definition using OpenAI.
- Execute chart generation tool.
- Return chart to user.

## Detailed Process Description
1. **OpenAI Chat Model**: Receives and interprets user query.
2. **Window Buffer Memory**: Maintains conversation state.
3. **Generate a chart**: Defines chart generation workflow and schema.
4. **Execute "Generate a chart" tool**: Runs the chart generation process.
5. **OpenAI - Generate Chart definition with Structured Output**: Retrieves chart definition from OpenAI.

## Additional Notes
- **Credentials**: Requires OpenAI API credentials.
- **Customization**: Chart types, schema, and prompts can be adjusted.
- **Disclaimer**: Ensure compliance with OpenAI usage policies and data privacy regulations.
