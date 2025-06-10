# Sample Spotify Track Info

## Summary
Manually retrieves information about a specific Spotify track using the n8n Spotify node.

## Description
This workflow allows a user to manually trigger the retrieval of detailed information for a specific Spotify track by its ID. Useful for testing Spotify API connections or integrating track info into other automations.

## Input Triggers
- Manual Trigger (user clicks "execute")

## Output
- Spotify track information (all metadata returned by the Spotify node).

## Nodes Involved
- Manual Trigger: Starts the workflow when the user clicks "execute".
- Spotify: Fetches details for a specified Spotify track ID.

## High-Level Process Flow
- User manually triggers the workflow
- Fetch Spotify track info using the specified track ID

## Detailed Process Description
1. **Manual Trigger** node initiates the workflow when the user clicks "execute" in n8n.
2. **Spotify** node retrieves information for the hardcoded track ID (`spotify:track:6SPOM20nWbQSBvTwzgIzqg`).

## Additional Notes
- Requires a valid Spotify OAuth2 credential configured in n8n.
- The track ID can be changed in the Spotify node parameters for different tracks.
