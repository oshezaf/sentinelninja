# VeeamAuthorizationEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (19 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/VeeamAuthorizationEvents_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| CreatedBy | string |
| CreationTime | datetime |
| Description | string |
| ExpirationTime | datetime |
| Id | string |
| ManagementGroupName | string |
| MG | string |
| Name | string |
| ProcessedBy | string |
| ProcessedTime | datetime |
| RawData | string |
| SourceSystem | string |
| State | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| VbrHostName | string |

## Solutions (1)

This table is used by the following solutions:

- [Veeam](../solutions/veeam.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Veeam](../solutions/veeam.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [VeeamSecurityActivities](../content/veeam-veeamsecurityactivities-f559a349.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

