# HalcyonDnsActivity_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (110 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon%5CData%20Connectors%5CHalcyon_ccp/Halcyon_table_DnsActivity.json)

| Column Name | Type |
|:------------|:-----|
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
| DnsResponseIpCity | string |
| DnsResponseIpCountry | string |
| DnsResponseIpLatitude | real |
| DnsResponseIpLongitude | real |
| DnsResponseIpRegion | string |
| DnsResponseName | string |
| DnsSessionId | string |
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
| DstIpAddr | string |
| DstPortNumber | int |
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
| NetworkProtocol | string |
| NetworkProtocolVersion | string |
| SourceSystem | string |
| Src | string |
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
| SrcPortNumber | int |
| SrcProcessGuid | string |
| SrcProcessId | string |
| SrcProcessName | string |
| SrcUserId | string |
| SrcUserIdType | string |
| SrcUsername | string |
| SrcUsernameType | string |
| SrcUserType | string |
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
| [ASimDnsHalcyon](../parsers/asimdnshalcyon.md) | [Halcyon](../solutions/halcyon.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

