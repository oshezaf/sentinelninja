# SlackAudit - Suspicious file downloaded.

Detects potentialy suspicious downloads.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SlackAudit](../solutions/slackaudit.md) |
| **ID** | `132b98a5-07e9-401a-9b6f-453e52a53979` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1189 |
| **Required Connectors** | [SlackAuditAPI](../connectors/slackauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlackAudit/Analytic%20Rules/SlackAuditSuspiciousFileDownloaded.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)
- [`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)
- [`SlackAudit_CL`](../tables/slackaudit-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SlackAudit](../solutions/slackaudit.md)

