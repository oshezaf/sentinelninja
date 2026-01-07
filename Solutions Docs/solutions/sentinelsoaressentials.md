# SentinelSOARessentials

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-06-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **2 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`SentinelHealth`](../tables/sentinelhealth.md) | Workbooks |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Playbooks, Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |

## Content Items

This solution includes **29 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 25 |
| Workbooks | 4 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AutomationHealth](../content/sentinelsoaressentials-automationhealth.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`SentinelHealth`](../tables/sentinelhealth.md) |
| [IncidentOverview](../content/sentinelsoaressentials-incidentoverview.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [IncidentTasksWorkbook](../content/sentinelsoaressentials-incidenttasksworkbook.md) | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |
| [SecurityOperationsEfficiency](../content/sentinelsoaressentials-securityoperationsefficiency.md) | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create Incident From Microsoft Forms Response](../content/sentinelsoaressentials-create-incident-from-microsoft-forms-response.md) | This playbook will create a new Microsoft Sentinel incident when Microsoft Forms response is submitt... | - |
| [Create Incident From Shared Mailbox](../content/sentinelsoaressentials-create-incident-from-shared-mailbox.md) | This playbook will create a new Microsoft Sentinel incident when new email arrives to shared mailbox... | - |
| [HTTP Trigger Entity Analyzer](../content/sentinelsoaressentials-http-trigger-entity-analyzer.md) | This playbook is triggered by HTTP POST requests with entity information and performs automated inve... | - |
| [Incident Assignment Shifts](../content/sentinelsoaressentials-incident-assignment-shifts.md) | This playbook will assign an Incident to an owner based on the Shifts schedule in Microsoft Teams. W... | - |
| [Incident Trigger Entity Analyzer](../content/sentinelsoaressentials-incident-trigger-entity-analyzer.md) | This playbook is triggered by Microsoft Sentinel incidents and performs automated investigation and ... | - |
| [Incident tasks - Microsoft Defender XDR BEC Playbook for SecOps](../content/sentinelsoaressentials-incident-tasks---microsoft-defender-xdr-bec-playbook-for-secops.md) | This playbook add Incident Tasks based on Microsoft Defender XDR BEC Playbook for SecOps. This playb... | - |
| [Incident tasks - Microsoft Defender XDR Phishing Playbook for SecOps](../content/sentinelsoaressentials-incident-tasks---microsoft-defender-xdr-phishing-playbook-for-secops.md) | This playbook add Incident Tasks based on Microsoft Defender XDR Phishing Playbook for SecOps. This ... | - |
| [Incident tasks - Microsoft Defender XDR Ransomware Playbook for SecOps](../content/sentinelsoaressentials-incident-tasks---microsoft-defender-xdr-ransomware-playbook-for-secops.md) | This playbook add Incident Tasks based on Microsoft Defender XDR Ransomware Playbook for SecOps. Thi... | - |
| [Notify Incident Owner in Microsoft Teams](../content/sentinelsoaressentials-notify-incident-owner-in-microsoft-teams.md) | This playbook sends a Teams message to the new incident owner. | - |
| [Notify When Incident Is Closed](../content/sentinelsoaressentials-notify-when-incident-is-closed.md) | This playbook is utilizing new update trigger to notify person/group on Microsoft Teams/Outlook when... | - |
| [Notify When Incident Is Reopened](../content/sentinelsoaressentials-notify-when-incident-is-reopened.md) | This playbook is utilizing new update trigger to notify person/group on Microsoft Teams/Outlook when... | - |
| [Notify When Incident Severity Changed](../content/sentinelsoaressentials-notify-when-incident-severity-changed.md) | This playbook is utilizing new update trigger to notify person/group on Microsoft Teams/Outlook when... | - |
| [Post Message Slack](../content/sentinelsoaressentials-post-message-slack.md) | This playbook will post a message in a Slack channel when an alert is created in Microsoft Sentinel | - |
| [Post Message Slack](../content/sentinelsoaressentials-post-message-slack.md) | This playbook will post a message in a Slack channel when an Incident is created in Microsoft Sentin... | - |
| [Post Message Teams](../content/sentinelsoaressentials-post-message-teams.md) | This playbook will post a message in a Microsoft Teams channel when an Alert is created in Microsoft... | - |
| [Post Message Teams](../content/sentinelsoaressentials-post-message-teams.md) | This playbook will post a message in a Microsoft Teams channel when an Incident is created in Micros... | - |
| [Post-Message-Slack](../content/sentinelsoaressentials-post-message-slack.md) | Author: Yaniv Shasha | - |
| [Post-Message-Teams](../content/sentinelsoaressentials-post-message-teams.md) | Author: Yaniv Shasha | - |
| [Relate alerts to incident by IP](../content/sentinelsoaressentials-relate-alerts-to-incident-by-ip.md) | This playbook looks for other alerts with the same IP as the triggered incident. When such an alert ... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [Send Teams Adaptive Card on incident creation](../content/sentinelsoaressentials-send-teams-adaptive-card-on-incident-creation.md) | This playbook will send Microsoft Teams Adaptive Card on incident creation, with the option to chang... | - |
| [Send basic email](../content/sentinelsoaressentials-send-basic-email.md) | This playbook will be sending email with basic incidents details (Incident title, severity, tactics,... | - |
| [Send email with formatted incident report](../content/sentinelsoaressentials-send-email-with-formatted-incident-report.md) | This playbook will be sending email with formated incidents report (Incident title, severity, tactic... | - |
| [Send incident Teams Adaptive Card with XDR Portal links](../content/sentinelsoaressentials-send-incident-teams-adaptive-card-with-xdr-portal-links.md) | This playbook will send a Teams adaptive card with incident and entity information with all links po... | - |
| [Send incident email with XDR Portal links](../content/sentinelsoaressentials-send-incident-email-with-xdr-portal-links.md) | This playbook will send an email with incident and entity information with all links pointing to the... | - |
| [URL Trigger Entity Analyzer](../content/sentinelsoaressentials-url-trigger-entity-analyzer.md) | This playbook is triggered manually when a URL entity is selected in a Microsoft Sentinel incident a... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYY)**  | **Change History**                                                                         |
|-------------|--------------------------------|--------------------------------------------------------------------------------------------|
| 3.0.6       | 24-12-2025                     | Added new **playbooks** for the incident alerting.|
| 3.0.5       | 11-12-2025                     | Updated the lookback value to 7 days across all three **Logic Apps** and Renamed the Logic App title to "URL Trigger Entity Analyzer".|
| 3.0.4       | 17-11-2025                     | Added new **playbooks** for the Sentinel SentinelSOARessentials solution.                  |
| 3.0.3       | 30-05-2025                     | This upgrade focused on improving **Playbook** functionality, updating documentation, and refining deployment parameters.               |
| 3.0.2       | 26-10-2023                     | Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR.               |
| 3.0.1       | 11-08-2023                     | Updated timeContextFromParameter with TimeRange in the **Workbook** template.               |
| 3.0.0       | 17-07-2023                     | Updated **Workbook** template to remove unused variables.                                  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
