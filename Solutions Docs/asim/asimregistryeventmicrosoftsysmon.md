# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM parser for Microsoft Sysmon (registry creation event)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimRegistryEventMicrosoftSysmon` |
| **Built-in Parser** | `_ASim_RegistryEvent_MicrosoftSysmon` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Sysmon |
| **Parser Version** | 0.3.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimRegistryEvent/CHANGELOG/ASimRegistryEventMicrosoftSysmon.md)) |
| **Last Updated** | Jun 18, 2024 |
| **Unifying Parser** | [ASimRegistry](asimregistry.md) |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\ASimRegistryEventMicrosoftSysmon.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/ASimRegistryEventMicrosoftSysmon.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Sysmon events (event number 12, 13, 14) logs ingested in 'Event' table to the ASIM Registry Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Event`](../tables/event.md) | `EventID in "12,13,14"`<br>`Source == "Microsoft-Windows-Sysmon"` | ✓ | ✗ | ✗ |

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

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

