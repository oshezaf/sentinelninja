# BetterMTDNetflowLog_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (36 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BetterMTDNetflowLog_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Account | string |
| AppIdentifier | string |
| AppName | string |
| Cid | real |
| Computer | string |
| Destination | string |
| DestinationCountry | string |
| DestinationCountryCode | string |
| DestinationLat | real |
| DestinationLon | real |
| DeviceName | string |
| Host | string |
| ManagementGroupName | string |
| MG | string |
| NetworkType | string |
| Path | string |
| Port | real |
| RawData | string |
| Reason | string |
| Scheme | string |
| SourceClient | string |
| SourceCountry | string |
| SourceCountryCode | string |
| SourceLat | real |
| SourceLon | real |
| SourceSystem | string |
| Status_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| UDID | string |
| Url | string |
| UrlStatus | string |
| Username | string |
| UUId | string |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

