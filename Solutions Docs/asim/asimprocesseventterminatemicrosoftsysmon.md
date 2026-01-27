# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Terminate Event ASIM parser for Microsoft Windows Security Events

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessEventTerminateMicrosoftSysmon` |
| **Built-in Parser** | `_ASim_ProcessEvent_TerminateMicrosoftSysmon` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Windows Events Sysmon |
| **Parser Version** | 0.3.1 |
| **Last Updated** | Jun 3, 2024 |
| **Unifying Parser** | [ASimProcessEvent](asimprocessevent.md), [ASimProcessEventTerminate](asimprocesseventterminate.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessTerminateMicrosoftSysmon.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessTerminateMicrosoftSysmon.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Windows Sysmon process terminate events (event 5) collected using the Event or WEF (WindowsEvent table) connectors logs ingested in 'Event' table to the ASIM Process Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`Event`](../tables/event.md) | `EventID == "5"`<br>`Source == "Microsoft-Windows-Sysmon"` | ✓ | ✗ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [MimecastTIRegionalConnectorAzureFunctions](../connectors/mimecasttiregionalconnectorazurefunctions.md) | [MimecastTIRegional](../solutions/mimecasttiregional.md) |

**Solutions:** [MimecastTIRegional](../solutions/mimecasttiregional.md)

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

