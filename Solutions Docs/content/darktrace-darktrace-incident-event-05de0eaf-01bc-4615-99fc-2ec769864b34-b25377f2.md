# Darktrace Incident Event

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query searches for Darktrace incident events and creates a Microsoft Sentinel incident for each matching result.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Darktrace](../solutions/darktrace.md) |
| **ID** | `05de0eaf-01bc-4615-99fc-2ec769864b34` |
| **Severity** | High |
| **Kind** | NRT |
| **Tactics** | InitialAccess, Execution, LateralMovement, CommandAndControl |
| **Techniques** | T1190, T1059, T1021, T1071 |
| **Required Connectors** | [DarktraceActiveAISecurityPlatform](../connectors/darktraceactiveaisecurityplatform.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Analytic%20Rules/DarktraceIncidentEvent.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DarktraceIncidents_CL`](../tables/darktraceincidents-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Darktrace](../solutions/darktrace.md)

