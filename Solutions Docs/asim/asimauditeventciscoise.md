# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM filtering parser for Cisco ISE

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventCiscoISE` |
| **Built-in Parser** | `_ASim_AuditEvent_CiscoISE` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Cisco ISE |
| **Parser Version** | 0.1 |
| **Last Updated** | July 13, 2023 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventCiscoISE.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventCiscoISE.yaml) |

## Description

This ASIM parser supports normalizing administrative activity in the Cisco ISE events to the ASIM Audit Event schema.

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Cisco ISE Security Events](https://www.cisco.com/c/en/us/td/docs/security/ise/3-2/admin_guide/b_ise_admin_3_2/b_ISE_admin_32_maintain_monitor.html#ID58)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

