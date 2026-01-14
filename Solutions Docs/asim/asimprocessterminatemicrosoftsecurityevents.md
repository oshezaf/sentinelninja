# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Terminate Event ASIM parser for Windows Security Events

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessTerminateMicrosoftSecurityEvents` |
| **Built-in Parser** | `_ASim_ProcessEvent_TerminateMicrosoftSecurityEvents` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Security Events |
| **Parser Version** | 0.2 |
| **Last Updated** | May 1st 2023 |
| **Unifying Parser** | [ASimProcessEvent](asimprocessevent.md), [ASimProcessEventTerminate](asimprocesseventterminate.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessTerminateMicrosoftSecurityEvents.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessTerminateMicrosoftSecurityEvents.yaml) |

## Description

This ASIM parser supports normalizing Windows process terminate events (event 4689) collected using the Security Events connectors, utilizing either the Log Analytics agent or the Azure Monitor Agent (AMA) and stored in the SecurityEvent table to the ASIM Process Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SecurityEvent](../tables/securityevent.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

