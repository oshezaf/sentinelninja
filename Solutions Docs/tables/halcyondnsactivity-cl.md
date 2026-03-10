# HalcyonDnsActivity_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (394 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon/Data%20Connectors/Halcyon_ccp/Halcyon_DCR.json)

| Column Name | Type |
|:------------|:-----|
| ActingAppId | string |
| ActingAppName | string |
| ActingAppType | string |
| ActingOriginalAppType | string |
| ActingProcessCommandLine | string |
| ActingProcessCreationTime | datetime |
| ActingProcessFileCompany | string |
| ActingProcessFileDescription | string |
| ActingProcessFileInternalName | string |
| ActingProcessFilename | string |
| ActingProcessFileOriginalName | string |
| ActingProcessFileProduct | string |
| ActingProcessFileSize | long |
| ActingProcessFileVersion | string |
| ActingProcessGuid | string |
| ActingProcessId | string |
| ActingProcessIMPHASH | string |
| ActingProcessInjectedAddress | string |
| ActingProcessIntegrityLevel | string |
| ActingProcessIsHidden | boolean |
| ActingProcessMD5 | string |
| ActingProcessName | string |
| ActingProcessSHA1 | string |
| ActingProcessSHA256 | string |
| ActingProcessSHA512 | string |
| ActingProcessTokenElevation | string |
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
| DnsFlags | string |
| DnsFlagsAuthenticated | boolean |
| DnsFlagsAuthoritative | boolean |
| DnsFlagsCheckingDisabled | boolean |
| DnsFlagsRecursionAvailable | boolean |
| DnsFlagsRecursionDesired | boolean |
| DnsFlagsTruncated | boolean |
| DnsFlagsZ | boolean |
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
| Dst | string |
| DstAppId | string |
| DstAppName | string |
| DstAppType | string |
| DstBytes | long |
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
| DstInterfaceGuid | string |
| DstInterfaceName | string |
| DstIpAddr | string |
| DstMacAddr | string |
| DstNatIpAddr | string |
| DstNatPortNumber | int |
| DstOriginalRiskLevel | string |
| DstOriginalUserType | string |
| DstPackets | long |
| DstPortNumber | int |
| DstRiskLevel | int |
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
| DvcDescription | string |
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
| DvcScope | string |
| DvcScopeId | string |
| DvcSubscriptionId | string |
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
| EventVendor | string |
| FileContentType | string |
| FileMD5 | string |
| FileName | string |
| FileSHA1 | string |
| FileSHA256 | string |
| FileSHA512 | string |
| FileSize | int |
| GroupId | string |
| GroupIdType | string |
| GroupName | string |
| GroupNameType | string |
| GroupOriginalType | string |
| GroupType | string |
| HashType | string |
| HttpContentFormat | string |
| HttpContentType | string |
| HttpHost | string |
| HttpReferrer | string |
| HttpRequestMethod | string |
| HttpRequestTime | int |
| HttpRequestXff | string |
| HttpResponseTime | int |
| HttpUserAgent | string |
| HttpVersion | string |
| LogonMethod | string |
| LogonProtocol | string |
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
| NewPropertyValue | string |
| NewValue | string |
| Object | string |
| ObjectId | string |
| ObjectType | string |
| OldValue | string |
| Operation | string |
| OriginalObjectType | string |
| ParentProcessCommandLine | string |
| ParentProcessCreationTime | datetime |
| ParentProcessFileCompany | string |
| ParentProcessFileDescription | string |
| ParentProcessFileProduct | string |
| ParentProcessFileVersion | string |
| ParentProcessGuid | string |
| ParentProcessId | string |
| ParentProcessIMPHASH | string |
| ParentProcessInjectedAddress | string |
| ParentProcessIntegrityLevel | string |
| ParentProcessIsHidden | boolean |
| ParentProcessMD5 | string |
| ParentProcessName | string |
| ParentProcessSHA1 | string |
| ParentProcessSHA256 | string |
| ParentProcessSHA512 | string |
| ParentProcessTokenElevation | string |
| PreviousPropertyValue | string |
| RegistryKey | string |
| RegistryPreviousKey | string |
| RegistryPreviousValue | string |
| RegistryPreviousValueData | string |
| RegistryPreviousValueType | string |
| RegistryValue | string |
| RegistryValueData | string |
| RegistryValueType | string |
| RequestedIpAddr | string |
| Rule | string |
| RuleName | string |
| RuleNumber | int |
| SourceSystem | string |
| Src | string |
| SrcAppId | string |
| SrcAppName | string |
| SrcAppType | string |
| SrcBytes | long |
| SrcDescription | string |
| SrcDeviceType | string |
| SrcDomain | string |
| SrcDomainType | string |
| SrcDvcId | string |
| SrcDvcIdType | string |
| SrcDvcOs | string |
| SrcDvcScope | string |
| SrcDvcScopeId | string |
| SrcFileCreationTime | datetime |
| SrcFileDirectory | string |
| SrcFileExtension | string |
| SrcFileMD5 | string |
| SrcFileMimeType | string |
| SrcFileName | string |
| SrcFilePath | string |
| SrcFilePathType | string |
| SrcFileSHA1 | string |
| SrcFileSHA256 | string |
| SrcFileSHA512 | string |
| SrcFileSize | long |
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
| SrcUserSessionId | string |
| SrcUserType | string |
| SrcUserUid | string |
| SrcVlanId | string |
| SrcZone | string |
| TargetAppId | string |
| TargetAppName | string |
| TargetAppType | string |
| TargetDescription | string |
| TargetDeviceType | string |
| TargetDomain | string |
| TargetDomainType | string |
| TargetDvcId | string |
| TargetDvcIdType | string |
| TargetDvcOs | string |
| TargetDvcScope | string |
| TargetDvcScopeId | string |
| TargetFileCreationTime | datetime |
| TargetFileDirectory | string |
| TargetFileExtension | string |
| TargetFileMD5 | string |
| TargetFileMimeType | string |
| TargetFileName | string |
| TargetFilePath | string |
| TargetFilePathType | string |
| TargetFileSHA1 | string |
| TargetFileSHA256 | string |
| TargetFileSHA512 | string |
| TargetFileSize | long |
| TargetFQDN | string |
| TargetGeoCity | string |
| TargetGeoCountry | string |
| TargetGeoLatitude | real |
| TargetGeoLongitude | real |
| TargetGeoRegion | string |
| TargetHostname | string |
| TargetIpAddr | string |
| TargetOriginalAppType | string |
| TargetOriginalRiskLevel | string |
| TargetOriginalUserType | string |
| TargetPortNumber | int |
| TargetProcessCommandLine | string |
| TargetProcessCreationTime | datetime |
| TargetProcessCurrentDirectory | string |
| TargetProcessFileCompany | string |
| TargetProcessFileDescription | string |
| TargetProcessFileInternalName | string |
| TargetProcessFilename | string |
| TargetProcessFileOriginalName | string |
| TargetProcessFileProduct | string |
| TargetProcessFileSize | long |
| TargetProcessFileVersion | string |
| TargetProcessGuid | string |
| TargetProcessId | string |
| TargetProcessIMPHASH | string |
| TargetProcessInjectedAddress | string |
| TargetProcessIntegrityLevel | string |
| TargetProcessIsHidden | boolean |
| TargetProcessMD5 | string |
| TargetProcessName | string |
| TargetProcessSHA1 | string |
| TargetProcessSHA256 | string |
| TargetProcessSHA512 | string |
| TargetProcessStatusCode | string |
| TargetProcessTokenElevation | string |
| TargetRiskLevel | int |
| TargetScope | string |
| TargetScopeId | string |
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
| TargetUserUid | string |
| TcpFlagsAck | boolean |
| TcpFlagsFin | boolean |
| TcpFlagsPsh | boolean |
| TcpFlagsRst | boolean |
| TcpFlagsSyn | boolean |
| TcpFlagsUrg | boolean |
| ThreatCategory | string |
| ThreatConfidence | int |
| ThreatField | string |
| ThreatFilePath | string |
| ThreatFirstReportedTime | datetime |
| ThreatFirstReportedTime_d | datetime |
| ThreatId | string |
| ThreatIpAddr | string |
| ThreatIsActive | boolean |
| ThreatLastReportedTime | datetime |
| ThreatLastReportedTime_d | datetime |
| ThreatName | string |
| ThreatOriginalConfidence | string |
| ThreatOriginalRiskLevel | string |
| ThreatOriginalRiskLevel_s | string |
| ThreatRiskLevel | int |
| TimeGenerated | datetime |
| TransactionIdHex | string |
| Type | string |
| Url | string |
| UrlCategory | string |
| UrlOriginal | string |
| ValueType | string |

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

