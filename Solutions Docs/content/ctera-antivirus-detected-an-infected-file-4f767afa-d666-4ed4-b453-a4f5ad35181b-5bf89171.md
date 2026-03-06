# Antivirus Detected an Infected File

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Monitors CTERA platform to detect files infected with viruses identified by the antivirus engine on Edge Filers.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CTERA](../solutions/ctera.md) |
| **ID** | `4f767afa-d666-4ed4-b453-a4f5ad35181b` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | NRT |
| **Tactics** | Impact |
| **Techniques** | T1203 |
| **Required Connectors** | [CTERA](../connectors/ctera.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTERA/Analytic%20Rules/InfectedFileDetected.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `SyslogMessage contains "found an infected file"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to CTERA](../solutions/ctera.md)

