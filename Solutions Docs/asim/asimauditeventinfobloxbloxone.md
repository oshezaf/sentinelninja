# <img src="../images/asim-badge.png" alt="ASIM" height="32"> AuditEvent ASIM parser for Infoblox BloxOne

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventInfobloxBloxOne` |
| **Built-in Parser** | `_ASim_AuditEvent_InfobloxBloxOne` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Infoblox BloxOne |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Sep 11, 2024 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventInfobloxBloxOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventInfobloxBloxOne.yaml) |

## Description

This ASIM parser supports normalizing AuditEvent logs from Infoblox BloxOne to the ASIM AuditEvent normalized schema. These events are captured through the Azure Monitor Agent (AMA) which are sent by the Data Connector Service of Infoblox BloxOne.

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM AuditEvent Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- https://docs.infoblox.com/space/BloxOneThreatDefense/35406922/DNS+Query%2FResponse+Log+Message+Mapping

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

