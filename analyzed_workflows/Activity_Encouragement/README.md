# Activity Encouragement

## Summary
Monitors Strava activity and sends encouragement emails to accountability partners if activity goals are not met.

## Description
This workflow checks a user's Strava activity daily. If the user's moving time is below a set threshold, it sends an encouragement email to their accountability partners. The workflow is triggered by a daily schedule and uses configurable settings for partners, threshold, and user details.

## Input Triggers
- Daily schedule (Cron: every day at 11:00 AM)

## Output
- Encouragement email sent to accountability partners if activity is insufficient

## Nodes Involved
- **Cron**: Triggers the workflow daily.
- **Set (Accountability Settings)**: Defines partners, threshold, and user info.
- **Strava**: Fetches recent activity data.
- **If (Check Activity Level)**: Compares activity against the threshold.
- **NoOp (Enough Activity)**: Path for sufficient activity (no action).
- **EmailSend**: Sends encouragement email if activity is insufficient.

## High-Level Process Flow
- Trigger daily at 11:00 AM
- Set accountability partners and activity threshold
- Fetch activity data from Strava
- Check if activity meets the threshold
- If not, send encouragement email to partners

## Detailed Process Description
1. **Cron** node triggers the workflow daily at 11:00 AM.
2. **Set** node defines partners' emails, threshold, and user info.
3. **Strava** node retrieves the user's recent activity.
4. **If** node checks if moving time is above the threshold.
5. If not, **EmailSend** node sends encouragement to partners; otherwise, **NoOp** node ends the workflow.

## Additional Notes
- Requires Strava and SMTP credentials configured in n8n.
- The threshold and partners can be customized in the Set node.
- Useful for accountability groups and fitness motivation.
