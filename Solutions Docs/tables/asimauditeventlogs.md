# ASimAuditEventLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ASimAuditEventLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimauditeventlogs) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (128 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimauditeventlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActingAppId | string | The ID of the application that initiated the activity reported, including a process, browser, or service. |
| ActingAppName | string | The name of the application that initiated the activity reported, including a service, a URL, or a SaaS application. |
| ActingAppType | string | The type of acting application. |
| ActingOriginalAppType | string | The acting application type as reported by the reporting device. |
| ActorOriginalUserType | string | The user type as reported by the reporting device. |
| ActorScope | string | The scope, such as Azure AD tenant, in which ActorUserId and ActorUsername are defined. |
| ActorScopeId | string | The scope ID, such as Azure AD tenant ID, in which ActorUserId and ActorUsername are defined. |
| ActorSessionId | string | The unique ID of the sign-in session of the Actor. |
| ActorUserAadId | string | The Azure Active Directory ID of the actor. |
| ActorUserId | string | A machine-readable, alphanumeric, unique representation of the actor. |
| ActorUserIdType | string | The type of the ID stored in the ActorUserId field. |
| ActorUsername | string | The Actor's username, including domain information when available. |
| ActorUsernameType | string | The type of the Actor's username specified in ActionUsername field |
| ActorUserSid | string | The Windows user ID (SIDs) of the actor. |
| ActorUserType | string | The type of the Actor. |
| AdditionalFields | dynamic | Additional information, represented using key/value pairs provided by the source which do not map to ASim. |
| DvcAction | string | For reporting security systems, the action taken by the system. |
| DvcDescription | string | A descriptive text associated with the device. |
| DvcDomain | string | The domain of the device reporting the event. |
| DvcDomainType | string | The type of DvcDomain. |
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
| EventEndTime | datetime | The time (UTC) in which the event ended. If the source supports aggregation and the record represents multiple events, the time that the last event was generated. If not provided by the source record, this field aliases the TimeGenerated field. |
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
| EventStartTime | datetime | The time (UTC) in which the event started. If the source supports aggregation and the record represents multiple events, the time that the first event was generated. If not provided by the source record, this field aliases the TimeGenerated field. |
| EventSubType | string | Describes a subdivision of the operation reported in the EventType field. |
| EventType | string | Describes the operation reported by the record |
| EventVendor | string | The vendor of the product generating the event. |
| HttpUserAgent | string | When authentication is performed over HTTP or HTTPS, this field's value is the user_agent HTTP header provided by the acting application when performing the authentication. |
| NewValue | string | The new value of Object after the operation was performed. |
| Object | string | The name of the object on which the operation identified by EventType is performed. |
| ObjectId | string | The name of the object on which the operation identified by EventType is performed. |
| ObjectType | string | The type of Object. |
| OldValue | string | The old value of Object prior to the operation. |
| Operation | string | The operation audited as reported by the reporting device. |
| OriginalObjectType | string | The object type as reported by the reporting device. |
| RuleName | string | The name or ID of the rule associated with the inspection results. |
| RuleNumber | int | The number of the rule associated with the inspection results. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcDescription | string | A descriptive text associated with the source device. |
| SrcDeviceType | string | The type of the source device. |
| SrcDomain | string | The domain of the source device. |
| SrcDomainType | string | The type of SrcDomain. |
| SrcDvcId | string | The ID of the source device. |
| SrcDvcIdType | string | The type of SrcDvcId. |
| SrcDvcScope | string | The cloud platform scope the source device belongs to. SrcDvcScope map to a subscription ID on Azure and to an account ID on AWS. |
| SrcDvcScopeId | string | The cloud platform scope ID the source device belongs to. SrcDvcScopeId map to a subscription ID on Azure and to an account ID on AWS. |
| SrcFQDN | string | The source device hostname, including domain information when available. |
| SrcGeoCity | string | The city associated with the source IP address. |
| SrcGeoCountry | string | The country associated with the source IP address. |
| SrcGeoLatitude | real | The latitude of the geographical coordinate associated with the source IP address. |
| SrcGeoLongitude | real | The longitude of the geographical coordinate associated with the source IP address. |
| SrcGeoRegion | string | The region within a country associated with the source IP address. |
| SrcHostname | string | The source device hostname, excluding domain information. |
| SrcIpAddr | string | The Source IP address from which the connection or session originated. |
| SrcOriginalRiskLevel | string | The risk level associaeted with the identified Source as reported by the reporting device. |
| SrcPortNumber | int | The Source IP port from which the connection originated. |
| SrcRiskLevel | int | The risk level associated with the identified Source. |
| TargetAppId | string | The ID of the application to which the event applies, including a process, browser, or service. |
| TargetAppName | string | The name of the application to which event applies, including a service, a URL, or a SaaS application. |
| TargetAppType | string | The type of the application authorizing on behalf of the Actor. |
| TargetDescription | string | A descriptive text associated with the target device. |
| TargetDeviceType | string | The type of the target device. |
| TargetDomain | string | The domain of the target device. |
| TargetDomainType | string | The type of TargetDomain. |
| TargetDvcId | string | The ID of the target device. |
| TargetDvcIdType | string | The type of TargetDvcId. |
| TargetDvcOs | string | The OS of the target device. |
| TargetDvcScope | string | The cloud platform scope the target device belongs to. TargetDvcScope map to a subscription ID on Azure and to an account ID on AWS. |
| TargetDvcScopeId | string | The cloud platform scope ID the target device belongs to. TargetDvcScopeId map to a subscription ID on Azure and to an account ID on AWS. |
| TargetFQDN | string | The target device hostname, including domain information when available. |
| TargetGeoCity | string | The city associated with the target IP address. |
| TargetGeoCountry | string | The country associated with the target IP address. |
| TargetGeoLatitude | real | The latitude of the geographical coordinate associated with the target IP address. |
| TargetGeoLongitude | real | The longitude of the geographical coordinate associated with the target IP address. |
| TargetGeoRegion | string | The region within a country associated with the target IP address. |
| TargetHostname | string | The target device hostname, excluding domain information. |
| TargetIpAddr | string | The Target IP address from which the connection or session originated. |
| TargetOriginalAppType | string | The target application type as reported by the reporting device. |
| TargetOriginalRiskLevel | string | The risk level associated with the target, as reported by the reporting device. |
| TargetPortNumber | int | The Target IP port from which the connection originated. |
| TargetRiskLevel | int | The risk level associated with the target. |
| TargetUrl | string | A URL associated with the target application. |
| TenantId | string | The Log Analytics workspace ID |
| ThreatCategory | string | The category of the threat or malware identified in audit activity. |
| ThreatConfidence | int | The confidence level of the threat identified, normalized to a value between 0 and a 100. |
| ThreatField | string | The field for which a threat was identified. |
| ThreatFirstReportedTime | datetime | The first time the IP address or domain were identified as a threat. |
| ThreatId | string | The ID of the threat or malware identified in the audit activity. |
| ThreatIpAddr | string | An IP address or Domain for which a threat was identified. |
| ThreatIsActive | bool | True if the threat identified is considered an active threat. |
| ThreatLastReportedTime | datetime | The last time the IP address or domain were identified as a threat. |
| ThreatName | string | The name of the threat or malware identified in the audit activity. |
| ThreatOriginalConfidence | string | The original confidence level of the threat identified, as reported by the reporting device. |
| ThreatOriginalRiskLevel | string | The risk level as reported by the reporting device. |
| ThreatRiskLevel | int | The risk level associated with the identified threat. The level should be a number between 0 and 100. |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| Type | string | The name of the table |
| ValueType | string | The type of the old and new values. |

