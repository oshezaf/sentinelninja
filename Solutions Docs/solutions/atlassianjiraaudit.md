# AtlassianJiraAudit

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-01-10 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Atlassian Jira Audit](../connectors/jiraauditapi.md)
- [Atlassian Jira Audit (using REST API)](../connectors/jiraauditccpdefinition.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Jira_Audit_CL`](../tables/jira-audit-cl.md) | [Atlassian Jira Audit](../connectors/jiraauditapi.md) | Analytics, Hunting, Workbooks |
| [`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) | [Atlassian Jira Audit](../connectors/jiraauditapi.md), [Atlassian Jira Audit (using REST API)](../connectors/jiraauditccpdefinition.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **30 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Playbooks | 8 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Jira - Global permission added](../content/5b0cec45-4a91-4f08-bb1b-392427e8f440.md) | Medium | PrivilegeEscalation | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - New site admin user](../content/b894593a-2b4c-4573-bc47-78715224a6f5.md) | High | Persistence, PrivilegeEscalation | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - New site admin user](../content/6bf42891-b54d-4b4e-8533-babc5b3ea4c5.md) | High | InitialAccess | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - New user created](../content/8c90f30f-c612-407c-91a0-c6a6b41ac199.md) | Medium | Persistence | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - Permission scheme updated](../content/72592618-fa57-45e1-9f01-ca8706a5e3f5.md) | Medium | Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - Project roles changed](../content/fb6a8001-fe87-4177-a8f3-df2302215c4f.md) | Medium | Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - User removed from group](../content/c13ecb19-4317-4d87-9a1c-52660dd44a7d.md) | Medium | Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - User removed from project](../content/5d3af0aa-833e-48ed-a29a-8cfd2705c953.md) | Medium | Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - User's password changed multiple times](../content/943176e8-b979-45c0-8ad3-58ba6cfd41f0.md) | High | Persistence | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - Workflow scheme copied](../content/398aa0ca-45a2-4f79-bc21-ee583bbb63bc.md) | Medium | Collection | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Jira - Blocked tasks](../content/3fdc31f0-a166-4a4d-b861-f3cd262fd4a1.md) | Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - New users](../content/aadc0945-a399-47ba-b285-c0c09ee06375.md) | Persistence | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - Project versions](../content/e78cb74b-576b-4e35-a46c-8d328b2d4040.md) | Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - Project versions released](../content/103ccb8d-f910-4978-aba7-1ad598db822b.md) | Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - Updated projects](../content/eb409b8b-0267-4e95-b3a9-ee1a72c32409.md) | Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - Updated users](../content/d208b406-1509-455c-8c7d-7ffe2f893f24.md) | PrivilegeEscalation, Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - Updated workflow schemes](../content/3e6ff26d-05dc-4921-9a60-444a0e28cd45.md) | Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - Updated workflows](../content/d4dd32bb-84a4-4fdc-9118-3039cbabb4f8.md) | Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - Users' IP addresses](../content/2265bbd2-7e97-4d69-bdfc-eeb646730d8f.md) | Persistence | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |
| [Jira - Workflow schemes added to projects](../content/2f875fa8-ced3-4059-b453-616dbc6eb276.md) | Impact | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AtlassianJiraAudit](../content/atlassianjiraaudit-atlassianjiraaudit.md) | [`Jira_Audit_CL`](../tables/jira-audit-cl.md)<br>[`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create And Update Jira Issue](../content/create-and-update-jira-issue-atlassianjiraaudit.md) | This playbook will create or update incident in Jira. When incident is created, playbook will run an... | - |
| [Create Jira Issue alert-trigger](../content/create-jira-issue-alert-trigger-atlassianjiraaudit.md) | This playbook will open a Jira Issue when a new incident is opened in Microsoft Sentinel. | - |
| [Create Jira Issue incident-trigger](../content/create-jira-issue-incident-trigger-atlassianjiraaudit.md) | This playbook will open a Jira Issue when a new incident is opened in Microsoft Sentinel. | - |
| [Sync Jira from Sentinel - Create incident](../content/sync-jira-from-sentinel---create-incident-atlassianjiraaudit.md) | This Playbook will create JIRA incidents for every Microsoft Sentinel which is created. It includes ... | - |
| [Sync Jira to Sentinel - Assigned User](../content/sync-jira-to-sentinel---assigned-user-atlassianjiraaudit.md) | This Playbook will sync the assigned user from JIRA to Microsoft Sentinel. | - |
| [Sync Jira to Sentinel - Status](../content/sync-jira-to-sentinel---status-atlassianjiraaudit.md) | This Playbook will sync the status from JIRA to Microsoft Sentinel. | - |
| [Sync Jira to Sentinel - public comments](../content/sync-jira-to-sentinel---public-comments-atlassianjiraaudit.md) | This Playbook will sync the public comments from JIRA to Microsoft Sentinel. | - |
| [Sync-CommentsFunctionApp](../content/sync-commentsfunctionapp-atlassianjiraaudit.md) | - | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [JiraAudit](../content/4ed36a9b-accd-491d-b22b-2454c137d90d.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.4       | 30-08-2024                     | Updated parameters for CCP **Data Connector**							   |
| 3.0.3       | 14-08-2024                     | **Data Connector**[Atlassian Jira Audit (using REST API)] Globally Available  |
| 3.0.2       | 22-05-2024                     | Added new CCP **Data Connector** to the Solution 
| 3.0.1       | 16-04-2024                     | Added Deploy to Azure Goverment button for Government portal in **Dataconnector** |
| 3.0.0       | 06-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
