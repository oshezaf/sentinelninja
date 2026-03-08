# Cisco WSA - Top URLs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for top URLs.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [CiscoWSA](../solutions/ciscowsa.md) |
| **ID** | `aaf6ba04-7a00-401e-a650-06e213f3bfbc` |
| **Severity** | Medium |
| **Tactics** | InitialAccess |
| **Techniques** | T1189 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoWSA/Hunting%20Queries/CiscoWSATopResources.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `ProcessName == "cisco_wsa"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to CiscoWSA](../solutions/ciscowsa.md)

