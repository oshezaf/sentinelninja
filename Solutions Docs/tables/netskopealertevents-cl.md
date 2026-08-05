# NetskopeAlertEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (254 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeAlertEvents%5CData%20Connectors%5CNetskopeAlertEvents_CCF/NetskopeAlertEvents_Table.json)

| Column Name | Type |
|:------------|:-----|
| AccessMethod | string |
| AccountId | string |
| AccountName | string |
| Acked | string |
| ActingUser | string |
| Action | string |
| Activity | string |
| ActUser | string |
| Alert | string |
| AlertId | string |
| AlertName | string |
| AlertSource | string |
| AlertType | string |
| App | string |
| Appact | string |
| Appcategory | string |
| AppGdprLevel | string |
| AppSessionId | string |
| Appsuite | string |
| Assignee | string |
| AuditType | string |
| Bcc | string |
| BreachDate | string |
| BreachId | string |
| BreachScore | real |
| Browser | string |
| BrowserSessionId | string |
| Cc | string |
| Cci | int |
| Ccl | string |
| ClientBytes | int |
| ClientPackets | int |
| CloudProvider | string |
| ComputerName | string |
| ConnDuration | int |
| ConnectionId | string |
| ConnectionType | string |
| ConnEndtime | string |
| ConnStarttime | string |
| CustomAttr | string |
| DestinationFileDirectory | string |
| DestinationFileName | string |
| DestinationFilePath | string |
| DetectionEngine | string |
| Device | string |
| DeviceClassification | string |
| DeviceSn | string |
| DeviceType | string |
| Dinsid | string |
| DlpFile | string |
| DlpFingerprintClassification | string |
| DlpFingerprintMatch | string |
| DlpFingerprintScore | int |
| DlpIncidentId | string |
| DlpIsUniqueCount | string |
| DlpMatchInfo | string |
| DlpParentId | string |
| DlpProfile | string |
| DlpProfileName | string |
| DlpRule | string |
| DlpRuleCount | int |
| DlpRuleScore | int |
| DlpRuleSeverity | string |
| DlpUniqueCount | int |
| DnsProfile | string |
| Domain | string |
| DomainIp | string |
| Driver | string |
| DstCountry | string |
| DstGeoipSrc | string |
| Dsthost | string |
| Dstip | string |
| DstLatitude | real |
| DstLocation | string |
| DstLongitude | real |
| Dstport | int |
| DstRegion | string |
| DstTimezone | string |
| DstZipcode | string |
| Eeml | string |
| EmailFromUser | string |
| EmailModified | string |
| EmailTitle | string |
| EmailUser | string |
| EncryptionStatus | string |
| EndTime | string |
| EventUuid | string |
| ExecutableHash | string |
| ExecutableSigned | string |
| FileCategory | string |
| FileClsEncrypted | string |
| FileExposure | string |
| FileId | string |
| FileMd5 | string |
| Filename | string |
| FileOrigin | string |
| FileOwner | string |
| FilePath | string |
| FilePdl | string |
| FileSize | int |
| FileType | string |
| Fllg | string |
| Flpp | string |
| FromUser | string |
| Hostname | string |
| IaasRemediated | string |
| IaasRemediatedBy | string |
| IaasRemediatedOn | string |
| IaasRemediationAction | string |
| Id | string |
| IncidentId | string |
| InlineDlpMatchInfo | string |
| Instance | string |
| InstanceId | string |
| InstanceName | string |
| IpProtocol | string |
| LatestIncidentId | string |
| Loc | string |
| LocalMd5 | string |
| LocalSha1 | string |
| LocalSha256 | string |
| LocalSourceTime | string |
| Location | string |
| MalId | string |
| MalSev | string |
| MalType | string |
| MalwareId | string |
| MalwareSeverity | string |
| MalwareType | string |
| ManagedApp | string |
| ManagementID | string |
| Md5 | string |
| MessageId | string |
| MimeType | string |
| ModifiedDate | string |
| NetskopePop | string |
| NetworkSessionId | string |
| Nsdeviceuid | string |
| NsType | string |
| Numbytes | int |
| NumUsers | int |
| Oauth | string |
| Object | string |
| ObjectId | string |
| ObjectType | string |
| Org | string |
| OrganizationUnit | string |
| Os | string |
| OsDetails | string |
| OsFamily | string |
| OsUserName | string |
| OsVersion | string |
| Owner | string |
| OwnerPdl | string |
| Page | string |
| ParentId | string |
| Pid | int |
| Policy | string |
| PolicyAction | string |
| PolicyName | string |
| PolicyNameEnforced | string |
| PolicyVersion | int |
| PopId | int |
| Port | int |
| ProcessCertSubject | string |
| ProcessName | string |
| ProcessPath | string |
| ProductId | string |
| PublisherCn | string |
| RecordType | string |
| RedirectUrl | string |
| Referer | string |
| RegionId | string |
| RegionName | string |
| Req | string |
| ReqCnt | int |
| RequestId | string |
| ResourceCategory | string |
| ResourceGroup | string |
| Resp | string |
| RespCnt | int |
| ResponseTime | int |
| RiskLevelId | int |
| RiskScore | int |
| SanctionedInstance | string |
| SaProfileName | string |
| SaRuleCompliance | string |
| SaRuleName | string |
| SaRuleSeverity | string |
| Sender | string |
| ServerBytes | int |
| Serverity | string |
| ServerPackets | int |
| SessionDuration | int |
| SessionNumberUnique | int |
| Severity | string |
| SeverityId | int |
| SeverityLevel | string |
| Sha256 | string |
| SharedCredentialUser | string |
| SharedDomains | string |
| SharedType | string |
| SharedWith | string |
| Site | string |
| SmtpStatus | string |
| SmtpTo | string |
| Spet | string |
| Spst | string |
| SrcCountry | string |
| SrcGeoipSrc | string |
| Srcip | string |
| SrcLatitude | real |
| SrcLocation | string |
| SrcLongitude | real |
| SrcNetwork | string |
| Srcport | int |
| SrcRegion | string |
| SrcTimezone | string |
| SrcZipcode | string |
| StartTime | string |
| Status | string |
| Subject | string |
| Subtype | string |
| SuppressionCount | int |
| Tags | string |
| TelemetryApp | string |
| Thr | string |
| ThreatType | string |
| TimeGenerated | datetime |
| Timestamp | long |
| TotalPackets | int |
| ToUser | string |
| TrafficType | string |
| TransactionId | string |
| TssLicense | string |
| TssMode | string |
| TunnelId | string |
| Tur | string |
| TwoFactorAuth | string |
| UncPath | string |
| Url | string |
| UrNormalized | string |
| User | string |
| Useragent | string |
| UserConfidenceIndex | int |
| UserConfidenceLevel | string |
| Usergroup | string |
| UserId | string |
| Userip | string |
| Userkey | string |
| VendorId | string |
| Violation | string |
| WatchlistName | string |
| WebUrl | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [NetskopeAlertEvents](../solutions/netskopealertevents.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Alerts & Events (via Log Streaming)](../connectors/netskopealerteventsconnector.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (3)

**In solution [NetskopeAlertEvents](../solutions/netskopealertevents.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Netskope - DLP Incident Spike](../content/netskopealertevents-netskope-dlp-incident-spike-c3f8e4d6-0d57-4a3b-9e2c-4f6a8b0d3e52-1e2b0092.md) |  |
| [Netskope - High Severity Alert](../content/netskopealertevents-netskope-high-severity-alert-a1f6c2d4-8b35-4e19-9c7a-2d4e6f8a1b30-dd52ea1e.md) |  |
| [Netskope - Suspicious Application Activity (Low Confidence / Risky App)](../content/netskopealertevents-netskope-suspicious-application-activity-low-confidence-risky-app-b2e7d3c5-9c46-4f2a-8d1b-3e5f7a9c2d41-f7dd180b.md) |  |

### Workbooks (2)

**In solution [NetskopeAlertEvents](../solutions/netskopealertevents.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeAlertEvents_Workbook](../content/netskopealertevents-netskopealertevents-workbook-9d0c49b9.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeAlertEvents_Workbook](../content/github-only-netskopealertevents-workbook-d55519c9.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetskopeAlertEvents](../parsers/netskopealertevents.md) | [NetskopeAlertEvents](../solutions/netskopealertevents.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

