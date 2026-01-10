# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser for Azure Firewall logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionAzureFirewall` |
| **Built-in Parser** | `_Im_NetworkSession_AzureFirewall` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Azure Firewall |
| **Parser Version** | 0.2.0 |
| **Last Updated** | Dec 3, 2025 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionAzureFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionAzureFirewall.yaml) |

## Description

This ASIM parser supports filtering and normalizing Azure Firewall logs to the ASIM Network Session normalized schema. This parser is partially based on a work by [Koos Goossens](https://github.com/TheCloudScout).

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [ALERT](../tables/alert.md) |
| [AZFWIdpsSignature](../tables/azfwidpssignature.md) |
| [AZFWNatRule](../tables/azfwnatrule.md) |
| [AZFWNetworkRule](../tables/azfwnetworkrule.md) |
| [AZFWThreatIntel](../tables/azfwthreatintel.md) |
| [AzureDiagnostics](../tables/azurediagnostics.md) |
| [Event](../tables/event.md) |

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

