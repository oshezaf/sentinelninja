# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for SonicWall firewalls

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionSonicWallFirewall` |
| **Built-in Parser** | `_ASim_NetworkSession_SonicWallFirewall` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SonicWall |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Feb 28, 2024 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionSonicWallFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionSonicWallFirewall.yaml) |

## Description

This ASIM parser supports normalizing SonicWall SonicOS ArcSight-formatted Syslog data ingested by Microsoft Sentinel into CommonSecurityLogs to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [SonicWall SonicOS/X 7.0.1 Log Events Reference Guide [PDF]](https://www.sonicwall.com/techdocs/pdf/SonicOS-X_7.0.1_LogEvents_ReferenceGuide.pdf)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

