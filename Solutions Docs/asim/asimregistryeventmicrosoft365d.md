# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM parser for Microsoft 365 Defender for Endpoint

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimRegistryEventMicrosoft365D` |
| **Built-in Parser** | `_ASim_RegistryEvent_Microsoft365D` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft 365 Defender for Endpoint |
| **Parser Version** | 0.1.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimRegistryEvent/CHANGELOG/ASimRegistryEventMicrosoft365D.md)) |
| **Last Updated** | Oct 10, 2023 |
| **Unifying Parser** | [ASimRegistry](asimregistry.md) |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\ASimRegistryEventMicrosoft365D.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/ASimRegistryEventMicrosoft365D.yaml) |

## Description

This ASIM parser supports normalizing Microsoft 365 Defender for endpoint logs, produced by the Microsoft Sentinel Microsoft 365 Defender connector, to the ASIM Registry Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) | `ActionType in "RegistryKeyDeleted,RegistryKeyRenamed,RegistryValueDeleted,RegistryValueSet"` | ✓ | ✗ | — |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |

**Solutions:** [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

