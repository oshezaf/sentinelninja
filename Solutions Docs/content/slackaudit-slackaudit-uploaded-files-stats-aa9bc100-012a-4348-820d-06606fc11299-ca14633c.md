# SlackAudit - Uploaded files stats

This query shows top users by uploads over time.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SlackAudit](../solutions/slackaudit.md) |
| **ID** | `aa9bc100-012a-4348-820d-06606fc11299` |
| **Severity** | Medium |
| **Tactics** | Exfiltration |
| **Techniques** | T1048 |
| **Required Connectors** | [SlackAuditAPI](../connectors/slackauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlackAudit/Hunting%20Queries/SlackAuditUploadedFilesByUser.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md)
- [`SlackAuditV2_CL`](../tables/slackauditv2-cl.md)
- [`SlackAudit_CL`](../tables/slackaudit-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to SlackAudit](../solutions/slackaudit.md)

