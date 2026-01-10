# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Create Event ASIM parser for Microsoft 365 Defender for endpoint

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessEventMicrosoft365D` |
| **Built-in Parser** | `_ASim_ProcessEvent_Microsoft365D` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft 365 Defender for endpoint |
| **Parser Version** | 0.1.2 |
| **Last Updated** | Feb 23, 2022 |
| **Unifying Parser** | [ASimProcessEvent](asimprocessevent.md), [ASimProcessEventCreate](asimprocesseventcreate.md), [ASimProcessEventTerminate](asimprocesseventterminate.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessEventMicrosoft365D.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessEventMicrosoft365D.yaml) |

## Description

This ASIM parser supports normalizing Microsoft 365 Defender for endpoint to the ASIM Process Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [DeviceProcessEvents](../tables/deviceprocessevents.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

