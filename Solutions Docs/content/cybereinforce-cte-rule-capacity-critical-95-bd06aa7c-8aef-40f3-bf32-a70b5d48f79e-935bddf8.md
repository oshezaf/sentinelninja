# CTE - Rule Capacity Critical (95%)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Tenant-wide blocking-rule/IOC capacity has reached 95% - new rules or IOCs may soon fail to be added. Emitted by the daily tenant health-check job (api/src/functions/tenantHealthChecks.js) when usage newly crosses this threshold, and re-emitted at most once per ~30 days while it remains above threshold.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cybereinforce](../solutions/cybereinforce.md) |
| **ID** | `bd06aa7c-8aef-40f3-bf32-a70b5d48f79e` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Required Connectors** | [cybereinforce_cte](../connectors/cybereinforce-cte.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybereinforce/Analytic%20Rules/RuleCapacityCritical95.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cybereinforce](../solutions/cybereinforce.md)

