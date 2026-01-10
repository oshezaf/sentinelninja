# <img src="../images/asim-badge.png" alt="ASIM" height="32"> AuditEvent ASIM parser for Infoblox BloxOne

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuditEventInfbloxBloxOne` |
| **Built-in Parser** | `_Im_AuditEvent_InfobloxBloxOne` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Infoblox BloxOne |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Sep 11, 2024 |
| **Unifying Parser** | [imAuditEvent](imauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\vimAuditEventInfobloxBloxOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/vimAuditEventInfobloxBloxOne.yaml) |

## Description

This ASIM parser supports normalizing AuditEvent logs from Infoblox BloxOne to the ASIM AuditEvent normalized schema. These events are captured through the Azure Monitor Agent (AMA) which are sent by the Data Connector Service of Infoblox BloxOne.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `operation_has_any` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `object_has_any` | dynamic | dynamic([]) |
| `newvalue_has_any` | dynamic | dynamic([]) |

## References

- [ASIM AuditEvent Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Infoblox BloxOne Documentation](https://docs.infoblox.com/space/BloxOneThreatDefense)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

