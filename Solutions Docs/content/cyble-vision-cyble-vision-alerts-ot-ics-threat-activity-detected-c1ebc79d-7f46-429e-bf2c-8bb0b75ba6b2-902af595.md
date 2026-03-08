# Cyble Vision Alerts OT/ICS Threat Activity Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This alert indicates detection of OT/ICS-related network activity involving industrial control protocols (e.g., IEC104). May indicate probing, reconnaissance, or attempted access against critical infrastructure assets.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyble Vision](../solutions/cyble-vision.md) |
| **ID** | `c1ebc79d-7f46-429e-bf2c-8bb0b75ba6b2` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, Collection |
| **Techniques** | T0842, T0830 |
| **Required Connectors** | [CybleVisionAlerts](../connectors/cyblevisionalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Analytic%20Rules/Alerts_ot_ics_rule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyble Vision](../solutions/cyble-vision.md)

