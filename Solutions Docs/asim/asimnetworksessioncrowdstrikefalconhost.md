# <img src="../images/asim-badge.png" alt="ASIM" height="32"> NetworkSession ASIM Parser for CrowdStrike Falcon Endpoint Protection

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionCrowdStrikeFalconHost` |
| **Built-in Parser** | `_ASim_NetworkSession_CrowdStrikeFalconHost` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | CrowdStrike Falcon Endpoint Protection |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 26, 2023 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionCrowdStrikeFalconHost.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionCrowdStrikeFalconHost.yaml) |

## Description

This ASIM parser supports normalizing CrowdStrike Falcon Endpoint Protection logs to the ASIM Network Session normalized schema. These events are captured through CrowdStrike Falcon Endpoint Protection data connector which allows you to easily connect your CrowdStrike Falcon Event Stream with Microsoft Sentinel.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID in "FirewallMatchEvent,Network Access In A Detection Summary Event"`<br>`DeviceEventClassID has "Network Access In A Detection Summary Event"`<br>`DeviceProduct == "FalconHost"`<br>`DeviceVendor == "CrowdStrike"` | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM NetworkSession Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [CrowdStrike Falcon Endpoint Protection Documentation](https://falcon.us-2.crowdstrike.com/documentation/page/d88d9ed6/streaming-api-event-dictionary https://falcon.us-2.crowdstrike.com/documentation/page/d88d9ed6/streaming-api-event-dictionary#x9b9e3b3 https://falcon.us-2.crowdstrike.com/documentation/page/e3ce0b24/events-data-dictionary#AssociateIndicator https://falcon.us-2.crowdstrike.com/documentation/page/eb1587d1/siem-connector#mc98af8f)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

