# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File events ASIM parser for Google Workspace

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimFileEventGoogleWorkspace` |
| **Built-in Parser** | `_ASim_FileEvent_GoogleWorkspace` |
| **Schema** | FileEvent |
| **Schema Version** | 0.2.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Google Workspace |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Dec 19, 2023 |
| **Unifying Parser** | [ASimFileEvent](asimfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\ASimFileEventGoogleWorkspace.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/ASimFileEventGoogleWorkspace.yaml) |

## Description

This ASIM parser supports normalizing the Google Workspace (Drive) logs ingested in GWorkspace_ReportsAPI_drive_CL table to the ASIM file activity normalized schema.

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM File Event Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Google Workspace documentation](https://developers.google.com/admin-sdk/reports/v1/appendix/activity/drive)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

