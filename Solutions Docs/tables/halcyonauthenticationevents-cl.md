# HalcyonAuthenticationEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (117 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon%5CData%20Connectors%5CHalcyon_ccp/Halcyon_table_AuthenticationEvent.json)

| Column Name | Type |
|:------------|:-----|
| ActorOriginalUserType | string |
| ActorScope | string |
| ActorScopeId | string |
| ActorSessionId | string |
| ActorUserAadId | string |
| ActorUserId | string |
| ActorUserIdType | string |
| ActorUsername | string |
| ActorUsernameType | string |
| ActorUserSid | string |
| ActorUserType | string |
| AdditionalFields | dynamic |
| Dvc | string |
| DvcAction | string |
| DvcDescription | string |
| DvcDomain | string |
| DvcDomainType | string |
| DvcFQDN | string |
| DvcHostname | string |
| DvcId | string |
| DvcIdType | string |
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
| EventVendor | string |
| HttpRequestMethod | string |
| HttpUserAgent | string |
| LogonMethod | string |
| LogonProtocol | string |
| Rule | string |
| RuleName | string |
| RuleNumber | int |
| SourceSystem | string |
| SrcDescription | string |
| SrcDomain | string |
| SrcDomainType | string |
| SrcDvcId | string |
| SrcDvcIdType | string |
| SrcDvcOs | string |
| SrcFQDN | string |
| SrcGeoCity | string |
| SrcGeoCountry | string |
| SrcGeoLatitude | real |
| SrcGeoLongitude | real |
| SrcGeoRegion | string |
| SrcHostname | string |
| SrcIpAddr | string |
| SrcIsp | string |
| SrcPortNumber | int |
| TargetAppId | string |
| TargetAppName | string |
| TargetAppType | string |
| TargetDescription | string |
| TargetDomain | string |
| TargetDomainType | string |
| TargetDvcId | string |
| TargetDvcIdType | string |
| TargetDvcOs | string |
| TargetFQDN | string |
| TargetGeoCity | string |
| TargetGeoCountry | string |
| TargetGeoLatitude | real |
| TargetGeoLongitude | real |
| TargetGeoRegion | string |
| TargetHostname | string |
| TargetIpAddr | string |
| TargetOriginalAppType | string |
| TargetOriginalUserType | string |
| TargetPortNumber | int |
| TargetSessionId | string |
| TargetUrl | string |
| TargetUserId | string |
| TargetUserIdType | string |
| TargetUsername | string |
| TargetUsernameType | string |
| TargetUserScope | string |
| TargetUserScopeId | string |
| TargetUserSessionGuid | string |
| TargetUserSessionId | string |
| TargetUserType | string |
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

## Solutions (1)

This table is used by the following solutions:

- [Halcyon](../solutions/halcyon.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Halcyon Connector](../connectors/halcyonpush.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ASimAuthenticationHalcyon](../parsers/asimauthenticationhalcyon.md) | [Halcyon](../solutions/halcyon.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

