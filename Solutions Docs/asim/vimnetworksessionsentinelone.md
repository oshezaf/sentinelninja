# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser for SentinelOne

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionSentinelOne` |
| **Built-in Parser** | `_Im_NetworkSession_SentinelOne` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SentinelOne |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Sep 18 2023 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionSentinelOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionSentinelOne.yaml) |

## Description

This ASIM parser supports normalizing SentinelOne logs to the ASIM Network Session normalized schema. SentinelOne events are captured through SentinelOne data connector which ingests SentinelOne server objects such as Threats, Agents, Applications, Activities, Policies, Groups, and more events into Microsoft Sentinel through the REST API.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SentinelOne_CL](../tables/sentinelone-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dstipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `ipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dstportnumber` | int | int(null) |
| `dvcaction` | dynamic | dynamic([]) |
| `hostname_has_any` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- https://<SOneInstanceDomain>.sentinelone.net/api-doc/overview

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

