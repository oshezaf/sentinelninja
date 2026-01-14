# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser for Windows DNS log collected using the Log Analytics agent

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsMicrosoftOMS` |
| **Built-in Parser** | `_ASim_Dns_MicrosoftOMS` |
| **Schema** | Dns |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | MS DNS Events |
| **Parser Version** | 0.4 |
| **Last Updated** | Dec 11 2022 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsMicrosoftOMS.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsMicrosoftOMS.yaml) |

## Description

This ASIM parser supports normalizing Windows DNS logs, collected using the Log Analytics agent, to the ASIM Dns normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [DnsEvents](../tables/dnsevents.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

