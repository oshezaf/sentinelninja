# SlackAudit - User role changed to admin or owner

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query helps to detect a change in the users role to admin or owner.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SlackAudit](../solutions/slackaudit.md) |
| **ID** | `be6c5fc9-2ac3-43e6-8fb0-cb139e04e43e` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, PrivilegeEscalation |
| **Techniques** | T1098, T1078 |
| **Required Connectors** | [SlackAuditAPI](../connectors/slackauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlackAudit/Analytic%20Rules/SlackAuditUserChangedToAdminOrOwner.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md) | — | — |
| [`SlackAuditV2_CL`](../tables/slackauditv2-cl.md) | — | — |
| [`SlackAudit_CL`](../tables/slackaudit-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SlackAudit](../solutions/slackaudit.md)

