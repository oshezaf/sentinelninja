# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM parser for Illumio SaaS Core audit events

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventIllumioSaaSCore` |
| **Built-in Parser** | `_ASim_AuditEvent_IllumioSaaSCore` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Illumio Core |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Aug 20, 2024 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventIllumioSaaSCore.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventIllumioSaaSCore.yaml) |

## Description

This ASIM parser supports normalizing Illumio Core audit events logs ingested in 'Illumio_Auditable_Events_CL' table to the ASIM Audit Event schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Illumio Core API schema](https://docs.illumio.com/core/24.1/Content/Guides/events-administration/events-described/list-of-event-types.htm)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

