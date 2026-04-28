# TrellixEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (43 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trellix%5CData%20Connectors%5CTrellix_CCF/TrellixEvents_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AgentGuid | string | GUID of the agent. |
| Analyzer | string | Analyzer information. |
| AnalyzerDatVersion | string | DAT version of the analyzer. |
| AnalyzerDetectionMethod | string | Detection method of the analyzer. |
| AnalyzerEngineVersion | string | Engine version of the analyzer. |
| AnalyzerHostName | string | Host name of the analyzer. |
| AnalyzerIPv4 | string | IPv4 address of the analyzer. |
| AnalyzerIPv6 | string | IPv6 address of the analyzer. |
| AnalyzerMac | string | MAC address of the analyzer. |
| AnalyzerName | string | Name of the analyzer. |
| AnalyzerVersion | string | Version of the analyzer. |
| AutoGuid | string | Auto GUID field. |
| DetectedUtc | datetime | UTC timestamp at which the event was detected. |
| EventType | string | Type of the event provided by Trellix. |
| Id | string | Identifier of the event. |
| NodePath | string | Path of the node. |
| ReceivedUtc | datetime | UTC timestamp at which the event was received. |
| SourceHostName | string | Host name of the event source. |
| SourceIPv4 | string | IPv4 address of the event source. |
| SourceIPv6 | string | IPv6 address of the event source. |
| SourceMac | string | MAC address of the event source. |
| SourceProcessName | string | Process name of the event source. |
| SourceUrl | string | URL of the event source. |
| SourceUserName | string | User name of the event source. |
| TargetFileName | string | File name of the event target. |
| TargetHash | string | Hash of the event target. |
| TargetHostName | string | Host name of the event target. |
| TargetIPv4 | string | IPv4 address of the event target. |
| TargetIPv6 | string | IPv6 address of the event target. |
| TargetMac | string | MAC address of the event target. |
| TargetPort | string | Port of the event target. |
| TargetProcessName | string | Process name of the event target. |
| TargetProtocol | string | Protocol of the event target. |
| TargetUserName | string | User name of the event target. |
| ThreatActionTaken | string | Action taken for the threat. |
| ThreatCategory | string | Category of the threat. |
| ThreatEventId | int | ID of the threat event. |
| ThreatHandled | bool | Indicates if the threat was handled. |
| ThreatName | string | Name of the threat. |
| ThreatSeverity | string | Severity of the threat. |
| ThreatType | string | Type of the threat. |
| TimeGenerated | datetime | The timestamp (in UTC) when the event was generated. |
| Timestamp | datetime | Timestamp of the event. |

## Solutions (1)

This table is used by the following solutions:

- [Trellix](../solutions/trellix.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Trellix Endpoint Security (via Codeless Connector Framework)](../connectors/trellixconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [TrellixEvents](../parsers/trellixevents.md) | [Trellix](../solutions/trellix.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

