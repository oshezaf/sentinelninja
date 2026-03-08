# CrowdStrike_Network_Events_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Ingestion API Supported** | ✓ Yes |

## Schema (64 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CrowdStrike_Network_Events_CL.json)

| Column Name | Type |
|:------------|:-----|
| AdditionalFields | dynamic |
| aid | string |
| aip | string |
| BoundingLimitCount | long |
| BoundingLimitDuration | string |
| cid | string |
| CommandLine | string |
| ConfigBuild | string |
| ConfigStateHash | string |
| ConnectionDirection | string |
| ConnectionFlags | string |
| ContextProcessId | string |
| ContextThreadId | string |
| ContextTimeStamp | real |
| CrowdStrikeId | string |
| EffectiveTransmissionClass | string |
| Entitlements | string |
| event_platform | string |
| event_simpleName | string |
| EventOrigin | string |
| FirewallAction | string |
| HbfwRuleFlags | string |
| HbfwRuleId | string |
| IcmpCode | string |
| IcmpType | string |
| ImageFileName | string |
| InContext | string |
| InterfaceAlias | string |
| InterfaceIndex | long |
| IsUnique | string |
| LocalAddressIP4 | string |
| LocalAddressIP6 | string |
| LocalAddressMaskIP4 | string |
| LocalAddressMaskIP6 | string |
| LocalPort | long |
| LocalPortRangeOperation | string |
| LocalPortRangeStart | string |
| name | string |
| NegateInterface | string |
| NegateLocalAddress | string |
| NegateRemoteAddress | string |
| NeighborList | string |
| NetLuidIndex | long |
| NetworkProfile | string |
| OciContainerId | string |
| PhysicalAddress | string |
| PolicyIdentifier | string |
| Protocol | string |
| RemoteAddressIP4 | string |
| RemoteAddressIP6 | string |
| RemoteAddressMaskIP4 | string |
| RemoteAddressMaskIP6 | string |
| RemoteAddressString | string |
| RemotePort | long |
| RemotePortRangeOperation | string |
| RemotePortRangeStart | string |
| RuleAction | string |
| RuleMatchCount | long |
| RuleMatchCountSinceLastReport | long |
| TcpConnectErrorCode | string |
| TimeGenerated | datetime |
| timestamp | long |
| TreeId | string |
| UserName | string |

## Solutions (1)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

