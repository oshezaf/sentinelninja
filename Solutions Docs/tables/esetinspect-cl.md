# ESETInspect_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (40 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ESETInspect_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| computerId_d | real |
| computerName_s | string |
| computerUuid_g | string |
| creationTime_t | datetime |
| deepLink_s | string |
| handled_d | real |
| id_d | real |
| ManagementGroupName | string |
| MG | string |
| moduleFirstSeenLocally_t | datetime |
| moduleId_d | real |
| moduleLastExecutedLocally_t | datetime |
| moduleLgAge_d | real |
| moduleLgPopularity_d | real |
| moduleLgReputation_d | real |
| moduleName_s | string |
| moduleSha1_s | string |
| moduleSignatureType_s | string |
| moduleSigner_s | string |
| priority_d | real |
| processCommandLine_s | string |
| processId_d | real |
| processPath_s | string |
| processUser_s | string |
| RawData | string |
| resolved_b | bool |
| ruleName_s | string |
| Severity | string |
| severityScore_d | real |
| SourceSystem | string |
| TableName | datetime |
| TenantId | string |
| threatName_s | string |
| threatUri_s | string |
| TimeGenerated | datetime |
| Type | string |
| type_s | string |
| uuid_g | string |

## Solutions (1)

This table is used by the following solutions:

- [ESET Inspect](../solutions/eset-inspect.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ESET Inspect](../connectors/esetinspect.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

