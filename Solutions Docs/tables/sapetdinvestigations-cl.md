# SAPETDInvestigations_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (15 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20ETD%20Cloud/Data%20Connectors/SAPETD_PUSH_CCP/SAPETD_DCR.json)

| Column Name | Type |
|:------------|:-----|
| Actions | dynamic |
| Alerts | dynamic |
| CompletionTimestamp | datetime |
| createdAt | datetime |
| createdBy | string |
| CustomerNotification | boolean |
| Description | string |
| InvestigationId | int |
| ManagementVisibility | string |
| Processor | string |
| Severity | string |
| Status | string |
| Systems | dynamic |
| Users | dynamic |
| Version | string |

## Solutions (1)

This table is used by the following solutions:

- [SAP ETD Cloud](../solutions/sap-etd-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SAP Enterprise Threat Detection, cloud edition](../connectors/sapetdalerts.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [SAP ETD Cloud](../solutions/sap-etd-cloud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SAP ETD - Synch investigations](../content/sap-etd-cloud-sap-etd-synch-investigations-5096db53-fad3-4844-a264-246f7b7e6e06-9c9e9b19.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

