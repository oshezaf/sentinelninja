# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser for Microsoft Windows Firewall

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionMicrosoftSecurityEventFirewall` |
| **Built-in Parser** | `_Im_NetworkSession_MicrosoftSecurityEventFirewall` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Windows Firewall |
| **Parser Version** | 0.5.0 |
| **Last Updated** | Jul 17, 2024 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionMicrosoftSecurityEventFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionMicrosoftSecurityEventFirewall.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Windows Firewall Events logs ingested in 'SecurityEvent' table to the ASIM Network Session schema. Event IDs which are parsed as part of this parser: 5150, 5151, 5152, 5153, 5154, 5155, 5156, 5167, 5158, 5159

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SecurityEvent](../tables/securityevent.md) |

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

