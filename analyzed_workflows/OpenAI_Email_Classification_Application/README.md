# OpenAI Email Classification Application

## Summary
Automatically classifies incoming emails (and attachments) using OpenAI, extracts applicant data, and routes them for further processing.

## Description
This workflow reads emails and their attachments, classifies the content (e.g., job application, lead, invoice, or other) using OpenAI models, extracts structured applicant information, and routes the result for downstream automation. Useful for HR, sales, and operations teams to automate triage and extraction from inbound emails.

## Input Triggers
- Email trigger (IMAP)

## Output
- Extracted variables from email and attachment
- Classification label (job application, inbound lead, invoice, other)
- Routed to appropriate sub-workflow (noOp nodes as placeholders)

## Nodes Involved
- **Email trigger**: Reads new emails via IMAP, handles attachments
- **Extract data from attachment**: Extracts text from PDF attachments
- **Classify email**: Uses OpenAI to classify email and attachment content
- **Extract variables - email & attachment**: Uses OpenAI to extract structured applicant data
- **OpenAI Chat Model / OpenAI Chat Model 2**: Language model nodes for advanced classification and extraction
- **Workflow 2, 3, 4 (noOp)**: Placeholders for downstream routing
- **Sticky Note**: Documentation for category customization

## High-Level Process Flow
- Email arrives and is read
- Attachment is extracted (PDF)
- Email and attachment are classified
- Applicant variables are extracted
- Routed to downstream workflow based on classification

## Detailed Process Description
1. **Email trigger**: Fetches new emails and attachments
2. **Extract data from attachment**: Extracts text from PDF attachments
3. **Classify email**: Classifies the email and attachment using OpenAI
4. **Extract variables - email & attachment**: Extracts structured applicant data
5. **OpenAI Chat Model / OpenAI Chat Model 2**: Used for AI-powered classification/extraction
6. **Workflow 2, 3, 4 (noOp)**: Placeholder nodes for further actions (e.g., HR, sales, invoice processing)

## Additional Notes
- Requires valid IMAP and OpenAI API credentials
- Extend by replacing noOp nodes with real processing logic
- Categories and extracted variables are customizable in the workflow
- Error workflow is set for robust execution
- Workflow is inactive by default; enable to use in production
