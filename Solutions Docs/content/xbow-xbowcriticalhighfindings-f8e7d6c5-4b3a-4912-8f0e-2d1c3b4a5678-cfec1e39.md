# XbowCriticalHighFindings

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates an incident for each Critical or High severity finding reported by XBOW that is currently in an open state. These findings represent the most severe security issues and require immediate attention. Each alert is deduplicated per finding so re-ingestion of the same finding does not produce duplicate incidents.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [XBOW](../solutions/xbow.md) |
| **ID** | `f8e7d6c5-4b3a-4912-8f0e-2d1c3b4a5678` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, PrivilegeEscalation, DefenseEvasion, Impact |
| **Techniques** | T1190 |
| **Required Connectors** | [XbowSecurityConnector](../connectors/xbowsecurityconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/XBOW/Analytic%20Rules/XbowCriticalHighFindings.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`XbowAssets_CL`](../tables/xbowassets-cl.md) | ? | ✓ | ? |
| [`XbowFindings_CL`](../tables/xbowfindings-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to XBOW](../solutions/xbow.md)

