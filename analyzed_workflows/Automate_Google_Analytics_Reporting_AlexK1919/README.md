# Automate Google Analytics Reporting - AlexK1919

## Summary
This workflow automates the extraction, aggregation, and reporting of Google Analytics data, comparing key metrics across weekly periods and delivering the results via email.

## Description
The workflow is designed to:
- Fetch data from Google Analytics for the current and previous weeks (including country views, page engagement, and search results).
- Aggregate and compare these metrics.
- Format the data for reporting.
- Email the final report to stakeholders.

It leverages multiple Google Analytics nodes, data parsing, aggregation, and email delivery to streamline analytics reporting.

## Input Triggers
- Manual Trigger (via 'Test workflow')

## Outputs
- Aggregated analytics report delivered via email

## Nodes Involved
- **Manual Trigger:** Starts the workflow manually.
- **Google Analytics:** Fetches various metrics for current and prior weeks.
- **Sticky Notes:** Provide documentation and instructions within the workflow.
- **Set & Aggregate Data:** Process and aggregate the fetched analytics data.
- **Format Data:** Prepares the report for emailing.
- **Email:** Sends the final report to recipients.

## High-Level Process Flow
1. **Manual Trigger** → 2. **Fetch Metrics for This Week** → 3. **Fetch Metrics for Prior Week** → 4. **Aggregate and Compare Data** → 5. **Format Report** → 6. **Send Email**

## Detailed Process Description
- The workflow is initiated manually.
- Google Analytics nodes fetch data for the current and previous weeks, including page engagement, country views, and search results.
- Data is parsed and compared to highlight trends and changes.
- Aggregated data is formatted into a report.
- The report is sent via email to designated recipients.

## Additional Notes
- Requires valid Google Analytics OAuth2 credentials.
- Property IDs and email recipients must be configured.
- Can be scheduled or triggered as needed for regular reporting.
- Credit to Keith Rumjahn for the original workflow inspiration.
