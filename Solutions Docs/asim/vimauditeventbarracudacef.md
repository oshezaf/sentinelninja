# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM parser for Barracuda WAF

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuditEventBarracudaCEF` |
| **Built-in Parser** | `_Im_AuditEvent_BarracudaCEF` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Barracuda WAF |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Jun 12, 2024 |
| **Unifying Parser** | [imAuditEvent](imauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\vimAuditEventBarracudaCEF.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/vimAuditEventBarracudaCEF.yaml) |

## Description

This ASIM parser supports normalizing Barracuda WAF logs ingested in 'CommonSecurityLog' table to the ASIM Audit Event schema.

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
| `eventtype_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `newvalue_has_any` | dynamic | dynamic([]) |
| `operation_has_any` | dynamic | dynamic([]) |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Logs type Description in Barracuda WAF](https://campus.barracuda.com/product/webapplicationfirewall/doc/78810008/types-of-logs/)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

