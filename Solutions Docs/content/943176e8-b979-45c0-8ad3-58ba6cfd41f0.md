# Jira - User's password changed multiple times

Detects when user's password was changed multiple times from different IP addresses.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AtlassianJiraAudit](../solutions/atlassianjiraaudit.md) |
| **ID** | `943176e8-b979-45c0-8ad3-58ba6cfd41f0` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1078 |
| **Required Connectors** | [JiraAuditAPI](../connectors/jiraauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Analytic%20Rules/JiraUserPasswordChange.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to AtlassianJiraAudit](../solutions/atlassianjiraaudit.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
