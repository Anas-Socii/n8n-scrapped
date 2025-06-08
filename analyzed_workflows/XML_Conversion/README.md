# XML Conversion

## Summary
Converts XML data to JSON using n8n, triggered manually for ad hoc XML processing and transformation.

## Description
This workflow allows users to convert XML data into JSON format. It is triggered manually, sets the XML content, and uses the XML node to parse and transform the data for further processing or integration.

## Input Triggers
- Manual Trigger (user clicks 'execute')

## Output
- JSON representation of the provided XML data

## Nodes Involved
- **On clicking 'execute'**: Manual trigger for workflow execution.
- **Set**: Assigns the XML string to a variable for processing.
- **XML**: Parses the XML string and converts it to JSON.

## High-Level Process Flow
1. User manually triggers the workflow.
2. The Set node assigns the XML string to the data property.
3. The XML node parses the XML and outputs the result as JSON.

## Detailed Process Description
1. **On clicking 'execute'**: Allows the workflow to be started manually for flexible XML conversion.
2. **Set**: Stores the XML string in a workflow variable named `xml`.
3. **XML**: Converts the XML string to a JSON object for further use or export.

## Additional Notes
- The XML string can be modified in the Set node for different XML structures.
- Useful for integrating XML data sources with systems that require JSON.
