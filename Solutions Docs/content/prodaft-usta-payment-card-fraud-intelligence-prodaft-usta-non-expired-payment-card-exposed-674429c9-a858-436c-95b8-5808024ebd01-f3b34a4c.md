# PRODAFT USTA - Non-expired payment card exposed

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a new PRODAFT USTA Payment Card Fraud Intelligence ticket that exposes a payment card whose expiration date is still in the future. A non-expired card is immediately usable for fraudulent transactions and is therefore higher risk than an already-expired card. The full card number is never stored - only the BIN, last 4 digits, brand, and length are retained. Prioritize reissue of the affected card with the issuing bank and monitor for fraudulent activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PRODAFT USTA - Payment Card Fraud Intelligence](../solutions/prodaft-usta-payment-card-fraud-intelligence.md) |
| **ID** | `674429c9-a858-436c-95b8-5808024ebd01` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1657 |
| **Required Connectors** | [PRODAFTUstaPCFICCPDefinition](../connectors/prodaftustapcficcpdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Payment%20Card%20Fraud%20Intelligence/Analytic%20Rules/NonExpiredPaymentCardExposed.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PRODAFTUstaCompromisedCards_CL`](../tables/prodaftustacompromisedcards-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PRODAFT USTA - Payment Card Fraud Intelligence](../solutions/prodaft-usta-payment-card-fraud-intelligence.md)

