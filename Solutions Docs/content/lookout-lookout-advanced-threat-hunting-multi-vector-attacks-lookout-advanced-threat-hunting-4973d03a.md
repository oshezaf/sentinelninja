# Lookout Advanced Threat Hunting - Multi-Vector Attacks

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies devices experiencing multiple threat types within a short timeframe, indicating coordinated attacks

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Lookout](../solutions/lookout.md) |
| **ID** | `lookout-advanced-threat-hunting` |
| **Tactics** | Discovery, Persistence, DefenseEvasion |
| **Techniques** | T1057, T1418, T1566 |
| **Required Connectors** | [LookoutAPI](../connectors/lookoutapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lookout/Hunting%20Queries/LookoutAdvancedThreatHunting.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`LookoutMtdV2_CL`](../tables/lookoutmtdv2-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Lookout](../solutions/lookout.md)

