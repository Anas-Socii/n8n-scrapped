# Website check

## Summary
Checks a website for a specific value and sends a Discord notification based on the result.

## Description
- Cron triggers every hour.
- HTTP Request node checks the website.
- IF node determines if the value "Out Of Stock" is present.
- Sends a Discord notification for either case.

## Input Triggers
- Cron Trigger (every hour)

## Output
- Discord notification indicating stock status.

## Nodes Involved
- **Cron:** Triggers the workflow every hour.
- **HTTP Request:** Fetches website data.
- **IF:** Checks for the value "Out Of Stock".
- **Discord:** Sends notification if value is found.
- **Discord1:** Sends notification if value is not found.

## High-Level Process Flow
1. Cron triggers the check.
2. HTTP Request node fetches website data.
3. IF node checks for "Out Of Stock".
4. Sends Discord notification based on result.

## Detailed Process Description
- Cron triggers the workflow.
- HTTP Request node fetches the page.
- IF node checks for the target value.
- Discord or Discord1 node sends notification.

## Additional Notes
- Requires Discord webhook credentials.
