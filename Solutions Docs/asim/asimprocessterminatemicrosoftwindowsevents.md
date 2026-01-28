# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Terminate Event ASIM parser for WEF Security Events

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessTerminateMicrosoftWindowsEvents` |
| **Built-in Parser** | `_ASim_ProcessEvent_TerminateMicrosoftWindowsEvents` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Security Events |
| **Parser Version** | 0.2 |
| **Last Updated** | May 1st 2023 |
| **Unifying Parser** | [ASimProcessEvent](asimprocessevent.md), [ASimProcessEventTerminate](asimprocesseventterminate.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessTerminateMicrosoftWindowsEvents.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessTerminateMicrosoftWindowsEvents.yaml) |

## Description

This ASIM parser supports normalizing Windows process terminate events (event 4689) collected using the WEF connector (WindowsEvent table) to the ASIM Process Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`WindowsEvent`](../tables/windowsevent.md) | `EventID == "4689"` | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |

**Solutions:** [Windows Forwarded Events](../solutions/windows-forwarded-events.md)

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

