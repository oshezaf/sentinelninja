# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for F5 BIG-IP Application Security Manager (ASM)

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionF5ASM` |
| **Built-in Parser** | `_ASim_WebSession_F5ASM` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | F5 BIG-IP Application Security Manager (ASM) |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Dec 04 2023 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionF5ASM.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionF5ASM.yaml) |

## Description

This ASIM parser supports normalizing F5 Big IP ASM(Application Security Manager) logs to the ASIM Web Session normalized schema. F5 Big IP ASM events are captured through F5 Network data connector which ingests attack events and data into Microsoft Sentinel in CEF format over Syslog using F5's technology partner Arcsight.

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

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [F5 Big IP ASM Documentation](https://techdocs.f5.com/en-us/bigip-15-0-0/external-monitoring-of-big-ip-systems-implementations/event-messages-and-attack-types.html https://docplayer.net/9349757-Common-event-format-configuration-guide.html)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

