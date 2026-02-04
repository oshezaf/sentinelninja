# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Azure Firewall logs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionAzureFirewall` |
| **Built-in Parser** | `_ASim_NetworkSession_AzureFirewall` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Azure Firewall |
| **Parser Version** | 0.2.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimNetworkSession/CHANGELOG/ASimNetworkSessionAzureFirewall.md)) |
| **Last Updated** | Dec 3, 2025 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionAzureFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionAzureFirewall.yaml) |

## Description

This ASIM parser supports normalizing Azure Firewall logs to the ASIM Network Session normalized schema. This parser is partially based on a work by [Koos Goossens](https://github.com/TheCloudScout).

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) |  | ✓ | ✗ | ✓ |
| [`AZFWNatRule`](../tables/azfwnatrule.md) |  | ✓ | ✗ | ✓ |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) |  | ✓ | ✗ | ✓ |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) |  | ✓ | ✗ | ✓ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category == "AzureFirewallNetworkRule"` | — | ✗ | ✗ |
| [`Event`](../tables/event.md) |  | ✓ | ✗ | ✗ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [MimecastTIRegionalConnectorAzureFunctions](../connectors/mimecasttiregionalconnectorazurefunctions.md) | [MimecastTIRegional](../solutions/mimecasttiregional.md) |
| [SlashNextFunctionApp](../connectors/slashnextfunctionapp.md) | [SlashNext](../solutions/slashnext.md) |

**Solutions:** [MimecastTIRegional](../solutions/mimecasttiregional.md), [SlashNext](../solutions/slashnext.md)

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

