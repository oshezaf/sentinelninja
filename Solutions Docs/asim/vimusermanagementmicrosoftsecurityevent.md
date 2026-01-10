# <img src="../images/asim-badge.png" alt="ASIM" height="32"> User Management ASIM parser for Microsoft Security Event logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimUserManagementMicrosoftSecurityEvent` |
| **Built-in Parser** | `_Im_UserManagement_MicrosoftSecurityEvent` |
| **Schema** | UserManagement |
| **Schema Version** | 0.1.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft |
| **Parser Version** | 0.2.0 |
| **Last Updated** | Jun 19, 2025 |
| **Unifying Parser** | [imUserManagement](imusermanagement.md) |
| **Source File** | [Parsers\ASimUserManagement\Parsers\vimUserManagementMicrosoftSecurityEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/vimUserManagementMicrosoftSecurityEvent.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Security Event logs ingested in 'SecurityEvent' table delivered using AMA to the ASIM UserManagement normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SecurityEvent](../tables/securityevent.md) |
| [event](../tables/event.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `targetusername_has_any` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
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

