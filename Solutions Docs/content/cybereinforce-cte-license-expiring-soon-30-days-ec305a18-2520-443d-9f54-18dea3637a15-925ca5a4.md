# CTE - License Expiring Soon (30 Days)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

A paid Cybereinforce license is expiring within 30 days - a reminder to plan renewal before it lapses. Emitted once per license term by the daily tenant health-check job (api/src/functions/tenantHealthChecks.js); re-arms automatically on renewal. Trial licenses do not get this 30-day reminder, only the 7-day critical one below.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cybereinforce](../solutions/cybereinforce.md) |
| **ID** | `ec305a18-2520-443d-9f54-18dea3637a15` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Required Connectors** | [cybereinforce_cte](../connectors/cybereinforce-cte.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybereinforce/Analytic%20Rules/LicenseExpiringSoon30Days.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cybereinforce](../solutions/cybereinforce.md)

