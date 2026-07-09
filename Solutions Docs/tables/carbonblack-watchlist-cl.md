# CarbonBlack_Watchlist_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | VMware *(basis: projected)* |
| **Source Product** | Carbon Black Cloud |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (33 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Carbon%20Black%20Cloud%5CData%20Connectors%5CVMwareCarbonBlackCloud_ccp/table_watclist.json)

| Column Name | Type |
|:------------|:-----|
| CreateTime | string |
| DeviceExternalIp | string |
| DeviceId | string |
| DeviceInternalIp | string |
| DeviceName | string |
| DeviceOs | string |
| IocHit | string |
| IocId | string |
| OrgKey | string |
| ParentCmdline | string |
| ParentGuid | string |
| ParentHash | string |
| ParentPath | string |
| ParentPid | string |
| ParentPublisher | string |
| ParentReputation | string |
| ParentUsername | string |
| ProcessCmdline | string |
| ProcessGuid | string |
| ProcessHash | string |
| ProcessPath | string |
| ProcessPid | string |
| ProcessPublisher | string |
| ProcessReputation | string |
| ProcessUsername | string |
| ReportId | string |
| ReportName | string |
| ReportTags | string |
| Schema | string |
| Severity | string |
| TimeGenerated | datetime |
| Watchlists | string |
| WatchlistsType | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [VMware Carbon Black Cloud via AWS S3 (via Codeless Connector Framework)](../connectors/carbonblackawss3.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

