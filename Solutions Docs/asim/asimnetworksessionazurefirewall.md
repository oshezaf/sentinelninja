# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Azure Firewall logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionAzureFirewall` |
| **Built-in Parser** | `_ASim_NetworkSession_AzureFirewall` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Azure Firewall |
| **Parser Version** | 0.2.0 |
| **Last Updated** | Dec 3, 2025 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionAzureFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionAzureFirewall.yaml) |

## Description

This ASIM parser supports normalizing Azure Firewall logs to the ASIM Network Session normalized schema. This parser is partially based on a work by [Koos Goossens](https://github.com/TheCloudScout).

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

