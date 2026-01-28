# External Fabric Module XFM1 is unhealthy

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

External Fabric Module XFM1 is unhealthy

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Pure Storage](../solutions/pure-storage.md) |
| **ID** | `a8130dcc-3617-41c0-a7ac-5f352bcfffaf` |
| **Severity** | High |
| **Kind** | NRT |
| **Tactics** | Execution |
| **Techniques** | T0871 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pure%20Storage/Analytic%20Rules/FB-FabricModuleUnhealthy.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`Syslog`](../tables/syslog.md) | `SyslogMessage has "purity.alert"` | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Pure Storage](../solutions/pure-storage.md)

