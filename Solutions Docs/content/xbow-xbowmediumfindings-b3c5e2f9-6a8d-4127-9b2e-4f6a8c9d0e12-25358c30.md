# XbowMediumFindings

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates an incident for each Medium severity finding reported by XBOW that is currently in an open state. These findings represent moderate security risks that should be addressed in a timely manner. Each alert is deduplicated per finding so re-ingestion of the same finding does not produce duplicate incidents.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [XBOW](../solutions/xbow.md) |
| **ID** | `b3c5e2f9-6a8d-4127-9b2e-4f6a8c9d0e12` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, Reconnaissance, CredentialAccess |
| **Required Connectors** | [XbowSecurityConnector](../connectors/xbowsecurityconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/XBOW/Analytic%20Rules/XbowMediumFindings.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`XbowAssets_CL`](../tables/xbowassets-cl.md) | ? | ✓ | ? |
| [`XbowFindings_CL`](../tables/xbowfindings-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to XBOW](../solutions/xbow.md)

