# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Dhcp event ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDhcpEvent` |
| **Built-in Parser** | `_ASim_DhcpEvent` |
| **Schema** | DhcpEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimDhcpEvent/CHANGELOG/ASimDhcpEvent.md)) |
| **Last Updated** | Mar 11, 2024 |
| **Source File** | [Parsers\ASimDhcpEvent\Parsers\ASimDhcpEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDhcpEvent/Parsers/ASimDhcpEvent.yaml) |

## Description

This ASIM parser supports normalizing Dhcp event logs from all supported sources to the ASIM Dhcp Event normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Infoblox BloxOne | [_ASim_DhcpEvent_InfobloxBloxOne](asimdhcpeventinfobloxbloxone.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Native | [_ASim_DhcpEvent_Native](asimdhcpeventnative.md) |  |

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimDhcpEventInfobloxBloxOne`](../asim/asimdhcpeventinfobloxbloxone.md) | ? | ? | ? |
| [`ASimDhcpEventNative`](../asim/asimdhcpeventnative.md) | ? | ? | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM Dhcp Event Schema](https://aka.ms/ASimDhcpEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

