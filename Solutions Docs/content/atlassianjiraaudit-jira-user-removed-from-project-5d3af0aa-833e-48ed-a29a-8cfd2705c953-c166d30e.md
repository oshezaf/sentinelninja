# Jira - User removed from project

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when a user was removed from project.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AtlassianJiraAudit](../solutions/atlassianjiraaudit.md) |
| **ID** | `5d3af0aa-833e-48ed-a29a-8cfd2705c953` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1531 |
| **Required Connectors** | [JiraAuditAPI](../connectors/jiraauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Analytic%20Rules/JiraUserRemovedFromProject.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Jira_Audit_CL`](../tables/jira-audit-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`Jira_Audit_v2_CL`](../tables/jira-audit-v2-cl.md) 🔶 | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to AtlassianJiraAudit](../solutions/atlassianjiraaudit.md)

