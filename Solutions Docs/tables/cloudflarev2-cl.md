# CloudflareV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (494 columns)

**Source:** Data Collection Rule definition ([1](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare%20CCF/Data%20Connectors/CloudflareLog_CCF/CloudflareLog_DCR.json), [2](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare/Data%20Connectors/CloudflareLog_CCF/CloudflareLog_DCR.json))

| Column Name | Type |
|:------------|:-----|
| AccountID | string |
| Action | string |
| ActionResult | boolean |
| ActionType | string |
| ActorEmail | string |
| ActorID | string |
| ActorIP | string |
| ActorType | string |
| AlertID | string |
| AlertReasons | string |
| Allowed | boolean |
| AppDomain | string |
| Application | string |
| ApplicationIDs | int |
| ApplicationNames | string |
| AppUUID | string |
| AssetDisplayName | string |
| AssetExternalID | string |
| AssetLink | string |
| AssetMetadata | string |
| Attachments | string |
| AttackCampaignID | string |
| AttackID | string |
| AttackVector | string |
| AuthoritativeNameServerIPs | string |
| BlockedFileHash | string |
| BlockedFileName | string |
| BlockedFileReason | string |
| BlockedFileSize | int |
| BlockedFileType | string |
| Body | string |
| BodyLength | int |
| BotDetectionIDs | int |
| BotDetectionTags | string |
| BotScore | int |
| BotScoreSrc | string |
| BotTags | string |
| BytesReceived | int |
| BytesSent | int |
| CacheCacheStatus | string |
| CacheReserveUsed | boolean |
| CacheResponseBytes | int |
| CacheResponseStatus | int |
| CacheTieredFill | boolean |
| CategoryIDs | int |
| CategoryNames | string |
| CC | string |
| CCName | string |
| ClientAddress | string |
| ClientASN | int |
| ClientASNDescription | string |
| ClientBytes | int |
| ClientCity | string |
| ClientCountry | string |
| ClientDeviceType | string |
| ClientIP | string |
| ClientIPASN | int |
| ClientIPASNDescription | string |
| ClientIPClass | string |
| ClientIPCountry | string |
| ClientLatitude | string |
| ClientLongitude | string |
| ClientMatchedIpFirewall | string |
| ClientMTLSAuthCertFingerprint | string |
| ClientMTLSAuthStatus | string |
| ClientPort | int |
| ClientProto | string |
| ClientRefererHost | string |
| ClientRefererPath | string |
| ClientRefererQuery | string |
| ClientRefererScheme | string |
| ClientRegionCode | string |
| ClientRequestBytes | int |
| ClientRequestHost | string |
| ClientRequestMethod | string |
| ClientRequestPath | string |
| ClientRequestProtocol | string |
| ClientRequestQuery | string |
| ClientRequestReferer | string |
| ClientRequestScheme | string |
| ClientRequestSource | string |
| ClientRequestURI | string |
| ClientRequestUserAgent | string |
| ClientResponseCode | int |
| ClientSrcPort | int |
| ClientSSLCipher | string |
| ClientSSLProtocol | string |
| ClientTCPHandshakeDurationMs | int |
| ClientTcpRtt | int |
| ClientTCPRTTMs | int |
| ClientTLSCipher | string |
| ClientTlsClientHelloServerName | string |
| ClientTLSHandshakeDurationMs | int |
| ClientTlsProtocol | string |
| ClientTlsStatus | string |
| ClientTLSVersion | string |
| ClientVersion | string |
| ClientXRequestedWith | string |
| ClusterID | string |
| CNAMECategoryIDs | int |
| CNAMECategoryNames | string |
| CNAMEs | string |
| CNAMEsReversed | string |
| ColoCity | string |
| ColoCode | string |
| ColoCountry | string |
| ColoGeoHash | string |
| ColoID | int |
| ColoName | string |
| Connection | string |
| ConnectionCloseReason | string |
| ConnectionReuse | boolean |
| ConnectTimestamp | string |
| ContentScanObjResults | string |
| ContentScanObjSizes | int |
| ContentScanObjTypes | string |
| Cookies | string |
| Country | string |
| CPUTimeMs | int |
| CreatedAt | string |
| CSPDirective | string |
| CustomResolveDurationMs | int |
| CustomResolverAddress | string |
| CustomResolverPolicyID | string |
| CustomResolverPolicyName | string |
| CustomResolverResponse | string |
| Datetime | string |
| Decision | string |
| Description | string |
| DestAddr | string |
| DestinationASN | int |
| DestinationASNName | string |
| DestinationCountry | string |
| DestinationGeoHash | string |
| DestinationIP | string |
| DestinationIPContinentCode | string |
| DestinationIPCountryCode | string |
| DestinationPort | int |
| DestinationTunnelID | string |
| DetectedProtocol | string |
| DetectedTimestamp | string |
| DeviceID | string |
| DeviceManufacturer | string |
| DeviceModel | string |
| DeviceName | string |
| DeviceSerialNumber | string |
| DeviceType | string |
| Direction | string |
| DisconnectTimestamp | string |
| DispatchNamespace | string |
| DoHSubdomain | string |
| DomainName | string |
| DoTSubdomain | string |
| DownloadedFileNames | string |
| DownloadMatchedDlpProfileEntries | string |
| DownloadMatchedDlpProfiles | string |
| DstIP | string |
| DstPort | int |
| EDEErrors | int |
| EdgeCFConnectingO2O | boolean |
| EdgeColoCode | string |
| EdgeColoID | int |
| EdgeEndTimestamp | string |
| EdgePathingOp | string |
| EdgePathingSrc | string |
| EdgePathingStatus | string |
| EdgeRequestHost | string |
| EdgeResponseBodyBytes | int |
| EdgeResponseBytes | int |
| EdgeResponseCompressionRatio | string |
| EdgeResponseContentType | string |
| EdgeResponseStatus | int |
| EdgeServerIP | string |
| EdgeStartTimestamp | string |
| EdgeTimeToFirstByteMs | int |
| EDNSSubnet | string |
| EDNSSubnetLength | int |
| EgressColoName | string |
| EgressIP | string |
| EgressPort | int |
| EgressRuleID | string |
| EgressRuleName | string |
| Email | string |
| Entrypoint | string |
| Error | string |
| Event | string |
| EventDetails | dynamic |
| EventTimestampMs | int |
| EventType | string |
| Exceptions | string |
| FileInfo | string |
| FinalDisposition | string |
| FindingTypeDisplayName | string |
| FindingTypeID | string |
| FindingTypeSeverity | string |
| ForensicCopyID | string |
| ForensicCopyStatus | string |
| From | string |
| FromName | string |
| GatewayRequestID | string |
| GREChecksum | int |
| GREEtherType | int |
| GREHeaderLength | int |
| GREKey | int |
| GRESequenceNumber | int |
| GREVersion | int |
| Headers | string |
| Host | string |
| HTTPHost | string |
| HTTPMethod | string |
| HTTPStatusCode | int |
| HTTPVersion | string |
| ICMPChecksum | int |
| ICMPCode | int |
| ICMPType | int |
| ID | string |
| IngressColoName | string |
| InitialCategoryIDs | int |
| InitialCategoryNames | string |
| InitialResolvedIPs | string |
| InstanceID | string |
| IntegrationDisplayName | string |
| IntegrationID | string |
| IntegrationPolicyVendor | string |
| Interface | string |
| InternalDNSFallbackStrategy | string |
| InternalDNSRCode | int |
| InternalDNSViewID | string |
| InternalDNSZoneID | string |
| IP | string |
| IPAddress | string |
| IPDestinationAddress | string |
| IPDestinationSubnet | string |
| IpFirewall | boolean |
| IPFragmentOffset | int |
| IPHeaderLength | int |
| IPMoreFragments | int |
| IPProtocol | int |
| IPProtocolName | string |
| IPSourceAddress | string |
| IPSourceSubnet | string |
| IPTotalLength | int |
| IPTotalLengthBuckets | int |
| IPTTL | int |
| IPTTLBuckets | int |
| IPv4Checksum | int |
| IPv4DontFragment | int |
| IPv4DSCP | int |
| IPv4ECN | int |
| IPv4Identification | int |
| IPv4Options | string |
| IPv6DSCP | int |
| IPv6ECN | int |
| IPv6ExtensionHeaders | string |
| IPv6FlowLabel | int |
| IPv6Identification | int |
| IsIsolated | boolean |
| IsResponseCached | boolean |
| JA3Hash | string |
| JA4 | string |
| JA4Signals | string |
| Kind | string |
| LastKnownGoodColoCode | string |
| LeakedCredentialCheckResult | string |
| Links | string |
| Location | string |
| LocationID | string |
| Logs | string |
| MatchedCategoryIDs | int |
| MatchedCategoryNames | string |
| MatchedIndicatorFeedIDs | int |
| MatchedIndicatorFeedNames | string |
| MatchIndex | int |
| MessageDeliveryMode | string |
| MessageID | string |
| Metadata | string |
| Method | string |
| MitigationReason | string |
| MitigationScope | string |
| MitigationSystem | string |
| NewValue | string |
| Offramp | string |
| OldValue | string |
| Origin | string |
| OriginalSender | string |
| OriginatorRayID | string |
| OriginBytes | int |
| OriginDNSResponseTimeMs | int |
| OriginIP | string |
| OriginPort | int |
| OriginProto | string |
| OriginRequestHeaderSendDurationMs | int |
| OriginResponseBytes | int |
| OriginResponseDurationMs | int |
| OriginResponseHeaderReceiveDurationMs | int |
| OriginResponseHTTPExpires | string |
| OriginResponseHTTPLastModified | string |
| OriginResponseStatus | int |
| OriginSSLProtocol | string |
| OriginTCPHandshakeDurationMs | int |
| OriginTcpRtt | int |
| OriginTLSCertificateIssuer | string |
| OriginTLSCertificateValidationResult | string |
| OriginTLSCipher | string |
| OriginTlsFingerprint | string |
| OriginTLSHandshakeDurationMs | int |
| OriginTlsMode | string |
| OriginTlsProtocol | string |
| OriginTlsStatus | string |
| OriginTLSVersion | string |
| OSVersion | string |
| Outcome | string |
| OverrideIP | string |
| OverridePort | int |
| OwnerID | string |
| PageURL | string |
| ParentRayID | string |
| Password | string |
| Payload | string |
| Phase | string |
| PolicyID | string |
| PolicyName | string |
| PostureCheckName | string |
| PostureCheckType | string |
| PostureEvaluatedResult | boolean |
| PostureExpectedJSON | string |
| PostureReceivedJSON | string |
| PrivateAppAUD | string |
| ProgramFinishDatetime | string |
| ProgramID | string |
| ProgramStartDatetime | string |
| ProgramType | string |
| Protocol | string |
| ProtocolState | string |
| ProxyEndpoint | string |
| ProxyProtocol | string |
| PTY | string |
| PurposeJustificationPrompt | string |
| PurposeJustificationResponse | string |
| Quarantined | boolean |
| QueryCategoryIDs | int |
| QueryCategoryNames | string |
| QueryDO | boolean |
| QueryID | string |
| QueryIndicatorFeedIDs | int |
| QueryIndicatorFeedNames | string |
| QueryName | string |
| QueryNameReversed | string |
| QueryRD | boolean |
| QuerySize | int |
| QueryTCP | boolean |
| QueryType | int |
| QueryTypeName | string |
| R2Path | string |
| RayID | string |
| RCode | int |
| RData | string |
| RedirectTargetURI | string |
| Ref | string |
| Referer | string |
| Referrer | string |
| RegistrationID | string |
| ReplyTo | string |
| ReplyToName | string |
| RequestContextCategoryIDs | int |
| RequestContextCategoryNames | string |
| RequestHeaders | string |
| RequestID | string |
| ResolvedIPCategoryIDs | int |
| ResolvedIPCategoryNames | string |
| ResolvedIPContinentCodes | string |
| ResolvedIPCountryCodes | string |
| ResolverDecision | string |
| ResourceID | string |
| ResourceRecords | string |
| ResourceRecordsJSON | string |
| ResourceType | string |
| ResponseCached | boolean |
| ResponseCachedStale | boolean |
| ResponseHeaders | string |
| ResponseReason | string |
| RuleEvaluationDurationMs | int |
| RuleID | string |
| RuleName | string |
| RulesetID | string |
| RulesetOverrideID | string |
| SampleInterval | int |
| ScriptName | string |
| ScriptTags | string |
| ScriptVersion | string |
| SecurityAction | string |
| SecurityActions | string |
| SecurityRuleDescription | string |
| SecurityRuleID | string |
| SecurityRuleIDs | string |
| SecuritySources | string |
| ServerAddress | string |
| SessionEndTime | datetime |
| SessionFinishDatetime | string |
| SessionID | string |
| SessionStartDatetime | string |
| SessionStartTime | datetime |
| SignatureID | int |
| SignatureMessage | string |
| SignatureRevision | int |
| SinkholeID | string |
| SmartRouteColoID | int |
| SMTPEnvelopeFrom | string |
| SMTPEnvelopeTo | string |
| SMTPHeloServerIP | string |
| SMTPHeloServerIPAsName | string |
| SMTPHeloServerIPAsNumber | string |
| SMTPHeloServerIPGeo | string |
| SMTPHeloServerName | string |
| SNI | string |
| Source | string |
| SourceASN | int |
| SourceASNName | string |
| SourceCountry | string |
| SourceGeoHash | string |
| SourceInternalIP | string |
| SourceIP | string |
| SourceIPContinentCode | string |
| SourceIPCountryCode | string |
| SourcePort | int |
| SrcAddr | string |
| SrcIP | string |
| SrcIPContinentCode | string |
| SrcIPCountryCode | string |
| SrcPort | int |
| Status | int |
| Subject | string |
| TargetID | string |
| TCPAcknowledgementNumber | int |
| TCPChecksum | int |
| TCPDataOffset | int |
| TCPFlags | int |
| TCPFlagsString | string |
| TCPMSS | int |
| TCPOptions | string |
| TCPSACKBlocks | string |
| TCPSACKPermitted | int |
| TCPSequenceNumber | int |
| TCPTimestampECR | int |
| TCPTimestampValue | int |
| TCPUrgentPointer | int |
| TCPWindowScale | int |
| TCPWindowSize | int |
| TemporaryAccessApprovers | string |
| TemporaryAccessDuration | int |
| ThreatCategories | string |
| Timestamp | string |
| TimeZone | string |
| TimeZoneInferredMethod | string |
| To | string |
| ToName | string |
| TransportProtocol | string |
| TriggeredRuleID | string |
| Type | string |
| UDPChecksum | int |
| UDPPayloadLength | int |
| UntrustedCertificateAction | string |
| UploadedFileNames | string |
| UploadMatchedDlpProfileEntries | string |
| UploadMatchedDlpProfiles | string |
| UpperTierColoID | int |
| UpstreamIP | string |
| UpstreamResponseCode | int |
| UpstreamResponseTimeMs | int |
| URI | string |
| URL | string |
| URLContainsCDNCGIPath | boolean |
| URLHost | string |
| UserAgent | string |
| UserEmail | string |
| UserID | string |
| Username | string |
| UserUID | string |
| Verdict | string |
| VirtualNetworkID | string |
| VirtualNetworkName | string |
| WAFAttackScore | int |
| WAFRCEAttackScore | int |
| WAFSQLiAttackScore | int |
| WAFXSSAttackScore | int |
| WallTimeMs | int |
| When | string |
| WorkerCPUTime | int |
| WorkerScriptName | string |
| WorkerStatus | string |
| WorkerSubrequest | boolean |
| WorkerSubrequestCount | int |
| WorkerWallTimeUs | int |
| ZoneName | string |

