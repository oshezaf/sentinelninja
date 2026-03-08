# ASimAuthenticationEventLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ASimAuthenticationEventLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimauthenticationeventlogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (217 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimauthenticationeventlogs) · [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Carbon%20Black%20Cloud/Data%20Connectors/VMwareCarbonBlackCloud_ccp/CarbonBlack_DCR.json)

| Column Name | Type | Description | Source |
|:------------|:-----|:------------|:-------|
| _BilledSize | real | The record size in bytes | Azure Monitor docs |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account | Azure Monitor docs |
| _ResourceId | string | A unique identifier for the resource that the record is associated with | Azure Monitor docs |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with | Azure Monitor docs |
| ActingAppId | string | The ID of the application authorizing on behalf of the actor, including a process, browser, or service. | Azure Monitor docs |
| ActingAppName | string | The name of the application authorizing on behalf of the actor, including a process, browser, or service. | Azure Monitor docs |
| ActingAppType | string | The type of acting application. | Azure Monitor docs |
| ActingOriginalAppType | string | The acting application type as reported by the reporting device. | Azure Monitor docs |
| ActorOriginalUserType | string | The user type as reported by the reporting device. | Azure Monitor docs |
| ActorScope | string | The scope, such as Azure AD tenant, in which ActorUserId and ActorUsername are defined. | Azure Monitor docs |
| ActorScopeId | string | The scope ID, such as Azure AD tenant ID, in which ActorUserId and ActorUsername are defined. | Azure Monitor docs |
| ActorSessionId | string | The unique ID of the sign-in session of the Actor. | Azure Monitor docs |
| ActorUserId | string | A machine-readable, alphanumeric, unique representation of the actor. | Azure Monitor docs |
| ActorUserIdType | string | The type of the ID stored in the ActorUserId field. | Azure Monitor docs |
| ActorUsername | string | The Actor's username, including domain information when available. | Azure Monitor docs |
| ActorUsernameType | string | Specifies the type of the user name stored in the ActorUsername field. | Azure Monitor docs |
| ActorUserType | string | The type of the Actor. | Azure Monitor docs |
| AdditionalFields | dynamic | Additional information, represented using key/value pairs provided by the source which do not map to ASim. | Azure Monitor docs |
| auth_cleartext_credentials_logon | string |  | DCR |
| auth_daemon_logon | string |  | DCR |
| auth_domain_name | string |  | DCR |
| auth_elevated_token_logon | string |  | DCR |
| auth_event_action | string |  | DCR |
| auth_failed_logon_count | string |  | DCR |
| auth_failure_status | string |  | DCR |
| auth_failure_sub_status | string |  | DCR |
| auth_impersonation_level | string |  | DCR |
| auth_interactive_logon | string |  | DCR |
| auth_key_length | string |  | DCR |
| auth_logon_id | string |  | DCR |
| auth_logon_type | string |  | DCR |
| auth_package | string |  | DCR |
| auth_privileges | string |  | DCR |
| auth_remote_location | string |  | DCR |
| auth_remote_logon | string |  | DCR |
| auth_remote_port | string |  | DCR |
| auth_restricted_admin_logon | string |  | DCR |
| auth_server | string |  | DCR |
| auth_user_id | string |  | DCR |
| auth_username | string |  | DCR |
| auth_virtual_account_logon | string |  | DCR |
| backend_timestamp | string |  | DCR |
| device_external_ip | string |  | DCR |
| device_id | string |  | DCR |
| device_installed_by | string |  | DCR |
| device_internal_ip | string |  | DCR |
| device_location | string |  | DCR |
| device_name | string |  | DCR |
| device_os | string |  | DCR |
| device_os_version | string |  | DCR |
| device_policy | string |  | DCR |
| device_policy_id | string |  | DCR |
| device_target_priority | string |  | DCR |
| device_timestamp | string |  | DCR |
| DvcAction | string | For reporting security systems, the action taken by the system. | Azure Monitor docs |
| DvcDescription | string | A descriptive text associated with the device. | Azure Monitor docs |
| DvcDomain | string | The domain of the device reporting the event. | Azure Monitor docs |
| DvcDomainType | string | The type of DvcDomain. | Azure Monitor docs |
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
| event_id | string |  | DCR |
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
| EventResultDetails | string | The details associated with the event result. This field is typically populated when the result is a failure. | Azure Monitor docs |
| EventSchemaVersion | string | The version of the schema. | Azure Monitor docs |
| EventSeverity | string | The severity of the event. Valid values are: Informational, Low, Medium, or High. | Azure Monitor docs |
| EventStartTime | datetime | The time in which the event started. If the source supports aggregation and the record represents multiple events, the time that the first event was generated. If not provided by the source record, this field aliases the TimeGenerated field. | Azure Monitor docs |
| EventSubType | string | The sign-in type for example System, Interactive, RemoteInteractive, Service, RemoteService, Remote or AssumeRole. | Azure Monitor docs |
| EventType | string | Describes the operation reported by the record | Azure Monitor docs |
| EventVendor | string | The vendor of the product generating the event. | Azure Monitor docs |
| filemod_count | string |  | DCR |
| HttpUserAgent | string | When authentication is performed over HTTP or HTTPS, this field's value is the user_agent HTTP header provided by the acting application when performing the authentication. | Azure Monitor docs |
| LogonMethod | string | The method used to perform authentication. | Azure Monitor docs |
| LogonProtocol | string | The protocol used to perform authentication. | Azure Monitor docs |
| modload_count | string |  | DCR |
| netconn_count | string |  | DCR |
| org_key | string |  | DCR |
| parent_cmdline | string |  | DCR |
| parent_cmdline_length | string |  | DCR |
| parent_effective_reputation | string |  | DCR |
| parent_effective_reputation_source | string |  | DCR |
| parent_guid | string |  | DCR |
| parent_hash | string |  | DCR |
| parent_issuer | string |  | DCR |
| parent_name | string |  | DCR |
| parent_pid | string |  | DCR |
| parent_product_name | string |  | DCR |
| parent_publisher | string |  | DCR |
| parent_reputation | string |  | DCR |
| parent_username | string |  | DCR |
| process_cmdline | string |  | DCR |
| process_cmdline_length | string |  | DCR |
| process_company_name | string |  | DCR |
| process_container_pid | string |  | DCR |
| process_duration | string |  | DCR |
| process_effective_reputation | string |  | DCR |
| process_effective_reputation_source | string |  | DCR |
| process_elevated | string |  | DCR |
| process_end_time | string |  | DCR |
| process_file_description | string |  | DCR |
| process_guid | string |  | DCR |
| process_hash | string |  | DCR |
| process_integrity_level | string |  | DCR |
| process_internal_name | string |  | DCR |
| process_issuer | string |  | DCR |
| process_name | string |  | DCR |
| process_original_filename | string |  | DCR |
| process_pid | string |  | DCR |
| process_privileges | string |  | DCR |
| process_product_name | string |  | DCR |
| process_product_version | string |  | DCR |
| process_publisher | string |  | DCR |
| process_reputation | string |  | DCR |
| process_sha256 | string |  | DCR |
| process_start_time | string |  | DCR |
| process_username | string |  | DCR |
| regmod_count | string |  | DCR |
| RuleName | string | The name or ID of the rule associated with the inspection results. | Azure Monitor docs |
| RuleNumber | int | The number of the rule associated with the inspection results. | Azure Monitor docs |
| scriptload_count | string |  | DCR |
| sensor_action | string |  | DCR |
| sensor_version | string |  | DCR |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics | Azure Monitor docs |
| SrcDescription | string | A descriptive text associated with the source device. | Azure Monitor docs |
| SrcDeviceType | string | The type of the source device. | Azure Monitor docs |
| SrcDomain | string | The domain of the source device. | Azure Monitor docs |
| SrcDomainType | string | The type of SrcDomain. | Azure Monitor docs |
| SrcDvcId | string | The ID of the source device. | Azure Monitor docs |
| SrcDvcIdType | string | The type of SrcDvcId. | Azure Monitor docs |
| SrcDvcOs | string | The OS of the source device. | Azure Monitor docs |
| SrcDvcScope | string | The cloud platform scope the source device belongs to. SrcDvcScope map to a subscription ID on Azure and to an account ID on AWS. | Azure Monitor docs |
| SrcDvcScopeId | string | The cloud platform scope ID the source device belongs to. SrcDvcScopeId map to a subscription ID on Azure and to an account ID on AWS. | Azure Monitor docs |
| SrcFQDN | string | The source device hostname, including domain information when available. | Azure Monitor docs |
| SrcGeoCity | string | The city associated with the source IP address. | Azure Monitor docs |
| SrcGeoCountry | string | The country associated with the source IP address. | Azure Monitor docs |
| SrcGeoLatitude | real | The latitude of the geographical coordinate associated with the source IP address. | Azure Monitor docs |
| SrcGeoLongitude | real | The longitude of the geographical coordinate associated with the source IP address. | Azure Monitor docs |
| SrcGeoRegion | string | The region within a country associated with the source IP address. | Azure Monitor docs |
| SrcHostname | string | The source device hostname, excluding domain information. | Azure Monitor docs |
| SrcIpAddr | string | The IP address of the source device. | Azure Monitor docs |
| SrcIsp | string | The Internet Service Provider (ISP) used by the source device to connect to the internet. | Azure Monitor docs |
| SrcOriginalRiskLevel | string | The risk level associaeted with the identified Source as reported by the reporting device. | Azure Monitor docs |
| SrcPortNumber | int | The IP port from which the connection originated. | Azure Monitor docs |
| SrcRiskLevel | int | The risk level associated with the identified Source. | Azure Monitor docs |
| TargetAppId | string | The ID of the application to which the authorization is required, often assigned by the reporting device. | Azure Monitor docs |
| TargetAppName | string | The name of the application to which the authorization is required, including a service, a URL, or a SaaS application. | Azure Monitor docs |
| TargetAppType | string | The type of the application authorizing on behalf of the Actor. | Azure Monitor docs |
| TargetDescription | string | A descriptive text associated with the target device. | Azure Monitor docs |
| TargetDeviceType | string | The type of the target device. | Azure Monitor docs |
| TargetDomain | string | The domain of the target device. | Azure Monitor docs |
| TargetDomainType | string | The type of TargetDomain. | Azure Monitor docs |
| TargetDvcId | string | The ID of the target device. | Azure Monitor docs |
| TargetDvcIdType | string | The type of TargetDvcId. | Azure Monitor docs |
| TargetDvcOs | string | The OS of the target device. | Azure Monitor docs |
| TargetDvcScope | string | The cloud platform scope the target device belongs to. TargetDvcScope map to a subscription ID on Azure and to an account ID on AWS. | Azure Monitor docs |
| TargetDvcScopeId | string | The cloud platform scope ID the target device belongs to. TargetDvcScopeId map to a subscription ID on Azure and to an account ID on AWS. | Azure Monitor docs |
| TargetFQDN | string | The target device hostname, including domain information when available. | Azure Monitor docs |
| TargetGeoCity | string | The city associated with the target IP address. | Azure Monitor docs |
| TargetGeoCountry | string | The country associated with the target IP address. | Azure Monitor docs |
| TargetGeoLatitude | real | The latitude of the geographical coordinate associated with the target IP address. | Azure Monitor docs |
| TargetGeoLongitude | real | The longitude of the geographical coordinate associated with the target IP address. | Azure Monitor docs |
| TargetGeoRegion | string | The region within a country associated with the target IP address. | Azure Monitor docs |
| TargetHostname | string | The target device hostname, excluding domain information. | Azure Monitor docs |
| TargetIpAddr | string | The IP address of the target device. | Azure Monitor docs |
| TargetOriginalAppType | string | The target application type as reported by the reporting device. | Azure Monitor docs |
| TargetOriginalRiskLevel | string | The risk level associated with the target, as reported by the reporting device. | Azure Monitor docs |
| TargetOriginalUserType | string | The user type as reported by the reporting device. | Azure Monitor docs |
| TargetPortNumber | int | The port of the target device. | Azure Monitor docs |
| TargetRiskLevel | int | The risk level associated with the target. | Azure Monitor docs |
| TargetSessionId | string | The unique ID of the sign-in session of the Target actor. | Azure Monitor docs |
| TargetUrl | string | A URL associated with the target application. | Azure Monitor docs |
| TargetUserId | string | A machine-readable, alphanumeric, unique representation of the actor. | Azure Monitor docs |
| TargetUserIdType | string | The type of the ID stored in the TargetUserId field. | Azure Monitor docs |
| TargetUsername | string | The Target actor's username, including domain information when available. | Azure Monitor docs |
| TargetUsernameType | string | The type of the Target actor's username specified in TargetUsername field | Azure Monitor docs |
| TargetUserScope | string | The scope, such as Azure AD tenant, in which TargetUserId and TargetUsername are defined. | Azure Monitor docs |
| TargetUserScopeId | string | The scope ID, such as Azure AD tenant ID, in which TargetUserId and TargetUsername are defined. | Azure Monitor docs |
| TargetUserType | string | The type of the Target actor. | Azure Monitor docs |
| TenantId | string | The Log Analytics workspace ID | Azure Monitor docs |
| ThreatCategory | string | The category of the threat or malware identified in audit activity. | Azure Monitor docs |
| ThreatConfidence | int | The confidence level of the threat identified, normalized to a value between 0 and a 100. | Azure Monitor docs |
| ThreatField | string | The field for which a threat was identified. | Azure Monitor docs |
| ThreatFirstReportedTime | datetime | The first time the IP address or domain were identified as a threat. | Azure Monitor docs |
| ThreatId | string | The ID of the threat or malware identified in the audit activity. | Azure Monitor docs |
| ThreatIpAddr | string | An IP address for which a threat was identified. | Azure Monitor docs |
| ThreatIsActive | bool | True if the threat identified is considered an active threat. | Azure Monitor docs |
| ThreatLastReportedTime | datetime | The last time the IP address or domain were identified as a threat. | Azure Monitor docs |
| ThreatName | string | The name of the threat or malware identified in the audit activity. | Azure Monitor docs |
| ThreatOriginalConfidence | string | The original confidence level of the threat identified, as reported by the reporting device. | Azure Monitor docs |
| ThreatOriginalRiskLevel | string | The risk level as reported by the reporting device. | Azure Monitor docs |
| ThreatRiskLevel | int | The risk level associated with the identified threat. The level should be a number between 0 and 100. | Azure Monitor docs |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. | Azure Monitor docs |
| type | string | The name of the table | DCR, Azure Monitor docs |
| version | string |  | DCR |
| windows_event_id | string |  | DCR |

## Solutions (4)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) |  |
| [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationNative](../asim/asimauthenticationnative.md) | Authentication | Native |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrikeReplicatorV2](../parsers/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/authenticationevent`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

