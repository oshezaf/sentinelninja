# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM parser for Microsoft Windows Events audit events

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventMicrosoftSecurityEvents` |
| **Built-in Parser** | `_ASim_AuditEvent_MicrosoftSecurityEvents` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Windows |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Jun 7, 2024 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventMicrosoftSecurityEvents.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventMicrosoftSecurityEvents.yaml) |

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

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Office 365 Management Activity API schema](https://docs.microsoft.com/office/office-365-management-api/office-365-management-activity-api-schema#sharepoint-file-operations)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

