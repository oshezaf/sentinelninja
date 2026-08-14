# NetskopeWebTransactions_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (198 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeWebTx%5CData%20Connectors%5CNetskopeWebTx_CCF/NetskopeWebtx_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Bytes | int | Total bytes transferred |
| CIp | string | Client IP address |
| CsBytes | int | Client to server bytes |
| CsContentType | string | Request content type |
| CsDns | string | DNS name |
| CsHost | string | Host name |
| CsMethod | string | HTTP method |
| CsReferer | string | HTTP Referer header |
| CsUri | string | URI |
| CsUriPort | int | URI port |
| CsUriQuery | string | URI query string |
| CsUriScheme | string | URI scheme (http/https) |
| CsUserAgent | string | User agent string |
| CsUsername | string | Username |
| Date | string | Event date |
| RsBytes | int | Real server bytes |
| RsStatus | int | Real server status |
| ScBytes | int | Server to client bytes |
| ScContentType | string | Response content type |
| ScStatus | int | HTTP status code |
| SIp | string | Server IP address |
| SrBytes | int | Server request bytes |
| Time | string | Event time |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| TimeTaken | int | Time taken for request in milliseconds |
| XAction | string | Action |
| XActionReason | string | Action reason |
| XCategory | string | URL category |
| XCategoryId | int | Category ID |
| XCAuthnSource | string | Authentication source |
| XCAuthnSurrogate | string | Authentication surrogate |
| XCAuthnSurrogateStatus | string | Authentication surrogate status |
| XCAuthnUser | string | Authenticated user |
| XCAuthzGroups | string | Authorization groups |
| XCAuthzOu | string | Authorization OU |
| XCAuthzSource | string | Authorization source |
| XCBrowser | string | Client browser |
| XCBrowserVersion | int | Client browser version |
| XCCountry | string | Client country |
| XCDevice | string | Client device type |
| XCDeviceClassification | string | Client device classification |
| XCDeviceUid | string | Client device UID |
| XCHostname | string | Client hostname |
| XCLatitude | real | Client latitude |
| XClientSslErr | string | Client SSL error |
| XCLocalTime | string | Client local time |
| XCLocalTimestamp | long | Client local timestamp (epoch) |
| XCLocation | string | Client location |
| XCLongitude | real | Client longitude |
| XCNsclientClientProfile | string | Netskope client profile |
| XCNsclientSteeringProfile | string | Netskope steering profile |
| XCNsclientVersion | string | Netskope client version |
| XCOs | string | Client operating system |
| XCOsFamily | string | Client OS family |
| XCOsVersion | string | Client OS version |
| XCRegion | string | Client region |
| XCsAccessMethod | string | Access method (Client, API, etc.) |
| XCsAccessProxy | string | Access proxy |
| XCsApp | string | Application name |
| XCsAppActivity | string | Application activity |
| XCsAppCategory | string | Application category |
| XCsAppCci | int | Application Cloud Confidence Index |
| XCsAppCcl | string | Application Cloud Confidence Level |
| XCsAppFromUser | string | Application from user |
| XCsAppInstanceId | string | Application instance ID |
| XCsAppInstanceName | string | Application instance name |
| XCsAppInstanceTag | string | Application instance tag |
| XCsAppInstanceTags | string | App instance tags |
| XCsAppObjectId | string | Application object ID |
| XCsAppObjectName | string | Application object name |
| XCsAppObjectType | string | Application object type |
| XCsAppSuite | string | Application suite |
| XCsAppTags | string | Application tags |
| XCsAppToUser | string | Application to user |
| XCsConnectHost | string | Connect host |
| XCsConnectPort | string | Connect port |
| XCsConnectUserAgent | string | Connect user agent |
| XCsConnectXau | string | Connect X-Authenticated-User |
| XCsDomainFrontedSni | string | Domain fronted SNI |
| XCsDstIp | string | Client destination IP |
| XCsDstPort | int | Client destination port |
| XCsHttpVersion | string | HTTP version |
| XCsIpConnectXff | string | Connect X-Forwarded-For |
| XCsIpXff | string | X-Forwarded-For header |
| XCsNsclientTunnelType | string | Netskope client tunnel type |
| XCsPageId | string | Page ID |
| XCsParentProcess | string | Parent process name |
| XCsPid | string | Process ID |
| XCsPpid | string | Parent process ID |
| XCsProcess | string | Process name |
| XCsSessionId | string | Session ID |
| XCsSite | string | Site |
| XCsSni | string | Server Name Indication (SNI) |
| XCsSrcIp | string | Client source IP |
| XCsSrcIpEgress | string | Client source IP egress |
| XCsSrcPort | int | Client source port |
| XCsSslCipher | string | Client SSL cipher |
| XCsSslEngineAction | string | Client SSL engine action |
| XCsSslEngineActionReason | string | Client SSL engine action reason |
| XCsSslFrontingError | string | SSL fronting error |
| XCsSslHandshakeError | string | Client SSL handshake error |
| XCsSslJa3 | string | SSL JA3 fingerprint |
| XCsSslMalformedSsl | string | Client SSL malformed |
| XCsSslVersion | string | Client SSL version |
| XCsTimestamp | long | Event timestamp (epoch seconds) |
| XCsTrafficType | string | Traffic type |
| XCsTunnelId | string | Tunnel ID |
| XCsUriPath | string | URI path |
| XCsUrl | string | Full URL |
| XCsUserIp | string | User IP address |
| XCsXau | string | X-Authenticated-User |
| XCTimezone | string | Client timezone |
| XCUserConfidenceIndex | string | User confidence index |
| XCZipcode | int | Client zipcode |
| XEipPolicyFootprint | string | EIP policy footprint |
| XEipPolicyName | string | EIP policy name |
| XError | string | Error message |
| XOtherCategory | string | Other URL category |
| XOtherCategoryId | string | Other category ID |
| XPolicyAction | string | Policy action |
| XPolicyCategories | string | Policy categories |
| XPolicyDstHost | string | Policy destination host |
| XPolicyDstHostSource | string | Policy destination host source |
| XPolicyDstIp | string | Policy destination IP |
| XPolicyJustificationReason | string | Policy justification reason |
| XPolicyJustificationType | string | Policy justification type |
| XPolicyName | string | Policy name |
| XPolicySrcIp | string | Policy source IP |
| XRCertEnd | string | Remote cert end |
| XRCertEndDate | string | Remote cert end date |
| XRCertExpired | string | Remote cert expired flag |
| XRCertIncompleteChain | string | Remote cert incomplete chain flag |
| XRCertIssuerCn | string | Remote cert issuer CN |
| XRCertMismatch | string | Remote cert mismatch flag |
| XRCertRevocationCheck | string | Remote cert revocation check status |
| XRCertRevoked | string | Remote cert revoked flag |
| XRCertSelfSigned | string | Remote cert self-signed flag |
| XRCertStart | string | Remote cert start |
| XRCertStartDate | string | Remote cert start date |
| XRCertSubjectCn | string | Remote cert subject CN |
| XRCertUntrustedRoot | string | Remote cert untrusted root flag |
| XRCertValid | string | Remote cert valid flag |
| XRCountry | string | Remote country |
| XRequestId | string | Request ID |
| XRLatitude | real | Remote latitude |
| XRLocation | string | Remote location |
| XRLongitude | real | Remote longitude |
| XRRegion | string | Remote region |
| XRsFileCategory | string | File category |
| XRsFileLanguage | string | File language |
| XRsFileMd5 | string | File MD5 hash |
| XRsFileSha256 | string | File SHA256 hash |
| XRsFileSize | int | File size in bytes |
| XRsFileType | string | File type |
| XRZipcode | int | Remote zipcode |
| XScNotificationName | string | Notification name |
| XSCountry | string | Server country |
| XSCustomSigningCaError | string | Custom signing CA error |
| XSDpName | string | Data plane name |
| XServerSslErr | string | Server SSL error |
| XSLatitude | real | Server latitude |
| XSLocation | string | Server location |
| XSLongitude | real | Server longitude |
| XSrDstIp | string | Server destination IP |
| XSrDstPort | int | Server destination port |
| XSRegion | string | Server region |
| XSrForwardDest | string | Server request forward destination |
| XSrHeadersName | string | Response headers name |
| XSrHeadersValue | string | Response headers value |
| XSrSrcIp | string | Server source IP |
| XSrSrcPort | string | Server source port |
| XSrSslCipher | string | Server SSL cipher |
| XSrSslClientCertificateError | string | Server SSL client certificate error |
| XSrSslEngineAction | string | Server SSL engine action |
| XSrSslEngineActionReason | string | Server SSL engine action reason |
| XSrSslHandshakeError | string | Server SSL handshake error |
| XSrSslJa3S | string | SSL JA3S fingerprint |
| XSrSslMalformedSsl | string | Server SSL malformed flag |
| XSrSslVersion | string | Server SSL version |
| XSslBypass | string | SSL bypass flag |
| XSslBypassReason | string | SSL bypass reason |
| XSslPolicyAction | string | SSL policy action |
| XSslPolicyCategories | string | SSL policy categories |
| XSslPolicyDstHost | string | SSL policy destination host |
| XSslPolicyDstHostSource | string | SSL policy destination host source |
| XSslPolicyDstIp | string | SSL policy destination IP |
| XSslPolicyIssuer | string | SSL policy issuer |
| XSslPolicyName | string | SSL policy name |
| XSslPolicySrcIp | string | SSL policy source IP |
| XSupport | string | Support |
| XSZipcode | int | Server zipcode |
| XTenantId | string | Tenant ID |
| XTpEngine | string | Threat protection engine |
| XTpMalwareName | string | Threat protection malware name |
| XTpResult | string | Threat protection result |
| XTpSeverity | string | Threat protection severity |
| XTransactionId | string | Transaction ID |
| XType | string | Event type |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (2)

