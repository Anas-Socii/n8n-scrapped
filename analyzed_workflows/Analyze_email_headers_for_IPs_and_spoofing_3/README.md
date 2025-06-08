# Analyze Email Headers for IPs and Spoofing

## Summary
Analyzes email headers to extract sender IPs, check for spoofing, and assess sender reputation using IP quality and security checks.

## Description
This workflow receives email headers via webhook, parses them to extract relevant IP addresses, and uses external services to check for fraud, spam, and spoofing. It provides a structured analysis of sender authenticity and security posture.

## Input Triggers
- **Webhook**: Receives email header data via HTTP POST.

## Output
- Structured JSON analysis of IP reputation, spam activity, SPF/DKIM/DMARC status, and spoofing indicators.

## Nodes Involved
- **Webhook (Receive Headers)**: Accepts incoming header data.
- **Sticky Note**: Documents output format and usage.
- **Code (Fraud Score)**: Calculates reputation and spam activity from IP quality scores.
- **Respond to Webhook**: Returns analysis as HTTP response.

## High-Level Process Flow
- Receive email headers via webhook.
- Parse headers and extract IPs.
- Check IPs for fraud and spam scores.
- Assess SPF, DKIM, DMARC authentication results.
- Return structured analysis.

## Detailed Process Description
1. **Webhook**: Receives email header data.
2. **Code (Fraud Score)**: Processes IP information for reputation and spam checks.
3. **Sticky Note**: Documents output and usage.
4. **Respond to Webhook**: Sends JSON analysis as HTTP response.

## Additional Notes
- **Credentials**: May require API keys for IP reputation services.
- **Customization**: Output format and scoring logic can be adjusted.
- **Performance**: Fast for small batches; may slow with large header sets.
- **Disclaimer**: Use results as guidance; always review for critical decisions.
