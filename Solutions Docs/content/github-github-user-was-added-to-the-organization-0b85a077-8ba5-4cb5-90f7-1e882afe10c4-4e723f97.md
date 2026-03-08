# GitHub - User was added to the organization

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detect activities when a user was added to the organization. This query runs every day and its severity is Medium.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GitHub](../solutions/github.md) |
| **ID** | `0b85a077-8ba5-4cb5-90f7-1e882afe10c4` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Analytic%20Rules/GitHub%20-%20User%20was%20added%20to%20the%20organization.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md) | ✓ | ✓ | ✓ |
| [`GitHubAuditLogsV2_CL`](../tables/githubauditlogsv2-cl.md) | ✓ | ✓ | ✓ |
| [`ImpactedUser`](../tables/impacteduser.md) | ? | ? | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GitHub](../solutions/github.md)

