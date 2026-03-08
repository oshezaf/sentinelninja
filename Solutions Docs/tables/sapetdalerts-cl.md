# SAPETDAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (12 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20ETD%20Cloud/Data%20Connectors/SAPETD_PUSH_CCP/SAPETD_DCR.json)

| Column Name | Type |
|:------------|:-----|
| AlertId | int |
| CreationTimestamp | datetime |
| MaxTimestamp | datetime |
| Measure | int |
| MinTimestamp | datetime |
| NormalizedTriggeringEvents | dynamic |
| PatternDescription | string |
| PatternName | string |
| Score | int |
| Status | string |
| Threshold | int |
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

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [SAP ETD Cloud](../solutions/sap-etd-cloud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SAP ETD - Execution of Sensitive Function Module](../content/sap-etd-cloud-sap-etd-execution-of-sensitive-function-module-c6111e06-11e2-45eb-86ef-28313a06db35-96b35578.md) |  |
| [SAP ETD - Login from unexpected network](../content/sap-etd-cloud-sap-etd-login-from-unexpected-network-5dd72ebe-03ac-43ac-851b-68cfe5106e4f-bc0de3f5.md) |  |
| [SAP ETD - Synch alerts](../content/sap-etd-cloud-sap-etd-synch-alerts-7a830484-e349-4527-85f6-7850c468c238-8305da5b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

