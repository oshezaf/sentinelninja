# SentinelSOARessentials

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="SentinelSOARessentials Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Microsoft Sentinel SOAR Essentials solution for Microsoft Sentinel contains Playbooks that can help you get started with basic notification and orchestration scenarios for common use cases. These include Playbooks for sending notifications over email and/or collaboration platforms such as MS Teams, Slack, etc.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **2 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`SentinelHealth`](../tables/sentinelhealth.md) | Workbooks |

### Internal Tables

The following **2 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Playbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Playbooks, Workbooks |

## Content Items

This solution includes **29 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 25 |
| Workbooks | 4 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AutomationHealth](../content/sentinelsoaressentials-automationhealth-09dce6f5.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`SentinelHealth`](../tables/sentinelhealth.md) |
| [IncidentOverview](../content/sentinelsoaressentials-incidentoverview-c5ea1b65.md) ⚠️ | - |
| [IncidentTasksWorkbook](../content/sentinelsoaressentials-incidenttasksworkbook-37a89581.md) | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |
| [SecurityOperationsEfficiency](../content/sentinelsoaressentials-securityoperationsefficiency-4e91f3d3.md) | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create Incident From Microsoft Forms Response](../content/sentinelsoaressentials-create-incident-from-microsoft-forms-response-cc74d315.md) | This playbook will create a new Microsoft Sentinel incident when Microsoft Forms response is submitt... | - |
| [Create Incident From Shared Mailbox](../content/sentinelsoaressentials-create-incident-from-shared-mailbox-8066f5fe.md) | This playbook will create a new Microsoft Sentinel incident when new email arrives to shared mailbox... | - |
| [HTTP Trigger Entity Analyzer](../content/sentinelsoaressentials-http-trigger-entity-analyzer-01f80a11.md) | This playbook is triggered by HTTP POST requests with entity information and performs automated inve... | - |
| [Incident Assignment Shifts](../content/sentinelsoaressentials-incident-assignment-shifts-da9095cc.md) | This playbook will assign an Incident to an owner based on the Shifts schedule in Microsoft Teams. W... | - |
| [Incident Trigger Entity Analyzer](../content/sentinelsoaressentials-incident-trigger-entity-analyzer-31ba8d0c.md) | This playbook is triggered by Microsoft Sentinel incidents and performs automated investigation and ... | - |
| [Incident tasks - Microsoft Defender XDR BEC Playbook for SecOps](../content/sentinelsoaressentials-incident-tasks-microsoft-defender-xdr-bec-playbook-for-secops-f4d24d4f.md) | This playbook add Incident Tasks based on Microsoft Defender XDR BEC Playbook for SecOps. This playb... | - |
| [Incident tasks - Microsoft Defender XDR Phishing Playbook for SecOps](../content/sentinelsoaressentials-incident-tasks-microsoft-defender-xdr-phishing-playbook-for-secops-5f7addaa.md) | This playbook add Incident Tasks based on Microsoft Defender XDR Phishing Playbook for SecOps. This ... | - |
| [Incident tasks - Microsoft Defender XDR Ransomware Playbook for SecOps](../content/sentinelsoaressentials-incident-tasks-microsoft-defender-xdr-ransomware-playbook-for-secops-5c37764f.md) | This playbook add Incident Tasks based on Microsoft Defender XDR Ransomware Playbook for SecOps. Thi... | - |
| [Notify Incident Owner in Microsoft Teams](../content/sentinelsoaressentials-notify-incident-owner-in-microsoft-teams-7d319b4d.md) | This playbook sends a Teams message to the new incident owner. | - |
| [Notify When Incident Is Closed](../content/sentinelsoaressentials-notify-when-incident-is-closed-2c9c306d.md) | This playbook is utilizing new update trigger to notify person/group on Microsoft Teams/Outlook when... | - |
| [Notify When Incident Is Reopened](../content/sentinelsoaressentials-notify-when-incident-is-reopened-c5eba65a.md) | This playbook is utilizing new update trigger to notify person/group on Microsoft Teams/Outlook when... | - |
| [Notify When Incident Severity Changed](../content/sentinelsoaressentials-notify-when-incident-severity-changed-d95035ee.md) | This playbook is utilizing new update trigger to notify person/group on Microsoft Teams/Outlook when... | - |
| [Post Message Slack](../content/sentinelsoaressentials-post-message-slack-43984c2e.md) | This playbook will post a message in a Slack channel when an alert is created in Microsoft Sentinel | - |
| [Post Message Slack](../content/sentinelsoaressentials-post-message-slack-561b5d3a.md) | This playbook will post a message in a Slack channel when an Incident is created in Microsoft Sentin... | - |
| [Post Message Teams](../content/sentinelsoaressentials-post-message-teams-9be2b190.md) | This playbook will post a message in a Microsoft Teams channel when an Alert is created in Microsoft... | - |
| [Post Message Teams](../content/sentinelsoaressentials-post-message-teams-80596e03.md) | This playbook will post a message in a Microsoft Teams channel when an Incident is created in Micros... | - |
| [Post-Message-Slack](../content/sentinelsoaressentials-post-message-slack-8c72ad08.md) | Author: Yaniv Shasha | - |
| [Post-Message-Teams](../content/sentinelsoaressentials-post-message-teams-e5dff2d7.md) | Author: Yaniv Shasha | - |
| [Relate alerts to incident by IP](../content/sentinelsoaressentials-relate-alerts-to-incident-by-ip-c7331925.md) | This playbook looks for other alerts with the same IP as the triggered incident. When such an alert ... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)*<br>[`SecurityIncident`](../tables/securityincident.md) *(read)* |
| [Send Teams Adaptive Card on incident creation](../content/sentinelsoaressentials-send-teams-adaptive-card-on-incident-creation-903fb520.md) | This playbook will send Microsoft Teams Adaptive Card on incident creation, with the option to chang... | - |
| [Send basic email](../content/sentinelsoaressentials-send-basic-email-449e76ec.md) | This playbook will be sending email with basic incidents details (Incident title, severity, tactics,... | - |
| [Send email with formatted incident report](../content/sentinelsoaressentials-send-email-with-formatted-incident-report-9dcecb5c.md) | This playbook will be sending email with formated incidents report (Incident title, severity, tactic... | - |
| [Send incident Teams Adaptive Card with XDR Portal links](../content/sentinelsoaressentials-send-incident-teams-adaptive-card-with-xdr-portal-links-67c3f8d5.md) | This playbook will send a Teams adaptive card with incident and entity information with all links po... | - |
| [Send incident email with XDR Portal links](../content/sentinelsoaressentials-send-incident-email-with-xdr-portal-links-40ad98a3.md) | This playbook will send an email with incident and entity information with all links pointing to the... | - |
| [URL Trigger Entity Analyzer](../content/sentinelsoaressentials-url-trigger-entity-analyzer-b0247848.md) | This playbook is triggered manually when a URL entity is selected in a Microsoft Sentinel incident a... | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