This table is used by the following solutions:

- [NetskopeWebTx](../solutions/netskopewebtx.md)
- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Web Transactions (via Blob Storage)](../connectors/netskopewebtxconnector.md) |  |

---

## Content Items Using This Table (12)

### Analytic Rules (10)

**In solution [NetskopeWebTx](../solutions/netskopewebtx.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Netskope - Anomalous User Behavior (High Volume from Unmanaged Device)](../content/netskopewebtx-netskope-anomalous-user-behavior-high-volume-from-unmanaged-device-fa4c4f1c-3c5f-4c3a-a13f-924c30db56e9-a11677b7.md) |  |
| [Netskope - Data Movement Tracking (Upload/Download Monitoring)](../content/netskopewebtx-netskope-data-movement-tracking-upload-download-monitoring-cf103180-cb81-4796-921d-3cc7eef4e817-0505a110.md) |  |
| [Netskope - Excessive Downloads Detection (Spike vs Baseline)](../content/netskopewebtx-netskope-excessive-downloads-detection-spike-vs-baseline-dd0ebd84-ffbe-45df-848b-0615ac446b04-e6a1be75.md) |  |
| [Netskope - Heavy Personal Cloud Storage Usage (Shadow IT)](../content/netskopewebtx-netskope-heavy-personal-cloud-storage-usage-shadow-it-272f9bca-5fd0-4413-b494-03b2d9f0bb9b-b4a5c41b.md) |  |
| [Netskope - Impossible Travel Detection (Two Countries in Less Than 1 Hour)](../content/netskopewebtx-netskope-impossible-travel-detection-two-countries-in-less-than-1-hour-d1b88716-3cd4-4585-a9a2-2dd2c9b04ecb-2929a498.md) |  |
| [Netskope - Large Outbound Data Transfer / Sensitive Upload (DLP)](../content/netskopewebtx-netskope-large-outbound-data-transfer-sensitive-upload-dlp-71e6586e-0d3f-4e33-b390-faa50b5e08fa-c78990bd.md) |  |
| [Netskope - New Risky App Access vs 7-Day Baseline](../content/netskopewebtx-netskope-new-risky-app-access-vs-7-day-baseline-ba66b81c-2cf7-4c53-9db0-e8b6f537704a-4dbceb22.md) |  |
| [Netskope - Repeated or Critical Policy Violations](../content/netskopewebtx-netskope-repeated-or-critical-policy-violations-dacab67e-fcf3-41c6-a191-579c7be1814d-4ad41000.md) |  |
| [Netskope - Suspicious Network Context (Unusual IPs/Geo/Ports)](../content/netskopewebtx-netskope-suspicious-network-context-unusual-ips-geo-ports-6d989fb0-933e-4ae6-88fa-10e7b51c8897-d6216d9a.md) |  |
| [Netskope - Unsanctioned/Risky Cloud App Access (Shadow IT)](../content/netskopewebtx-netskope-unsanctioned-risky-cloud-app-access-shadow-it-cdc01279-d6ea-41b1-a32d-49d726be95b8-be0feda5.md) |  |

### Workbooks (2)

**In solution [NetskopeWebTx](../solutions/netskopewebtx.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeWebTx_Workbook](../content/netskopewebtx-netskopewebtx-workbook-95a52b5a.md) |  |

**In solution [Netskopev2](../solutions/netskopev2.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeCCFWebtxDashboard](../content/netskopev2-netskopeccfwebtxdashboard-f8af7cbe.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetskopeCCFWebTransactions](../parsers/netskopeccfwebtransactions.md) | [Netskopev2](../solutions/netskopev2.md) |  |
| [NetskopeWebtx](../parsers/netskopewebtx.md) | [NetskopeWebTx](../solutions/netskopewebtx.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

