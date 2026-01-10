# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM parser for Vectra XDR Audit Logs Event

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventVectraXDRAudit` |
| **Built-in Parser** | `_ASim_AuditEvent_VectraXDRAudit` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Vectra |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Sept 18, 2023 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventVectraXDRAudit.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventVectraXDRAudit.yaml) |

## Description

This ASIM parser supports normalizing Vectra XDR Audit Logs Event in the Audits_Data_CL table to the ASIM Audit Event schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Audits_Data_CL](../tables/audits-data-cl.md) |

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

