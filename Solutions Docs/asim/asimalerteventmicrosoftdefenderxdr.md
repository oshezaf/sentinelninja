# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Alert Event ASIM parser for Microsoft Defender XDR

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAlertEventMicrosoftDefenderXDR` |
| **Built-in Parser** | `_ASim_AlertEvent_MicrosoftDefenderXDR` |
| **Schema** | AlertEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Defender XDR |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 09, 2024 |
| **Unifying Parser** | [ASimAlertEvent](asimalertevent.md) |
| **Source File** | [Parsers\ASimAlertEvent\Parsers\ASimAlertEventMicrosoftDefenderXDR.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAlertEvent/Parsers/ASimAlertEventMicrosoftDefenderXDR.yaml) |

## Description

This ASIM parser supports normalizing the Microsoft Defender XDR logs to the ASIM Alert normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AlertEvidence`](../tables/alertevidence.md) | ✓ | ✗ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Alert Schema](https://aka.ms/ASimAlertEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

