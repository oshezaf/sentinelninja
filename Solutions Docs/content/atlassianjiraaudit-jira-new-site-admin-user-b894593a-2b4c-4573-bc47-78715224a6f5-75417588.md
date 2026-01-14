# Jira - New site admin user

Detects new site admin user.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AtlassianJiraAudit](../solutions/atlassianjiraaudit.md) |
| **ID** | `b894593a-2b4c-4573-bc47-78715224a6f5` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, PrivilegeEscalation |
| **Techniques** | T1078 |
| **Required Connectors** | [JiraAuditAPI](../connectors/jiraauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Analytic%20Rules/JiraNewPrivilegedUser.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Jira_Audit_CL`](../tables/jira-audit-cl.md)
- [`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to AtlassianJiraAudit](../solutions/atlassianjiraaudit.md)