## Solutions (2)

This table is used by the following solutions:

- [Cloudflare](../solutions/cloudflare.md)
- [Cloudflare CCF](../solutions/cloudflare-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cloudflare (Using Blob Container) (via Codeless Connector Framework)](../connectors/cloudflaredefinition.md) |  |

---

## Content Items Using This Table (41)

### Analytic Rules (20)

**In solution [Cloudflare](../solutions/cloudflare.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cloudflare - Bad client IP](../content/cloudflare-cloudflare-bad-client-ip-a7ce6135-9d55-4f14-b058-adc2e920a4fa-e8c60cea.md) |  |
| [Cloudflare - Client request from country in blocklist](../content/cloudflare-cloudflare-client-request-from-country-in-blocklist-40554544-6e4a-4413-8d14-bf2de939c5d9-6c55ff65.md) |  |
| [Cloudflare - Empty user agent](../content/cloudflare-cloudflare-empty-user-agent-729c6d21-fad9-4a6a-9c7f-482393c95957-247a8d68.md) |  |
| [Cloudflare - Multiple error requests from single source](../content/cloudflare-cloudflare-multiple-error-requests-from-single-source-ef877d68-755f-4cf1-ac1d-f336e395667c-f4754265.md) |  |
| [Cloudflare - Multiple user agents for single source](../content/cloudflare-cloudflare-multiple-user-agents-for-single-source-fc50076a-0275-43d5-b9dd-38346c061f67-3b2a6159.md) |  |
| [Cloudflare - Unexpected POST requests](../content/cloudflare-cloudflare-unexpected-post-requests-7313352a-09f6-4a84-88bd-6f17f1cbeb8f-a7e9cc98.md) |  |
| [Cloudflare - Unexpected URI](../content/cloudflare-cloudflare-unexpected-uri-dcb797cd-a4cd-4306-897b-7991f71d7e27-19b10fd2.md) |  |
| [Cloudflare - Unexpected client request](../content/cloudflare-cloudflare-unexpected-client-request-f32142b1-4bcb-45c0-92e4-2ddc18768522-72285e78.md) |  |
| [Cloudflare - WAF Allowed threat](../content/cloudflare-cloudflare-waf-allowed-threat-f53fe2a9-96b5-454c-827e-cf1764a67fb0-3f6f7a35.md) |  |
| [Cloudflare - XSS probing pattern in request](../content/cloudflare-cloudflare-xss-probing-pattern-in-request-4d9d00b9-31a6-49e4-88c1-9e68277053ac-2957f168.md) |  |

