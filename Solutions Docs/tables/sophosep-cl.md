# SophosEP_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (42 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SophosEP_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| _ResourceId_s | string |
| amsi_threat_data_parentProcessId_s | string |
| amsi_threat_data_parentProcessId_s_s | string |
| amsi_threat_data_parentProcessPath_s | string |
| amsi_threat_data_parentProcessPath_s_s | string |
| amsi_threat_data_processId_s | string |
| amsi_threat_data_processId_s_s | string |
| amsi_threat_data_processName_s | string |
| amsi_threat_data_processName_s_s | string |
| amsi_threat_data_processPath_s | string |
| amsi_threat_data_processPath_s_s | string |
| Computer | string |
| Created | datetime |
| created_at_t | datetime |
| customer_id_g | string |
| datastream_s | string |
| endpoint_id_g | string |
| endpoint_type_s | string |
| EventEndTime | datetime |
| EventProduct_s | string |
| EventVendor_s | string |
| group_s | string |
| id_g | string |
| location_s | string |
| ManagementGroupName | string |
| MG | string |
| name_s | string |
| origin_s | string |
| RawData | string |
| severity_s | string |
| source_info_ip_s | string |
| source_s | string |
| SourceSystem | string |
| TenantId | string |
| threat_s | string |
| TimeGenerated | datetime |
| TimeGenerated_s | string |
| Type | string |
| type_s | string |
| user_id_s | string |
| when_t | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Sophos Endpoint Protection](../solutions/sophos-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Sophos Endpoint Protection](../connectors/sophosep.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

