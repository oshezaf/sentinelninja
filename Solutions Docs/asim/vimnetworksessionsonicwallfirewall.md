# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser for SonicWall firewalls

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionSonicWallFirewall` |
| **Built-in Parser** | `_Im_NetworkSession_SonicWallFirewall` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SonicWall |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Feb 28, 2024 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionSonicWallFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionSonicWallFirewall.yaml) |

## Description

This ASIM parser supports filtering and normalizing SonicWall SonicOS ArcSight-formatted syslog data ingested by the Microsoft Sentinel to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

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
- [SonicWall SonicOS/X 7.0.1 Log Events Reference Guide [PDF]](https://www.sonicwall.com/techdocs/pdf/SonicOS-X_7.0.1_LogEvents_ReferenceGuide.pdf)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

