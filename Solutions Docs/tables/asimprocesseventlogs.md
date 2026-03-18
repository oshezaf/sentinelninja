# ASimProcessEventLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ASimProcessEventLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimprocesseventlogs) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)
- [Resource Types](#resource-types)

## Schema (141 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimprocesseventlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActingProcessCommandLine | string | The command line used to run the acting process. |
| ActingProcessCreationTime | datetime | The date and time when the acting process was started. |
| ActingProcessFileCompany | string | The company that created the acting process image file. |
| ActingProcessFileDescription | string | The description embedded in the version information of the acting process image file. |
| ActingProcessFileInternalName | string | The product internal file name from the version information of the acting process image file. |
| ActingProcessFilename | string | The product file name from the version information of the acting process image file. |
| ActingProcessFileOriginalName | string | The product original file name from the version information of the acting process image file. |
| ActingProcessFileProduct | string | The product name from the version information in the acting process image file. |
| ActingProcessFileSize | long | The size of the file in bytes that ran the acting process. |
| ActingProcessFileVersion | string | The product version from the version information of the acting process image file. |
| ActingProcessGuid | string | A GUID of the acting process. |
| ActingProcessId | string | The process ID of the acting process. |
| ActingProcessIMPHASH | string | The Import Hash of all the library DLLs that are used by the acting process. |
| ActingProcessInjectedAddress | string | The memory address in which the responsible acting process is stored. |
| ActingProcessIntegrityLevel | string | Integrity Level for acting process. |
| ActingProcessIsHidden | bool | An indication of whether the acting process is in hidden mode. |
| ActingProcessMD5 | string | The MD5 hash of the acting process image file. |
| ActingProcessName | string | The name of the acting process. |
| ActingProcessSHA1 | string | The SHA-1 hash of the acting process image file. |
| ActingProcessSHA256 | string | The SHA-256 hash of the acting process image file. |
| ActingProcessSHA512 | string | The SHA-512 hash of the acting process image file. |
| ActingProcessTokenElevation | string | A token indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the acting process. |
| ActorOriginalUserType | string | The user type as reported by the reporting device. |
| ActorScope | string | The scope, such as Azure AD tenant, in which ActorUserId and ActorUsername are defined. |
| ActorScopeId | string | The scope ID, such as Azure AD tenant ID, in which ActorUserId and ActorUsername are defined. |
| ActorSessionId | string | The unique ID of the sign-in session of the Actor. |
| ActorUserId | string | A machine-readable, alphanumeric, unique representation of the actor. |
| ActorUserIdType | string | The type of the ID stored in the ActorUserId field. |
| ActorUsername | string | The Actor's username, including domain information when available. |
| ActorUsernameType | string | The type of the Actor's username specified in ActionUsername field |
| ActorUserType | string | The type of the Actor. |
| AdditionalFields | dynamic | Additional information, represented using key and value pairs provided by the source which do not map to ASim. |
| DvcAction | string | For reporting security systems, the action taken by the system. |
| DvcDescription | string | A descriptive text associated with the device. |
| DvcDomain | string | The domain of the device reporting the event. |
| DvcDomainType | string | The type of DvcDomain. Possible values include "Windows" and "FQDN". |
| DvcFQDN | string | The hostname of the device on which the event occurred or which reported the event. |
| DvcHostname | string | The hostname of the device reporting the event. |
| DvcId | string | The unique ID of the device on which the event occurred or which reported the event. |
| DvcIdType | string | The type of DvcId. |
| DvcInterface | string | The network interface on which data was captured. |
| DvcIpAddr | string | The IP Address of the device reporting the event. |
| DvcMacAddr | string | The MAC address of the device on which the event occurred or which reported the event. |
| DvcOriginalAction | string | The original DvcAction as provided by the reporting device. |
| DvcOs | string | The operating system running on the device on which the event occurred or which reported the event. |
| DvcOsVersion | string | The version of the operating system on the device on which the event occurred or which reported the event. |
| DvcScope | string | The cloud platform scope the device belongs to. DvcScope map to a subscription ID on Azure and to an account ID on AWS. |
| DvcScopeId | string | The cloud platform scope ID the device belongs to. DvcScopeId map to a subscription ID on Azure and to an account ID on AWS. |
| DvcZone | string | The network on which the event occurred or which reported the event. |
| EventCount | int | The number of events described by the record. |
| EventEndTime | datetime | The time in which the event ended. If the source supports aggregation and the record represents multiple events, the time that the last event was generated. If not provided by the source record, this field aliases the TimeGenerated field. |
| EventMessage | string | A general message or description. |
| EventOriginalResultDetails | string | The original result details provided by the source. |
| EventOriginalSeverity | string | The original severity as provided by the reporting device. |
| EventOriginalSubType | string | The original event subtype or ID, if provided by the source. |
| EventOriginalType | string | The original event type or ID, if provided by the source. |
| EventOriginalUid | string | A unique ID of the original record, if provided by the source. |
| EventOwner | string | The owner of the event, which is usually the department or subsidiary in which it was generated. |
| EventProduct | string | The product generating the event. |
| EventProductVersion | string | The version of the product generating the event. |
| EventReportUrl | string | A URL provided in the event for a resource that provides more information about the event. |
| EventResult | string | The outcome of the event, represented by one of the following values: Success, Partial, Failure, NA (Not Applicable). The value may not be provided directly by the sources, in which case it is derived from other event fields, for example, the EventResultDetails field. |
| EventResultDetails | string | Reason or details for the result reported in the EventResult field. |
| EventSchemaVersion | string | The version of the schema. |
| EventSeverity | string | The severity of the event. Valid values are: Informational, Low, Medium, or High. |
| EventStartTime | datetime | The time in which the event started. If the source supports aggregation and the record represents multiple events, the time that the first event was generated. If not provided by the source record, this field aliases the TimeGenerated field. |
| EventSubType | string | Describes a subdivision of the operation reported in the EventType field. |
| EventType | string | Describes the operation reported by the record |
| EventVendor | string | The vendor of the product generating the event. |
| ParentProcessCreationTime | datetime | The date and time when the parent process was started. |
| ParentProcessFileCompany | string | The company that created the parent process image file. |
| ParentProcessFileDescription | string | The description from the version information of the parent process image file. |
| ParentProcessFileProduct | string | The product name from the version information in the parent process image file. |
| ParentProcessFileVersion | string | The product version from the version information of the parent process image file. |
| ParentProcessGuid | string | A GUID of the parent process. |
| ParentProcessId | string | The process ID of the parent process. |
| ParentProcessIMPHASH | string | The Import Hash of all the library DLLs that are used by the parent process. |
| ParentProcessInjectedAddress | string | The memory address in which the responsible parent process is stored. |
| ParentProcessIntegrityLevel | string | Integrity Level for parent process. |
| ParentProcessIsHidden | bool | An indication of whether the parent process is in hidden mode. |
| ParentProcessMD5 | string | The MD5 hash of the parent process image file. |
| ParentProcessName | string | The name of the parent process. |
| ParentProcessSHA1 | string | The SHA-1 hash of the parent process image file. |
| ParentProcessSHA256 | string | The SHA-256 hash of the parent process image file. |
| ParentProcessSHA512 | string | The SHA-512 hash of the parent process image file. |
| ParentProcessTokenElevation | string | A token indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the parent process. |
| RuleName | string | The name or ID of the rule by associated with the inspection results. |
| RuleNumber | int | The number of the rule associated with the inspection results. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetOriginalUserType | string | The user type as reported by the reporting device. |
| TargetProcessCommandLine | string | The command line used to run the target process. |
| TargetProcessCreationTime | datetime | The date and time when the target process was started. |
| TargetProcessCurrentDirectory | string | The current directory in which the target process is executed. |
| TargetProcessFileCompany | string | The company that created the target process image file. |
| TargetProcessFileDescription | string | The description from the version information of the target process image file. |
| TargetProcessFileInternalName | string | The product internal file name from the version information of the target process image file. |
| TargetProcessFilename | string | The product file name from the version information of the target process image file. |
| TargetProcessFileOriginalName | string | The product original file name from the version information of the target process image file. |
| TargetProcessFileProduct | string | The product name from the version information in the target process image file. |
| TargetProcessFileSize | long | Size of the file in bytes that ran the process responsible for the event. |
| TargetProcessFileVersion | string | The product version from the version information of the target process image file. |
| TargetProcessGuid | string | A GUID of the target process. |
| TargetProcessId | string | The process ID of the target process. |
| TargetProcessIMPHASH | string | The Import Hash of all the library DLLs that are used by the target process. |
| TargetProcessInjectedAddress | string | The memory address in which the responsible target process is stored. |
| TargetProcessIntegrityLevel | string | Integrity Level for target process. |
| TargetProcessIsHidden | bool | An indication of whether the target process is in hidden mode. |
| TargetProcessMD5 | string | The MD5 hash of the target process image file. |
| TargetProcessName | string | The name of the target process. |
| TargetProcessSHA1 | string | The SHA-1 hash of the target process image file. |
| TargetProcessSHA256 | string | The SHA-256 hash of the target process image file. |
| TargetProcessSHA512 | string | The SHA-512 hash of the target process image file. |
| TargetProcessStatusCode | string | The exit code returned by the target process when terminated. |
| TargetProcessTokenElevation | string | A token indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the target process. |
| TargetScope | string | The scope, such as Azure AD tenant, in which TargetUserId and TargetUsername are defined. |
| TargetScopeId | string | The scope ID, such as Azure AD tenant ID, in which TargetUserId and TargetUsername are defined. |
| TargetUserId | string | A machine-readable, alphanumeric, unique representation of the actor. |
| TargetUserIdType | string | The type of the ID stored in the TargetUserId field. |
| TargetUsername | string | The Target actor's username, including domain information when available. |
| TargetUsernameType | string | The type of the Target actor's username specified in TargetUsername field |
| TargetUserSessionGuid | string | The unique guid of the sign-in session of the Target actor. |
| TargetUserSessionId | string | The unique ID of the sign-in session of the Target actor. |
| TargetUserType | string | The type of the Target actor. |
| TenantId | string | The Log Analytics workspace ID |
| ThreatCategory | string | The category of the threat or malware identified in activity. |
| ThreatConfidence | int | The confidence level of the threat identified, normalized to a value between 0 and a 100. |
| ThreatField | string | The field for which a threat was identified. |
| ThreatFirstReportedTime | datetime | The first time the IP address or domain were identified as a threat. |
| ThreatId | string | The ID of the threat or malware identified in the activity. |
| ThreatIsActive | bool | True ID the threat identified is considered an active threat. |
| ThreatLastReportedTime | datetime | The last time the IP address or domain were identified as a threat. |
| ThreatName | string | The name of the threat or malware identified in the activity. |
| ThreatOriginalConfidence | string | The original confidence level of the threat identified, as reported by the reporting device. |
| ThreatOriginalRiskLevel | string | The risk level as reported by the reporting device. |
| ThreatRiskLevel | int | The risk level associated with the identified threat. The level should be a number between 0 and 100. |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| Type | string | The name of the table |

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

| Workbook | Selection Criteria |
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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

