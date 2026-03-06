# MuleSoft_Cloudhub_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (33 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/MuleSoft_Cloudhub_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| actions_s | string |
| Computer | string |
| condition_resources_s | string |
| condition_resourceType_s | string |
| condition_type_s | string |
| createdAt_d | real |
| deploymentId_s | string |
| enabled_b | bool |
| environmentId_g | string |
| event_loggerName_s | string |
| event_message_s | string |
| event_priority_s | string |
| event_threadName_s | string |
| event_timestamp_d | real |
| event_type_s | string |
| id_g | string |
| instanceId_s | string |
| isSystem_b | bool |
| lastModified_d | real |
| line_d | real |
| ManagementGroupName | string |
| MG | string |
| name_s | string |
| organizationId_g | string |
| productName_s | string |
| RawData | string |
| recordId_s | string |
| severity_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [Mulesoft](../solutions/mulesoft.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [MuleSoft Cloudhub](../connectors/mulesoft.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MuleSoftCloudhub](../parsers/mulesoftcloudhub.md) | [Mulesoft](../solutions/mulesoft.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

