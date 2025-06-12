# Add Subscriber to Form, Create Tag, and Add Subscriber to the Tag

## Summary
This workflow automates the process of adding a new subscriber to a ConvertKit form, creating a tag, and associating the subscriber with that tag. It is intended for streamlined audience management in ConvertKit.

## Description
- **Trigger:** The workflow is executed manually using the Manual Trigger node.
- **Add Subscriber:** The first ConvertKit node adds a subscriber to a specified form (ID: 1657198).
- **Create Tag:** The second ConvertKit node creates a new tag in ConvertKit.
- **Tag Subscriber:** The third ConvertKit node adds the subscriber to the newly created tag (Tag ID: 1850395), using the subscriber's email address from the first node.

## Nodes Involved
- **Manual Trigger:** Starts the workflow manually.
- **ConvertKit:** Adds a subscriber to a form.
- **ConvertKit1:** Creates a new tag in ConvertKit.
- **ConvertKit2:** Tags the subscriber with the created tag.

## Process Flow
1. **Manual Trigger** starts the workflow.
2. **ConvertKit** node adds a subscriber to the form.
3. **ConvertKit1** node creates a new tag in ConvertKit.
4. **ConvertKit2** node tags the subscriber with the newly created tag using their email address.

## Inputs
- **ConvertKit API credentials** (must be set up in n8n)
- **Subscriber email address** (provided in the workflow execution)
- **Form ID** (configured in the ConvertKit node)

## Outputs
- New subscriber added to the specified ConvertKit form
- New tag created in ConvertKit
- Subscriber associated with the new tag

## Additional Notes
- All ConvertKit nodes use the same API credentials.
- Tag ID and Form ID can be customized as needed.
- The workflow is designed for manual execution but can be adapted for automated triggers.

---
*Last processed: 12/06/2025 20:17 local time*
