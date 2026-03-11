# HalcyonNetworkSession_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (161 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon%5CData%20Connectors%5CHalcyon_ccp/Halcyon_table_NetworkSession.json)

| Column Name | Type |
|:------------|:-----|
| AdditionalFields | dynamic |
| Dst | string |
| DstAppId | string |
| DstAppName | string |
| DstAppType | string |
| DstBytes | long |
| DstDeviceType | string |
| DstDomain | string |
| DstDomainType | string |
| DstDvcId | string |
| DstDvcIdType | string |
| DstDvcOs | string |
| DstDvcScope | string |
| DstDvcScopeId | string |
| DstFQDN | string |
| DstGeoCity | string |
| DstGeoCountry | string |
| DstGeoLatitude | real |
| DstGeoLongitude | real |
| DstGeoRegion | string |
| DstHostname | string |
| DstInterfaceGuid | string |
| DstInterfaceName | string |
| DstIpAddr | string |
| DstIsp | string |
| DstMacAddr | string |
| DstNatIpAddr | string |
| DstNatPortNumber | int |
| DstOriginalRiskLevel | string |
| DstOriginalUserType | string |
| DstPackets | long |
| DstPortNumber | int |
| DstProcessGuid | string |
| DstProcessId | string |
| DstProcessName | string |
| DstRiskLevel | int |
| DstSubscriptionId | string |
| DstUserId | string |
| DstUserIdType | string |
| DstUsername | string |
| DstUsernameType | string |
| DstUserScope | string |
| DstUserScopeId | string |
| DstUserType | string |
| DstVlanId | string |
| DstVmName | string |
| DstZone | string |
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
| EventOriginalType | string |
| EventOriginalUid | string |
| EventProduct | string |
| EventProductVersion | string |
| EventResult | string |
| EventResultDetails | string |
| EventSchema | string |
| EventSchemaVersion | string |
| EventSeverity | string |
| EventStartTime | datetime |
| EventSubType | string |
| EventType | string |
| EventVendor | string |
| NetworkApplicationProtocol | string |
| NetworkBytes | long |
| NetworkConnectionHistory | string |
| NetworkDirection | string |
| NetworkDuration | int |
| NetworkIcmpCode | int |
| NetworkIcmpType | string |
| NetworkPackets | long |
| NetworkProtocol | string |
| NetworkProtocolVersion | string |
| NetworkRuleName | string |
| NetworkRuleNumber | int |
| NetworkSessionId | string |
| Rule | string |
| RuleName | string |
| RuleNumber | int |
| SessionId | string |
| SourceSystem | string |
| Src | string |
| SrcAppId | string |
| SrcAppName | string |
| SrcAppType | string |
| SrcBytes | long |
| SrcDeviceType | string |
| SrcDomain | string |
| SrcDomainType | string |
| SrcDvcId | string |
| SrcDvcIdType | string |
| SrcDvcOs | string |
| SrcDvcScope | string |
| SrcDvcScopeId | string |
| SrcFQDN | string |
| SrcGeoCity | string |
| SrcGeoCountry | string |
| SrcGeoLatitude | real |
| SrcGeoLongitude | real |
| SrcGeoRegion | string |
| SrcHostname | string |
| SrcInterfaceGuid | string |
| SrcInterfaceName | string |
| SrcIpAddr | string |
| SrcIsp | string |
| SrcMacAddr | string |
| SrcNatIpAddr | string |
| SrcNatPortNumber | int |
| SrcOriginalRiskLevel | string |
| SrcOriginalUserType | string |
| SrcPackets | long |
| SrcPortNumber | int |
| SrcProcessGuid | string |
| SrcProcessId | string |
| SrcProcessName | string |
| SrcRiskLevel | int |
| SrcSubscriptionId | string |
| SrcUserId | string |
| SrcUserIdType | string |
| SrcUsername | string |
| SrcUsernameType | string |
| SrcUserScope | string |
| SrcUserScopeId | string |
| SrcUserType | string |
| SrcVlanId | string |
| SrcVmName | string |
| SrcZone | string |
| TcpFlags | string |
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
| [ASimNetworkSessionHalcyon](../parsers/asimnetworksessionhalcyon.md) | [Halcyon](../solutions/halcyon.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

