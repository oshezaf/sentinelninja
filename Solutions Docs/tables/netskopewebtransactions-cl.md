# NetskopeWebTransactions_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (147 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetskopeCCFWebTx_CL.json)

| Column Name | Type |
|:------------|:-----|
| Bytes | int |
| CIp | string |
| CsBytes | int |
| CsContentType | string |
| CsDns | string |
| CsHost | string |
| CsMethod | string |
| CsReferer | string |
| CsUri | string |
| CsUriPort | int |
| CsUriQuery | string |
| CsUriScheme | string |
| CsUserAgent | string |
| CsUsername | string |
| Date | string |
| RsStatus | int |
| ScBytes | int |
| ScContentType | string |
| ScStatus | int |
| SIp | string |
| Time | string |
| TimeGenerated | datetime |
| TimeTaken | int |
| XCategory | string |
| XCategoryId | int |
| XCBrowser | string |
| XCBrowserVersion | int |
| XCCountry | string |
| XCDevice | string |
| XCLatitude | real |
| XClientSslErr | string |
| XCLocalTime | string |
| XCLocation | string |
| XCLongitude | real |
| XCOs | string |
| XCRegion | string |
| XCsAccessMethod | string |
| XCsApp | string |
| XCsAppActivity | string |
| XCsAppCategory | string |
| XCsAppCci | int |
| XCsAppCcl | string |
| XCsAppFromUser | string |
| XCsAppInstanceId | string |
| XCsAppInstanceName | string |
| XCsAppInstanceTag | string |
| XCsAppObjectId | string |
| XCsAppObjectName | string |
| XCsAppObjectType | string |
| XCsAppSuite | string |
| XCsAppTags | string |
| XCsAppToUser | string |
| XCsConnectHost | string |
| XCsConnectPort | string |
| XCsConnectUserAgent | string |
| XCsDomainFrontedSni | string |
| XCsDstIp | string |
| XCsDstPort | int |
| XCsHttpVersion | string |
| XCsIpConnectXff | string |
| XCsIpXff | string |
| XCsPageId | string |
| XCsSessionId | string |
| XCsSite | string |
| XCsSni | string |
| XCsSrcIp | string |
| XCsSrcIpEgress | string |
| XCsSrcPort | int |
| XCsSslCipher | string |
| XCsSslEngineAction | string |
| XCsSslEngineActionReason | string |
| XCsSslFrontingError | string |
| XCsSslHandshakeError | string |
| XCsSslJa3 | string |
| XCsSslVersion | string |
| XCsTimestamp | long |
| XCsTrafficType | string |
| XCsTunnelId | string |
| XCsUriPath | string |
| XCsUrl | string |
| XCsUserIp | string |
| XCZipcode | int |
| XError | string |
| XOtherCategory | string |
| XOtherCategoryId | string |
| XPolicyAction | string |
| XPolicyDstHost | string |
| XPolicyDstHostSource | string |
| XPolicyDstIp | string |
| XPolicyJustificationReason | string |
| XPolicyJustificationType | string |
| XPolicyName | string |
| XPolicySrcIp | string |
| XRCertEndDate | string |
| XRCertExpired | string |
| XRCertIncompleteChain | string |
| XRCertIssuerCn | string |
| XRCertMismatch | string |
| XRCertRevocationCheck | string |
| XRCertRevoked | string |
| XRCertSelfSigned | string |
| XRCertStartDate | string |
| XRCertSubjectCn | string |
| XRCertUntrustedRoot | string |
| XRCertValid | string |
| XRequestId | string |
| XRsFileCategory | string |
| XRsFileLanguage | string |
| XRsFileMd5 | string |
| XRsFileSha256 | string |
| XRsFileSize | int |
| XRsFileType | string |
| XScNotificationName | string |
| XSCountry | string |
| XSCustomSigningCaError | string |
| XSDpName | string |
| XServerSslErr | string |
| XSLatitude | real |
| XSLocation | string |
| XSLongitude | real |
| XSrDstIp | string |
| XSrDstPort | int |
| XSRegion | string |
| XSrHeadersName | string |
| XSrHeadersValue | string |
| XSrSrcIp | string |
| XSrSrcPort | string |
| XSrSslCipher | string |
| XSrSslClientCertificateError | string |
| XSrSslEngineAction | string |
| XSrSslEngineActionReason | string |
| XSrSslHandshakeError | string |
| XSrSslJa3S | string |
| XSrSslMalformedSsl | string |
| XSrSslVersion | string |
| XSslBypass | string |
| XSslBypassReason | string |
| XSslPolicyAction | string |
| XSslPolicyCategories | string |
| XSslPolicyDstHost | string |
| XSslPolicyDstHostSource | string |
| XSslPolicyDstIp | string |
| XSslPolicyName | string |
| XSslPolicySrcIp | string |
| XSZipcode | int |
| XTransactionId | string |
| XType | string |

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Netskopev2](../solutions/netskopev2.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeCCFWebtxDashboard](../content/netskopev2-netskopeccfwebtxdashboard-f8af7cbe.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetskopeCCFWebTransactions](../parsers/netskopeccfwebtransactions.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

