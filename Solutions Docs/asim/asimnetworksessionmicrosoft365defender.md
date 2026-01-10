# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for M365 Defender for Endpoint

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionMicrosoft365Defender` |
| **Built-in Parser** | `_ASim_NetworkSession_Microsoft365Defender` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | M365 Defender for Endpoint |
| **Parser Version** | 0.4 |
| **Last Updated** | May 1st 2023 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionMicrosoft365Defender.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionMicrosoft365Defender.yaml) |

## Description

This ASIM parser supports normalizing M365 Defender for Endpoint to the ASIM Network Session schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [DeviceNetworkEvents](../tables/devicenetworkevents.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

