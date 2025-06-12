# Find a New Book

## Summary
Suggests a random book from Open Library based on a chosen subject and sends the recommendation by email.

## Description
This workflow helps users discover new books by selecting a random title from a specified subject in Open Library. It checks for available books, fetches detailed information, formats the recommendation, and emails it to the user. If no books are found for the subject, a notification email is sent instead.

## Input Triggers
- Manual execution (via 'execute')
- Scheduled trigger (every Friday at 11:00 AM)

## Output
- Email with a book recommendation or a notification if no books are found

## Nodes Involved
- **Manual Trigger**: Allows manual workflow start.
- **Cron**: Schedules weekly automated recommendations.
- **Set**: Sets the book subject.
- **HTTP Request**: Fetches book count and details from Open Library.
- **If**: Checks if books are available.
- **Function**: Selects a random book and formats author info.
- **EmailSend**: Sends the recommendation or notification email.

## High-Level Process Flow
- Trigger workflow manually or on schedule
- Set subject for book search
- Fetch count of books for the subject
- If books available, select a random one and fetch its details
- Format and email the recommendation
- If no books, email a notification

## Detailed Process Description
1. **Manual Trigger** or **Cron** node starts the workflow.
2. **Set** node defines the subject (e.g., juvenile literature).
3. **HTTP Request** nodes get the number of books and fetch details.
4. **If** node checks if any books exist for the subject.
5. **Function** node selects a random book and formats author links.
6. **EmailSend** node sends the book recommendation or a no-book notification.

## Additional Notes
- Requires SMTP credentials for email sending.
- The subject can be changed for different genres or topics.
- Useful for weekly reading suggestions or book clubs.
