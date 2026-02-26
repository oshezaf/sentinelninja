# BetterMTDDeviceLog_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (25 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BetterMTDDeviceLog_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| AddedDate | datetime |
| AgentVersion | string |
| BuildNumber | string |
| CompanyId | real |
| CompanyName | string |
| Computer | string |
| DeviceId | real |
| DeviceOS | string |
| DevicePlatform | string |
| DeviceUDID | string |
| IsDeleted | bool |
| LastReported | datetime |
| LocationID | real |
| ManagementGroupName | string |
| Manufacturer | string |
| MG | string |
| RawData | string |
| SourceSystem | string |
| TenantId | string |
| ThreatLevel | string |
| ThreatScore | real |
| TimeGenerated | datetime |
| Type | string |
| UserEmail | string |

## Solutions (1)

This table is used by the following solutions:

- [BETTER Mobile Threat Defense (MTD)](../solutions/better-mobile-threat-defense-mtd.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [BETTER Mobile Threat Defense (MTD)](../connectors/bettermtd.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [BETTER Mobile Threat Defense (MTD)](../solutions/better-mobile-threat-defense-mtd.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [BETTER_MTD_Workbook](../content/better-mobile-threat-defense-mtd-better-mtd-workbook-e3655f79.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

