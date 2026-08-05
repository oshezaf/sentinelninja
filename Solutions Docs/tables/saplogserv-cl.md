# SAPLogServ_CL

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

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20LogServ%5CData%20Connectors%5CSAPLogServ_PUSH_CCP/table.json)

| Column Name | Type |
|:------------|:-----|
| clz_dir | string |
| clz_subdir | string |
| cribl_breaker | string |
| cribl_pipe | string |
| host | string |
| index | string |
| Raw | string |
| region | string |
| source | string |
| sourcetype | string |
| test | dynamic |
| test1 | dynamic |
| TimeGenerated | datetime |
| UnixTimestamp | real |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [SAP LogServ](../solutions/sap-logserv.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SAP LogServ (RISE), S/4HANA Cloud private edition](../connectors/saplogserv.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [SAP LogServ](../solutions/sap-logserv.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SAPLogServObserve](../content/sap-logserv-saplogservobserve-6fc88ed2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

