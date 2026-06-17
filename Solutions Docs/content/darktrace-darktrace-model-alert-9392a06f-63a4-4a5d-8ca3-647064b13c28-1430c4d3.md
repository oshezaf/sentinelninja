# Darktrace Model Alert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query searches for Darktrace model alerts and creates a Microsoft Sentinel alert from each matching event. Edit this analytic rule if you would like it to create Microsoft Sentinel incidents.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Darktrace](../solutions/darktrace.md) |
| **ID** | `9392a06f-63a4-4a5d-8ca3-647064b13c28` |
| **Severity** | High |
| **Kind** | NRT |
| **Tactics** | InitialAccess, Execution, LateralMovement, CommandAndControl |
| **Techniques** | T1190, T1059, T1021, T1071 |
| **Required Connectors** | [DarktraceActiveAISecurityPlatform](../connectors/darktraceactiveaisecurityplatform.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Analytic%20Rules/DarktraceModelAlert.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DarktraceModelAlerts_CL`](../tables/darktracemodelalerts-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Darktrace](../solutions/darktrace.md)

