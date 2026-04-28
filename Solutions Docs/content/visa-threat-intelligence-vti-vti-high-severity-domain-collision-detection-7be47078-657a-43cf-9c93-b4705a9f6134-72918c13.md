# VTI - High Severity Domain Collision Detection

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This will alert when a collision is detected for EmailUrlInfo events with VTI high severity domain IoCs

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Visa Threat Intelligence (VTI)](../solutions/visa-threat-intelligence-vti.md) |
| **ID** | `7be47078-657a-43cf-9c93-b4705a9f6134` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [VisaThreatIntelligence](../connectors/visathreatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Visa%20Threat%20Intelligence%20%28VTI%29/Analytic%20Rules/VTIP_high_severity_domain.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`EmailUrlInfo`](../tables/emailurlinfo.md) | ✓ | ✗ | ? |
| [`VisaThreatIntelligenceIOC_CL`](../tables/visathreatintelligenceioc-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Visa Threat Intelligence (VTI)](../solutions/visa-threat-intelligence-vti.md)

