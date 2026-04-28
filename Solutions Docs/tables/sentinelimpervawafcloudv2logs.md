# SentinelImpervaWAFCloudV2Logs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SentinelImpervaWAFCloudV2Logs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelimpervawafcloudv2logs) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (59 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelimpervawafcloudv2logs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
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
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
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

## Solutions (1)

This table is used by the following solutions:

- [ImpervaCloudWAF](../solutions/impervacloudwaf.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Imperva Cloud WAF (via Codeless Connector Framework)](../connectors/impervacloudwaflogsccfdefinition.md) |  |
| [Imperva Cloud WAF](../connectors/impervawafcloudapi.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ImpervaWAFCloud](../parsers/impervawafcloud.md) | [ImpervaCloudWAF](../solutions/impervacloudwaf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

