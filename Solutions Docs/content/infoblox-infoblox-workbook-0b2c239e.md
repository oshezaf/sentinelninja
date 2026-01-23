# Infoblox_Workbook

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Workbooks/Infoblox_Workbook.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID in "DHCP-LEASE-CREATE,DHCP-LEASE-DELETE,DHCP-LEASE-UPDATE"`<br>`DeviceEventClassID has "Audit"`<br>`DeviceEventClassID has "DHCP"`<br>`DeviceEventClassID has "DNS"`<br>`DeviceEventClassID has "RPZ"`<br>`DeviceEventClassID has "Service"`<br>`DeviceProduct == "Data Connector"`<br>`DeviceVendor == "Infoblox"` | ✓ | ✓ |
| [`Host_Name_Info_CL`](../tables/host-name-info-cl.md) |  | — | — |
| [`IP_Space_Info_CL`](../tables/ip-space-info-cl.md) |  | — | — |
| [`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md) |  | — | — |
| [`InfobloxInsightEvents_CL`](../tables/infobloxinsightevents-cl.md) |  | — | — |
| [`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md) |  | — | — |
| [`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) |  | — | — |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ |
| [`Service_Name_Info_CL`](../tables/service-name-info-cl.md) |  | — | — |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Infoblox](../solutions/infoblox.md)

