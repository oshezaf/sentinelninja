# CrowdStrikeAlerts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CrowdStrikeAlerts table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/crowdstrikealerts) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (109 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/crowdstrikealerts)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AgentId | string | Unique identifier for the CrowdStrike agent that generated the alert. |
| AggregateId | string | Identifier for aggregated alerts from the same source. |
| AlertType | string | The type or category of the CrowdStrike alert. |
| AllegedFiletype | string | The suspected file type of the malicious file associated with the alert. |
| AssignedToName | string | Name of the user assigned to handle the alert. |
| AssignedToUid | string | User ID of the assigned user. |
| AssignedToUuid | string | UUID of the assigned user. |
| Categorization | string | Categorization of the alert. |
| ChildProcessIds | dynamic | List of child process IDs spawned by the detected process. |
| Cid | string | Customer ID in the CrowdStrike platform. |
| CloudIndicator | bool | Indicates if the alert involves cloud-based indicators. |
| Cmdline | string | Command line used to execute the detected process. |
| CompositeId | string | Composite identifier combining multiple alert attributes. |
| Confidence | int | Confidence score of the alert (0-100). |
| ContextTimestamp | string | Timestamp providing additional context for the alert. |
| CorrelationRuleCreateCase | bool | Indicates if the correlation rule is configured to create a case. |
| CorrelationRuleExecutionId | string | Execution ID of the correlation rule that triggered the alert. |
| CorrelationRuleId | string | Identifier of the correlation rule that triggered the alert. |
| CorrelationRuleUserId | string | User ID associated with the correlation rule. |
| CorrelationRuleUserUuid | string | UUID of the user associated with the correlation rule. |
| CrawledTimestamp | datetime | Timestamp when the alert data was last crawled. |
| CreatedTimestamp | datetime | Timestamp when the alert was first created. |
| DataDomains | dynamic | Domains associated with the alert. |
| Description | string | Detailed description of the alert. |
| DetectionId | string | Unique identifier for the detection associated with the alert. |
| Device | dynamic | Information about the device where the alert was detected. |
| DisplayName | string | Human-readable name for the alert. |
| EmailSent | bool | Indicates if an email notification was sent for this alert. |
| EndTime | string | Timestamp when the alert activity ended. |
| EnrichedEntities | dynamic | Enriched entity information associated with the alert. |
| EventCorrelationId | string | Correlation ID linking related events. |
| EventIds | string | Event IDs associated with the alert. |
| External | bool | Indicates if the alert originated from an external source. |
| FalconHostLink | string | Link to the alert details in the CrowdStrike Falcon console. |
| Filename | string | Name of the file associated with the alert. |
| Filepath | string | Full path to the file associated with the alert. |
| GlobalPrevalence | string | Global prevalence rating of the detected file. |
| GrandparentDetails | dynamic | Details about the grandparent process in the process tree. |
| HasTruncatedEntities | bool | Indicates if the alert entities have been truncated. |
| Id | string | Unique identifier for the alert. |
| IndicatorId | string | Identifier for the indicator of compromise that triggered the alert. |
| IocContext | dynamic | Context information about the indicator of compromise. |
| IsClosed | bool | Indicates if the alert has been closed. |
| LeadId | string | Identifier for the lead associated with the alert. |
| LeadType | string | Type of the lead associated with the alert. |
| LocalAddressIp4 | string | IPv4 address of the local endpoint. |
| LocalAddressIp6 | string | IPv6 address of the local endpoint. |
| LocalPrevalence | string | Local prevalence rating within the organization. |
| LocalProcessId | string | Local process ID on the system where the alert occurred. |
| LogonDomain | string | Domain used for user logon associated with the alert. |
| Md5 | string | MD5 hash of the file associated with the alert. |
| MitreAttack | dynamic | MITRE ATT&amp;CK tactics and techniques associated with the alert. |
| Objective | string | The attacker's presumed objective. |
| OriginalCorrelationRulesEntitiesCount | int | Original count of correlation rule entities. |
| OriginalIndicatorEntitiesCount | int | Original count of indicator entities. |
| OriginCid | string | Customer ID of the originating tenant. |
| ParentDetails | dynamic | Details about the parent process in the process tree. |
| ParentProcessId | string | Process ID of the parent process. |
| PatternDisposition | int | Numerical identifier for the action taken by the detection pattern. |
| PatternDispositionDescription | string | Text description of the pattern disposition action. |
| PatternDispositionDetails | dynamic | Detailed information about the pattern disposition. |
| PatternId | int | Identifier for the detection pattern that triggered the alert. |
| Platform | string | Operating system or platform where the alert was detected. |
| PolyId | string | Poly ID associated with the alert. |
| PriorityDetails | dynamic | Priority details associated with the alert. |
| ProcessEndTime | string | Timestamp when the detected process ended. |
| ProcessId | string | Process ID of the detected process. |
| ProcessStartTime | string | Timestamp when the detected process started. |
| Product | string | CrowdStrike product that generated the alert. |
| Scenario | string | Security scenario that triggered the alert. |
| Score | int | Score associated with the alert. |
| SecondsToResolved | int | Time in seconds from alert creation to resolution. |
| SecondsToTriaged | int | Time in seconds from alert creation to triage. |
| Severity | int | Severity level of the alert. |
| SeverityName | string | Text representation of the severity level. |
| Sha1 | string | SHA1 hash of the file associated with the alert. |
| Sha256 | string | SHA256 hash of the file associated with the alert. |
| ShowInUi | bool | Indicates if the alert should be displayed in the user interface. |
| SignalEndTimestamp | string | Timestamp when the signal ended. |
| SignalStartTimestamp | string | Timestamp when the signal started. |
| SignalUpdatedTimestamp | string | Timestamp when the signal was last updated. |
| SourceEndpointAddressIp4 | string | IPv4 address of the source endpoint. |
| SourceEndpointAddressIp6 | string | IPv6 address of the source endpoint. |
| SourceIps | dynamic | List of source IP addresses associated with the alert. |
| SourceProducts | dynamic | List of products that contributed to this alert. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| SourceVendors | dynamic | List of vendors associated with the alert sources. |
| StartTime | string | Timestamp when the alert activity started. |
| Status | string | Current status of the alert. |
| Tactic | string | MITRE ATT&amp;CK tactic associated with the alert. |
| TacticId | string | Identifier of the MITRE ATT&amp;CK tactic. |
| Tags | dynamic | Custom tags associated with the alert. |
| Technique | string | MITRE ATT&amp;CK technique associated with the alert. |
| TechniqueId | string | Identifier of the MITRE ATT&amp;CK technique. |
| TemplateInstanceId | int | Instance ID of the detection template used. |
| TenantId | string | The Log Analytics workspace ID |
| ThreatgraphIndicators | dynamic | Threat graph indicators associated with the alert. |
| TimeGenerated | datetime | The timestamp (UTC) when the alert was generated. |
| Timestamp | datetime | Time when the alert event occurred. |
| TriggeringProcessGraphId | string | Graph ID of the process that triggered the alert. |
| Type | string | The name of the table |
| UpdatedTimestamp | datetime | Time when the alert was last updated. |
| UserId | string | User ID associated with the alert. |
| UserName | string | Username associated with the alert. |
| Users | dynamic | List of users associated with the alert. |
| VendorPatternId | string | Vendor-specific pattern identifier. |
| XdrEventId | string | XDR event ID associated with the alert. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

