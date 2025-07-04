# Text to Speech (OpenAI)

## Summary
Converts input text into speech audio using OpenAI's Text-to-Speech (TTS) API.

## Description
This workflow allows users to input custom text and select a TTS voice, then sends a request to OpenAI's TTS endpoint to generate an audio (MP3) file. It demonstrates how to use n8n for AI-powered speech synthesis, suitable for prototyping, accessibility, or voice content creation.

## Input Triggers
- Manual Trigger ("Test workflow")

## Output
- MP3 audio file generated by OpenAI's TTS API

## Nodes Involved
- **Manual Trigger**: Starts the workflow manually.
- **Set input text and TTS voice**: Sets the text and voice for TTS.
- **Send HTTP Request to OpenAI's TTS Endpoint**: Calls OpenAI API to generate speech.
- **Sticky Notes**: Provide configuration, usage, and output details.

## High-Level Process Flow
- Manually trigger the workflow.
- Set input text and select TTS voice.
- Send request to OpenAI's TTS endpoint.
- Receive and store the generated MP3 audio file.

## Detailed Process Description
1. **Manual Trigger**: User initiates the workflow.
2. **Set input text and TTS voice**: User defines the text and selects the voice (e.g., "alloy").
3. **Send HTTP Request to OpenAI's TTS Endpoint**: Workflow sends a POST request with the input text and voice to OpenAI's API, using API credentials.
4. **Sticky Notes**: Document configuration options, output file type, and credential requirements.

## Additional Notes
- **Credentials**: Requires OpenAI API credentials.
- **Voice Options**: Default is "alloy"; see [OpenAI TTS Docs](https://platform.openai.com/docs/guides/text-to-speech) for more.
- **Output**: Returns an MP3 audio file.
- **Customization**: Replace manual trigger with another trigger as needed.
