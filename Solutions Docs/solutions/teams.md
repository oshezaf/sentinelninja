# Teams

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-02-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Teams](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Teams) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

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
| [MicrosoftTeams](../content/teams-microsoftteams.md) | [`OfficeActivity`](../tables/officeactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Advanced ServiceNow Teams Integration Playbook](../content/teams-advanced-servicenow-teams-integration-playbook.md) | This playbook showcases an example of triggering an incident within a targeted Teams channel and ope... | - |
| [Send Teams Adaptive Card on incident creation](../content/teams-send-teams-adaptive-card-on-incident-creation.md) | This playbook will send Microsoft Teams Adaptive Card on incident creation, with the option to chang... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 19-07-2023                     | Updated **Workbook** template to remove unused variables.   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
