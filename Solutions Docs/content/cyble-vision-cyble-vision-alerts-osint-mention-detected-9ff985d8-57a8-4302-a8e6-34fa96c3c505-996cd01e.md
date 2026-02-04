# Cyble Vision Alerts OSINT Mention Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Triggers when Cyble detects an OSINT mention related to monitored keywords, entities, or brand identifiers. OSINT findings may indicate data leaks, expose content, targeting activity, impersonation, or discussions that may require investigation.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyble Vision](../solutions/cyble-vision.md) |
| **ID** | `9ff985d8-57a8-4302-a8e6-34fa96c3c505` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance, ResourceDevelopment |
| **Techniques** | T1592, T1589 |
| **Required Connectors** | [CybleVisionAlerts](../connectors/cyblevisionalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Analytic%20Rules/Alerts_osint_rule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) | — | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyble Vision](../solutions/cyble-vision.md)

