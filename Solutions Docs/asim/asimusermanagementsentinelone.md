# <img src="../images/asim-badge.png" alt="ASIM" height="32"> User Management ASIM parser for SentinelOne

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimUserManagementSentinelOne` |
| **Built-in Parser** | `_ASim_UserManagement_SentinelOne` |
| **Schema** | UserManagement |
| **Schema Version** | 0.1.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SentinelOne |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimUserManagement/CHANGELOG/ASimUserManagementSentinelOne.md)) |
| **Last Updated** | Nov 07, 2023 |
| **Unifying Parser** | [ASimUserManagement](asimusermanagement.md) |
| **Source File** | [Parsers\ASimUserManagement\Parsers\ASimUserManagementSentinelOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/ASimUserManagementSentinelOne.yaml) |

## Description

This ASIM parser supports normalizing SentinelOne logs to the ASIM User Management normalized schema. SentinelOne events are captured through SentinelOne data connector which ingests SentinelOne server objects such as Threats, Agents, Applications, Activities, Policies, Groups, and more events into Microsoft Sentinel through the REST API.

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

- [ASIM UserManagement Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https://aka.ms/AboutASIM)
- https://<SOneInstanceDomain>.sentinelone.net/api-doc/overview

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

