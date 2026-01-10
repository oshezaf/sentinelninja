# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser for Microsoft Defender for IoT micro agent

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionMD4IoTAgent` |
| **Built-in Parser** | `_Im_NetworkSession_MD4IoTAgent` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Defender for IoT |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Oct 30, 2022 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionMD4IoTAgent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionMD4IoTAgent.yaml) |

## Description

This ASIM parser supports filtering and normalizing Microsoft Defender for IoT micro agent logs to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SecurityIoTRawEvent](../tables/securityiotrawevent.md) |

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

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

