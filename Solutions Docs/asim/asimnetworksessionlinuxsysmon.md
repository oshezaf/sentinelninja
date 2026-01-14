# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Sysmon for Linux

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionLinuxSysmon` |
| **Built-in Parser** | `_ASim_NetworkSession_LinuxSysmon` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Sysmon for Linux |
| **Parser Version** | 0.3.1 |
| **Last Updated** | Dec 28 2022 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionMicrosoftLinuxSysmon.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionMicrosoftLinuxSysmon.yaml) |

## Description

This ASIM parser supports normalizing Sysmon for Linux event 3 to the ASIM Network Session schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Syslog](../tables/syslog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

