# PRODAFT USTA - Payment card exposed

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a new PRODAFT USTA Payment Card Fraud Intelligence ticket that exposes a compromised payment card belonging to the monitored company. These typically originate from card breaches, skimmers, or infostealer infections and indicate that a payment card may be available to fraudsters. The full card number is never stored - only the BIN, last 4 digits, brand, and length are retained. Investigate the exposure and, where the card is your own, coordinate reissue with the issuing bank.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PRODAFT USTA - Payment Card Fraud Intelligence](../solutions/prodaft-usta-payment-card-fraud-intelligence.md) |
| **ID** | `bd550c7f-5455-48de-b23d-30fced82d02b` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1657 |
| **Required Connectors** | [PRODAFTUstaPCFICCPDefinition](../connectors/prodaftustapcficcpdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Payment%20Card%20Fraud%20Intelligence/Analytic%20Rules/PaymentCardExposed.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PRODAFTUstaCompromisedCards_CL`](../tables/prodaftustacompromisedcards-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PRODAFT USTA - Payment Card Fraud Intelligence](../solutions/prodaft-usta-payment-card-fraud-intelligence.md)

