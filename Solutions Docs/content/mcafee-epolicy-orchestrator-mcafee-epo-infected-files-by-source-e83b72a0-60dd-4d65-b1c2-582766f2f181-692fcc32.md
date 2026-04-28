# McAfee ePO - Infected files by source

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for infected files which were detected.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [McAfee ePolicy Orchestrator](../solutions/mcafee-epolicy-orchestrator.md) |
| **ID** | `e83b72a0-60dd-4d65-b1c2-582766f2f181` |
| **Tactics** | InitialAccess |
| **Techniques** | T1189 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/McAfee%20ePolicy%20Orchestrator/Hunting%20Queries/McAfeeEPOInfectedFiles.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `ProcessName contains "EPOEvents"`<br>`SyslogMessage contains "<EPOevent>"`<br>`SyslogMessage contains "<UpdateEvents>"` | ✓ | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to McAfee ePolicy Orchestrator](../solutions/mcafee-epolicy-orchestrator.md)

