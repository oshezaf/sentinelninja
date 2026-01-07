# SlackAudit

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-03-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlackAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlackAudit) |

## Data Connectors

This solution provides **3 data connector(s)**:

- [Slack](../connectors/slackaudit.md)
- [[DEPRECATED] Slack Audit](../connectors/slackauditapi.md)
- [SlackAudit (via Codeless Connector Framework)](../connectors/slackauditlogsccpdefinition.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md) | [Slack](../connectors/slackaudit.md), [[DEPRECATED] Slack Audit](../connectors/slackauditapi.md) | - |
| [`SlackAuditV2_CL`](../tables/slackauditv2-cl.md) | [SlackAudit (via Codeless Connector Framework)](../connectors/slackauditlogsccpdefinition.md), [[DEPRECATED] Slack Audit](../connectors/slackauditapi.md) | - |
| [`SlackAudit_CL`](../tables/slackaudit-cl.md) | [[DEPRECATED] Slack Audit](../connectors/slackauditapi.md) | - |

## Content Items

This solution includes **21 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 10 |
| Analytic Rules | 9 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [SlackAudit - Empty User Agent](../content/slackaudit-slackaudit---empty-user-agent-04528635-a5f1-438b-ab74-21ca7bc3aa32.md) | Low | InitialAccess | - |
| [SlackAudit - Multiple archived files uploaded in short period of time](../content/slackaudit-slackaudit---multiple-archived-files-uploaded-in-short-period-of-time-3db0cb83-5fa4-4310-a8a0-d8d66183f0bd.md) | Low | Exfiltration | - |
| [SlackAudit - Multiple failed logins for user](../content/slackaudit-slackaudit---multiple-failed-logins-for-user-93a91c37-032c-4380-847c-957c001957ad.md) | Medium | CredentialAccess | - |
| [SlackAudit - Public link created for file which can contain sensitive information.](../content/slackaudit-slackaudit---public-link-created-for-file-which-can-contain-sensitive-information.-279316e8-8965-47d2-9788-b94dc352c853.md) | Medium | Exfiltration | - |
| [SlackAudit - Suspicious file downloaded.](../content/slackaudit-slackaudit---suspicious-file-downloaded.-132b98a5-07e9-401a-9b6f-453e52a53979.md) | Medium | InitialAccess | - |
| [SlackAudit - Unknown User Agent](../content/slackaudit-slackaudit---unknown-user-agent-3b11f06e-4afd-4ae6-8477-c61136619ac8.md) | Low | CommandAndControl | - |
| [SlackAudit - User email linked to account changed.](../content/slackaudit-slackaudit---user-email-linked-to-account-changed.-9d85feb3-7f54-4181-b143-68abb1a86823.md) | Medium | InitialAccess | - |
| [SlackAudit - User login after deactivated.](../content/slackaudit-slackaudit---user-login-after-deactivated.-e6e99dcb-4dff-48d2-8012-206ca166b36b.md) | Medium | InitialAccess, Persistence, PrivilegeEscalation | - |
| [SlackAudit - User role changed to admin or owner](../content/slackaudit-slackaudit---user-role-changed-to-admin-or-owner-be6c5fc9-2ac3-43e6-8fb0-cb139e04e43e.md) | Low | Persistence, PrivilegeEscalation | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [SlackAudit - Applications installed](../content/slackaudit-slackaudit---applications-installed-cefd7f18-9359-4a99-bd18-965983bb724d.md) | InitialAccess | - |
| [SlackAudit - Deactivated users](../content/slackaudit-slackaudit---deactivated-users-f2b2cd0d-6190-44aa-8e0e-265de45ee379.md) | Impact | - |
| [SlackAudit - Downloaded files stats](../content/slackaudit-slackaudit---downloaded-files-stats-7865b00c-26c8-46db-9422-bb9e4ee696ac.md) | InitialAccess | - |
| [SlackAudit - Failed logins with unknown username](../content/slackaudit-slackaudit---failed-logins-with-unknown-username-b62b5a97-41e5-47cb-9b90-aa079f65f0c0.md) | CredentialAccess | - |
| [SlackAudit - New User created](../content/slackaudit-slackaudit---new-user-created-d65400c2-50a3-46cc-b3e6-1cb72b953e72.md) | Persistence | - |
| [SlackAudit - Suspicious files downloaded](../content/slackaudit-slackaudit---suspicious-files-downloaded-31e54776-f2db-4465-b951-410880e009ad.md) | InitialAccess | - |
| [SlackAudit - Uploaded files stats](../content/slackaudit-slackaudit---uploaded-files-stats-aa9bc100-012a-4348-820d-06606fc11299.md) | Exfiltration | - |
| [SlackAudit - User Permission Changed](../content/slackaudit-slackaudit---user-permission-changed-7adbe474-debf-47c2-9d76-49efd4d2953b.md) | PrivilegeEscalation | - |
| [SlackAudit - User logins by IP](../content/slackaudit-slackaudit---user-logins-by-ip-85850974-acbf-47bd-a635-4e3511b553c0.md) | InitialAccess, Persistence | - |
| [SlackAudit - Users joined channels without invites](../content/slackaudit-slackaudit---users-joined-channels-without-invites-ef815b70-e6f6-427b-ac9f-56d73472c4c3.md) | InitialAccess, Persistence | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SlackAudit](../content/slackaudit-slackaudit.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SlackAudit](../content/slackaudit-slackaudit-fb5aaeb6-14fa-45e8-bb4a-6d4c642a710e.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.5       | 12-12-2025                     | Updated the **Parser** yaml file. |
| 3.0.4       | 28-07-2025                     | Removed Deprecated **Data Connector**. |
| 3.0.3       | 30-06-2025                     | Moving **CCF Data Connector** to GA. |
| 3.0.2       | 30-05-2025                     | Preview tag added to **CCF Data Connector**. |
| 3.0.1       | 24-04-2025                     | Migrated the **Function app Connector** to **CCP Data Connector** and Updated the **Parser**. |
| 3.0.0       | 23-08-2023                     | Manual deployment instructions updated for **Data Connector** & Convert **Parser** from text to yaml. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
