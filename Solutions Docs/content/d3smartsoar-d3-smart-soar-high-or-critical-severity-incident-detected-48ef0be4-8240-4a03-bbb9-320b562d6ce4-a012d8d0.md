# D3 Smart SOAR - High or critical severity incident detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when a D3 Smart SOAR incident with High or Critical severity is ingested. This helps security teams prioritize response to the most impactful incidents reported by D3 Smart SOAR.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [D3SmartSOAR](../solutions/d3smartsoar.md) |
| **ID** | `48ef0be4-8240-4a03-bbb9-320b562d6ce4` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1499 |
| **Required Connectors** | [D3SOARConnectorDefinition](../connectors/d3soarconnectordefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/D3SmartSOAR/Analytic%20Rules/D3SmartSOAR-HighOrCriticalSeverityIncident.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`D3SOARIncidents_CL`](../tables/d3soarincidents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to D3SmartSOAR](../solutions/d3smartsoar.md)

