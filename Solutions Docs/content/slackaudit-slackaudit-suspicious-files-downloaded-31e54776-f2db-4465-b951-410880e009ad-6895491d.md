# SlackAudit - Suspicious files downloaded

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query searches for potentialy suspicious files downloads.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SlackAudit](../solutions/slackaudit.md) |
| **ID** | `31e54776-f2db-4465-b951-410880e009ad` |
| **Severity** | Medium |
| **Tactics** | InitialAccess |
| **Techniques** | T1189 |
| **Required Connectors** | [SlackAuditAPI](../connectors/slackauditapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlackAudit/Hunting%20Queries/SlackAuditSuspiciousFilesDownloaded.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SlackAuditNativePoller_CL`](../tables/slackauditnativepoller-cl.md) | ? | ? | ? |
| [`SlackAuditV2_CL`](../tables/slackauditv2-cl.md) | ? | ✗ | ✓ |
| [`SlackAudit_CL`](../tables/slackaudit-cl.md) | ? | ? | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to SlackAudit](../solutions/slackaudit.md)

