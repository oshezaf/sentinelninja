# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser for SentinelOne

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsSentinelOne` |
| **Built-in Parser** | `_ASim_Dns_SentinelOne` |
| **Schema** | Dns |
| **Schema Version** | 0.1.7 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SentinelOne |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimDns/CHANGELOG/ASimDnsSentinelOne.md)) |
| **Last Updated** | Jun 28 2023 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsSentinelOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsSentinelOne.yaml) |

## Description

This ASIM parser supports normalizing SentinelOne logs to the ASIM DNS normalized schema. SentinelOne events are captured through SentinelOne data connector which ingests SentinelOne server objects such as Threats, Agents, Applications, Activities, Policies, Groups, and more events into Microsoft Sentinel through the REST API.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | — | — |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [SentinelOne](../connectors/sentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |

**Solutions:** [SentinelOne](../solutions/sentinelone.md)

## References

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [SentinelOne Documentation](https://<SOneInstanceDomain>.sentinelone.net/api-doc/overview)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