**In solution [Cloudflare CCF](../solutions/cloudflare-ccf.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cloudflare - Bad client IP](../content/cloudflare-ccf-cloudflare-bad-client-ip-a7ce6135-9d55-4f14-b058-adc2e920a4fb-c9cbdeda.md) |  |
| [Cloudflare - Client request from country in blocklist](../content/cloudflare-ccf-cloudflare-client-request-from-country-in-blocklist-40554544-6e4a-4413-8d14-bf2de939c5d0-7513ce22.md) |  |
| [Cloudflare - Empty user agent](../content/cloudflare-ccf-cloudflare-empty-user-agent-729c6d21-fad9-4a6a-9c7f-482393c95958-775bd8fd.md) |  |
| [Cloudflare - Multiple error requests from single source](../content/cloudflare-ccf-cloudflare-multiple-error-requests-from-single-source-ef877d68-755f-4cf1-ac1d-f336e395667d-cc6b36ac.md) |  |
| [Cloudflare - Multiple user agents for single source](../content/cloudflare-ccf-cloudflare-multiple-user-agents-for-single-source-fc50076a-0275-43d5-b9dd-38346c061f68-139b38f6.md) |  |
| [Cloudflare - Unexpected POST requests](../content/cloudflare-ccf-cloudflare-unexpected-post-requests-7313352a-09f6-4a84-88bd-6f17f1cbeb88-5c20ac7d.md) |  |
| [Cloudflare - Unexpected URI](../content/cloudflare-ccf-cloudflare-unexpected-uri-dcb797cd-a4cd-4306-897b-7991f71d7e28-54984760.md) |  |
| [Cloudflare - Unexpected client request](../content/cloudflare-ccf-cloudflare-unexpected-client-request-f32142b1-4bcb-45c0-92e4-2ddc18768523-993692f2.md) |  |
| [Cloudflare - WAF Allowed threat](../content/cloudflare-ccf-cloudflare-waf-allowed-threat-f53fe2a9-96b5-454c-827e-cf1764a67fb1-2846dbee.md) |  |
| [Cloudflare - XSS probing pattern in request](../content/cloudflare-ccf-cloudflare-xss-probing-pattern-in-request-4d9d00b9-31a6-49e4-88c1-9e68277053ad-3d9d3245.md) |  |

