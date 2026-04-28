# XbowLowFindings

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates an incident for each Low severity finding reported by XBOW that is currently in an open state. These findings represent minor security issues or best-practice violations that should be addressed as part of regular security maintenance. Each alert is deduplicated per finding so re-ingestion of the same finding does not produce duplicate incidents.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [XBOW](../solutions/xbow.md) |
| **ID** | `d2e4f1a8-7c9b-4356-8e0d-5a2b7c8e9f01` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Required Connectors** | [XbowSecurityConnector](../connectors/xbowsecurityconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/XBOW/Analytic%20Rules/XbowLowFindings.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`XbowAssets_CL`](../tables/xbowassets-cl.md) | ? | ✓ | ? |
| [`XbowFindings_CL`](../tables/xbowfindings-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to XBOW](../solutions/xbow.md)

