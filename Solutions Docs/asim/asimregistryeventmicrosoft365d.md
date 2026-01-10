# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM parser for Microsoft 365 Defender for Endpoint

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimRegistryEventMicrosoft365D` |
| **Built-in Parser** | `_ASim_RegistryEvent_Microsoft365D` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft 365 Defender for Endpoint |
| **Parser Version** | 0.1.2 |
| **Last Updated** | Oct 10, 2023 |
| **Unifying Parser** | [ASimRegistry](asimregistry.md) |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\ASimRegistryEventMicrosoft365D.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/ASimRegistryEventMicrosoft365D.yaml) |

## Description

This ASIM parser supports normalizing Microsoft 365 Defender for endpoint logs, produced by the Microsoft Sentinel Microsoft 365 Defender connector, to the ASIM Registry Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [DeviceRegistryEvents](../tables/deviceregistryevents.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

