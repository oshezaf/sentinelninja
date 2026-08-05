# PRODAFTUstaCompromisedCards_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/PRODAFTUstaCompromisedCards_CL.json)

| Column Name | Type |
|:------------|:-----|
| CardBin | string |
| CardBrand | string |
| CardLast4 | string |
| CardLength | int |
| CardMasked | string |
| CompanyId | int |
| CompanyName | string |
| ContentType | string |
| Created | datetime |
| ExpirationDate | datetime |
| Status | string |
| StatusTimestamp | datetime |
| TicketId | long |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [PRODAFT USTA - Payment Card Fraud Intelligence](../solutions/prodaft-usta-payment-card-fraud-intelligence.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [PRODAFT USTA - Payment Card Fraud Intelligence (via Codeless Connector Framework)](../connectors/prodaftustapcficcpdefinition.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (2)

**In solution [PRODAFT USTA - Payment Card Fraud Intelligence](../solutions/prodaft-usta-payment-card-fraud-intelligence.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [PRODAFT USTA - Non-expired payment card exposed](../content/prodaft-usta-payment-card-fraud-intelligence-prodaft-usta-non-expired-payment-card-exposed-674429c9-a858-436c-95b8-5808024ebd01-f3b34a4c.md) |  |
| [PRODAFT USTA - Payment card exposed](../content/prodaft-usta-payment-card-fraud-intelligence-prodaft-usta-payment-card-exposed-bd550c7f-5455-48de-b23d-30fced82d02b-61f1004e.md) |  |

### Hunting Queries (1)

**In solution [PRODAFT USTA - Payment Card Fraud Intelligence](../solutions/prodaft-usta-payment-card-fraud-intelligence.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [PRODAFT USTA - Payment card exposure by company](../content/prodaft-usta-payment-card-fraud-intelligence-prodaft-usta-payment-card-exposure-by-company-9f895380-3aad-47e4-9181-7c717a76af77-6ca37f0c.md) |  |

### Workbooks (1)

**In solution [PRODAFT USTA - Payment Card Fraud Intelligence](../solutions/prodaft-usta-payment-card-fraud-intelligence.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [PRODAFTUstaPCFIOverview](../content/prodaft-usta-payment-card-fraud-intelligence-prodaftustapcfioverview-314477da.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [PRODAFTUstaCompromisedCards](../parsers/prodaftustacompromisedcards.md) | [PRODAFT USTA - Payment Card Fraud Intelligence](../solutions/prodaft-usta-payment-card-fraud-intelligence.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

