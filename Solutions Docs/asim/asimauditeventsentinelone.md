# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM parser for SentinelOne

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventSentinelOne` |
| **Built-in Parser** | `_ASim_AuditEvent_SentinelOne` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SentinelOne |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 05 2023 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventSentinelOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventSentinelOne.yaml) |

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

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [SentinelOne documentation](https://<SOneInstanceDomain>.sentinelone.net/api-doc/overview)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

