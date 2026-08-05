# SAPETDAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SAPETDAlerts_CL.json)

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
| TimeGenerated | datetime |
| Users | dynamic |
| Version | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [SAP ETD Cloud](../solutions/sap-etd-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SAP Enterprise Threat Detection, cloud edition](../connectors/sapetdalerts.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (5)

**In solution [SAP ETD Cloud](../solutions/sap-etd-cloud.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [SAP ETD - Execution of Sensitive Function Module](../content/sap-etd-cloud-sap-etd-execution-of-sensitive-function-module-c6111e06-11e2-45eb-86ef-28313a06db35-96b35578.md) |  |
| [SAP ETD - Login from unexpected network](../content/sap-etd-cloud-sap-etd-login-from-unexpected-network-5dd72ebe-03ac-43ac-851b-68cfe5106e4f-bc0de3f5.md) |  |
| [SAP ETD - No new data received](../content/sap-etd-cloud-sap-etd-no-new-data-received-a9206c5a-3e72-4c10-807f-313a56075b20-e0dd0f13.md) |  |
| [SAP ETD - SAP system stopped reporting data](../content/sap-etd-cloud-sap-etd-sap-system-stopped-reporting-data-b1413b43-9410-46f4-94d9-da507105d834-06d70879.md) |  |
| [SAP ETD - Synch alerts](../content/sap-etd-cloud-sap-etd-synch-alerts-7a830484-e349-4527-85f6-7850c468c238-8305da5b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

