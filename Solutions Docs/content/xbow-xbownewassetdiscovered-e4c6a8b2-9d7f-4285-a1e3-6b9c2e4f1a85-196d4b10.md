# XbowNewAssetDiscovered

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Alerts when a new asset is registered in XBOW for the first time. This is detected by matching assets whose CreatedAt timestamp falls within the current query window, indicating the asset was newly added rather than updated. This helps track shadow IT, new deployments, and any unexpected expansion of the external attack surface.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [XBOW](../solutions/xbow.md) |
| **ID** | `e4c6a8b2-9d7f-4285-a1e3-6b9c2e4f1a85` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance, Discovery |
| **Techniques** | T1595 |
| **Required Connectors** | [XbowSecurityConnector](../connectors/xbowsecurityconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/XBOW/Analytic%20Rules/XbowNewAssetDiscovered.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`XbowAssets_CL`](../tables/xbowassets-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to XBOW](../solutions/xbow.md)