### Hunting Queries (20)

**In solution [Cloudflare](../solutions/cloudflare.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cloudflare - Client TLS errors](../content/cloudflare-cloudflare-client-tls-errors-20ef3865-fd1f-44a4-ac8f-8d026cf954e0-9983cefc.md) |  |
| [Cloudflare - Client errors](../content/cloudflare-cloudflare-client-errors-5d72f483-929a-498a-b840-dff7deed2116-1bde1650.md) |  |
| [Cloudflare - Files requested](../content/cloudflare-cloudflare-files-requested-d72d0055-ae52-43b5-859e-db72e5ef183a-ab31ca50.md) |  |
| [Cloudflare - Rare user agents](../content/cloudflare-cloudflare-rare-user-agents-a6f1938f-2f87-446c-83ac-624c277cfd32-39532c83.md) |  |
| [Cloudflare - Server TLS errors](../content/cloudflare-cloudflare-server-tls-errors-e1a9febc-6b37-47e6-b5a7-0eec7638ba82-61464440.md) |  |
| [Cloudflare - Server errors](../content/cloudflare-cloudflare-server-errors-7c8f0bed-b25c-4d48-9afa-c505e141bf4b-5dbc517e.md) |  |
| [Cloudflare - Top Network rules](../content/cloudflare-cloudflare-top-network-rules-eb7b88ab-47b1-483f-95b3-2b315d98d465-c2f97f4a.md) |  |
| [Cloudflare - Top WAF rules](../content/cloudflare-cloudflare-top-waf-rules-8a72cdb0-97d9-4547-9eca-1bdea2ccd796-db855572.md) |  |
| [Cloudflare - Unexpected countries](../content/cloudflare-cloudflare-unexpected-countries-9fc7d945-0e82-4664-aca0-dc121a5cd7be-e55d503a.md) |  |
| [Cloudflare - Unexpected edge response](../content/cloudflare-cloudflare-unexpected-edge-response-0be3ddc1-99db-4153-ba3c-2c1e5c82560d-96da6298.md) |  |

