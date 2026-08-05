# PRODAFT USTA - Payment card exposure by company

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Summarizes compromised payment card exposure from PRODAFT USTA PCFI tickets, grouped by company. Shows still-valid (non-expired) card counts and card brands to help spot payment card fraud exposure affecting your organization.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [PRODAFT USTA - Payment Card Fraud Intelligence](../solutions/prodaft-usta-payment-card-fraud-intelligence.md) |
| **ID** | `9f895380-3aad-47e4-9181-7c717a76af77` |
| **Required Connectors** | [PRODAFTUstaPCFICCPDefinition](../connectors/prodaftustapcficcpdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Payment%20Card%20Fraud%20Intelligence/Hunting%20Queries/PaymentCardExposureByCompany.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PRODAFTUstaCompromisedCards_CL`](../tables/prodaftustacompromisedcards-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to PRODAFT USTA - Payment Card Fraud Intelligence](../solutions/prodaft-usta-payment-card-fraud-intelligence.md)

