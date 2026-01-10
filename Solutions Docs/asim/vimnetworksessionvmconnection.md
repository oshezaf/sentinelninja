# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser for VM connection information collected using the Log Analytics agent

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionVMConnection` |
| **Built-in Parser** | `_Im_NetworkSession_VMConnection` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | VMConnection |
| **Parser Version** | 0.2.2 |
| **Last Updated** | Mar 05 2024 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionVMConnection.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionVMConnection.yaml) |

## Description

This ASIM parser supports filtering and normalizing VM connection logs collected using the Log Analytics agent to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [VMConnection](../tables/vmconnection.md) |

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
- [ASIM](https:/aka.ms/AboutASIM)
- [VM connection schema reference](https://docs.microsoft.com/azure/azure-monitor/reference/tables/vmconnection)
- [Analysis of network connection data with Azure Monitor for virtual machines](https://azure.microsoft.com/blog/analysis-of-network-connection-data-with-azure-monitor-for-virtual-machines/)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

