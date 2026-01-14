# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File Event ASIM Parser for SentinelOne

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimFileEventSentinelOne` |
| **Built-in Parser** | `_ASim_FileEvent_SentinelOne` |
| **Schema** | FileEvent |
| **Schema Version** | 0.2.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SentinelOne |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Sep 20, 2023 |
| **Unifying Parser** | [ASimFileEvent](asimfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\ASimFileEventSentinelOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/ASimFileEventSentinelOne.yaml) |

## Description

This ASIM parser supports normalizing SentinelOne logs to the ASIM File Event normalized schema. SentinelOne events are captured through SentinelOne data connector which ingests SentinelOne server objects such as Threats, Agents, Applications, Activities, Policies, Groups, and more events into Microsoft Sentinel through the REST API.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SentinelOne_CL](../tables/sentinelone-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM File Event Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- https://<SOneInstanceDomain>.sentinelone.net/api-doc/overview

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

