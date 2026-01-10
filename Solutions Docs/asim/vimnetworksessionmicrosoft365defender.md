# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser for M365 Defender for Endpoint

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionMicrosoft365Defender` |
| **Built-in Parser** | `_Im_NetworkSession_Microsoft365Defender` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | M365 Defender for Endpoint |
| **Parser Version** | 0.4 |
| **Last Updated** | May 1st 2023 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionMicrosoft365Defender.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionMicrosoft365Defender.yaml) |

## Description

This ASIM parser supports filtering and normalizing M365 Defender for Endpoint to the ASIM Network Session schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [DeviceNetworkEvents](../tables/devicenetworkevents.md) |

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
- [ASIM](https:/aka.ms/MsASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

