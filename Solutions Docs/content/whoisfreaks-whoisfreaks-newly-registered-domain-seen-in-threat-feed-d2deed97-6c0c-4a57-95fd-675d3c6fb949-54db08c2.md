# WhoisFreaks - newly registered domain seen in threat feed

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies newly registered domains that are later observed in WhoisFreaks threat feeds. The rule runs hourly and matches threat rows ingested in the last hour against domains seen in the NRD feeds during the previous seven days, so each threat row is alerted on once.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [WhoisFreaks](../solutions/whoisfreaks.md) |
| **ID** | `d2deed97-6c0c-4a57-95fd-675d3c6fb949` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, ResourceDevelopment |
| **Techniques** | T1583, T1566 |
| **Required Connectors** | [WhoisFreaks](../connectors/whoisfreaks.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WhoisFreaks/Analytic%20Rules/WhoisFreaks-NRD-Also-Threat.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WhoisFreaksNRDNoWhois_CL`](../tables/whoisfreaksnrdnowhois-cl.md) | ? | ✓ | ? |
| [`WhoisFreaksNRD_CL`](../tables/whoisfreaksnrd-cl.md) | ? | ✓ | ? |
| [`WhoisFreaksThreat_CL`](../tables/whoisfreaksthreat-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to WhoisFreaks](../solutions/whoisfreaks.md)

