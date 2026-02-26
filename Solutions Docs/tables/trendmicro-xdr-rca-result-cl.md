# TrendMicro_XDR_RCA_Result_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (24 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/TrendMicro_XDR_RCA_Result_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| agentEntity_guid_g | string |
| agentEntity_host_s | string |
| agentEntity_hostname_s | string |
| agentEntity_ip_s | string |
| Computer | string |
| eventId_d | real |
| isMatched_b | bool |
| ManagementGroupName | string |
| MG | string |
| objectEvent_s | string |
| objectHashId_s | string |
| objectMeta_s | string |
| objectName_s | string |
| parentObjectId_s | string |
| RawData | string |
| SourceSystem | string |
| taskId_g | string |
| taskName_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| workbenchId_s | string |
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

