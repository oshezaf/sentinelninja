# ASimDhcpEvent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

## Schema (109 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ASimDhcpEvent.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| _SubscriptionId | string |
| AdditionalFields | dynamic |
| DhcpCircuitId | string |
| DhcpLeaseDuration | int |
| DhcpSessionDuration | int |
| DhcpSessionId | string |
| DhcpSrcDHCId | string |
| DhcpSubscriberId | string |
| DhcpUserClass | string |
| DhcpUserClassId | string |
| DhcpVendorClass | string |
| DhcpVendorClassId | string |
| Dst | string |
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
| EventOriginalResultDetails | string |
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
| RequestedIpAddr | string |
| Rule | string |
| RuleName | string |
| RuleNumber | int |
| SessionId | string |
| SourceSystem | string |
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
| SrcMacAddr | string |
| SrcOriginalRiskLevel | string |
| SrcOriginalUserType | string |
| SrcPortNumber | int |
| SrcRiskLevel | int |
| SrcUserId | string |
| SrcUserIdType | string |
| SrcUsername | string |
| SrcUsernameType | string |
| SrcUserScope | string |
| SrcUserScopeId | string |
| SrcUserSessionId | string |
| SrcUserType | string |
| SrcUserUid | string |
| TenantId | string |
| ThreatCategory | string |
| ThreatConfidence | int |
| ThreatField | string |
| ThreatFirstReportedTime | datetime |
| ThreatId | string |
| ThreatIsActive | bool |
| ThreatLastReportedTime | datetime |
| ThreatName | string |
| ThreatOriginalConfidence | string |
| ThreatOriginalRiskLevel | string |
| ThreatRiskLevel | int |
| TimeGenerated | datetime |
| Type | string |
| User | string |

---

## Parsers Using This Table (1)

### Other Parsers (1) — Selection Criteria: `EventVendor !contains "Cymru"`

| Parser | Solution |
|:-------|:---------|
| [CymruScoutCorrelate](../parsers/cymruscoutcorrelate.md) | [Team Cymru Scout](../solutions/team-cymru-scout.md) |

## Selection Criteria Summary (1 criteria, 1 total references)

References by type: 0 connectors, 0 content items, 0 ASIM parsers, 1 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `EventVendor !contains "Cymru"` | - | - | - | 1 | **1** |
| **Total** | **0** | **0** | **0** | **1** | **1** |

### EventProduct / EventVendor

| EventProduct | EventVendor | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:---------|:---------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
|  | `!contains Cymru` | - | - | - | 1 | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

