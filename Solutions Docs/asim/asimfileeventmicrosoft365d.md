# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File Event ASIM parser for Microsoft 365 Defender for Endpoint

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimFileEventMicrosoft365D` |
| **Built-in Parser** | `_ASim_FileEvent_Microsoft365D` |
| **Schema** | FileEvent |
| **Schema Version** | 0.2.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft 365 Defender for EndPoint |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Oct 26 2023 |
| **Unifying Parser** | [ASimFileEvent](asimfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\ASimFileEventMicrosoft365D.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/ASimFileEventMicrosoft365D.yaml) |

## Description

This ASIM parser supports normalizing M365 Defender, stored in the DeviceFileEvents table, for Endpoint events to the ASIM file activity schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [DeviceFileEvents](../tables/devicefileevents.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM File Event Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Microsoft 365 Defender DeviceFileEvents](https://docs.microsoft.commicrosoft-365/security/defender/advanced-hunting-devicefileevents-table?view=o365-worldwide)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

