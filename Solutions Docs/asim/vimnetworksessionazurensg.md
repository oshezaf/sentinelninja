# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser for Azure NSG flows

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionAzureNSG` |
| **Built-in Parser** | `_Im_NetworkSession_AzureNSG` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Azure NSG flows |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Jul 3rd, 2021 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionAzureNSG.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionAzureNSG.yaml) |

## Description

This ASIM parser supports normalizing and filtering Azure Azure Network Security Groups (NSG) flows to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [AzureNetworkAnalytics_CL](../tables/azurenetworkanalytics-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dstipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `ipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dstportnumber` | int | int(null) |
| `hostname_has_any` | dynamic | dynamic([]) |
| `dvcaction` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

