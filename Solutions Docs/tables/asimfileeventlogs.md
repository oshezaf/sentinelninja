# ASimFileEventLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ASimFileEventLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimfileeventlogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (219 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimfileeventlogs) · [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Carbon%20Black%20Cloud/Data%20Connectors/VMwareCarbonBlackCloud_ccp/CarbonBlack_DCR.json)

| Column Name | Type | Description | Source |
|:------------|:-----|:------------|:-------|
| _BilledSize | real | The record size in bytes | Azure Monitor docs |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account | Azure Monitor docs |
| _ResourceId | string | A unique identifier for the resource that the record is associated with | Azure Monitor docs |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with | Azure Monitor docs |
| ActingProcessCommandLine | string | The command line used to run the acting process. | Azure Monitor docs |
| ActingProcessGuid | string | A generated unique identifier (GUID) of the acting process. | Azure Monitor docs |
| ActingProcessId | string | The process ID (PID) of the acting process. | Azure Monitor docs |
| ActingProcessName | string | The name of the acting process. | Azure Monitor docs |
| action | string |  | DCR |
| action_s | string |  | DCR |
| ActorOriginalUserType | string | The original actor user type as provided by the reporting device. | Azure Monitor docs |
| ActorScope | string | The scope, such as Azure AD tenant, in which ActorUserId and ActorUsername are defined. | Azure Monitor docs |
| ActorScopeId | string | The scope ID, such as Azure AD Directory ID, in which ActorUserId and ActorUsername are defined. | Azure Monitor docs |
| ActorSessionId | string | The unique ID of the login session of the Actor. | Azure Monitor docs |
| ActorUserAadId | string | The Azure Active Directory ID of the actor. | Azure Monitor docs |
| ActorUserId | string | A machine-readable, alphanumeric, unique representation of the actor. | Azure Monitor docs |
| ActorUserIdType | string | The type of the ID stored in the ActorUserId field. | Azure Monitor docs |
| ActorUsername | string | The Actor username, including domain information when available. | Azure Monitor docs |
| ActorUsernameType | string | Specifies the type of the user name stored in the ActorUsername field. | Azure Monitor docs |
| ActorUserSid | string | The Windows user ID (SIDs) of the actor. | Azure Monitor docs |
| ActorUserType | string | The type of actor. | Azure Monitor docs |
| AdditionalFields | dynamic | Additional information, represented using key/value pairs provided by the source which do not map to ASim. | Azure Monitor docs |
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
| DvcAction | string | The action taken on the web session. | Azure Monitor docs |
| DvcDescription | string | A descriptive text associated with the device. | Azure Monitor docs |
| DvcDomain | string | The domain of the device reporting the event. | Azure Monitor docs |
| DvcDomainType | string | The type of DvcDomain. Valid values include 'Windows' and 'FQDN'. | Azure Monitor docs |
| DvcFQDN | string | The hostname of the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcHostname | string | The hostname of the device reporting the event. | Azure Monitor docs |
| DvcId | string | The unique ID of the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcIdType | string | The type of DvcId. | Azure Monitor docs |
| DvcInterface | string | The original DvcAction as provided by the reporting device. | Azure Monitor docs |
| DvcIpAddr | string | The IP address of the device reporting the event. | Azure Monitor docs |
| DvcMacAddr | string | The MAC address of the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcOriginalAction | string | The original DvcAction as provided by the reporting device. | Azure Monitor docs |
| DvcOs | string | The operating system running on the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcOsVersion | string | The version of the operating system on the device on which the event occurred or which reported the event. | Azure Monitor docs |
| DvcScope | string | The cloud platform scope the device belongs to. DvcScope map to a subscription name on Azure and to an account ID on AWS. | Azure Monitor docs |
| DvcScopeId | string | The cloud platform scope ID the device belongs to. DvcScopeId map to a subscription ID on Azure and to an account ID on AWS. | Azure Monitor docs |
| DvcZone | string | The network on which the event occurred or which reported the event, depending on the schema. | Azure Monitor docs |
| event_description | string |  | DCR |
| event_id | string |  | DCR |
| event_origin | string |  | DCR |
| EventCount | int | This value is used when the source supports aggregation, and a single record may represent multiple events. | Azure Monitor docs |
| EventEndTime | datetime | The time in which the event ended. If the source supports aggregation and the record represents multiple events, the time that the last event was generated. If not provided by the source record, this field aliases the TimeGenerated field. | Azure Monitor docs |
| EventMessage | string | A general message or description. | Azure Monitor docs |
| EventOriginalResultDetails | string | The original result details provided by the source. This value is used to derive EventResultDetails, which should have only one of the values documented for each schema. | Azure Monitor docs |
| EventOriginalSeverity | string | The original severity as provided by the reporting device. This value is used to derive EventSeverity. | Azure Monitor docs |
| EventOriginalSubType | string | The original event subtype or ID, if provided by the source. For example, this field will be used to store the original Windows logon type. This value is used to derive EventSubType, which should have only one of the values documented for each schema. | Azure Monitor docs |
| EventOriginalType | string | The original event type or ID, if provided by the source. | Azure Monitor docs |
| EventOriginalUid | string | A unique ID of the original record, if provided by the source. | Azure Monitor docs |
| EventOwner | string | The owner of the event, which is usually the department or subsidiary in which it was generated. | Azure Monitor docs |
| EventProduct | string | The product generating the event. | Azure Monitor docs |
| EventProductVersion | string | The version of the product generating the event. | Azure Monitor docs |
| EventReportUrl | string | A URL provided in the event for a resource that provides more information about the event. | Azure Monitor docs |
| EventResult | string | The outcome of the event, represented by one of the following values: Success, Partial, Failure, NA (Not Applicable). The value may not be provided directly by the sources, in which case it is derived from other event fields, for example, the EventResultDetails field. | Azure Monitor docs |
| EventResultDetails | string | The HTTP status code. | Azure Monitor docs |
| EventSchema | string | The schema the event is normalized to. Each schema documents its schema name. | Azure Monitor docs |
| EventSchemaVersion | string | The version of the schema. | Azure Monitor docs |
| EventSeverity | string | The severity of the event. Valid values are: Informational, Low, Medium, or High. | Azure Monitor docs |
| EventStartTime | datetime | The time in which the event started. If the source supports aggregation and the record represents multiple events, the time that the first event was generated. If not provided by the source record, this field aliases the TimeGenerated field. | Azure Monitor docs |
| EventSubType | string | Additional description of the event type, if applicable. | Azure Monitor docs |
| EventType | string | The operation reported by the record. | Azure Monitor docs |
| EventVendor | string | The vendor of the product generating the event. | Azure Monitor docs |
| fileless_scriptload_cmdline | string |  | DCR |
| fileless_scriptload_cmdline_length | string |  | DCR |
| fileless_scriptload_hash | string |  | DCR |
| filemod_hash | string |  | DCR |
| filemod_name | string |  | DCR |
| HashType | string | The type of hash stored in the Hash alias field. | Azure Monitor docs |
| HttpUserAgent | string | When the operation is initiated using HTTP or HTTPS, the HTTP user agent header. | Azure Monitor docs |
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
| NetworkApplicationProtocol | string | When the operation is initiated by a remote system, the application layer protocol used by the connection or session. | Azure Monitor docs |
| org_key | string |  | DCR |
| parent_cmdline | string |  | DCR |
| parent_guid | string |  | DCR |
| parent_hash | string |  | DCR |
| parent_path | string |  | DCR |
| parent_pid | string |  | DCR |
| parent_reputation | string |  | DCR |
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
| SrcDescription | string | A descriptive text associated with the device. | Azure Monitor docs |
| SrcDeviceType | string | The type of the source device. | Azure Monitor docs |
| SrcDomain | string | The domain of the source device. | Azure Monitor docs |
| SrcDomainType | string | The type of SrcDomain. | Azure Monitor docs |
| SrcDvcId | string | The ID of the source device. | Azure Monitor docs |
| SrcDvcIdType | string | The type of SrcDvcId. | Azure Monitor docs |
| SrcDvcScope | string | The cloud platform scope the device belongs to. | Azure Monitor docs |
| SrcDvcScopeId | string | The cloud platform scope ID the device belongs to. | Azure Monitor docs |
| SrcFileCreationTime | datetime | The time at which the source file was created. | Azure Monitor docs |
| SrcFileDirectory | string | The source file folder or location. | Azure Monitor docs |
| SrcFileExtension | string | The source file extension. | Azure Monitor docs |
| SrcFileMD5 | string | The MD5 hash of the source file. | Azure Monitor docs |
| SrcFileMimeType | string | The Mime or Media type of the source file. | Azure Monitor docs |
| SrcFileName | string | The name of the source file, without a path or a location, but with an extension if relevant. | Azure Monitor docs |
| SrcFilePath | string | The full, normalized path of the source file, including the folder or location, the file name, and the extension. | Azure Monitor docs |
| SrcFilePathType | string | The type of SrcFilePath. | Azure Monitor docs |
| SrcFileSHA1 | string | The SHA-1 hash of the source file. | Azure Monitor docs |
| SrcFileSHA256 | string | The SHA-256 hash of the source file. | Azure Monitor docs |
| SrcFileSHA512 | string | The SHA-512 hash of the source file. | Azure Monitor docs |
| SrcFileSize | long | The size of the source file in bytes. | Azure Monitor docs |
| SrcFQDN | string | The source device hostname, including domain information when available. | Azure Monitor docs |
| SrcGeoCity | string | The city associated with the source IP address. | Azure Monitor docs |
| SrcGeoCountry | string | The country associated with the source IP address. | Azure Monitor docs |
| SrcGeoLatitude | real | The latitude of the geographical coordinate associated with the source IP address. | Azure Monitor docs |
| SrcGeoLongitude | real | The longitude of the geographical coordinate associated with the source IP address. | Azure Monitor docs |
| SrcGeoRegion | string | The region within a country associated with the source IP address. | Azure Monitor docs |
| SrcHostname | string | The source device hostname, excluding domain information. If no device name is available, store the relevant IP address in this field. | Azure Monitor docs |
| SrcIpAddr | string | When the operation is initiated by a remote system, the IP address of this system. | Azure Monitor docs |
| SrcMacAddr | string | The MAC address of the source device. | Azure Monitor docs |
| SrcOriginalRiskLevel | string | The risk level associated with the source. As reported by the reporting device or enriched. | Azure Monitor docs |
| SrcPortNumber | int | When the operation is initiated by a remote system, the port number from which the connection was initiated. | Azure Monitor docs |
| SrcRiskLevel | int | The risk level associated with the source. | Azure Monitor docs |
| target_cmdline | string |  | DCR |
| TargetAppId | string | The ID of the destination application, as reported by the reporting device. | Azure Monitor docs |
| TargetAppName | string | The name of the destination application. | Azure Monitor docs |
| TargetAppType | string | The type of the destination application. | Azure Monitor docs |
| TargetFileCreationTime | datetime | The time at which the target file was created. | Azure Monitor docs |
| TargetFileDirectory | string | The target file folder or location. | Azure Monitor docs |
| TargetFileExtension | string | The target file extension. | Azure Monitor docs |
| TargetFileMD5 | string | The MD5 hash of the target file. | Azure Monitor docs |
| TargetFileMimeType | string | The Mime or Media type of the target file. | Azure Monitor docs |
| TargetFileName | string | The name of the target file, without a path or a location, but with an extension if relevant. | Azure Monitor docs |
| TargetFilePath | string | The full, normalized path of the target file, including the folder or location, the file name, and the extension. | Azure Monitor docs |
| TargetFilePathType | string | The type of TargetFilePath. | Azure Monitor docs |
| TargetFileSHA1 | string | The SHA-1 hash of the target file. | Azure Monitor docs |
| TargetFileSHA256 | string | The SHA-256 hash of the target file. | Azure Monitor docs |
| TargetFileSHA512 | string | The SHA-512 hash of the source file. | Azure Monitor docs |
| TargetFileSize | long | The size of the target file in bytes. | Azure Monitor docs |
| TargetOriginalAppType | string | The target application type as reported by the reporting device. | Azure Monitor docs |
| TargetUrl | string | When the operation is initiated using HTTP or HTTPS, the URL used. | Azure Monitor docs |
| TenantId | string | The Log Analytics workspace ID | Azure Monitor docs |
| ThreatCategory | string | The category of the threat or malware identified in the file activity. | Azure Monitor docs |
| ThreatConfidence | int | The confidence level of the threat identified, normalized to a value between 0 and a 100. | Azure Monitor docs |
| ThreatField | string | The field for which a threat was identified. The value is either SrcFilePath or DstFilePath. | Azure Monitor docs |
| ThreatFilePath | string | A file path for which a threat was identified. The field ThreatField contains the name of the field ThreatFilePath represents. | Azure Monitor docs |
| ThreatFirstReportedTime | datetime | The first time the IP address or domain were identified as a threat. | Azure Monitor docs |
| ThreatId | string | The ID of the threat or malware identified in the file activity. | Azure Monitor docs |
| ThreatIsActive | bool | True ID the threat identified is considered an active threat. | Azure Monitor docs |
| ThreatLastReportedTime | datetime | The last time the IP address or domain were identified as a threat. | Azure Monitor docs |
| ThreatName | string | The name of the threat or malware identified in the file activity. | Azure Monitor docs |
| ThreatOriginalConfidence | string | The original confidence level of the threat identified, as reported by the reporting device. | Azure Monitor docs |
| ThreatOriginalRiskLevel | string | The risk level as reported by the reporting device. | Azure Monitor docs |
| ThreatRiskLevel | int | The risk level associated with the identified threat. The level should be a number between 0 and 100. | Azure Monitor docs |
| TimeGenerated | datetime | The timestamp reflecting the time in which the event was generated. | DCR, Azure Monitor docs |
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
| [ASimFileEventNative](../asim/asimfileeventnative.md) | FileEvent | Native |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrikeReplicatorV2](../parsers/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/asimtables`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

