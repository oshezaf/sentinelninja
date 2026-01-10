# <img src="../images/asim-badge.png" alt="ASIM" height="32"> User Management ASIM parser for Microsoft Security Event logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimUserManagementMicrosoftSecurityEvent` |
| **Built-in Parser** | `_ASim_UserManagement_MicrosoftSecurityEvent` |
| **Schema** | UserManagement |
| **Schema Version** | 0.1.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Security Event |
| **Parser Version** | 0.2.0 |
| **Last Updated** | Jun 19, 2025 |
| **Unifying Parser** | [ASimUserManagement](asimusermanagement.md) |
| **Source File** | [Parsers\ASimUserManagement\Parsers\ASimUserManagementMicrosoftSecurityEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/ASimUserManagementMicrosoftSecurityEvent.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Security Event logs ingested in 'SecurityEvent' table delivered using AMA to the ASIM UserManagement normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SecurityEvent](../tables/securityevent.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM User Management Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Audit User Account Management](https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/audit-user-account-management)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

