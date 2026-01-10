# <img src="../images/asim-badge.png" alt="ASIM" height="32"> User Management ASIM parser for SentinelOne

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimUserManagementSentinelOne` |
| **Built-in Parser** | `_Im_UserManagement_SentinelOne` |
| **Schema** | UserManagement |
| **Schema Version** | 0.1.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SentinelOne |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Nov 07, 2023 |
| **Unifying Parser** | [imUserManagement](imusermanagement.md) |
| **Source File** | [Parsers\ASimUserManagement\Parsers\vimUserManagementSentinelOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/vimUserManagementSentinelOne.yaml) |

## Description

This ASIM parser supports normalizing SentinelOne logs to the ASIM User Management normalized schema. SentinelOne events are captured through SentinelOne data connector which ingests SentinelOne server objects such as Threats, Agents, Applications, Activities, Policies, Groups, and more events into Microsoft Sentinel through the REST API.

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
| `actorusername_has_any` | dynamic | dynamic([]) |
| `targetusername_has_any` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM UserManagement Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https://aka.ms/AboutASIM)
- https://<SOneInstanceDomain>.sentinelone.net/api-doc/overview

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

