# AkamaiSIEMEvent_CL

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

## Schema (55 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Akamai%20DDOS%20Protection%5CData%20Connectors%5CAkamaiDDOSProtection_CCF/table_AkamaiSIEMEvent.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ApiId | string | API definition identifier if the event is associated with an API endpoint. |
| ApiVersion | string | API schema version for this event. |
| AppliedAction | string | Action taken in response to the attack (e.g., alert, deny, abort). |
| BotResponseSegment | string | Bot Manager response segment identifier used to categorise the bot action taken. |
| BotScore | string | Bot risk score assigned by Akamai Bot Manager (0-100; higher = more bot-like). |
| ClientAppBundleId | string | Mobile application bundle identifier, present for requests from Akamai SDK-instrumented mobile apps. |
| ClientAppVersion | string | Version of the mobile application, present for SDK-instrumented requests. |
| ClientIp | string | IP address of the client that triggered the security event. |
| ClientReputation | string | Client reputation score or category as assessed by Akamai. |
| ClientSdkVersion | string | Version of the Akamai mobile SDK embedded in the client application. |
| ClientTelemetryType | string | Telemetry source type code indicating how the client data was collected. |
| ConfigId | string | Unique identifier of the Akamai security configuration that generated the event. |
| EventType | string | Event type identifier, typically 'akamai_siem'. |
| Format | string | Response format descriptor returned by the API (e.g., 'json'). |
| GeoAsn | string | Autonomous System Number (ASN) of the client's network. |
| GeoCity | string | City derived from the client's IP address. |
| GeoContinent | string | Numeric continent identifier derived from the client's IP address, as returned by the Akamai geo lookup. |
| GeoCountry | string | ISO 3166-1 alpha-2 country code derived from the client's IP address. |
| GeoRegionCode | string | Region or state code derived from the client's IP address. |
| HttpHost | string | HTTP Host header value from the inbound request. |
| HttpMethod | string | HTTP method of the request (e.g., GET, POST, PUT). |
| HttpPath | string | Request URL path. |
| HttpPort | string | TCP port number used for the connection. |
| HttpProtocol | string | HTTP protocol version (e.g., HTTP/1.1, HTTP/2). |
| HttpQueryString | string | URL query string of the request. |
| HttpRequestHeaders | string | URL-encoded request headers captured by the WAF. |
| HttpRequestId | string | Unique request identifier assigned by Akamai. |
| HttpRequestTime | datetime | Unix epoch timestamp (seconds) when the HTTP request was received. |
| HttpResponseBytes | string | Number of bytes in the HTTP response body, returned as a string by the API. |
| HttpResponseCode | string | HTTP status code returned by the origin or WAF (e.g., 200, 403). Source field: httpMessage.status. |
| HttpResponseHeaders | string | URL-encoded response headers captured by the WAF. |
| IdentityJa4 | string | JA4 TLS client fingerprint - a compact string representing the TLS handshake characteristics of the client. |
| IdentityTlsFingerprintV2 | string | Akamai TLS fingerprint v2 (hex string) derived from the client TLS handshake. |
| IdentityTlsFingerprintV3 | string | Akamai TLS fingerprint v3 string; includes version prefix and fingerprint value. |
| PolicyId | string | Security policy identifier within the configuration. |
| RuleActions | string | Semicolon-delimited, URL-encoded, base64-encoded list of rule actions that triggered. |
| RuleData | string | Semicolon-delimited, URL-encoded, base64-encoded rule data payload for matched rules. |
| RuleMessages | string | Semicolon-delimited, URL-encoded, base64-encoded human-readable messages for matched rules. |
| Rules | string | Semicolon-delimited, base64-encoded list of matched rule IDs (e.g., '950002;950006'). |
| RuleSelectors | string | Semicolon-delimited, URL-encoded, base64-encoded selectors (request parts) that matched the rules. |
| RuleTags | string | Semicolon-delimited, URL-encoded, base64-encoded tags classifying the matched rules. |
| RuleVersions | string | Semicolon-delimited, base64-encoded list of rule versions corresponding to each matched rule. |
| SlowPostAction | string | Slow POST protection action applied (e.g., alert, abort). |
| SlowPostRate | string | Observed rate for a slow POST attack attempt. |
| TimeGenerated | datetime |  |
| UserRiskAllow | string | Indicates whether the user was allowed (1) or blocked (0) based on user risk evaluation. |
| UserRiskEmailDomain | string | Email domain of the user associated with this request. |
| UserRiskGeneral | string | General risk signals as pipe-delimited key:value pairs (e.g., 'duc_1h:10|duc_1d:30'). |
| UserRiskOriginUserId | string | Unique user identifier from the origin system (e.g., internal user ID). |
| UserRiskRisk | string | Risk signal breakdown as pipe-delimited key:value pairs (e.g., 'udfp:1325gdg4/M|unp:74256/H'). |
| UserRiskScore | string | Composite user risk score (0-100; higher = riskier). |
| UserRiskStatus | string | User risk evaluation status code. |
| UserRiskTrust | string | Trust signal breakdown as pipe-delimited key:value pairs (e.g., 'ugp:US'). |
| UserRiskUsername | string | Authenticated username associated with the request. |
| UserRiskUuid | string | UUID of the user risk session, used to correlate risk signals across requests. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Akamai DDOS Protection](../solutions/akamai-ddos-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Akamai Security Events (via Codeless Connector Framework)](../connectors/akamaisiemconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

