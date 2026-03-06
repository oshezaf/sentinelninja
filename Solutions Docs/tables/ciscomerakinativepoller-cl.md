# CiscoMerakiNativePoller_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (150 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CiscoMerakiNativePoller_CL.json)

| Column Name | Type |
|:------------|:-----|
| AdditionalFields | dynamic |
| DstAppId | string |
| DstAppName | string |
| DstAppType | string |
| DstBytes | long |
| DstDeviceType | string |
| DstDomain | string |
| DstDomainType | string |
| DstDvcId | string |
| DstDvcIdType | string |
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
| DstMacAddr | string |
| DstNatIpAddr | string |
| DstNatPortNumber | int |
| DstOriginalUserType | string |
| DstPackets | long |
| DstPortNumber | int |
| DstSubscriptionId | string |
| DstUserId | string |
| DstUserIdType | string |
| DstUsername | string |
| DstUsernameType | string |
| DstUserType | string |
| DstVlanId | string |
| DstZone | string |
| Dvc | string |
| DvcAction | string |
| DvcDomain | string |
| DvcDomainType | string |
| DvcFQDN | string |
| DvcHostname | string |
| DvcId | string |
| DvcIdType | string |
| DvcInboundInterface | string |
| DvcInterface | string |
| DvcIpAddr | string |
| DvcMacAddr | string |
| DvcOriginalAction | string |
| DvcOs | string |
| DvcOsVersion | string |
| DvcOutboundInterface | string |
| DvcSubscriptionId | string |
| DvcZone | string |
| EventCount | int |
| EventEndTime | datetime |
| EventMessage | string |
| EventOriginalSeverity | string |
| EventOriginalSubType | string |
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
| FileContentType | string |
| FileHashType | string |
| FileMD5 | string |
| FileName | string |
| FileSHA1 | string |
| FileSHA256 | string |
| FileSHA512 | string |
| FileSize | int |
| Hash | string |
| HttpContentFormat | string |
| HttpContentType | string |
| HttpReferrer | string |
| HttpRequestMethod | string |
| HttpRequestTime | int |
| HttpRequestXff | string |
| HttpResponseTime | int |
| HttpStatusCode | string |
| HttpUserAgent | string |
| HttpVersion | string |
| IpAddr | string |
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
| SrcAppId | string |
| SrcAppName | string |
| SrcAppType | string |
| SrcBytes | long |
| SrcDeviceType | string |
| SrcDomain | string |
| SrcDomainType | string |
| SrcDvcId | string |
| SrcDvcIdType | string |
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
| SrcMacAddr | string |
| SrcNatIpAddr | string |
| SrcNatPortNumber | int |
| SrcOriginalUserType | string |
| SrcPackets | long |
| SrcPortNumber | int |
| SrcSubscriptionId | string |
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
| Url | string |
| UrlCategory | string |
| UrlOriginal | string |
| UserAgent | string |

## Solutions (1)

This table is used by the following solutions:

- [CiscoMeraki](../solutions/ciscomeraki.md)

## Connectors (3)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) |  |
| [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) |  |
| [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [CiscoMeraki](../solutions/ciscomeraki.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CiscoMerakiWorkbook](../content/ciscomeraki-ciscomerakiworkbook-efe4feca.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CiscoMeraki](../parsers/ciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

