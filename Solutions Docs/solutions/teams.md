# Teams

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Teams Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Microsoft Sentinel solution for Teams provides Teams security logs visibility and threat protection for communication and data sharing in the Microsoft 365 Cloud via Microsoft Teams. In order to get the logs, you should connect to the Microsoft 365 connector and choose the Teams application.[Please refer to this guide](https://docs.microsoft.com/microsoftteams/teams-sentinel-guide). By connecting Teams activity logs into Microsoft Sentinel, you can view this data in workbooks, use it to create custom alerts, and improve your investigation process.[This article](https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/protecting-your-teams-with-azure-sentinel/ba-p/1265761)focuses on collecting Teams activity logs in Microsoft Sentinel. 

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-02-01 |
| **Solution Folder** | [Teams](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Teams) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **2 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`OfficeActivity`](../tables/officeactivity.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 2 |
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MicrosoftTeams](../content/teams-microsoftteams-d6922450.md) | [`OfficeActivity`](../tables/officeactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Advanced ServiceNow Teams Integration Playbook](../content/teams-advanced-servicenow-teams-integration-playbook-50b3e162.md) | This playbook showcases an example of triggering an incident within a targeted Teams channel and ope... | - |
| [Send Teams Adaptive Card on incident creation](../content/teams-send-teams-adaptive-card-on-incident-creation-1dc5c428.md) | This playbook will send Microsoft Teams Adaptive Card on incident creation, with the option to chang... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 19-07-2023                     | Updated **Workbook** template to remove unused variables.   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

