# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM filtering parser for SonicWall firewalls

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimWebSessionSonicWallFirewall` |
| **Built-in Parser** | `_Im_WebSession_SonicWallFirewall` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SonicWall |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Jun 26, 2025 |
| **Unifying Parser** | [imWebSession](imwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\vimWebSessionSonicWallFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/vimWebSessionSonicWallFirewall.yaml) |

## Description

This ASIM parser supports normalizing SonicWall SonicOS ArcSight-formatted syslog received via the SonicWall Firewall/Common Event Format data connectors and ingested to the CommonSecurityLog table by Microsoft Sentinel to the ASIM WebSession normalized schema.

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
| `ipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `url_has_any` | dynamic | dynamic([]) |
| `httpuseragent_has_any` | dynamic | dynamic([]) |
| `eventresultdetails_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
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

