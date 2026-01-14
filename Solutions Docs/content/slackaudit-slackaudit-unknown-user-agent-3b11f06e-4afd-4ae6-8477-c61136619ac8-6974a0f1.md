# SlackAudit - Unknown User Agent

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query helps to detect who trying to connect to the Slack Workspace with unknown User Agent.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SlackAudit](../solutions/slackaudit.md) |
| **ID** | `3b11f06e-4afd-4ae6-8477-c61136619ac8` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [SlackAuditAPI](../connectors/slackauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlackAudit/Analytic%20Rules/SlackAuditUnknownUA.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)
- [`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)
- [`SlackAudit_CL`](../tables/slackaudit-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SlackAudit](../solutions/slackaudit.md)

