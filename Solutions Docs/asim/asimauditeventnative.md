# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM parser for Microsoft Sentinel native Audit Event table

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventNative` |
| **Built-in Parser** | `_ASim_AuditEvent_Native` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Dec 13, 2024 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventNative.yaml) |

## Description

This ASIM parser supports normalizing the native Microsoft Sentinel Audit Event table (ASimAuditEventLogs) to the ASIM Audit Event normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [ASimAuditEventLogs](../tables/asimauditeventlogs.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