**In solution [Cloudflare CCF](../solutions/cloudflare-ccf.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cloudflare - Client TLS errors](../content/cloudflare-ccf-cloudflare-client-tls-errors-20ef3865-fd1f-44a4-ac8f-8d026cf954e2-abdbb160.md) |  |
| [Cloudflare - Client errors](../content/cloudflare-ccf-cloudflare-client-errors-5d72f483-929a-498a-b840-dff7deed2117-b06fd403.md) |  |
| [Cloudflare - Files requested](../content/cloudflare-ccf-cloudflare-files-requested-d72d0055-ae52-43b5-859e-db72e5ef183a-1f2533c9.md) |  |
| [Cloudflare - Rare user agents](../content/cloudflare-ccf-cloudflare-rare-user-agents-a6f1938f-2f87-446c-83ac-624c277cfd33-6e33b9bb.md) |  |
| [Cloudflare - Server TLS errors](../content/cloudflare-ccf-cloudflare-server-tls-errors-e1a9febc-6b37-47e6-b5a7-0eec7638ba83-9a2508f3.md) |  |
| [Cloudflare - Server errors](../content/cloudflare-ccf-cloudflare-server-errors-7c8f0bed-b25c-4d48-9afa-c505e141bf4c-9f4f0e8d.md) |  |
| [Cloudflare - Top Network rules](../content/cloudflare-ccf-cloudflare-top-network-rules-eb7b88ab-47b1-483f-95b3-2b315d98d466-7794b849.md) |  |
| [Cloudflare - Top WAF rules](../content/cloudflare-ccf-cloudflare-top-waf-rules-8a72cdb0-97d9-4547-9eca-1bdea2ccd797-8025afb4.md) |  |
| [Cloudflare - Unexpected countries](../content/cloudflare-ccf-cloudflare-unexpected-countries-9fc7d945-0e82-4664-aca0-dc121a5cd7bf-36a738f7.md) |  |
| [Cloudflare - Unexpected edge response](../content/cloudflare-ccf-cloudflare-unexpected-edge-response-0be3ddc1-99db-4153-ba3c-2c1e5c82560e-bf320a11.md) |  |

### Workbooks (1)

**In solution [Cloudflare CCF](../solutions/cloudflare-ccf.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cloudflare](../content/cloudflare-ccf-cloudflare-fc7a6590.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Cloudflare](../parsers/cloudflare.md) | [Cloudflare](../solutions/cloudflare.md) |  |
| [Cloudflare](../parsers/cloudflare.md) | [Cloudflare CCF](../solutions/cloudflare-ccf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

