# Darktrace AI Analyst

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule creates Microsoft Sentinel Incidents based on Darktrace AI Analyst Incidents, fetched every 5 minutes.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Darktrace](../solutions/darktrace.md) |
| **ID** | `ffa2977f-3077-4bba-b1bf-f3417699cbb0` |
| **Severity** | High |
| **Kind** | NRT |
| **Required Connectors** | [DarktraceRESTConnector](../connectors/darktracerestconnector.md) |
| **Event Vendor** | Darktrace |
| **Event Product** | Darktrace DETECT |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Analytic%20Rules/CreateIncidentFromAIAnalystIncident.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Darktrace](../solutions/darktrace.md)

