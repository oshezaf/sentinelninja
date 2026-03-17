# TrendMicro_XDR_RCA_Task_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (26 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/TrendMicro_XDR_RCA_Task_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| completedTimestamp | real |
| Computer | string |
| createdTimestamp | real |
| criteria_conditions | string |
| criteria_operator | string |
| description | string |
| id | string |
| id_g | string |
| lastUpdateTimestamp | real |
| ManagementGroupName | string |
| MG | string |
| name | string |
| name_s | string |
| RawData | string |
| SourceSystem | string |
| status | string |
| targets | string |
| targets_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| workbenchId | string |
| workbenchId_s | string |
| xdrCustomerID | string |
| xdrCustomerID_g | string |

## Solutions (1)

This table is used by the following solutions:

- [Trend Micro Vision One](../solutions/trend-micro-vision-one.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Trend Vision One](../connectors/trendmicroxdr.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

