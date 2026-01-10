# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM parser for SentinelOne

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuditEventSentinelOne` |
| **Built-in Parser** | `_Im_AuditEvent_SentinelOne` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SentinelOne |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 05 2023 |
| **Unifying Parser** | [imAuditEvent](imauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\vimAuditEventSentinelOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/vimAuditEventSentinelOne.yaml) |

## Description

This ASIM parser supports normalizing SentinelOne logs to the ASIM Audit Event normalized schema. SentinelOne events are captured through SentinelOne data connector which ingests SentinelOne server objects such as Threats, Agents, Applications, Activities, Policies, Groups, and more events into Microsoft Sentinel through the REST API.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Event](../tables/event.md) |
| [Operation](../tables/operation.md) |
| [SentinelOne_CL](../tables/sentinelone-cl.md) |

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

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [SentinelOne documentation](https://<SOneInstanceDomain>.sentinelone.net/api-doc/overview)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

