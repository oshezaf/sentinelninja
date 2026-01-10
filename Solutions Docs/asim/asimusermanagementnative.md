# <img src="../images/asim-badge.png" alt="ASIM" height="32"> User Management activity ASIM parser for Microsoft Sentinel native User Management activity table

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimUserManagementNative` |
| **Built-in Parser** | `_ASim_UserManagement_Native` |
| **Schema** | UserManagement |
| **Schema Version** | 0.1.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Mar 07 2024 |
| **Unifying Parser** | [ASimUserManagement](asimusermanagement.md) |
| **Source File** | [Parsers\ASimUserManagement\Parsers\ASimUserManagementNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/ASimUserManagementNative.yaml) |

## Description

This ASIM parser supports normalizing the native User Management activity table to the ASIM User Management activity normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [ASimUserManagementActivityLogs](../tables/asimusermanagementactivitylogs.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM User Management Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

