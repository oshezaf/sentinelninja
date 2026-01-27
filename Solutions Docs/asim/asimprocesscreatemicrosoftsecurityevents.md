# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Create Event ASIM parser for Windows Security Events

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessCreateMicrosoftSecurityEvents` |
| **Built-in Parser** | `_ASim_ProcessEvent_CreateMicrosoftSecurityEvents` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Security Events |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Feb 23, 2022 |
| **Unifying Parser** | [ASimProcessEvent](asimprocessevent.md), [ASimProcessEventCreate](asimprocesseventcreate.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessCreateMicrosoftSecurityEvents.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessCreateMicrosoftSecurityEvents.yaml) |

## Description

This ASIM parser supports normalizing Windows process create events (event 4688) collected using the Security Events connectors, utilizing either the Log Analytics agent or the Azure Monitor Agent (AMA) and stored in the SecurityEvent table to the ASIM Process Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`SecurityEvent`](../tables/securityevent.md) | `EventID == "4688"` | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [WindowsSecurityEvents](../connectors/windowssecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |

**Solutions:** [Windows Security Events](../solutions/windows-security-events.md)

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

