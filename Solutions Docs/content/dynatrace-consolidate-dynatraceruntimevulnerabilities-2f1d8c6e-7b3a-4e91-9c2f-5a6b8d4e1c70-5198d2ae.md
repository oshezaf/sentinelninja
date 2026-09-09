# Consolidate_DynatraceRuntimeVulnerabilities

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Collapses raw Dynatrace runtime vulnerability events into one current-state row per vulnerability, aggregating status across all affected entities. Reads DynatraceSecurityProblemsV3Raw_CL, writes DynatraceSecurityProblemsV3_CL.

| Attribute | Value |
|:----------|:------|
| **Type** | Summary Rule |
| **Solution** | [Dynatrace](../solutions/dynatrace.md) |
| **ID** | `2f1d8c6e-7b3a-4e91-9c2f-5a6b8d4e1c70` |
| **Required Connectors** | [DTRunVulnV3CCPDefinition](../connectors/dtrunvulnv3ccpdefinition.md) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DynatraceSecurityProblemsV3Raw_CL`](../tables/dynatracesecurityproblemsv3raw-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Summary Rules](summary-rules.md) · [Back to Dynatrace](../solutions/dynatrace.md)

