# SentinelImpervaWAFCloudV2Logs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SentinelImpervaWAFCloudV2Logs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Source Vendor** | Imperva *(basis: projected)* |
| **Source Product** | Cloud WAF *(basis: projected)* |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelimpervawafcloudv2logs) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (59 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelimpervawafcloudv2logs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| Act | string | The action taken on the request, e.g. 'REQ_PASSED', 'REQ_BLOCKED'. |
| AdditionalReqHeaders | string | Additional HTTP request headers captured. |
| AdditionalResHeaders | string | Additional HTTP response headers captured. |
| AdditionalRuleInfo | string | Additional information about the WAF rule that was triggered. |
| App | string | The application protocol, e.g. 'HTTPS', 'HTTP'. |
| AttackName | string | The name of the detected attack or event classification. |
| AttackSeverity | string | The severity rating of the attack, from 0 to 10. |
| CapSupport | string | Client capability support flags for advanced detection. |
| CCode | string | The ISO country code of the request origin. |
| CiCode | string | The city code of the request origin. |
| ClApp | string | The classified client application type. |
| ClAppSig | string | The client application signature used for bot detection. |
| Cn1 | string | The HTTP response status code. |
| CoSupport | string | Client cookie support indicator. |
| Cpt | string | The client port number of the request. |
| Customer | string | The Imperva customer account name. |
| DeliveryRuleDetails | string | Details about the content delivery rule applied to the request. |
| DeviceExternalId | string | External device identifier from the WAF. |
| DeviceFacility | string | The facility or module that generated the event, e.g. 'waf'. |
| DeviceVersion | string | The version of the WAF device firmware. |
| Dproc | string | The destination process name. |
| End | string | The end timestamp of the event in Unix epoch milliseconds. |
| EventProduct | string | The product name generating the event, e.g. 'Incapsula WAF'. |
| EventType | string | The type of event, e.g. 'Normal', 'SQL Injection'. |
| EventVendor | string | The vendor of the product generating the event. Always 'Imperva'. |
| FileId | string | Unique identifier for the log file. |
| FilePermission | string | File permission information associated with the event. |
| FileType | string | The type of file involved in the request. |
| In | string | The size of the incoming request in bytes. |
| JavascriptSupport | string | Whether the client supports JavaScript execution. |
| Latitude | string | The geographic latitude of the request origin. |
| LogVersion | string | CEF log format version identifier. |
| Longitude | string | The geographic longitude of the request origin. |
| PostBody | string | The HTTP POST body content, if captured. |
| QStr | string | The URL query string parameters. |
| Ref | string | The HTTP referer header value. |
| Request | string | The requested URL path. |
| RequestClientApplication | string | The client application or user agent string of the request. |
| RequestMethod | string | The HTTP request method, e.g. GET, POST, PUT, DELETE. |
| RuleName | string | The name of the WAF rule that matched the request. |
| SignatureId | string | The unique identifier for the security signature that triggered. |
| SIP | string | The server IP address that handled the request. |
| SiteId | string | The unique identifier for the protected site in Imperva. |
| SiteTag | string | Tags associated with the protected site. |
| SourceServiceName | string | The hostname or service name of the protected site. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| Spt | string | The server port number. |
| Src | string | The source IP address of the client making the request. |
| Start | string | The start timestamp of the event in Unix epoch milliseconds. |
| Suid | string | The session user identifier or email associated with the request. |
| Tag | string | Tags associated with the event, such as attack classification labels. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp when the event occurred, derived from the CEF Start field. |
| Type | string | The name of the table |
| Ver | string | The TLS or HTTP protocol version used. |
| VID | string | The visitor identifier assigned by Imperva for tracking. |
| Xff | string | The X-Forwarded-For header value indicating original client IP behind proxies. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [SentinelImpervaWAFCloudV2Logs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelimpervawafcloudv2logs)

## Solutions (1)

This table is used by the following solutions:

- [ImpervaCloudWAF](../solutions/impervacloudwaf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Imperva Cloud WAF](../connectors/impervawafcloudapi.md) |  |

---

## Content Items Using This Table (21)

### Analytic Rules (10)

**In solution [ImpervaCloudWAF](../solutions/impervacloudwaf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Imperva - Abnormal protocol usage](../content/impervacloudwaf-imperva-abnormal-protocol-usage-363307f6-09ba-4926-ad52-03aadfd24b5e-608dd6d1.md) |  |
| [Imperva - Critical severity event not blocked](../content/impervacloudwaf-imperva-critical-severity-event-not-blocked-4d365217-f96a-437c-9c57-53594fa261c3-92c36a8a.md) |  |
| [Imperva - Forbidden HTTP request method in request](../content/impervacloudwaf-imperva-forbidden-http-request-method-in-request-7ebc9e24-319c-4786-9151-c898240463bc-263ced93.md) |  |
| [Imperva - Malicious Client](../content/impervacloudwaf-imperva-malicious-client-2ff35ed4-b26a-4cad-93a6-f67adb00e919-fbe5c7e5.md) |  |
| [Imperva - Malicious user agent](../content/impervacloudwaf-imperva-malicious-user-agent-905794a9-bc46-42b9-974d-5a2dd58110c5-227b4f7f.md) |  |
| [Imperva - Multiple user agents from same source](../content/impervacloudwaf-imperva-multiple-user-agents-from-same-source-4e8032eb-f04d-4a30-85d3-b74bf2c8f204-1941af4e.md) |  |
| [Imperva - Possible command injection](../content/impervacloudwaf-imperva-possible-command-injection-6214f187-5840-4cf7-a174-0cf9a72bfd29-6559c17f.md) |  |
| [Imperva - Request from unexpected IP address to admin panel](../content/impervacloudwaf-imperva-request-from-unexpected-ip-address-to-admin-panel-427c025d-c068-4844-8205-66879e89bcfa-660e22b0.md) |  |
| [Imperva - Request from unexpected countries](../content/impervacloudwaf-imperva-request-from-unexpected-countries-58300723-22e0-4096-b33a-aa9b992c3564-5720b4f7.md) |  |
| [Imperva - Request to unexpected destination port](../content/impervacloudwaf-imperva-request-to-unexpected-destination-port-0ba78922-033c-468c-82de-2974d7b1797d-c749ee63.md) |  |

### Hunting Queries (10)

**In solution [ImpervaCloudWAF](../solutions/impervacloudwaf.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Imperva - Applications with insecure web protocol version](../content/impervacloudwaf-imperva-applications-with-insecure-web-protocol-version-4cf72a93-537a-4c1f-83a3-0a5b743fe93e-fe436403.md) |  |
| [Imperva - Non HTTP/HTTPs applications](../content/impervacloudwaf-imperva-non-http-https-applications-1f99e54f-0e75-474e-8232-90963207f02b-66fb02b4.md) |  |
| [Imperva - Rare applications](../content/impervacloudwaf-imperva-rare-applications-426a8b59-41ad-4022-bb01-cf914fd5687a-809a8cc4.md) |  |
| [Imperva - Rare client applications](../content/impervacloudwaf-imperva-rare-client-applications-4a8a88af-4f40-40bd-aca8-e016dd6960de-7c21c8ad.md) |  |
| [Imperva - Rare destination ports](../content/impervacloudwaf-imperva-rare-destination-ports-e68c3b84-7895-41d5-a9af-4ef776e82408-86772308.md) |  |
| [Imperva - Top applications with error requests](../content/impervacloudwaf-imperva-top-applications-with-error-requests-934f19a5-f4bc-47eb-a213-db918b097434-9172946a.md) |  |
| [Imperva - Top destinations with blocked requests](../content/impervacloudwaf-imperva-top-destinations-with-blocked-requests-e360c980-b515-4c27-921c-19d411bd059d-8a8f6785.md) |  |
| [Imperva - Top sources with blocked requests](../content/impervacloudwaf-imperva-top-sources-with-blocked-requests-ec5b9eb6-f43a-40fc-ae65-2af9ae1e77ae-b6c19538.md) |  |
| [Imperva - Top sources with error requests](../content/impervacloudwaf-imperva-top-sources-with-error-requests-c359e40f-3a56-4e75-8dbb-41e5057bba64-ca203e65.md) |  |
| [Imperva - request from known bots](../content/impervacloudwaf-imperva-request-from-known-bots-4cb3088c-445a-4a99-a90f-d583fe253a7d-2db1a351.md) |  |

### Workbooks (1)

**In solution [ImpervaCloudWAF](../solutions/impervacloudwaf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Imperva WAF Cloud Overview](../content/impervacloudwaf-imperva-waf-cloud-overview-84f383d0.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ImpervaWAFCloud](../parsers/impervawafcloud.md) | [ImpervaCloudWAF](../solutions/impervacloudwaf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

