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

This solution queries **4 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`SentinelHealth`](../tables/sentinelhealth.md) | Workbooks |
| [`getAmountOfIncidentForRuleId`](../tables/getamountofincidentforruleid.md) | Workbooks |
| [`strcat_array`](../tables/strcat-array.md) | Workbooks |

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
| [AutomationHealth](../content/automationhealth-sentinelsoaressentials.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`SentinelHealth`](../tables/sentinelhealth.md)<br>[`strcat_array`](../tables/strcat-array.md) |
| [IncidentOverview](../content/incidentoverview-sentinelsoaressentials.md) | [`getAmountOfIncidentForRuleId`](../tables/getamountofincidentforruleid.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [IncidentTasksWorkbook](../content/incidenttasksworkbook-sentinelsoaressentials.md) | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |
| [SecurityOperationsEfficiency](../content/securityoperationsefficiency-sentinelsoaressentials.md) | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create Incident From Microsoft Forms Response](../content/create-incident-from-microsoft-forms-response-sentinelsoaressentials.md) | This playbook will create a new Microsoft Sentinel incident when Microsoft Forms response is submitt... | - |
| [Create Incident From Shared Mailbox](../content/create-incident-from-shared-mailbox-sentinelsoaressentials.md) | This playbook will create a new Microsoft Sentinel incident when new email arrives to shared mailbox... | - |
| [HTTP Trigger Entity Analyzer](../content/http-trigger-entity-analyzer-sentinelsoaressentials.md) | This playbook is triggered by HTTP POST requests with entity information and performs automated inve... | - |
| [Incident Assignment Shifts](../content/incident-assignment-shifts-sentinelsoaressentials.md) | This playbook will assign an Incident to an owner based on the Shifts schedule in Microsoft Teams. W... | - |
| [Incident Trigger Entity Analyzer](../content/incident-trigger-entity-analyzer-sentinelsoaressentials.md) | This playbook is triggered by Microsoft Sentinel incidents and performs automated investigation and ... | - |
| [Incident tasks - Microsoft Defender XDR BEC Playbook for SecOps](../content/incident-tasks---microsoft-defender-xdr-bec-playbook-for-secops-sentinelsoaressentials.md) | This playbook add Incident Tasks based on Microsoft Defender XDR BEC Playbook for SecOps. This playb... | - |
| [Incident tasks - Microsoft Defender XDR Phishing Playbook for SecOps](../content/incident-tasks---microsoft-defender-xdr-phishing-playbook-for-secops-sentinelsoaressentials.md) | This playbook add Incident Tasks based on Microsoft Defender XDR Phishing Playbook for SecOps. This ... | - |
| [Incident tasks - Microsoft Defender XDR Ransomware Playbook for SecOps](../content/incident-tasks---microsoft-defender-xdr-ransomware-playbook-for-secops-sentinelsoaressentials.md) | This playbook add Incident Tasks based on Microsoft Defender XDR Ransomware Playbook for SecOps. Thi... | - |
| [Notify Incident Owner in Microsoft Teams](../content/notify-incident-owner-in-microsoft-teams-sentinelsoaressentials.md) | This playbook sends a Teams message to the new incident owner. | - |
| [Notify When Incident Is Closed](../content/notify-when-incident-is-closed-sentinelsoaressentials.md) | This playbook is utilizing new update trigger to notify person/group on Microsoft Teams/Outlook when... | - |
| [Notify When Incident Is Reopened](../content/notify-when-incident-is-reopened-sentinelsoaressentials.md) | This playbook is utilizing new update trigger to notify person/group on Microsoft Teams/Outlook when... | - |
| [Notify When Incident Severity Changed](../content/notify-when-incident-severity-changed-sentinelsoaressentials.md) | This playbook is utilizing new update trigger to notify person/group on Microsoft Teams/Outlook when... | - |
| [Post Message Slack](../content/post-message-slack-sentinelsoaressentials.md) | This playbook will post a message in a Slack channel when an alert is created in Microsoft Sentinel | - |
| [Post Message Slack](../content/post-message-slack-sentinelsoaressentials.md) | This playbook will post a message in a Slack channel when an Incident is created in Microsoft Sentin... | - |
| [Post Message Teams](../content/post-message-teams-sentinelsoaressentials.md) | This playbook will post a message in a Microsoft Teams channel when an Alert is created in Microsoft... | - |
| [Post Message Teams](../content/post-message-teams-sentinelsoaressentials.md) | This playbook will post a message in a Microsoft Teams channel when an Incident is created in Micros... | - |
| [Post-Message-Slack](../content/post-message-slack-sentinelsoaressentials.md) | Author: Yaniv Shasha | - |
| [Post-Message-Teams](../content/post-message-teams-sentinelsoaressentials.md) | Author: Yaniv Shasha | - |
| [Relate alerts to incident by IP](../content/relate-alerts-to-incident-by-ip-sentinelsoaressentials.md) | This playbook looks for other alerts with the same IP as the triggered incident. When such an alert ... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [Send Teams Adaptive Card on incident creation](../content/send-teams-adaptive-card-on-incident-creation-sentinelsoaressentials.md) | This playbook will send Microsoft Teams Adaptive Card on incident creation, with the option to chang... | - |
| [Send basic email](../content/send-basic-email-sentinelsoaressentials.md) | This playbook will be sending email with basic incidents details (Incident title, severity, tactics,... | - |
| [Send email with formatted incident report](../content/send-email-with-formatted-incident-report-sentinelsoaressentials.md) | This playbook will be sending email with formated incidents report (Incident title, severity, tactic... | - |
| [Send incident Teams Adaptive Card with XDR Portal links](../content/send-incident-teams-adaptive-card-with-xdr-portal-links-sentinelsoaressentials.md) | This playbook will send a Teams adaptive card with incident and entity information with all links po... | - |
| [Send incident email with XDR Portal links](../content/send-incident-email-with-xdr-portal-links-sentinelsoaressentials.md) | This playbook will send an email with incident and entity information with all links pointing to the... | - |
| [URL Trigger Entity Analyzer](../content/url-trigger-entity-analyzer-sentinelsoaressentials.md) | This playbook is triggered manually when a URL entity is selected in a Microsoft Sentinel incident a... | - |

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
