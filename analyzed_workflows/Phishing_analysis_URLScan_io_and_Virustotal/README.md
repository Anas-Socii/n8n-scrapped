# Phishing analysis: URLScan.io and Virustotal

## Summary
Automates the analysis of URLs for phishing using URLScan.io and Virustotal integrations.

## Description
This workflow scans submitted URLs for phishing indicators by querying both URLScan.io and Virustotal APIs. It aggregates and documents the results, providing a streamlined way to check suspicious links for threats or malicious activity.

## Input Triggers
- Manual or webhook trigger (depending on configuration in the workflow JSON)

## Output
- Aggregated phishing analysis results for submitted URLs
- Report or notification (e.g., via email, Slack, or database, depending on workflow nodes)

## Nodes Involved
- **HTTP Request**: Sends URLs to URLScan.io and Virustotal for analysis
- **Function/Code**: Processes and aggregates API responses
- **Set/Format**: Prepares data for output or reporting
- **Notification/Output Node**: Sends results to the desired destination
- **Sticky Note**: Documents workflow steps and logic

## High-Level Process Flow
- Trigger workflow on URL submission
- Send URL to URLScan.io API
- Send URL to Virustotal API
- Aggregate and analyze responses
- Format and send results as report or notification

## Detailed Process Description
1. **Trigger**: Workflow is triggered manually or via webhook with a URL to analyze.
2. **Send to URLScan.io**: HTTP Request node queries URLScan.io with the submitted URL.
3. **Send to Virustotal**: HTTP Request node queries Virustotal with the same URL.
4. **Aggregate Results**: Function or code node processes both responses, extracting relevant indicators.
5. **Format Output**: Set or format node prepares the results for output.
6. **Send Notification/Report**: Output node sends the report to the configured destination (e.g., email, Slack, database).
7. **Sticky Notes**: Document the workflow logic and any required credentials.

## Additional Notes
- Requires API credentials for URLScan.io and Virustotal.
- Ensure correct configuration of output/notification destination.
- Can be extended to include other threat intelligence APIs.
