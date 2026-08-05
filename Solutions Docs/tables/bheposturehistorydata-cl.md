# BHEPostureHistoryData_CL

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

## Schema (9 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BHEPostureHistoryData_CL.json)

| Column Name | Type |
|:------------|:-----|
| data_type | string |
| domain_id | string |
| domain_name | string |
| end_time | datetime |
| metric_date | datetime |
| start_time | datetime |
| tenant_url | string |
| TimeGenerated | datetime |
| value | int |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [BloodHound Enterprise](../solutions/bloodhound-enterprise.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [BloodHound Enterprise Data Connector (using Azure Functions)](../connectors/bloodhoundenterprise.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [BloodHound Enterprise](../solutions/bloodhound-enterprise.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [BloodHoundPostureHistory](../content/bloodhound-enterprise-bloodhoundposturehistory-38b0f901.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

