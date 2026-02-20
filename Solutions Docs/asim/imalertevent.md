# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Alert Event ASIM filtering parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imAlertEvent` |
| **Built-in Parser** | `_Im_AlertEvent` |
| **Schema** | AlertEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAlertEvent/CHANGELOG/imAlertEvent.md)) |
| **Last Updated** | Mar 11 2024 |
| **Source File** | [Parsers\ASimAlertEvent\Parsers\imAlertEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAlertEvent/Parsers/imAlertEvent.yaml) |

## Description

This ASIM parser supports filtering and normalizing Alert logs from all supported sources to the ASIM 'Alert' normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Microsoft Defender XDR | [_Im_AlertEvent_MicrosoftDefenderXDR](asimalerteventmicrosoftdefenderxdr.md) |
| SentinelOne | [_Im_AlertEvent_SentinelOneSingularity](asimalerteventsentinelonesingularity.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `ipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `hostname_has_any` | dynamic | dynamic([]) |
| `username_has_any` | dynamic | dynamic([]) |
| `attacktactics_has_any` | dynamic | dynamic([]) |
| `attacktechniques_has_any` | dynamic | dynamic([]) |
| `threatcategory_has_any` | dynamic | dynamic([]) |
| `alertverdict_has_any` | dynamic | dynamic([]) |
| `eventseverity_has_any` | dynamic | dynamic([]) |
| `pack` | bool | False |

## References

- [ASIM Alert Schema](https://aka.ms/ASimAlertEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