## Solutions (6)

This table is used by the following solutions:

- [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)
- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Workday](../solutions/workday.md)

## Connectors (3)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) |  |
| [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) |  |
| [Workday User Activity](../connectors/workdayccpdefinition.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):** `EventVendor == "Workday"`

| Content Item |
|:-------------|
| [TI map IP entity to Workday(ASimAuditEventLogs)](../content/threat-intelligence-ti-map-ip-entity-to-workday-asimauditeventlogs-a924d317-03d2-4420-a71f-4d347bda4bd8-7032e2e7.md) |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):** `EventVendor == "Workday"`

| Content Item |
|:-------------|
| [TI map IP entity to Workday(ASimAuditEventLogs)](../content/threat-intelligence-new-ti-map-ip-entity-to-workday-asimauditeventlogs-92e8e945-6e99-4e4b-bef8-468b4c19fc3a-7773b67f.md) |

### Workbooks (1)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuditEventNative](../asim/asimauditeventnative.md) | AuditEvent | Native |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrikeReplicatorV2](../parsers/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/auditeventnormalized`

## Selection Criteria Summary (1 criteria, 2 total references)

References by type: 0 connectors, 2 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `EventVendor == "Workday"` | - | 2 | - | - | **2** |
| **Total** | **0** | **2** | **0** | **0** | **2** |

### EventProduct / EventVendor

| EventProduct | EventVendor | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:---------|:---------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
|  | `Workday` | - | 2 | - | - | **2** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

