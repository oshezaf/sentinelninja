# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM filtering parser for Microsoft Windows Events audit events

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuditEventMicrosoftSecurityEvents` |
| **Built-in Parser** | `_Im_AuditEvent_MicrosoftSecurityEvents` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Windows |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Jun 7, 2024 |
| **Unifying Parser** | [imAuditEvent](imauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\vimAuditEventMicrosoftSecurityEvents.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/vimAuditEventMicrosoftSecurityEvents.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Windows Events audit events (1102) logs ingested in 'SecurityEvent' table to the ASIM Audit Event schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Event](../tables/event.md) |
| [Operation](../tables/operation.md) |
| [SecurityEvent](../tables/securityevent.md) |
| [Update](../tables/update.md) |
| [WindowsFirewall](../tables/windowsfirewall.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `operation_has_any` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `object_has_any` | dynamic | dynamic([]) |
| `newvalue_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
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

