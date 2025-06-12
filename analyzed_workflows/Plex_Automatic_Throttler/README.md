# Plex Automatic Throttler

## Summary
Automatically manages and throttles Plex-related network activity based on playback events, ensuring optimal bandwidth usage.

## Description
This workflow listens for Plex playback events (play, pause, stop, resume) and toggles download speed throttling in a connected qBittorrent instance. It ensures that when Plex is actively streaming, bandwidth is prioritized for streaming, and when not streaming, download speeds can resume.

## Input Triggers
- Webhook (receives Plex playback events)

## Output
- Adjusts qBittorrent speed limits via HTTP requests
- No direct user-facing output

## Nodes Involved
- **Webhook**: Receives playback events from Plex.
- **Switch**: Determines the type of playback event (play, pause, stop, resume).
- **If**: Checks if the event is from a local or remote source.
- **HTTP Request**: Authenticates and interacts with qBittorrent API to toggle speed limits.
- **Set**: Stores global variables (e.g., qBittorrent credentials).
- **NoOp**: Used for logical flow control (Resume, Play, Pause, Stop, Do Nothing, etc.).

## High-Level Process Flow
- Receive playback event from Plex via webhook
- Determine event type (play, pause, stop, resume)
- Check if event is local or remote
- If local, do nothing
- If remote, authenticate with qBittorrent
- Check current throttle state
- Enable or disable throttling based on playback event

## Detailed Process Description
1. **Webhook** node receives a POST from Plex with playback event details.
2. **Global Variables** node sets qBittorrent credentials and connection info.
3. **Check if Local** node determines if the event is from a local source. If yes, the workflow ends.
4. **Switch** node parses the event type (play, pause, stop, resume).
5. Depending on the event type, the workflow routes to corresponding NoOp nodes (Resume, Play, Pause, Stop).
6. **Throttle Connection** and other HTTP Request nodes interact with qBittorrent to get cookies, check throttle state, and enable/disable throttling as needed.
7. The workflow ensures bandwidth is managed efficiently based on Plex activity.

## Additional Notes
- Requires qBittorrent instance with API access.
- qBittorrent credentials must be set in the workflow.
- Webhook must be configured in Plex to trigger this workflow.
- Ensure network connectivity between n8n and qBittorrent.
