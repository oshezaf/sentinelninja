# BetterMTDAppLog_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (18 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BetterMTDAppLog_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| AppName | string |
| AppStatus_s | string |
| BundleId | string |
| CompanyId | real |
| Computer | string |
| DateAdded | datetime |
| DeviceUDID | string |
| IsMdm | real |
| ManagementGroupName | string |
| MG | string |
| Platform | string |
| RawData | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| Version | real |

## Solutions (1)

This table is used by the following solutions:

- [BETTER Mobile Threat Defense (MTD)](../solutions/better-mobile-threat-defense-mtd.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [BETTER Mobile Threat Defense (MTD)](../connectors/bettermtd.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [BETTER Mobile Threat Defense (MTD)](../solutions/better-mobile-threat-defense-mtd.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [BETTER_MTD_Workbook](../content/better-mobile-threat-defense-mtd-better-mtd-workbook-e3655f79.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [BETTER_MTD_Workbook](../content/github-only-better-mtd-workbook-59bbe47f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

