# Jira - Users' IP addresses

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for users' IP addresses.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AtlassianJiraAudit](../solutions/atlassianjiraaudit.md) |
| **ID** | `2265bbd2-7e97-4d69-bdfc-eeb646730d8f` |
| **Severity** | Medium |
| **Tactics** | Persistence |
| **Techniques** | T1078 |
| **Required Connectors** | [JiraAuditAPI](../connectors/jiraauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Hunting%20Queries/JiraUserIPs.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Jira_Audit_CL`](../tables/jira-audit-cl.md) | ✗ | ✗ | ✗ |
| [`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to AtlassianJiraAudit](../solutions/atlassianjiraaudit.md)

