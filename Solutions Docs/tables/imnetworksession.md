# imNetworkSession

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

## Schema (127 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/imNetworkSession.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Dst | string |
| DstAppId | string |
| DstAppName | string |
| DstAppType | string |
| DstBytes | int |
| DstDeviceType | string |
| DstDomain | string |
| DstDomainType | string |
| DstDvcId | string |
| DstDvcIdType | string |
| DstFQDN | string |
| DstGeoCity | string |
| DstGeoCountry | string |
| DstGeoLatitude | string |
| DstGeoLongitude | string |
| DstHostname | string |
| DstInterfaceGuid | string |
| DstInterfaceName | string |
| DstIpAddr | string |
| DstMacAddr | string |
| DstNatIpAddr | string |
| DstNatPortNumber | int |
| DstOriginalUserType | string |
| DstPackets | int |
| DstPortNumber | int |
| DstUserDomain | string |
| DstUserId | string |
| DstUserIdType | string |
| DstUsername | string |
| DstUsernameType | string |
| DstUserType | string |
| DstVlanId | string |
| DstZone | string |
| Duration | int |
| Dvc | string |
| DvcAction | string |
| DvcDomain | string |
| DvcDomainType | string |
| DvcFQDN | string |
| DvcHostname | string |
| DvcId | string |
| DvcIdType | string |
| DvcInboundInterface | string |
| DvcIpAddr | string |
| DvcMacAddr | string |
| DvcOriginalAction | string |
| DvcOutboundInterface | string |
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
| Hostname | string |
| InnerVlanId | string |
| IpAddr | string |
| NetworkApplicationProtocol | string |
| NetworkBytes | int |
| NetworkConnectionHistory | string |
| NetworkDirection | string |
| NetworkDuration | int |
| NetworkIcmpCode | int |
| NetworkIcmpType | string |
| NetworkPackets | int |
| NetworkProtocol | string |
| NetworkRuleName | string |
| NetworkRuleNumber | int |
| NetworkSessionId | string |
| OuterVlanId | string |
| Rule | string |
| SessionId | string |
| Src | string |
| SrcAppId | string |
| SrcAppName | string |
| SrcAppType | string |
| SrcBytes | int |
| SrcDeviceType | string |
| SrcDomain | string |
| SrcDomainType | string |
| SrcDvcId | string |
| SrcDvcIdType | string |
| SrcFQDN | string |
| SrcGeoCity | string |
| SrcGeoCountry | string |
| SrcGeoLatitude | string |
| SrcGeoLongitude | string |
| SrcHostname | string |
| SrcInterfaceGuid | string |
| SrcInterfaceName | string |
| SrcIpAddr | string |
| SrcMacAddr | string |
| SrcNatIpAddr | string |
| SrcNatPortNumber | int |
| SrcOriginalUserType | string |
| SrcPackets | int |
| SrcPortNumber | int |
| SrcUserDomain | string |
| SrcUserId | string |
| SrcUserIdType | string |
| SrcUsername | string |
| SrcUsernameType | string |
| SrcUserType | string |
| SrcVlanId | string |
| SrcZone | string |
| ThreatCategory | string |
| ThreatId | string |
| ThreatName | string |
| ThreatRiskLevel | int |
| ThreatRiskLevelOriginal | string |
| TimeGenerated | datetime |
| Type | string |
| User | string |

## Solutions (2)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)

---

## Content Items Using This Table (2)

### Hunting Queries (1)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Connection from external IP to OMI related Ports](../content/legacy-ioc-based-threat-protection-connection-from-external-ip-to-omi-related-ports-767b8f6d-8029-4c92-afe1-282167d9d49a-0ad0779a.md) |  |

### Workbooks (1)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

