# blacklens Insights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates incidents from blacklens.io Attack Surface Management alerts ingested into the blacklens_CL table. Alert severity is mapped dynamically from the source data.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Blacklens](../solutions/blacklens.md) |
| **ID** | `e261b70a-3005-4a1b-a7a2-2c8147fafed7` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | NRT |
| **Tactics** | Reconnaissance, ResourceDevelopment, InitialAccess, CredentialAccess, Collection, Exfiltration, DefenseEvasion, CommandAndControl |
| **Techniques** | T1595, T1583, T1190, T1110, T1005, T1041, T1562, T1071 |
| **Required Connectors** | [blacklens_io](../connectors/blacklens-io.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Blacklens/Analytic%20Rules/blacklensInsights.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`blacklens_CL`](../tables/blacklens-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Blacklens](../solutions/blacklens.md)

