# ASimDns

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |

## Schema (151 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ASimDns.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| AdditionalFields | dynamic |
| DnsFlags | string |
| DnsFlagsAuthenticated | bool |
| DnsFlagsAuthoritative | bool |
| DnsFlagsCheckingDisabled | bool |
| DnsFlagsRecursionAvailable | bool |
| DnsFlagsRecursionDesired | bool |
| DnsFlagsTruncated | bool |
| DnsFlagsZ | bool |
| DnsNetworkDuration | int |
| DnsQuery | string |
| DnsQueryClass | int |
| DnsQueryClassName | string |
| DnsQueryType | int |
| DnsQueryTypeName | string |
| DnsResponseCode | int |
| DnsResponseCodeName | string |
| DnsResponseIpCity | string |
| DnsResponseIpCountry | string |
| DnsResponseIpLatitude | real |
| DnsResponseIpLongitude | real |
| DnsResponseIpRegion | string |
| DnsResponseName | string |
| DnsSessionId | string |
| Domain | string |
| DomainCategory | string |
| Dst | string |
| DstDescription | string |
| DstDeviceType | string |
| DstDomain | string |
| DstDomainType | string |
| DstDvcId | string |
| DstDvcIdType | string |
| DstDvcScope | string |
| DstDvcScopeId | string |
| DstFQDN | string |
| DstGeoCity | string |
| DstGeoCountry | string |
| DstGeoLatitude | real |
| DstGeoLongitude | real |
| DstGeoRegion | string |
| DstHostname | string |
| DstIpAddr | string |
| DstOriginalRiskLevel | string |
| DstPortNumber | int |
| DstRiskLevel | int |
| Duration | int |
| Dvc | string |
| DvcAction | string |
| DvcDescription | string |
| DvcDomain | string |
| DvcDomainType | string |
| DvcFQDN | string |
| DvcHostname | string |
| DvcId | string |
| DvcIdType | string |
| DvcInterface | string |
| DvcIpAddr | string |
| DvcMacAddr | string |
| DvcOriginalAction | string |
| DvcOs | string |
| DvcOsVersion | string |
| DvcScope | string |
| DvcScopeId | string |
| DvcZone | string |
| EventCount | int |
| EventEndTime | datetime |
| EventMessage | string |
| EventOriginalSeverity | string |
| EventOriginalSubType | string |
| EventOriginalType | string |
| EventOriginalUid | string |
| EventOwner | string |
| EventProduct | string |
| EventProductVersion | string |
| EventReportUrl | string |
| EventResult | string |
| EventResultDetails | string |
| EventSchema | string |
| EventSchemaVersion | string |
| EventSeverity | string |
| EventStartTime | datetime |
| EventSubType | string |
| EventType | string |
| EventUid | string |
| EventVendor | string |
| Hostname | string |
| IpAddr | string |
| NetworkProtocol | string |
| NetworkProtocolVersion | string |
| Process | string |
| Rule | string |
| RuleName | string |
| RuleNumber | int |
| SessionId | string |
| Src | string |
| SrcDescription | string |
| SrcDeviceType | string |
| SrcDomain | string |
| SrcDomainType | string |
| SrcDvcId | string |
| SrcDvcIdType | string |
| SrcDvcScope | string |
| SrcDvcScopeId | string |
| SrcFQDN | string |
| SrcGeoCity | string |
| SrcGeoCountry | string |
| SrcGeoLatitude | real |
| SrcGeoLongitude | real |
| SrcGeoRegion | string |
| SrcHostname | string |
| SrcIpAddr | string |
| SrcOriginalRiskLevel | string |
| SrcOriginalUserType | string |
| SrcPortNumber | int |
| SrcProcessGuid | string |
| SrcProcessId | string |
| SrcProcessName | string |
| SrcRiskLevel | int |
| SrcUserAadId | string |
| SrcUserAWSId | string |
| SrcUserId | string |
| SrcUserIdType | string |
| SrcUsername | string |
| SrcUsernameType | string |
| SrcUserOktaId | string |
| SrcUserScope | string |
| SrcUserScopeId | string |
| SrcUserSessionId | string |
| SrcUserSid | string |
| SrcUserType | string |
| SrcUserUid | string |
| TenantId | string |
| ThreatCategory | string |
| ThreatConfidence | int |
| ThreatField | string |
| ThreatFirstReportedTime | datetime |
| ThreatId | string |
| ThreatIpAddr | string |
| ThreatIsActive | bool |
| ThreatLastReportedTime | datetime |
| ThreatName | string |
| ThreatOriginalConfidence | string |
| ThreatOriginalRiskLevel | string |
| ThreatRiskLevel | int |
| TimeGenerated | datetime |
| TransactionIdHex | string |
| Type | string |
| UrlCategory | string |
| User | string |

## Solutions (1)

This table is used by the following solutions:

- [Dataminr Pulse](../solutions/dataminr-pulse.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Dataminr Pulse](../solutions/dataminr-pulse.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DataminrPulseAlerts](../content/dataminr-pulse-dataminrpulsealerts-d5436210.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CymruScoutCorrelate](../parsers/cymruscoutcorrelate.md) | [Team Cymru Scout](../solutions/team-cymru-scout.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

