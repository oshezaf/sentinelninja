# CrowdStrikeDetectionsV2_CL

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

## Schema (182 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection%5CData%20Connectors%5CCrowdStrikeAPI_ccp/CrowdStrikeAPI_CrowdStrikeDetectionsV2_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AddedPrivileges | dynamic | Privileges added during the detection process. |
| AdversaryIds | dynamic | List of adversary IDs associated with the detection. |
| AgentId | string | Unique identifier for the CrowdStrike agent that generated the detection. |
| AgentLoadFlags | string | Flags indicating the load status of the CrowdStrike agent. |
| AgentLocalTime | string | Local time of the system where the agent is installed. |
| AgentScanId | string | Identifier for the agent scan that detected this threat. |
| AgentVersion | string | Version of the installed CrowdStrike agent. |
| AggregateId | string | Aggregate ID associated with the detection. |
| AllegedFiletype | string | The suspected file type of the malicious file. |
| AssignedToName | string | Name of the user assigned to investigate the detection. |
| AssignedToUid | string | User ID of the assigned investigator. |
| AssignedToUuid | string | UUID of the assigned investigator. |
| AssociatedFiles | dynamic | List of files associated with the detection. |
| Behaviors | dynamic | List of behaviors detected that contributed to this detection. |
| BehaviorsProcessed | dynamic | List of behaviors that have been processed and analyzed. |
| BiosManufacturer | string | Manufacturer of the system BIOS. |
| BiosVersion | string | Version of the system BIOS. |
| ChildProcessIds | dynamic | List of child process IDs spawned by the detected process. |
| Cid | string | Customer ID in the CrowdStrike platform. |
| CloudIndicator | bool | Indicates if the detection involves cloud-based indicators. |
| Cmdline | string | Command line used to execute the detected process. |
| Comment | string | User-provided comment on the detection. |
| Comments | dynamic | List of comments associated with the detection. |
| CompositeId | string | Composite identifier combining multiple detection attributes. |
| Confidence | int | Confidence score of the detection (0-100). |
| ConfigIdBase | string | Base configuration ID for the CrowdStrike agent. |
| ConfigIdBuild | string | Build configuration ID for the CrowdStrike agent. |
| ConfigIdPlatform | string | Platform-specific configuration ID for the CrowdStrike agent. |
| ContainerId | string | Identifier of the container associated with the alert. |
| ContextTimestamp | string | Timestamp providing additional context for the detection. |
| ControlGraphId | string | Identifier for the control graph associated with the detection. |
| CrawledTimestamp | datetime | Timestamp when the detection data was last crawled. |
| CreatedTimestamp | datetime | Timestamp when the detection was first created. |
| CrowdStrikeDomain | string | CrowdStrike host/domain configured for this connection; hard-coded on every record so hosts can be differentiated. |
| DataDomains | dynamic | Domains associated with the detection. |
| DateUpdated | string | Date when the detection record was last updated. |
| Description | string | Description of the detection. |
| DetectionContext | dynamic | Additional context information about the detection. |
| DetectionId | string | Unique identifier for the detection. |
| DetectionType | string | Type or category of the detection. |
| Device | dynamic | Information about the device where the detection occurred. |
| DeviceId | string | Unique identifier for the device in the CrowdStrike platform. |
| DisplayName | string | Human-readable name for the detection. |
| DnsRequests | dynamic | List of DNS requests made by the detected process. |
| EmailSent | bool | Indicates if an email notification was sent for this detection. |
| EndTime | datetime | Timestamp when the detection ended. |
| Entities | dynamic | Entities associated with the detection. |
| EntityValues | dynamic | Values of the entities associated with the detection. |
| EventCorrelationId | string | Correlation ID linking related events. |
| External | bool | Indicates if the detection originated from an external source. |
| ExternalIp | string | External IP address of the host. |
| FalconHostLink | string | Link to the detection details in the CrowdStrike Falcon console. |
| Filename | string | Name of the file associated with the detection. |
| Filepath | string | Full path to the file associated with the detection. |
| FilesWritten | dynamic | List of files written by the detected process. |
| FirstBehavior | datetime | Timestamp of the first behavior in the detection sequence. |
| FirstSeen | string | Timestamp when the host was first seen by CrowdStrike. |
| GlobalPrevalence | string | Global prevalence rating of the detected file. |
| GrandparentDetails | dynamic | Details about the grandparent process in the process tree. |
| Groups | dynamic | List of groups the host belongs to. |
| HasAdversary | bool | Indicates if the detection is associated with a known adversary. |
| HasAgenticProcess | bool | Indicates if the detection involves an agentic process. |
| HostInfo | dynamic | Information about the host where the detection occurred. |
| Hostname | string | Network hostname of the system where the detection occurred. |
| HostNames | dynamic | List of hostnames associated with the detection. |
| Id | string | Unique identifier for the detection. |
| Incident | dynamic | Associated incident information if the detection is part of an incident. |
| IndicatorId | string | Identifier for the indicator of compromise (IOC) that triggered the detection. |
| InstanceId | string | Cloud instance identifier. |
| IocContext | dynamic | Context information about the indicator of compromise. |
| IocDescription | string | Description of the indicator of compromise. |
| IocSource | string | Source of the indicator of compromise. |
| IocType | string | Type of the indicator of compromise. |
| IocValue | string | Value of the indicator of compromise. |
| IsClosed | bool | Indicates if the detection has been closed. |
| LastBehavior | datetime | Timestamp of the most recent behavior in the detection. |
| LastSeen | string | Timestamp when the host was last seen active. |
| LeadId | string | Identifier for the lead associated with the detection. |
| LeadType | string | Type of the lead associated with the detection. |
| LocalIp | string | Local IP address of the host. |
| LocalPrevalence | string | Local prevalence rating of the detected file within the organization. |
| LocalProcessId | string | Local process ID on the system where the detection occurred. |
| LogonDomain | string | Domain used for user logon associated with the detection. |
| MacAddress | string | Primary MAC address of the host. |
| MachineDomain | string | Domain name the machine is joined to. |
| MajorVersion | string | Major version number of the operating system. |
| MaxConfidence | int | Maximum confidence score across all behaviors in the detection. |
| MaxSeverity | int | Maximum severity level across all behaviors in the detection. |
| MaxSeverityDisplayName | string | Text representation of the maximum severity level. |
| Md5 | string | MD5 hash of the detected file. |
| MinorVersion | string | Minor version number of the operating system. |
| MitreAttack | dynamic | MITRE ATT&CK tactics and techniques associated with the detection. |
| ModifiedTimestamp | string | Timestamp when the detection record was last modified. |
| Name | string | Name of the detection. |
| NetworkAccesses | dynamic | List of network connections made by the detected process. |
| Objective | string | Objective associated with the detection. |
| OriginCid | string | Customer ID of the originating tenant. |
| OsName | string | Operating system name where the detection occurred. |
| OsVersion | string | Version string of the operating system. |
| Ou | dynamic | Organizational Unit information for the host. |
| OverwatchNotes | string | Notes added by CrowdStrike Overwatch analysts. |
| ParentDetails | dynamic | Details about the parent process in the process tree. |
| ParentProcessId | string | Process ID of the parent process. |
| PatternDisposition | int | Numerical identifier for the action taken by the detection pattern. |
| PatternDispositionDescription | string | Text description of the pattern disposition action. |
| PatternDispositionDetails | dynamic | Detailed information about the pattern disposition. |
| PatternId | int | Identifier for the detection pattern that triggered the detection. |
| Platform | string | Operating system or platform where the detection was found. |
| PlatformId | string | Unique identifier for the platform type. |
| PlatformName | string | Name of the platform. |
| PolyId | string | Poly ID associated with the detection. |
| PreventionPolicyId | string | Identifier of the prevention policy applied. |
| PreventionPolicyName | string | Name of the prevention policy applied. |
| PreviousPrivileges | string | Privileges previously held before the detection process. |
| PriorityDetails | dynamic | Priority details associated with the detection. |
| PriorityExplanation | dynamic | Explanation of the priority assignment. |
| PriorityValue | int | Numerical priority value of the detection. |
| Privileges | string | Current privileges associated with the detection. |
| ProcessEndTime | string | Timestamp when the detected process ended. |
| ProcessId | string | Process ID of the detected process. |
| ProcessStartTime | string | Timestamp when the detected process started. |
| Product | string | CrowdStrike product that generated the detection. |
| ProductType | string | Type of product or system. |
| ProductTypeDesc | string | Description of the product or system type. |
| Quarantined | bool | Indicates if the detected file was quarantined. |
| QuarantinedFiles | dynamic | List of files that were quarantined as part of this detection. |
| References | dynamic | References associated with the detection. |
| ScanId | string | Identifier for the scan that detected the threat. |
| Scenario | string | Scenario associated with the detection. |
| Score | int | Score associated with the detection. |
| SecondsToResolved | int | Time in seconds from detection creation to resolution. |
| SecondsToTriaged | int | Time in seconds from detection creation to triage. |
| ServiceProvider | string | Cloud service provider hosting the system. |
| ServiceProviderAccountId | string | Account identifier from the cloud service provider. |
| Severity | int | Severity level of the detection. |
| SeverityName | string | Name of the severity level associated with the detection. |
| Sha1 | string | SHA1 hash of the detected file. |
| Sha256 | string | SHA256 hash of the detected file. |
| ShowInUi | bool | Indicates if the detection should be displayed in the user interface. |
| SignalEndTimestamp | string | Timestamp when the signal ended. |
| SignalStartTimestamp | string | Timestamp when the signal started. |
| SignalUpdatedTimestamp | string | Timestamp when the signal was last updated. |
| SourceAccountDomain | string | Source account domain associated with the detection. |
| SourceAccountName | string | Source account name associated with the detection. |
| SourceAccountObjectGuid | string | Source account object GUID associated with the detection. |
| SourceAccountObjectSid | string | Source account object SID associated with the detection. |
| SourceAccountSamAccountName | string | Source account SAM account name associated with the detection. |
| SourceAccountUpn | string | Source account UPN associated with the detection. |
| SourceEventModel | string | Source event model associated with the detection. |
| SourceHosts | dynamic | List of source hostnames associated with the detection. |
| SourceIps | dynamic | List of source IP addresses associated with the detection. |
| SourceProducts | dynamic | List of products that contributed to this detection. |
| SourceVendors | dynamic | List of vendors associated with the detection sources. |
| Status | string | Current status of the detection (e.g., new, in_progress, resolved). |
| SystemManufacturer | string | Manufacturer of the system hardware. |
| SystemProductName | string | Product name or model of the system. |
| Tactic | string | Tactic associated with the detection. |
| TacticId | string | ID of the tactic associated with the detection. |
| TacticIds | dynamic | IDs of the tactics associated with the detection. |
| Tactics | dynamic | Tactics associated with the detection. |
| Technique | string | Technique associated with the detection. |
| TechniqueId | string | ID of the technique associated with the detection. |
| TechniqueIds | dynamic | IDs of the techniques associated with the detection. |
| Techniques | dynamic | Techniques associated with the detection. |
| TemplateInstanceId | int | Instance ID of the detection template used. |
| TemplateInstanceIdText | string | Instance ID of the detection template used (string representation). |
| TemplateInstanceVersion | int | Version of the detection template instance. |
| TemplateInterfaceId | int | Interface ID of the detection template. |
| TemplateInterfaceIdText | string | Interface ID of the detection template (string representation). |
| TemplateInterfaceName | string | Name of the detection template interface. |
| ThreatgraphIndicators | dynamic | Threat graph indicators associated with the detection. |
| TimeGenerated | datetime |  |
| Timestamp | datetime | Time when the detection event occurred. |
| TreeId | string | Identifier for the process tree associated with the detection. |
| TreeRoot | string | Root process identifier of the process tree. |
| TriggeringProcessGraphId | string | Graph ID of the process that triggered the detection. |
| UpdatedTimestamp | datetime | Timestamp when the detection was last updated. |
| UserId | string | User ID associated with the detected process. |
| UserName | string | Username associated with the detected process. |
| UserNames | dynamic | List of usernames associated with the detection. |
| UserPrincipal | string | User principal name (UPN) associated with the detected process. |
| XdrDetectionId | string | XDR detection ID associated with the detection. |

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

