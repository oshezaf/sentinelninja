# ASimNetworkSessionSonicWallFirewall

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |

## Schema (267 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ASimNetworkSessionSonicWallFirewall.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| Activity | string |
| AdditionalExtensions | string |
| AntiSpywareCategory | string |
| AntiSpywarePriority | string |
| AppCategoryID | string |
| AppCategoryName | string |
| AppControlFileName | string |
| AppFullString | string |
| AppID | string |
| AppIDName | string |
| AppIDNumber | string |
| ApplicationID | string |
| AppRuleAction | string |
| AppRuleObject | string |
| AppRuleObjectContent | string |
| AppRulePolicyId | string |
| AppRulePolicyName | string |
| AppRuleService | string |
| AppRuleType | string |
| AppSignatureID | string |
| AppSignatureName | string |
| ASimMatchingHostname | string |
| ASimMatchingIpAddr | string |
| AuditGroupIndex | string |
| AuditGroupName | string |
| AuditID | string |
| AuditNewValue | string |
| AuditOldValue | string |
| AuditPath | string |
| AuditTime | string |
| AuditTransactionID | string |
| AuditUserPrivileges | string |
| BladeID | string |
| CaptureATPVerdict | string |
| CFSCategoryID | string |
| CFSCategoryName | string |
| CFSFullString | string |
| CFSPolicyName | string |
| CollectorHostName | string |
| CommunicationDirection | string |
| ConnectionDuration | string |
| Country | string |
| DestinationDnsDomain | string |
| DestinationHostName | string |
| DestinationIP | string |
| DestinationIPv6Address | string |
| DestinationNTDomain | string |
| DestinationPort | int |
| DestinationPortDPT | string |
| DestinationProcessId | int |
| DestinationProcessName | string |
| DestinationServiceName | string |
| DestinationUserID | string |
| DestinationUserName | string |
| DestinationUserPrivileges | string |
| DestinationVPNPolicyName | string |
| DestinationZone | string |
| DeviceAction | string |
| DeviceAddress | string |
| DeviceCustomDate1 | string |
| DeviceCustomDate1Label | string |
| DeviceCustomDate2 | string |
| DeviceCustomDate2Label | string |
| DeviceCustomFloatingPoint1 | real |
| DeviceCustomFloatingPoint1Label | string |
| DeviceCustomFloatingPoint2 | real |
| DeviceCustomFloatingPoint2Label | string |
| DeviceCustomFloatingPoint3 | real |
| DeviceCustomFloatingPoint3Label | string |
| DeviceCustomFloatingPoint4 | real |
| DeviceCustomFloatingPoint4Label | string |
| DeviceCustomIPv6Address1 | string |
| DeviceCustomIPv6Address1Label | string |
| DeviceCustomIPv6Address2 | string |
| DeviceCustomIPv6Address2Label | string |
| DeviceCustomIPv6Address3 | string |
| DeviceCustomIPv6Address3Label | string |
| DeviceCustomIPv6Address4 | string |
| DeviceCustomIPv6Address4Label | string |
| DeviceCustomNumber1 | int |
| DeviceCustomNumber2 | int |
| DeviceCustomNumber3 | int |
| DeviceDnsDomain | string |
| DeviceExternalID | string |
| DeviceFacility | string |
| DeviceMacAddress | string |
| DeviceModel | string |
| DeviceName | string |
| DeviceNtDomain | string |
| DevicePayloadId | string |
| DeviceTimeZone | string |
| DeviceTranslatedAddress | string |
| DeviceVendor | string |
| DPIInspectedFlow | string |
| Dst | string |
| DstDomain | string |
| DstDomainType | string |
| DstFQDN | string |
| DstHostname | string |
| DstIpAddr | string |
| DstMacAddr | string |
| DstNatIpAddr | string |
| DstNatPortNumber | int |
| DstPortNumber | int |
| DstZone | string |
| Dvc | string |
| DvcAction | string |
| DvcDomain | string |
| DvcDomainType | string |
| DvcFQDN | string |
| DvcHostname | string |
| DvcIdType | string |
| DvcInboundInterface | string |
| DvcIpAddr | string |
| DvcOriginalAction | string |
| DvcOutboundInterface | string |
| EndTime | datetime |
| EventCount | int |
| EventEndTime | datetime |
| EventOriginalSeverity | string |
| EventOutcome | string |
| EventProduct | string |
| EventResourceId | string |
| EventResult | string |
| EventResultDetails | string |
| EventSchema | string |
| EventSchemaVersion | string |
| EventSeverity | string |
| EventStartTime | datetime |
| EventType | string |
| EventUid | string |
| EventVendor | string |
| ExternalID | int |
| ExtID | string |
| FieldDeviceCustomNumber3 | long |
| FileCreateTime | string |
| FileHash | string |
| FileID | string |
| FileIdentifier | string |
| FileModificationTime | string |
| FileName | string |
| FilePath | string |
| FilePermission | string |
| FileSize | long |
| FileType | string |
| FirewallAction | string |
| FirmwareVersion | string |
| FlexDate1 | string |
| FlexDate1Label | string |
| FlexNumber1 | int |
| FlexNumber1Label | string |
| FlexNumber2 | int |
| FlexNumber2Label | string |
| FlexString1 | string |
| FlexString1Label | string |
| FlexString2 | string |
| FlexString2Label | string |
| Hostname | string |
| HttpReferrer | string |
| HttpRequestMethod | string |
| HttpRequestMethod_ | string |
| HttpUserAgent | string |
| ICMPCode | long |
| ICMPType | long |
| InboundInterface | string |
| IndicatorThreatType | string |
| InterfaceStatistics | string |
| IpAddr | string |
| IPSCategoryName | string |
| IPSFullString | string |
| IPSPriority | string |
| IPSSignatureName | string |
| LegacyMessageCategory | string |
| LogMsgCategory | string |
| LogMsgID | string |
| LogMsgNote | string |
| LogMsgSeverity | string |
| MaliciousIP | string |
| MaliciousIPCountry | string |
| MaliciousIPLatitude | real |
| MaliciousIPLongitude | real |
| Message | string |
| NATDestinationIPAddress | string |
| NATDestinationPort | string |
| NATSourceIPAddress | string |
| NATSourcePort | string |
| NetworkDirection | string |
| NetworkProtocol | string |
| NetworkProtocolVersion | string |
| OldFileCreateTime | string |
| OldFileHash | string |
| OldFileID | string |
| OldFileModificationTime | string |
| OldFileName | string |
| OldFilePath | string |
| OldFilePermission | string |
| OldFileSize | int |
| OldFileType | string |
| OriginalLogSeverity | string |
| OutboundInterface | string |
| ProcessID | int |
| ProcessName | string |
| Protocol | string |
| ReceiptTime | string |
| ReceivedBytes | long |
| ReceivedPackets | string |
| ReceivedPackets_Field | string |
| RemoteIP | string |
| RemotePort | string |
| ReportReferenceLink | string |
| RequestContext | string |
| RequestCookies | string |
| RequestURL | string |
| RequestURL_ | string |
| RuleDetails | string |
| SentBytes | long |
| SentPackets | string |
| SentPackets_Field | string |
| SerialNumber | string |
| ServiceName | string |
| SimplifiedDeviceAction | string |
| SoleraNPCSURL | string |
| SourceDnsDomain | string |
| SourceHostName | string |
| SourceIP | string |
| SourceIPv6Address | string |
| SourceNTDomain | string |
| SourcePort | int |
| SourcePortSPT | string |
| SourceProcessId | int |
| SourceProcessName | string |
| SourceServiceName | string |
| SourceSystem | string |
| SourceUserID | string |
| SourceUserPrivileges | string |
| SourceVPNPolicyName | string |
| SourceZone | string |
| Src | string |
| SrcDomain | string |
| SrcDomainType | string |
| SrcFQDN | string |
| SrcHostname | string |
| SrcIpAddr | string |
| SrcMacAddr | string |
| SrcNatIpAddr | string |
| SrcNatPortNumber | int |
| SrcPortNumber | int |
| SrcUsername | string |
| SrcUsernameType | string |
| SrcZone | string |
| StartTime | datetime |
| TenantId | string |
| ThreatConfidence | int |
| ThreatDescription | string |
| ThreatField | string |
| ThreatIpAddr | string |
| ThreatOriginalConfidence | string |
| ThreatSeverity | int |
| TimeGenerated | datetime |
| Type | string |
| UrlCategory | string |
| URLPathName | string |
| User | string |
| UserSessionDuration | string |
| UserSessionType | string |
| UUID | string |

## Solutions (1)

This table is used by the following solutions:

- [SonicWall Firewall](../solutions/sonicwall-firewall.md)

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [SonicWall Firewall](../solutions/sonicwall-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SonicWall - Allowed SSH, Telnet, and RDP Connections](../content/sonicwall-firewall-sonicwall-allowed-ssh,-telnet,-and-rdp-connections-27f1a570-5f20-496b-88f6-a9aa2c5c9534-5e407210.md) |  |

### Hunting Queries (1)

**In solution [SonicWall Firewall](../solutions/sonicwall-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Outbound SSH/SCP Connections](../content/sonicwall-firewall-outbound-ssh-scp-connections-dedb8fb9-3caa-4b00-ae88-1898eed78917-0b8386aa.md) |  |

### Workbooks (1)

**In solution [SonicWall Firewall](../solutions/sonicwall-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SonicWallFirewall](../content/sonicwall-firewall-sonicwallfirewall-108e460f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

