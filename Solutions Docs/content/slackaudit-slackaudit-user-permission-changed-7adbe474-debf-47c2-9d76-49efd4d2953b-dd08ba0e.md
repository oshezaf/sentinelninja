# SlackAudit - User Permission Changed

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for user permissions changes events.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SlackAudit](../solutions/slackaudit.md) |
| **ID** | `7adbe474-debf-47c2-9d76-49efd4d2953b` |
| **Severity** | Medium |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1078 |
| **Required Connectors** | [SlackAuditAPI](../connectors/slackauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlackAudit/Hunting%20Queries/SlackAuditUserPermissionsChanged.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md) 🔶 | ? | ✓ | ? |
| [`SlackAuditV2_CL`](../tables/slackauditv2-cl.md) 🔶 | ✓ | ✓ | ✓ |
| [`SlackAudit_CL`](../tables/slackaudit-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to SlackAudit](../solutions/slackaudit.md)

