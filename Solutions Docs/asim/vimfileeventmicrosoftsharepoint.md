# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File Activity ASIM filtering parser for Sharepoint and OneDrive for business

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimFileEventMicrosoftSharePoint` |
| **Built-in Parser** | `_Im_FileEvent_MicrosoftSharePoint` |
| **Schema** | FileEvent |
| **Schema Version** | 0.2.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft SharePoint |
| **Parser Version** | 0.3.1 |
| **Last Updated** | Nov 02 2023 |
| **Unifying Parser** | [imFileEvent](imfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\vimFileEventMicrosoftSharePoint.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/vimFileEventMicrosoftSharePoint.yaml) |

## Description

This ASIM parser supports normalizing Sharepoint and OneDrive for business events, stored in the OfficeActivity table, to the ASIM file activity schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [OfficeActivity](../tables/officeactivity.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `eventtype_in` | dynamic | dynamic([]) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `targetfilepath_has_any` | dynamic | dynamic([]) |
| `srcfilepath_has_any` | dynamic | dynamic([]) |
| `hashes_has_any` | dynamic | dynamic([]) |
| `dvchostname_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM File Event Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Office 365 Management Activity API schema](https://docs.microsoft.com/office/office-365-management-api/office-365-management-activity-api-schema#sharepoint-file-operations)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

