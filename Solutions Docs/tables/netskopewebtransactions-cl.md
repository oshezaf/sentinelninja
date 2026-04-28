# NetskopeWebTransactions_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (147 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeWebTx%5CData%20Connectors%5CNetskopeWebTx_CCF/NetskopeWebtx_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Bytes | int | bytes. |
| CIp | string | c-ip. |
| CsBytes | int | cs-bytes. |
| CsContentType | string | cs-content-type. |
| CsDns | string | cs-dns. |
| CsHost | string | cs-host. |
| CsMethod | string | cs-method. |
| CsReferer | string | cs-referer. |
| CsUri | string | cs-uri. |
| CsUriPort | int | cs-uri-port. |
| CsUriQuery | string | cs-uri-query. |
| CsUriScheme | string | cs-uri-scheme. |
| CsUserAgent | string | cs-user-agent. |
| CsUsername | string | cs-username. |
| Date | string | date. |
| RsStatus | int | rs-status. |
| ScBytes | int | sc-bytes. |
| ScContentType | string | sc-content-type. |
| ScStatus | int | sc-status. |
| SIp | string | s-ip. |
| Time | string | time. |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| TimeTaken | int | time-taken. |
| XCategory | string | x-category. |
| XCategoryId | int | x-category-id. |
| XCBrowser | string | x-c-browser. |
| XCBrowserVersion | int | x-c-browser-version. |
| XCCountry | string | x-c-country. |
| XCDevice | string | x-c-device. |
| XCLatitude | real | x-c-latitude. |
| XClientSslErr | string | x-client-ssl-err. |
| XCLocalTime | string | x-c-local-time. |
| XCLocation | string | x-c-location. |
| XCLongitude | real | x-c-longitude. |
| XCOs | string | x-c-os. |
| XCRegion | string | x-c-region. |
| XCsAccessMethod | string | x-cs-access-method. |
| XCsApp | string | x-cs-app. |
| XCsAppActivity | string | x-cs-app-activity. |
| XCsAppCategory | string | x-cs-app-category. |
| XCsAppCci | int | x-cs-app-cci. |
| XCsAppCcl | string | x-cs-app-ccl. |
| XCsAppFromUser | string | x-cs-app-from-user. |
| XCsAppInstanceId | string | x-cs-app-instance-id. |
| XCsAppInstanceName | string | x-cs-app-instance-name. |
| XCsAppInstanceTag | string | x-cs-app-instance-tag. |
| XCsAppObjectId | string | x-cs-app-object-id. |
| XCsAppObjectName | string | x-cs-app-object-name. |
| XCsAppObjectType | string | x-cs-app-object-type. |
| XCsAppSuite | string | x-cs-app-suite. |
| XCsAppTags | string | x-cs-app-tags. |
| XCsAppToUser | string | x-cs-app-to-user. |
| XCsConnectHost | string | x-cs-connect-host. |
| XCsConnectPort | string | x-cs-connect-port. |
| XCsConnectUserAgent | string | x-cs-connect-user-agent. |
| XCsDomainFrontedSni | string | x-cs-domain-fronted-sni. |
| XCsDstIp | string | x-cs-dst-ip. |
| XCsDstPort | int | x-cs-dst-port. |
| XCsHttpVersion | string | x-cs-http-version. |
| XCsIpConnectXff | string | x-cs-ip-connect-xff. |
| XCsIpXff | string | x-cs-ip-xff. |
| XCsPageId | string | x-cs-page-id. |
| XCsSessionId | string | x-cs-session-id. |
| XCsSite | string | x-cs-site. |
| XCsSni | string | x-cs-sni. |
| XCsSrcIp | string | x-cs-src-ip. |
| XCsSrcIpEgress | string | x-cs-src-ip-egress. |
| XCsSrcPort | int | x-cs-src-port. |
| XCsSslCipher | string | x-cs-ssl-cipher. |
| XCsSslEngineAction | string | x-cs-ssl-engine-action. |
| XCsSslEngineActionReason | string | x-cs-ssl-engine-action-reason. |
| XCsSslFrontingError | string | x-cs-ssl-fronting-error. |
| XCsSslHandshakeError | string | x-cs-ssl-handshake-error. |
| XCsSslJa3 | string | x-cs-ssl-ja3. |
| XCsSslVersion | string | x-cs-ssl-version. |
| XCsTimestamp | long | x-cs-timestamp. |
| XCsTrafficType | string | x-cs-traffic-type. |
| XCsTunnelId | string | x-cs-tunnel-id. |
| XCsUriPath | string | x-cs-uri-path. |
| XCsUrl | string | x-cs-url. |
| XCsUserIp | string | x-cs-userip. |
| XCZipcode | int | x-c-zipcode. |
| XError | string | x-error. |
| XOtherCategory | string | x-other-category. |
| XOtherCategoryId | string | x-other-category-id. |
| XPolicyAction | string | x-policy-action. |
| XPolicyDstHost | string | x-policy-dst-host. |
| XPolicyDstHostSource | string | x-policy-dst-host-source. |
| XPolicyDstIp | string | x-policy-dst-ip. |
| XPolicyJustificationReason | string | x-policy-justification-reason. |
| XPolicyJustificationType | string | x-policy-justification-type. |
| XPolicyName | string | x-policy-name. |
| XPolicySrcIp | string | x-policy-src-ip. |
| XRCertEndDate | string | x-r-cert-enddate. |
| XRCertExpired | string | x-r-cert-expired. |
| XRCertIncompleteChain | string | x-r-cert-incomplete-chain. |
| XRCertIssuerCn | string | x-r-cert-issuer-cn. |
| XRCertMismatch | string | x-r-cert-mismatch. |
| XRCertRevocationCheck | string | x-r-cert-revocation-check. |
| XRCertRevoked | string | x-r-cert-revoked. |
| XRCertSelfSigned | string | x-r-cert-self-signed. |
| XRCertStartDate | string | x-r-cert-startdate. |
| XRCertSubjectCn | string | x-r-cert-subject-cn. |
| XRCertUntrustedRoot | string | x-r-cert-untrusted-root. |
| XRCertValid | string | x-r-cert-valid. |
| XRequestId | string | x-request-id. |
| XRsFileCategory | string | x-rs-file-category. |
| XRsFileLanguage | string | x-rs-file-language. |
| XRsFileMd5 | string | x-rs-file-md5. |
| XRsFileSha256 | string | x-rs-file-sha256. |
| XRsFileSize | int | x-rs-file-size. |
| XRsFileType | string | x-rs-file-type. |
| XScNotificationName | string | x-sc-notification-name. |
| XSCountry | string | x-s-country. |
| XSCustomSigningCaError | string | x-s-custom-signing-ca-error. |
| XSDpName | string | x-s-dp-name. |
| XServerSslErr | string | x-server-ssl-err. |
| XSLatitude | real | x-s-latitude. |
| XSLocation | string | x-s-location. |
| XSLongitude | real | x-s-longitude. |
| XSrDstIp | string | x-sr-dst-ip. |
| XSrDstPort | int | x-sr-dst-port. |
| XSRegion | string | x-s-region. |
| XSrHeadersName | string | x-sr-headers-name. |
| XSrHeadersValue | string | x-sr-headers-value. |
| XSrSrcIp | string | x-sr-src-ip. |
| XSrSrcPort | string | x-sr-src-port. |
| XSrSslCipher | string | x-sr-ssl-cipher. |
| XSrSslClientCertificateError | string | x-sr-ssl-client-certificate-error. |
| XSrSslEngineAction | string | x-sr-ssl-engine-action. |
| XSrSslEngineActionReason | string | x-sr-ssl-engine-action-reason. |
| XSrSslHandshakeError | string | x-sr-ssl-handshake-error. |
| XSrSslJa3S | string | x-sr-ssl-ja3s. |
| XSrSslMalformedSsl | string | x-sr-ssl-malformed-ssl. |
| XSrSslVersion | string | x-sr-ssl-version. |
| XSslBypass | string | x-ssl-bypass. |
| XSslBypassReason | string | x-ssl-bypass-reason. |
| XSslPolicyAction | string | x-ssl-policy-action. |
| XSslPolicyCategories | string | x-ssl-policy-categories. |
| XSslPolicyDstHost | string | x-ssl-policy-dst-host. |
| XSslPolicyDstHostSource | string | x-ssl-policy-dst-host-source. |
| XSslPolicyDstIp | string | x-ssl-policy-dst-ip. |
| XSslPolicyName | string | x-ssl-policy-name. |
| XSslPolicySrcIp | string | x-ssl-policy-src-ip. |
| XSZipcode | int | x-s-zipcode. |
| XTransactionId | string | x-transaction-id. |
| XType | string | x-type. |

## Solutions (2)

This table is used by the following solutions:

- [NetskopeWebTx](../solutions/netskopewebtx.md)
- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Web Transaction Connector (via Blob Storage)](../connectors/netskopewebtxconnector.md) |  |

---

## Content Items Using This Table (13)

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

### Workbooks (3)

**In solution [NetskopeWebTx](../solutions/netskopewebtx.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeWebTx_Workbook](../content/netskopewebtx-netskopewebtx-workbook-95a52b5a.md) |  |

**In solution [Netskopev2](../solutions/netskopev2.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeCCFWebtxDashboard](../content/netskopev2-netskopeccfwebtxdashboard-f8af7cbe.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeWebTx_Workbook](../content/github-only-netskopewebtx-workbook-8c510694.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetskopeCCFWebTransactions](../parsers/netskopeccfwebtransactions.md) | [Netskopev2](../solutions/netskopev2.md) |  |
| [NetskopeWebtx](../parsers/netskopewebtx.md) | [NetskopeWebTx](../solutions/netskopewebtx.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

