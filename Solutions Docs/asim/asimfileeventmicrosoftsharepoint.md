# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File Activity ASIM parser for Sharepoint and OneDrive for business

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimFileEventMicrosoftSharePoint` |
| **Built-in Parser** | `_ASim_FileEvent_MicrosoftSharePoint` |
| **Schema** | FileEvent |
| **Schema Version** | 0.2.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft SharePoint |
| **Parser Version** | 0.3.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimFileEvent/CHANGELOG/ASimFileEventMicrosoftSharePoint.md)) |
| **Last Updated** | Nov 02 2023 |
| **Unifying Parser** | [ASimFileEvent](asimfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\ASimFileEventMicrosoftSharePoint.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/ASimFileEventMicrosoftSharePoint.yaml) |

## Description

This ASIM parser supports normalizing Sharepoint and OneDrive for business events, stored in the OfficeActivity table, to the ASIM file activity schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`OfficeActivity`](../tables/officeactivity.md) | `RecordType == "SharePointFileOperation"` | ✓ | ✗ | ✓ |
| [`Operation`](../tables/operation.md) |  | ✗ | ✗ | — |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM File Event Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Office 365 Management Activity API schema](https://docs.microsoft.com/office/office-365-management-api/office-365-management-activity-api-schema#sharepoint-file-operations)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

