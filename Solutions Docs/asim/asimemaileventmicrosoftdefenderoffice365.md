# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Email Event ASIM parser for Microsoft Defender for Office 365

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimEmailEventMicrosoftDefenderOffice365` |
| **Built-in Parser** | `_ASim_EmailEvent_MicrosoftDefenderOffice365` |
| **Schema** | EmailEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Defender for Office 365 |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimEmailEvent/CHANGELOG/ASimEmailEventMicrosoftDefenderOffice365.md)) |
| **Last Updated** | Oct 26, 2026 |
| **Unifying Parser** | [ASimEmailEvent](asimemailevent.md) |
| **Source File** | [Parsers\ASimEmailEvent\Parsers\ASimEmailEventMicrosoftDefenderOffice365.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimEmailEvent/Parsers/ASimEmailEventMicrosoftDefenderOffice365.yaml) |

## Description

Normalizes native EmailEvents delivery records into ASIM EmailEvent 1.0.0.
Preserves source records and keeps delivery outcomes separate from threat verdicts.
Created using the agentic ASIM parser creation skills with tenant-data analysis and read-only validation.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`EmailEvents`](../tables/emailevents.md) | ✓ | ✗ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## References

- [ASIM Email Event Schema](https://aka.ms/ASimEmailEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Native Sentinel EmailEvents table](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/emailevents)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

