# <img src="../images/asim-badge.png" alt="ASIM" height="32"> User Management ASIM parser for Microsoft Windows Event logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimUserManagementMicrosoftWindowsEvent` |
| **Built-in Parser** | `_ASim_UserManagement_MicrosoftWindowsEvent` |
| **Schema** | UserManagement |
| **Schema Version** | 0.1.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Windows Event |
| **Parser Version** | 0.2.1 |
| **Last Updated** | May 29, 2024 |
| **Unifying Parser** | [ASimUserManagement](asimusermanagement.md) |
| **Source File** | [Parsers\ASimUserManagement\Parsers\ASimUserManagementMicrosoftWindowsEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/ASimUserManagementMicrosoftWindowsEvent.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Security Event logs ingested in 'WindowsEvent' table to the ASIM User Management normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [WindowsEvent](../tables/windowsevent.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM User Management Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Audit User Account Management](https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/audit-user-account-management)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

