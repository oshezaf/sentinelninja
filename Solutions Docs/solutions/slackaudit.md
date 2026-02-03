# SlackAudit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/SlackAudit/Data%20Connectors/Logo/slacklogo.svg" alt="SlackAudit Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Slack](https://slack.com/intl/en-in/) Audit solution provides the capability to ingest [Slack Audit Records](https://api.slack.com/admins/audit-logs) events into Microsoft Sentinel through the REST API. Refer to [API documentation](https://api.slack.com/admins/audit-logs-call) for more information.
 
 **Underlying Microsoft Technologies used:** 
 
 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 
  • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-03-24 |
| **Solution Folder** | [SlackAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlackAudit) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 2 discovered⚠️):

- [Slack](../connectors/slackaudit.md) ⚠️
- [[DEPRECATED] Slack Audit](../connectors/slackauditapi.md) ⚠️
- [SlackAudit (via Codeless Connector Framework)](../connectors/slackauditlogsccpdefinition.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md) | [Slack](../connectors/slackaudit.md), [[DEPRECATED] Slack Audit](../connectors/slackauditapi.md) | Analytics, Hunting, Workbooks |
| [`SlackAuditV2_CL`](../tables/slackauditv2-cl.md) | [SlackAudit (via Codeless Connector Framework)](../connectors/slackauditlogsccpdefinition.md), [[DEPRECATED] Slack Audit](../connectors/slackauditapi.md) | Analytics, Hunting, Workbooks |
| [`SlackAudit_CL`](../tables/slackaudit-cl.md) | [[DEPRECATED] Slack Audit](../connectors/slackauditapi.md) | Analytics, Hunting, Workbooks |

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
| [SlackAudit - Empty User Agent](../content/slackaudit-slackaudit-empty-user-agent-04528635-a5f1-438b-ab74-21ca7bc3aa32-dc53a71b.md) | Low | InitialAccess | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - Multiple archived files uploaded in short period of time](../content/slackaudit-slackaudit-multiple-archived-files-uploaded-in-short-period-of-time-3db0cb83-5fa4-4310-a8a0-d8d66183f0bd-21e5a2f1.md) | Low | Exfiltration | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - Multiple failed logins for user](../content/slackaudit-slackaudit-multiple-failed-logins-for-user-93a91c37-032c-4380-847c-957c001957ad-b5073227.md) | Medium | CredentialAccess | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - Public link created for file which can contain sensitive information.](../content/slackaudit-slackaudit-public-link-created-for-file-which-can-contain-sensitive-information.-279316e8-8965-47d2-9788-b94dc352c853-de99164f.md) | Medium | Exfiltration | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - Suspicious file downloaded.](../content/slackaudit-slackaudit-suspicious-file-downloaded.-132b98a5-07e9-401a-9b6f-453e52a53979-c4dde0cb.md) | Medium | InitialAccess | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - Unknown User Agent](../content/slackaudit-slackaudit-unknown-user-agent-3b11f06e-4afd-4ae6-8477-c61136619ac8-6974a0f1.md) | Low | CommandAndControl | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - User email linked to account changed.](../content/slackaudit-slackaudit-user-email-linked-to-account-changed.-9d85feb3-7f54-4181-b143-68abb1a86823-d563d143.md) | Medium | InitialAccess | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - User login after deactivated.](../content/slackaudit-slackaudit-user-login-after-deactivated.-e6e99dcb-4dff-48d2-8012-206ca166b36b-e5724d2b.md) | Medium | InitialAccess, Persistence, PrivilegeEscalation | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - User role changed to admin or owner](../content/slackaudit-slackaudit-user-role-changed-to-admin-or-owner-be6c5fc9-2ac3-43e6-8fb0-cb139e04e43e-2ec5dec7.md) | Low | Persistence, PrivilegeEscalation | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [SlackAudit - Applications installed](../content/slackaudit-slackaudit-applications-installed-cefd7f18-9359-4a99-bd18-965983bb724d-453a5c0c.md) | InitialAccess | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - Deactivated users](../content/slackaudit-slackaudit-deactivated-users-f2b2cd0d-6190-44aa-8e0e-265de45ee379-fbc0a693.md) | Impact | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - Downloaded files stats](../content/slackaudit-slackaudit-downloaded-files-stats-7865b00c-26c8-46db-9422-bb9e4ee696ac-6f7c397c.md) | InitialAccess | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - Failed logins with unknown username](../content/slackaudit-slackaudit-failed-logins-with-unknown-username-b62b5a97-41e5-47cb-9b90-aa079f65f0c0-6f1116d0.md) | CredentialAccess | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - New User created](../content/slackaudit-slackaudit-new-user-created-d65400c2-50a3-46cc-b3e6-1cb72b953e72-63039815.md) | Persistence | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - Suspicious files downloaded](../content/slackaudit-slackaudit-suspicious-files-downloaded-31e54776-f2db-4465-b951-410880e009ad-6895491d.md) | InitialAccess | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - Uploaded files stats](../content/slackaudit-slackaudit-uploaded-files-stats-aa9bc100-012a-4348-820d-06606fc11299-ca14633c.md) | Exfiltration | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - User Permission Changed](../content/slackaudit-slackaudit-user-permission-changed-7adbe474-debf-47c2-9d76-49efd4d2953b-dd08ba0e.md) | PrivilegeEscalation | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - User logins by IP](../content/slackaudit-slackaudit-user-logins-by-ip-85850974-acbf-47bd-a635-4e3511b553c0-d29da94a.md) | InitialAccess, Persistence | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |
| [SlackAudit - Users joined channels without invites](../content/slackaudit-slackaudit-users-joined-channels-without-invites-ef815b70-e6f6-427b-ac9f-56d73472c4c3-40b271cd.md) | InitialAccess, Persistence | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SlackAudit](../content/slackaudit-slackaudit-1483bfeb.md) | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SlackAudit](../content/slackaudit-slackaudit-fb5aaeb6-14fa-45e8-bb4a-6d4c642a710e-da9ec765.md) | - | [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md) *(read)*<br>[`SlackAuditV2_CL`](../tables/slackauditv2-cl.md) *(read)*<br>[`SlackAudit_CL`](../tables/slackaudit-cl.md) *(read)* |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

