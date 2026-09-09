# CTE - Possible Company-Wide C2 Campaign (Multiple Devices, Same Destination)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Multiple distinct devices within the same tenant were blocked attempting to reach the same URL/domain within a 24-hour window. Isolated blocks are usually just one user's browsing; several independent devices converging on the same destination is a strong signal of a coordinated malware/C2 campaign spreading across the company (e.g. a phishing link opened by several employees, or malware propagating internally).

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cybereinforce](../solutions/cybereinforce.md) |
| **ID** | `ec08477d-87a1-498d-8f34-72b8ec8f3758` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, LateralMovement |
| **Techniques** | T1071, T1570 |
| **Required Connectors** | [cybereinforce_cte](../connectors/cybereinforce-cte.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybereinforce/Analytic%20Rules/PossibleCompanyWideC2CampaignMultipleDevicesSameDestination.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cybereinforce](../solutions/cybereinforce.md)

