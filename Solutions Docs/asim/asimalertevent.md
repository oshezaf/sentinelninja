# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Alert Event ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAlertEvent` |
| **Built-in Parser** | `_ASim_AlertEvent` |
| **Schema** | AlertEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAlertEvent/CHANGELOG/ASimAlertEvent.md)) |
| **Last Updated** | Oct 18, 2024 |
| **Source File** | [Parsers\ASimAlertEvent\Parsers\ASimAlertEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAlertEvent/Parsers/ASimAlertEvent.yaml) |

## Description

This ASIM parser supports normalizing Alert logs from all supported sources to the ASIM Alert normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Microsoft Defender XDR | [_ASim_AlertEvent_MicrosoftDefenderXDR](asimalerteventmicrosoftdefenderxdr.md) |  |
| SentinelOne | [_ASim_AlertEvent_SentinelOneSingularity](asimalerteventsentinelonesingularity.md) | [SentinelOne](../solutions/sentinelone.md) |

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimAlertEventMicrosoftDefenderXDR`](../asim/asimalerteventmicrosoftdefenderxdr.md) | ? | ? | ? |
| [`ASimAlertEventSentinelOneSingularity`](../asim/asimalerteventsentinelonesingularity.md) | ? | ? | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM Alert Schema](https://aka.ms/ASimAlertEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

