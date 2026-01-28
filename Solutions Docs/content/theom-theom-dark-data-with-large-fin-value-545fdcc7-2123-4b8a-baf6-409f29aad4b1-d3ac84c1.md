# Theom - Dark Data with large fin value

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates Sentinel incidents for critical/high Theom risks, associated with ruleId TRIS0032 (Theom has observed data with a large financial value, but that has not been accessed recently. Use this information to enforce data retention policies)

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Theom](../solutions/theom.md) |
| **ID** | `545fdcc7-2123-4b8a-baf6-409f29aad4b1` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1560, T1530 |
| **Required Connectors** | [Theom](../connectors/theom.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Theom/Analytic%20Rules/TRIS0032_Dark_Data_with_large_fin_value.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`TheomAlerts_CL`](../tables/theomalerts-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Theom](../solutions/theom.md)

