# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Alert Event ASIM parser

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAlertEvent` |
| **Built-in Parser** | `_ASim_AlertEvent` |
| **Schema** | AlertEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 18, 2024 |
| **Source File** | [Parsers\ASimAlertEvent\Parsers\ASimAlertEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAlertEvent/Parsers/ASimAlertEvent.yaml) |

## Description

This ASIM parser supports normalizing Alert logs from all supported sources to the ASIM Alert normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Microsoft Defender XDR | [_ASim_AlertEvent_MicrosoftDefenderXDR](asimalerteventmicrosoftdefenderxdr.md) |
| SentinelOne | [_ASim_AlertEvent_SentinelOneSingularity](asimalerteventsentinelonesingularity.md) |
| Microsoft | [_Im_AlertEvent_Empty](vimalerteventempty.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM Alert Schema](https://aka.ms/ASimAlertEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

