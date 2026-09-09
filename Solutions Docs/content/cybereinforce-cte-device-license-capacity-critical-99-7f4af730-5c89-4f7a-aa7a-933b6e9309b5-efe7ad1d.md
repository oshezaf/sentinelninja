# CTE - Device License Capacity Critical (99%)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Device license capacity has reached 99% - new and existing unmanaged devices may go unprotected. Emitted once when usage newly crosses this threshold by the daily tenant health-check job (api/src/functions/tenantHealthChecks.js); resets and can re-fire if usage later drops back below 95% and crosses again.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cybereinforce](../solutions/cybereinforce.md) |
| **ID** | `7f4af730-5c89-4f7a-aa7a-933b6e9309b5` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Required Connectors** | [cybereinforce_cte](../connectors/cybereinforce-cte.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybereinforce/Analytic%20Rules/DeviceLicenseCapacityCritical99.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cybereinforce](../solutions/cybereinforce.md)

