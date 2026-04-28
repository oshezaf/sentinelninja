# VeeamCovewareFindings_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (26 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/VeeamCovewareFindings_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Artifact | string |
| Computer | string |
| Country | string |
| CovewareHostName | string |
| EventActivity | string |
| EventTime | datetime |
| EventType | string |
| FirstRunOrAccessed | datetime |
| Hostname | string |
| Id | string |
| MachineId | string |
| ManagementGroupName | string |
| Md5Hash | string |
| MG | string |
| RawData | string |
| RiskLevel | string |
| ScanTime | datetime |
| Sha1Hash | string |
| Sha256Hash | string |
| SourceSystem | string |
| TechniqueId | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| Username | string |

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

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VeeamSecurityActivites](../content/github-only-veeamsecurityactivites-4f8fb3e5.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

