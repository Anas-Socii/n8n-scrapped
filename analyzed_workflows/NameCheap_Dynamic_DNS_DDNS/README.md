# NameCheap Dynamic DNS (DDNS)

## Summary
Automates dynamic DNS updates for NameCheap domains by regularly checking the public IP address and updating DNS records when changes are detected.

## Description
This workflow periodically checks the public IP address of the server, detects changes, and updates the DNS records for a list of subdomains on NameCheap using their Dynamic DNS API. It is useful for maintaining up-to-date DNS records for home servers or dynamic IP environments.

## Input Triggers
- Cron (runs every 15 minutes)

## Output
- DNS records for specified subdomains updated on NameCheap if the public IP changes.

## Nodes Involved
- **Cron**: Triggers the workflow every 15 minutes.
- **Checks IP if new**: Determines if the public IP has changed since the last check.
- **subdomains**: Defines the list of subdomains to update.

## High-Level Process Flow
1. Cron node triggers the workflow every 15 minutes.
2. Checks IP if new node compares the current public IP to the last known value.
3. subdomains node defines which subdomains should be updated if the IP has changed.
4. (Not shown in snippet) Likely includes HTTP Request nodes to update NameCheap DNS records for each subdomain.

## Detailed Process Description
1. **Cron**: Initiates the workflow on a schedule.
2. **Checks IP if new**: Uses workflow static data to track and compare the current public IP.
3. **subdomains**: Prepares a list of subdomains to update. Each subdomain would be processed in a loop to update DNS records via NameCheap API.

## Additional Notes
- Requires NameCheap Dynamic DNS API credentials and configuration.
- Extend with HTTP Request nodes to interact with NameCheap API for each subdomain.
- Can be adapted for other DNS providers or custom update logic.
