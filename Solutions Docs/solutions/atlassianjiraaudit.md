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
| [`Jira_Audit_CL`](../tables/jira-audit-cl.md) | [Atlassian Jira Audit](../connectors/jiraauditapi.md) | - |
| [`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) | [Atlassian Jira Audit](../connectors/jiraauditapi.md), [Atlassian Jira Audit (using REST API)](../connectors/jiraauditccpdefinition.md) | - |

## Content Items

This solution includes **29 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Playbooks | 7 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Jira - Global permission added](../content/atlassianjiraaudit-jira---global-permission-added-5b0cec45-4a91-4f08-bb1b-392427e8f440.md) | Medium | PrivilegeEscalation | - |
| [Jira - New site admin user](../content/atlassianjiraaudit-jira---new-site-admin-user-b894593a-2b4c-4573-bc47-78715224a6f5.md) | High | Persistence, PrivilegeEscalation | - |
| [Jira - New site admin user](../content/atlassianjiraaudit-jira---new-site-admin-user-6bf42891-b54d-4b4e-8533-babc5b3ea4c5.md) | High | InitialAccess | - |
| [Jira - New user created](../content/atlassianjiraaudit-jira---new-user-created-8c90f30f-c612-407c-91a0-c6a6b41ac199.md) | Medium | Persistence | - |
| [Jira - Permission scheme updated](../content/atlassianjiraaudit-jira---permission-scheme-updated-72592618-fa57-45e1-9f01-ca8706a5e3f5.md) | Medium | Impact | - |
| [Jira - Project roles changed](../content/atlassianjiraaudit-jira---project-roles-changed-fb6a8001-fe87-4177-a8f3-df2302215c4f.md) | Medium | Impact | - |
| [Jira - User removed from group](../content/atlassianjiraaudit-jira---user-removed-from-group-c13ecb19-4317-4d87-9a1c-52660dd44a7d.md) | Medium | Impact | - |
| [Jira - User removed from project](../content/atlassianjiraaudit-jira---user-removed-from-project-5d3af0aa-833e-48ed-a29a-8cfd2705c953.md) | Medium | Impact | - |
| [Jira - User's password changed multiple times](../content/atlassianjiraaudit-jira---user's-password-changed-multiple-times-943176e8-b979-45c0-8ad3-58ba6cfd41f0.md) | High | Persistence | - |
| [Jira - Workflow scheme copied](../content/atlassianjiraaudit-jira---workflow-scheme-copied-398aa0ca-45a2-4f79-bc21-ee583bbb63bc.md) | Medium | Collection | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Jira - Blocked tasks](../content/atlassianjiraaudit-jira---blocked-tasks-3fdc31f0-a166-4a4d-b861-f3cd262fd4a1.md) | Impact | - |
| [Jira - New users](../content/atlassianjiraaudit-jira---new-users-aadc0945-a399-47ba-b285-c0c09ee06375.md) | Persistence | - |
| [Jira - Project versions](../content/atlassianjiraaudit-jira---project-versions-e78cb74b-576b-4e35-a46c-8d328b2d4040.md) | Impact | - |
| [Jira - Project versions released](../content/atlassianjiraaudit-jira---project-versions-released-103ccb8d-f910-4978-aba7-1ad598db822b.md) | Impact | - |
| [Jira - Updated projects](../content/atlassianjiraaudit-jira---updated-projects-eb409b8b-0267-4e95-b3a9-ee1a72c32409.md) | Impact | - |
| [Jira - Updated users](../content/atlassianjiraaudit-jira---updated-users-d208b406-1509-455c-8c7d-7ffe2f893f24.md) | PrivilegeEscalation, Impact | - |
| [Jira - Updated workflow schemes](../content/atlassianjiraaudit-jira---updated-workflow-schemes-3e6ff26d-05dc-4921-9a60-444a0e28cd45.md) | Impact | - |
| [Jira - Updated workflows](../content/atlassianjiraaudit-jira---updated-workflows-d4dd32bb-84a4-4fdc-9118-3039cbabb4f8.md) | Impact | - |
| [Jira - Users' IP addresses](../content/atlassianjiraaudit-jira---users'-ip-addresses-2265bbd2-7e97-4d69-bdfc-eeb646730d8f.md) | Persistence | - |
| [Jira - Workflow schemes added to projects](../content/atlassianjiraaudit-jira---workflow-schemes-added-to-projects-2f875fa8-ced3-4059-b453-616dbc6eb276.md) | Impact | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AtlassianJiraAudit](../content/atlassianjiraaudit-atlassianjiraaudit.md) | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create And Update Jira Issue](../content/atlassianjiraaudit-create-and-update-jira-issue.md) | This playbook will create or update incident in Jira. When incident is created, playbook will run an... | - |
| [Create Jira Issue alert-trigger](../content/atlassianjiraaudit-create-jira-issue-alert-trigger.md) | This playbook will open a Jira Issue when a new incident is opened in Microsoft Sentinel. | - |
| [Create Jira Issue incident-trigger](../content/atlassianjiraaudit-create-jira-issue-incident-trigger.md) | This playbook will open a Jira Issue when a new incident is opened in Microsoft Sentinel. | - |
| [Sync Jira from Sentinel - Create incident](../content/atlassianjiraaudit-sync-jira-from-sentinel---create-incident.md) | This Playbook will create JIRA incidents for every Microsoft Sentinel which is created. It includes ... | - |
| [Sync Jira to Sentinel - Assigned User](../content/atlassianjiraaudit-sync-jira-to-sentinel---assigned-user.md) | This Playbook will sync the assigned user from JIRA to Microsoft Sentinel. | - |
| [Sync Jira to Sentinel - Status](../content/atlassianjiraaudit-sync-jira-to-sentinel---status.md) | This Playbook will sync the status from JIRA to Microsoft Sentinel. | - |
| [Sync Jira to Sentinel - public comments](../content/atlassianjiraaudit-sync-jira-to-sentinel---public-comments.md) | This Playbook will sync the public comments from JIRA to Microsoft Sentinel. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [JiraAudit](../content/atlassianjiraaudit-jiraaudit-4ed36a9b-accd-491d-b22b-2454c137d90d.md) | - | - |

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
- [Content Index](../content/content-index.md)
