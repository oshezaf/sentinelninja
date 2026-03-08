# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Create Event ASIM parser for Microsoft Defender for IoT

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessEventMD4IoT` |
| **Built-in Parser** | `_ASim_ProcessEvent_MD4IoT` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Defender for IoT |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimProcessEvent/CHANGELOG/ASimProcessEventMD4IoT.md)) |
| **Last Updated** | Feb 23, 2022 |
| **Unifying Parser** | [ASimProcessEvent](asimprocessevent.md), [ASimProcessEventCreate](asimprocesseventcreate.md), [ASimProcessEventTerminate](asimprocesseventterminate.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessEventMD4IoT.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessEventMD4IoT.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Defender for IoT events to the ASIM Process Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md) | ✓ | ✗ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

