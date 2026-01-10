# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for VM connection information collected using the Log Analytics agent

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionVMConnection` |
| **Built-in Parser** | `_ASim_NetworkSession_VMConnection` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | VMConnection |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Dec 29 2022 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionVMConnection.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionVMConnection.yaml) |

## Description

This ASIM parser supports normalizing VM connection logs collected using the Log Analytics agent to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [VMConnection](../tables/vmconnection.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
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

