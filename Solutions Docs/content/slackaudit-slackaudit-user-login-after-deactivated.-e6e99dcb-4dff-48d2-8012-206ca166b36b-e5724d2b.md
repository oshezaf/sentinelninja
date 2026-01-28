# SlackAudit - User login after deactivated.

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when user email linked to account changes.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SlackAudit](../solutions/slackaudit.md) |
| **ID** | `e6e99dcb-4dff-48d2-8012-206ca166b36b` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence, PrivilegeEscalation |
| **Techniques** | T1078 |
| **Required Connectors** | [SlackAuditAPI](../connectors/slackauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlackAudit/Analytic%20Rules/SlackAuditUserLoginAfterDeactivated.yaml) |

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

