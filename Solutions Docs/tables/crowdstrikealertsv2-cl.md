# CrowdStrikeAlertsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (163 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection%5CData%20Connectors%5CCrowdStrikeAPI_ccp/CrowdStrikeAPI_CrowdStrikeAlertsV2_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AdversaryIds | dynamic | List of adversary IDs associated with the alert. |
| AgentId | string | Unique identifier for the CrowdStrike agent that generated the alert. |
| AgentLoadFlags | string | Flags indicating the load status of the CrowdStrike agent. |
| AgentLocalTime | string | Local time of the system where the agent is installed. |
| AgentVersion | string | Version of the installed CrowdStrike agent. |
| AggregateId | string | Identifier for aggregated alerts from the same source. |
| AlertType | string | The type or category of the CrowdStrike alert. |
| AllegedFiletype | string | The suspected file type of the malicious file associated with the alert. |
| AssignedToName | string | Name of the user assigned to handle the alert. |
| AssignedToUid | string | User ID of the assigned user. |
| AssignedToUuid | string | UUID of the assigned user. |
| AssociatedFiles | dynamic | List of files associated with the alert. |
| BiosManufacturer | string | Manufacturer of the system BIOS. |
| BiosVersion | string | Version of the system BIOS. |
| Categorization | string | Categorization of the alert. |
| ChildProcessIds | dynamic | List of child process IDs spawned by the detected process. |
| Cid | string | Customer ID in the CrowdStrike platform. |
| CloudIndicator | bool | Indicates if the alert involves cloud-based indicators. |
| Cmdline | string | Command line used to execute the detected process. |
| Comment | string | User-provided comment on the alert. |
| Comments | dynamic | List of comments associated with the alert. |
| CompositeId | string | Composite identifier combining multiple alert attributes. |
| Confidence | int | Confidence score of the alert (0-100). |
| ConfigIdBase | string | Base configuration ID for the CrowdStrike agent. |
| ConfigIdBuild | string | Build configuration ID for the CrowdStrike agent. |
| ConfigIdPlatform | string | Platform-specific configuration ID for the CrowdStrike agent. |
| ContainerId | string | Identifier of the container associated with the alert. |
| ContextTimestamp | string | Timestamp providing additional context for the alert. |
| ControlGraphId | string | Identifier for the control graph associated with the alert. |
| CorrelationRuleCreateCase | bool | Indicates if the correlation rule is configured to create a case. |
| CorrelationRuleExecutionId | string | Execution ID of the correlation rule that triggered the alert. |
| CorrelationRuleId | string | Identifier of the correlation rule that triggered the alert. |
| CorrelationRuleUserId | string | User ID associated with the correlation rule. |
| CorrelationRuleUserUuid | string | UUID of the user associated with the correlation rule. |
| CrawledTimestamp | datetime | Timestamp when the alert data was last crawled. |
| CreatedTimestamp | datetime | Timestamp when the alert was first created. |
| CrowdStrikeDomain | string | CrowdStrike host/domain configured for this connection; hard-coded on every record so hosts can be differentiated. |
| DataDomains | dynamic | Domains associated with the alert. |
| Description | string | Detailed description of the alert. |
| DetectionId | string | Unique identifier for the detection associated with the alert. |
| Device | dynamic | Information about the device where the alert was detected. |
| DeviceId | string | Unique identifier for the device in the CrowdStrike platform. |
| DisplayName | string | Human-readable name for the alert. |
| DnsRequests | dynamic | List of DNS requests made by the detected process. |
| EmailSent | bool | Indicates if an email notification was sent for this alert. |
| EndTime | string | Timestamp when the alert activity ended. |
| EnrichedEntities | dynamic | Enriched entity information associated with the alert. |
| EventCorrelationId | string | Correlation ID linking related events. |
| EventIds | string | Event IDs associated with the alert. |
| External | bool | Indicates if the alert originated from an external source. |
| ExternalIp | string | External IP address of the host. |
| FalconHostLink | string | Link to the alert details in the CrowdStrike Falcon console. |
| Filename | string | Name of the file associated with the alert. |
| Filepath | string | Full path to the file associated with the alert. |
| FilesWritten | dynamic | List of files written by the detected process. |
| FirstSeen | string | Timestamp when the host was first seen by CrowdStrike. |
| GlobalPrevalence | string | Global prevalence rating of the detected file. |
| GrandparentDetails | dynamic | Details about the grandparent process in the process tree. |
| Groups | dynamic | List of groups the host belongs to. |
| HasAdversary | bool | Indicates if the alert is associated with a known adversary. |
| HasAgenticProcess | bool | Indicates if the alert involves an agentic process. |
| HasTruncatedEntities | bool | Indicates if the alert entities have been truncated. |
| Hostname | string | Network hostname of the system where the alert occurred. |
| HostNames | dynamic | List of hostnames associated with the alert. |
| Id | string | Unique identifier for the alert. |
| IndicatorId | string | Identifier for the indicator of compromise that triggered the alert. |
| InstanceId | string | Cloud instance identifier. |
| IocContext | dynamic | Context information about the indicator of compromise. |
| IocDescription | string | Description of the indicator of compromise. |
| IocSource | string | Source of the indicator of compromise. |
| IocType | string | Type of the indicator of compromise. |
| IocValue | string | Value of the indicator of compromise. |
| IsClosed | bool | Indicates if the alert has been closed. |
| LastSeen | string | Timestamp when the host was last seen active. |
| LeadId | string | Identifier for the lead associated with the alert. |
| LeadType | string | Type of the lead associated with the alert. |
| LocalAddressIp4 | string | IPv4 address of the local endpoint. |
| LocalAddressIp6 | string | IPv6 address of the local endpoint. |
| LocalIp | string | Local IP address of the host. |
| LocalPrevalence | string | Local prevalence rating within the organization. |
| LocalProcessId | string | Local process ID on the system where the alert occurred. |
| LogonDomain | string | Domain used for user logon associated with the alert. |
| MacAddress | string | Primary MAC address of the host. |
| MachineDomain | string | Domain name the machine is joined to. |
| MajorVersion | string | Major version number of the operating system. |
| Md5 | string | MD5 hash of the file associated with the alert. |
| MinorVersion | string | Minor version number of the operating system. |
| MitreAttack | dynamic | MITRE ATT&CK tactics and techniques associated with the alert. |
| ModifiedTimestamp | string | Timestamp when the alert record was last modified. |
| Name | string | Name of the alert. |
| NetworkAccesses | dynamic | List of network connections made by the detected process. |
| Objective | string | The attacker's presumed objective. |
| OriginalCorrelationRulesEntitiesCount | int | Original count of correlation rule entities. |
| OriginalIndicatorEntitiesCount | int | Original count of indicator entities. |
| OriginCid | string | Customer ID of the originating tenant. |
| OsVersion | string | Version string of the operating system. |
| Ou | dynamic | Organizational Unit information for the host. |
| ParentDetails | dynamic | Details about the parent process in the process tree. |
| ParentProcessId | string | Process ID of the parent process. |
| PatternDisposition | int | Numerical identifier for the action taken by the detection pattern. |
| PatternDispositionDescription | string | Text description of the pattern disposition action. |
| PatternDispositionDetails | dynamic | Detailed information about the pattern disposition. |
| PatternId | int | Identifier for the detection pattern that triggered the alert. |
| Platform | string | Operating system or platform where the alert was detected. |
| PlatformId | string | Unique identifier for the platform type. |
| PlatformName | string | Name of the platform. |
| PolyId | string | Poly ID associated with the alert. |
| PreventionPolicyId | string | Identifier of the prevention policy applied. |
| PreventionPolicyName | string | Name of the prevention policy applied. |
| PriorityDetails | dynamic | Priority details associated with the alert. |
| PriorityExplanation | dynamic | Explanation of the priority assignment. |
| PriorityValue | int | Numerical priority value of the alert. |
| ProcessEndTime | string | Timestamp when the detected process ended. |
| ProcessId | string | Process ID of the detected process. |
| ProcessStartTime | string | Timestamp when the detected process started. |
| Product | string | CrowdStrike product that generated the alert. |
| ProductType | string | Type of product or system. |
| ProductTypeDesc | string | Description of the product or system type. |
| QuarantinedFiles | dynamic | List of files that were quarantined as part of this alert. |
| Scenario | string | Security scenario that triggered the alert. |
| Score | int | Score associated with the alert. |
| SecondsToResolved | int | Time in seconds from alert creation to resolution. |
| SecondsToTriaged | int | Time in seconds from alert creation to triage. |
| ServiceProvider | string | Cloud service provider hosting the system. |
| ServiceProviderAccountId | string | Account identifier from the cloud service provider. |
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
| SourceHosts | dynamic | List of source hostnames associated with the alert. |
| SourceIps | dynamic | List of source IP addresses associated with the alert. |
| SourceProducts | dynamic | List of products that contributed to this alert. |
| SourceVendors | dynamic | List of vendors associated with the alert sources. |
| StartTime | string | Timestamp when the alert activity started. |
| Status | string | Current status of the alert. |
| SystemManufacturer | string | Manufacturer of the system hardware. |
| SystemProductName | string | Product name or model of the system. |
| Tactic | string | MITRE ATT&CK tactic associated with the alert. |
| TacticId | string | Identifier of the MITRE ATT&CK tactic. |
| Tags | dynamic | Custom tags associated with the alert. |
| Technique | string | MITRE ATT&CK technique associated with the alert. |
| TechniqueId | string | Identifier of the MITRE ATT&CK technique. |
| TemplateInstanceId | string | Instance ID of the detection template used. |
| TemplateInstanceVersion | int | Version of the detection template instance. |
| ThreatgraphIndicators | dynamic | Threat graph indicators associated with the alert. |
| TimeGenerated | datetime |  |
| Timestamp | datetime | Time when the alert event occurred. |
| TreeId | string | Identifier for the process tree associated with the alert. |
| TreeRoot | string | Root process identifier of the process tree. |
| TriggeringProcessGraphId | string | Graph ID of the process that triggered the alert. |
| UpdatedTimestamp | datetime | Time when the alert was last updated. |
| UserId | string | User ID associated with the alert. |
| UserName | string | Username associated with the alert. |
| UserNames | dynamic | List of usernames associated with the alert. |
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

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrike](../parsers/crowdstrike.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

