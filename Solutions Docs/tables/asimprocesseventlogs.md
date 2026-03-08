# ASimProcessEventLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ASimProcessEventLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimprocesseventlogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (232 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimprocesseventlogs) · [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Carbon%20Black%20Cloud/Data%20Connectors/VMwareCarbonBlackCloud_ccp/CarbonBlack_DCR.json)

| Column Name | Type | Description | Source |
|:------------|:-----|:------------|:-------|
| _BilledSize | real | The record size in bytes | Azure Monitor docs |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account | Azure Monitor docs |
| _ResourceId | string | A unique identifier for the resource that the record is associated with | Azure Monitor docs |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with | Azure Monitor docs |
| ActingProcessCommandLine | string | The command line used to run the acting process. | Azure Monitor docs |
| ActingProcessCreationTime | datetime | The date and time when the acting process was started. | Azure Monitor docs |
| ActingProcessFileCompany | string | The company that created the acting process image file. | Azure Monitor docs |
| ActingProcessFileDescription | string | The description embedded in the version information of the acting process image file. | Azure Monitor docs |
| ActingProcessFileInternalName | string | The product internal file name from the version information of the acting process image file. | Azure Monitor docs |
| ActingProcessFilename | string | The product file name from the version information of the acting process image file. | Azure Monitor docs |
| ActingProcessFileOriginalName | string | The product original file name from the version information of the acting process image file. | Azure Monitor docs |
| ActingProcessFileProduct | string | The product name from the version information in the acting process image file. | Azure Monitor docs |
| ActingProcessFileSize | long | The size of the file in bytes that ran the acting process. | Azure Monitor docs |
| ActingProcessFileVersion | string | The product version from the version information of the acting process image file. | Azure Monitor docs |
| ActingProcessGuid | string | A GUID of the acting process. | Azure Monitor docs |
| ActingProcessId | string | The process ID of the acting process. | Azure Monitor docs |
| ActingProcessIMPHASH | string | The Import Hash of all the library DLLs that are used by the acting process. | Azure Monitor docs |
| ActingProcessInjectedAddress | string | The memory address in which the responsible acting process is stored. | Azure Monitor docs |
| ActingProcessIntegrityLevel | string | Integrity Level for acting process. | Azure Monitor docs |
| ActingProcessIsHidden | bool | An indication of whether the acting process is in hidden mode. | Azure Monitor docs |
| ActingProcessMD5 | string | The MD5 hash of the acting process image file. | Azure Monitor docs |
| ActingProcessName | string | The name of the acting process. | Azure Monitor docs |
| ActingProcessSHA1 | string | The SHA-1 hash of the acting process image file. | Azure Monitor docs |
| ActingProcessSHA256 | string | The SHA-256 hash of the acting process image file. | Azure Monitor docs |
| ActingProcessSHA512 | string | The SHA-512 hash of the acting process image file. | Azure Monitor docs |
| ActingProcessTokenElevation | string | A token indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the acting process. | Azure Monitor docs |
| action | string |  | DCR |
| action_s | string |  | DCR |
| ActorOriginalUserType | string | The user type as reported by the reporting device. | Azure Monitor docs |
| ActorScope | string | The scope, such as Azure AD tenant, in which ActorUserId and ActorUsername are defined. | Azure Monitor docs |
| ActorScopeId | string | The scope ID, such as Azure AD tenant ID, in which ActorUserId and ActorUsername are defined. | Azure Monitor docs |
| ActorSessionId | string | The unique ID of the sign-in session of the Actor. | Azure Monitor docs |
| ActorUserId | string | A machine-readable, alphanumeric, unique representation of the actor. | Azure Monitor docs |
| ActorUserIdType | string | The type of the ID stored in the ActorUserId field. | Azure Monitor docs |
| ActorUsername | string | The Actor's username, including domain information when available. | Azure Monitor docs |
| ActorUsernameType | string | The type of the Actor's username specified in ActionUsername field | Azure Monitor docs |
| ActorUserType | string | The type of the Actor. | Azure Monitor docs |
| AdditionalFields | dynamic | Additional information, represented using key and value pairs provided by the source which do not map to ASim. | Azure Monitor docs |
| alert_id | string |  | DCR |
| backend_timestamp | string |  | DCR |
| childproc_cmdline | string |  | DCR |
| childproc_guid | string |  | DCR |
| childproc_hash | string |  | DCR |
| childproc_name | string |  | DCR |
| childproc_pid | string |  | DCR |
| childproc_publisher | string |  | DCR |
| childproc_reputation | string |  | DCR |
| childproc_username | string |  | DCR |
| crossproc_action | string |  | DCR |
| crossproc_api | string |  | DCR |
| crossproc_guid | string |  | DCR |
| crossproc_hash | string |  | DCR |
| crossproc_name | string |  | DCR |
| crossproc_publisher | string |  | DCR |
| crossproc_reputation | string |  | DCR |
| crossproc_target | string |  | DCR |
| device_external_ip | string |  | DCR |
| device_group | string |  | DCR |
| device_id | string |  | DCR |
| device_name | string |  | DCR |
| device_os | string |  | DCR |
| device_timestamp | string |  | DCR |
| DvcAction | string | For reporting security systems, the action taken by the system. | Azure Monitor docs |
| DvcDescription | string | A descriptive text associated with the device. | Azure Monitor docs |
| DvcDomain | string | The domain of the device reporting the event. | Azure Monitor docs |
| DvcDomainType | string | The type of DvcDomain. Possible values include "Windows" and "FQDN". | Azure Monitor docs |
| DvcFQDN | string | The hostname of the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcHostname | string | The hostname of the device reporting the event. | Azure Monitor docs |
| DvcId | string | The unique ID of the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcIdType | string | The type of DvcId. | Azure Monitor docs |
| DvcInterface | string | The network interface on which data was captured. | Azure Monitor docs |
| DvcIpAddr | string | The IP Address of the device reporting the event. | Azure Monitor docs |
| DvcMacAddr | string | The MAC address of the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcOriginalAction | string | The original DvcAction as provided by the reporting device. | Azure Monitor docs |
| DvcOs | string | The operating system running on the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcOsVersion | string | The version of the operating system on the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcScope | string | The cloud platform scope the device belongs to. DvcScope map to a subscription ID on Azure and to an account ID on AWS. | Azure Monitor docs |
| DvcScopeId | string | The cloud platform scope ID the device belongs to. DvcScopeId map to a subscription ID on Azure and to an account ID on AWS. | Azure Monitor docs |
| DvcZone | string | The network on which the event occurred or which reported the event. | Azure Monitor docs |
| event_description | string |  | DCR |
| event_id | string |  | DCR |
| event_origin | string |  | DCR |
| EventCount | int | The number of events described by the record. | Azure Monitor docs |
| EventEndTime | datetime | The time in which the event ended. If the source supports aggregation and the record represents multiple events, the time that the last event was generated. If not provided by the source record, this field aliases the TimeGenerated field. | Azure Monitor docs |
| EventMessage | string | A general message or description. | Azure Monitor docs |
| EventOriginalResultDetails | string | The original result details provided by the source. | Azure Monitor docs |
| EventOriginalSeverity | string | The original severity as provided by the reporting device. | Azure Monitor docs |
| EventOriginalSubType | string | The original event subtype or ID, if provided by the source. | Azure Monitor docs |
| EventOriginalType | string | The original event type or ID, if provided by the source. | Azure Monitor docs |
| EventOriginalUid | string | A unique ID of the original record, if provided by the source. | Azure Monitor docs |
| EventOwner | string | The owner of the event, which is usually the department or subsidiary in which it was generated. | Azure Monitor docs |
| EventProduct | string | The product generating the event. | Azure Monitor docs |
| EventProductVersion | string | The version of the product generating the event. | Azure Monitor docs |
| EventReportUrl | string | A URL provided in the event for a resource that provides more information about the event. | Azure Monitor docs |
| EventResult | string | The outcome of the event, represented by one of the following values: Success, Partial, Failure, NA (Not Applicable). The value may not be provided directly by the sources, in which case it is derived from other event fields, for example, the EventResultDetails field. | Azure Monitor docs |
| EventResultDetails | string | Reason or details for the result reported in the EventResult field. | Azure Monitor docs |
| EventSchemaVersion | string | The version of the schema. | Azure Monitor docs |
| EventSeverity | string | The severity of the event. Valid values are: Informational, Low, Medium, or High. | Azure Monitor docs |
| EventStartTime | datetime | The time in which the event started. If the source supports aggregation and the record represents multiple events, the time that the first event was generated. If not provided by the source record, this field aliases the TimeGenerated field. | Azure Monitor docs |
| EventSubType | string | Describes a subdivision of the operation reported in the EventType field. | Azure Monitor docs |
| EventType | string | Describes the operation reported by the record | Azure Monitor docs |
| EventVendor | string | The vendor of the product generating the event. | Azure Monitor docs |
| fileless_scriptload_cmdline | string |  | DCR |
| fileless_scriptload_cmdline_length | string |  | DCR |
| fileless_scriptload_hash | string |  | DCR |
| filemod_hash | string |  | DCR |
| filemod_name | string |  | DCR |
| local_ip | string |  | DCR |
| local_port | string |  | DCR |
| netconn_application_protocol | string |  | DCR |
| netconn_bytes_received | string |  | DCR |
| netconn_bytes_sent | string |  | DCR |
| netconn_community_id | string |  | DCR |
| netconn_domain | string |  | DCR |
| netconn_first_packet_timestamp | string |  | DCR |
| netconn_inbound | string |  | DCR |
| netconn_ja3_local_fingerprint | string |  | DCR |
| netconn_ja3_local_fingerprint_fields | string |  | DCR |
| netconn_ja3_remote_fingerprint | string |  | DCR |
| netconn_ja3_remote_fingerprint_fields | string |  | DCR |
| netconn_last_packet_timestamp | string |  | DCR |
| netconn_protocol | string |  | DCR |
| netconn_proxy_domain | string |  | DCR |
| netconn_proxy_ip | string |  | DCR |
| netconn_proxy_port | string |  | DCR |
| netconn_remote_device_id | string |  | DCR |
| netconn_remote_device_name | string |  | DCR |
| netconn_request_headers | string |  | DCR |
| netconn_request_method | string |  | DCR |
| netconn_request_url | string |  | DCR |
| netconn_response_headers | string |  | DCR |
| netconn_response_status_code | string |  | DCR |
| netconn_server_name_indication | string |  | DCR |
| netconn_tls_certificate_issuer_name | string |  | DCR |
| netconn_tls_certificate_subject_name | string |  | DCR |
| netconn_tls_cipher | string |  | DCR |
| netconn_tls_version | string |  | DCR |
| org_key | string |  | DCR |
| parent_cmdline | string |  | DCR |
| parent_guid | string |  | DCR |
| parent_hash | string |  | DCR |
| parent_path | string |  | DCR |
| parent_pid | string |  | DCR |
| parent_reputation | string |  | DCR |
| ParentProcessCreationTime | datetime | The date and time when the parent process was started. | Azure Monitor docs |
| ParentProcessFileCompany | string | The company that created the parent process image file. | Azure Monitor docs |
| ParentProcessFileDescription | string | The description from the version information of the parent process image file. | Azure Monitor docs |
| ParentProcessFileProduct | string | The product name from the version information in the parent process image file. | Azure Monitor docs |
| ParentProcessFileVersion | string | The product version from the version information of the parent process image file. | Azure Monitor docs |
| ParentProcessGuid | string | A GUID of the parent process. | Azure Monitor docs |
| ParentProcessId | string | The process ID of the parent process. | Azure Monitor docs |
| ParentProcessIMPHASH | string | The Import Hash of all the library DLLs that are used by the parent process. | Azure Monitor docs |
| ParentProcessInjectedAddress | string | The memory address in which the responsible parent process is stored. | Azure Monitor docs |
| ParentProcessIntegrityLevel | string | Integrity Level for parent process. | Azure Monitor docs |
| ParentProcessIsHidden | bool | An indication of whether the parent process is in hidden mode. | Azure Monitor docs |
| ParentProcessMD5 | string | The MD5 hash of the parent process image file. | Azure Monitor docs |
| ParentProcessName | string | The name of the parent process. | Azure Monitor docs |
| ParentProcessSHA1 | string | The SHA-1 hash of the parent process image file. | Azure Monitor docs |
| ParentProcessSHA256 | string | The SHA-256 hash of the parent process image file. | Azure Monitor docs |
| ParentProcessSHA512 | string | The SHA-512 hash of the parent process image file. | Azure Monitor docs |
| ParentProcessTokenElevation | string | A token indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the parent process. | Azure Monitor docs |
| process_cmdline | string |  | DCR |
| process_duration | string |  | DCR |
| process_fork_pid | string |  | DCR |
| process_guid | string |  | DCR |
| process_hash | string |  | DCR |
| process_path | string |  | DCR |
| process_path_s | string |  | DCR |
| process_pid | string |  | DCR |
| process_pid_d | string |  | DCR |
| process_publisher | string |  | DCR |
| process_reputation | string |  | DCR |
| process_terminated | string |  | DCR |
| process_username | string |  | DCR |
| process_username_s | string |  | DCR |
| remote_ip | string |  | DCR |
| remote_port | string |  | DCR |
| RuleName | string | The name or ID of the rule by associated with the inspection results. | Azure Monitor docs |
| RuleNumber | int | The number of the rule associated with the inspection results. | Azure Monitor docs |
| schema | string |  | DCR |
| sensor_action | string |  | DCR |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics | Azure Monitor docs |
| target_cmdline | string |  | DCR |
| TargetOriginalUserType | string | The user type as reported by the reporting device. | Azure Monitor docs |
| TargetProcessCommandLine | string | The command line used to run the target process. | Azure Monitor docs |
| TargetProcessCreationTime | datetime | The date and time when the target process was started. | Azure Monitor docs |
| TargetProcessCurrentDirectory | string | The current directory in which the target process is executed. | Azure Monitor docs |
| TargetProcessFileCompany | string | The company that created the target process image file. | Azure Monitor docs |
| TargetProcessFileDescription | string | The description from the version information of the target process image file. | Azure Monitor docs |
| TargetProcessFileInternalName | string | The product internal file name from the version information of the target process image file. | Azure Monitor docs |
| TargetProcessFilename | string | The product file name from the version information of the target process image file. | Azure Monitor docs |
| TargetProcessFileOriginalName | string | The product original file name from the version information of the target process image file. | Azure Monitor docs |
| TargetProcessFileProduct | string | The product name from the version information in the target process image file. | Azure Monitor docs |
| TargetProcessFileSize | long | Size of the file in bytes that ran the process responsible for the event. | Azure Monitor docs |
| TargetProcessFileVersion | string | The product version from the version information of the target process image file. | Azure Monitor docs |
| TargetProcessGuid | string | A GUID of the target process. | Azure Monitor docs |
| TargetProcessId | string | The process ID of the target process. | Azure Monitor docs |
| TargetProcessIMPHASH | string | The Import Hash of all the library DLLs that are used by the target process. | Azure Monitor docs |
| TargetProcessInjectedAddress | string | The memory address in which the responsible target process is stored. | Azure Monitor docs |
| TargetProcessIntegrityLevel | string | Integrity Level for target process. | Azure Monitor docs |
| TargetProcessIsHidden | bool | An indication of whether the target process is in hidden mode. | Azure Monitor docs |
| TargetProcessMD5 | string | The MD5 hash of the target process image file. | Azure Monitor docs |
| TargetProcessName | string | The name of the target process. | Azure Monitor docs |
| TargetProcessSHA1 | string | The SHA-1 hash of the target process image file. | Azure Monitor docs |
| TargetProcessSHA256 | string | The SHA-256 hash of the target process image file. | Azure Monitor docs |
| TargetProcessSHA512 | string | The SHA-512 hash of the target process image file. | Azure Monitor docs |
| TargetProcessStatusCode | string | The exit code returned by the target process when terminated. | Azure Monitor docs |
| TargetProcessTokenElevation | string | A token indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the target process. | Azure Monitor docs |
| TargetScope | string | The scope, such as Azure AD tenant, in which TargetUserId and TargetUsername are defined. | Azure Monitor docs |
| TargetScopeId | string | The scope ID, such as Azure AD tenant ID, in which TargetUserId and TargetUsername are defined. | Azure Monitor docs |
| TargetUserId | string | A machine-readable, alphanumeric, unique representation of the actor. | Azure Monitor docs |
| TargetUserIdType | string | The type of the ID stored in the TargetUserId field. | Azure Monitor docs |
| TargetUsername | string | The Target actor's username, including domain information when available. | Azure Monitor docs |
| TargetUsernameType | string | The type of the Target actor's username specified in TargetUsername field | Azure Monitor docs |
| TargetUserSessionGuid | string | The unique guid of the sign-in session of the Target actor. | Azure Monitor docs |
| TargetUserSessionId | string | The unique ID of the sign-in session of the Target actor. | Azure Monitor docs |
| TargetUserType | string | The type of the Target actor. | Azure Monitor docs |
| TenantId | string | The Log Analytics workspace ID | Azure Monitor docs |
| ThreatCategory | string | The category of the threat or malware identified in activity. | Azure Monitor docs |
| ThreatConfidence | int | The confidence level of the threat identified, normalized to a value between 0 and a 100. | Azure Monitor docs |
| ThreatField | string | The field for which a threat was identified. | Azure Monitor docs |
| ThreatFirstReportedTime | datetime | The first time the IP address or domain were identified as a threat. | Azure Monitor docs |
| ThreatId | string | The ID of the threat or malware identified in the activity. | Azure Monitor docs |
| ThreatIsActive | bool | True ID the threat identified is considered an active threat. | Azure Monitor docs |
| ThreatLastReportedTime | datetime | The last time the IP address or domain were identified as a threat. | Azure Monitor docs |
| ThreatName | string | The name of the threat or malware identified in the activity. | Azure Monitor docs |
| ThreatOriginalConfidence | string | The original confidence level of the threat identified, as reported by the reporting device. | Azure Monitor docs |
| ThreatOriginalRiskLevel | string | The risk level as reported by the reporting device. | Azure Monitor docs |
| ThreatRiskLevel | int | The risk level associated with the identified threat. The level should be a number between 0 and 100. | Azure Monitor docs |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. | DCR, Azure Monitor docs |
| type | string | The name of the table | DCR, Azure Monitor docs |
| version | string |  | DCR |

## Solutions (3)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) |  |
| [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimProcessEventNative](../asim/asimprocesseventnative.md) | ProcessEvent | Native |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrikeReplicatorV2](../parsers/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/processeventnormalized`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

