# AI Agent - CV Resume - Automated Screening, Sorting, Rating and Tracker System

## Summary
Automates the screening, sorting, rating, and tracking of CV/resume files using Google Drive and Google Docs integrations in n8n.

## Description
This workflow is designed to streamline the recruitment process by automatically detecting newly uploaded CV/resume files in Google Drive, retrieving the relevant job description from Google Docs, and preparing the data for further automated screening, sorting, and rating. The workflow can be extended to include AI-based analysis and candidate tracking for a complete automated hiring pipeline.

## Input Triggers
- Google Drive Trigger (fires when a new resume/CV file is created)

## Output
- Initiates automated processing of new resumes, including job description retrieval and preparation for screening and rating.

## Nodes Involved
- **Google Drive - Resume CV File Created**: Monitors Google Drive for new CV/resume files and triggers the workflow.
- **GDocs - Get Job Desc**: Retrieves the job description from a specified Google Docs document.

## High-Level Process Flow
1. Google Drive trigger detects a new resume/CV file upload.
2. Google Docs node fetches the job description for the open position.
3. (Extendable) Additional logic can screen, sort, rate, and track candidates based on resume and job description.

## Detailed Process Description
1. **Google Drive - Resume CV File Created**: Watches for the creation of new files in a specified folder on Google Drive. When a new CV/resume is uploaded, the workflow is triggered.
2. **GDocs - Get Job Desc**: Retrieves the job description from a Google Doc using the provided document URL and credentials.
3. (Optional/Extendable) The workflow can be expanded to include AI-powered screening, sorting, rating, and candidate tracking steps.

## Additional Notes
- Requires Google Drive and Google Docs OAuth2 credentials.
- The workflow can be customized to include AI/ML nodes for automated resume analysis.
- Ensure the correct Google Docs URL is provided for job description retrieval.
- Set up the Google Drive trigger to monitor the appropriate folder for incoming resumes.
