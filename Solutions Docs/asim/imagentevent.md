# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Agent Event ASIM filtering parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imAgentEvent` |
| **Built-in Parser** | `_Im_AgentEvent` |
| **Schema** | AgentEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAgentEvent/CHANGELOG/imAgentEvent.md)) |
| **Last Updated** | Apr 16, 2026 |
| **Source File** | [Parsers\ASimAgentEvent\Parsers\imAgentEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAgentEvent/Parsers/imAgentEvent.yaml) |

## Description

This ASIM parser supports filtering and normalizing Agent Event logs from all supported sources to the ASIM 'AgentEvent' normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `agentid_has_any` | dynamic | dynamic([]) |
| `agentname_has_any` | dynamic | dynamic([]) |
| `username_has_any` | dynamic | dynamic([]) |
| `pack` | bool | False |

## References

- [ASIM Agent Event Schema](https://aka.ms/ASimAgentEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

