# AGWAccessLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AGWAccessLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources, Network |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agwaccesslogs) |

## Schema (48 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agwaccesslogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| BackendPoolName | string | The backend pool associated with the given request log. |
| BackendSettingName | string | The backend setting name associated with the given request log. |
| BackendSslCipher | string | Cipher suite used for TLS communication with the backend server. |
| BackendSslProtocol | string | SSL/TLS protocol used for communication with the backend server. |
| ClientIp | string | IP of the immediate client of Application Gateway. If another proxy fronts your application gateway, this displays the IP of that fronting proxy. |
| ClientPort | int | Port of the client that initiated the request. |
| ClientResponseTime | real | Time difference (in seconds) between first byte received from the backend to first byte sent to the client. |
| ErrorInfo | string | Error category of the failing request. |
| Host | string | Address listed in the host header of the request. If rewritten using header rewrite, this field contains the updated host name. |
| HttpMethod | string | HTTP method used by the request. |
| HttpStatus | int | HTTP status code returned to the client from Application Gateway. |
| HttpVersion | string | HTTP version of the request. |
| InstanceId | string | Application Gateway instance that served the request. |
| ListenerName | string | The listener associated with given request log. |
| OperationName | string | Name of the operation. |
| OriginalHost | string | This field contains the original request host name. |
| OriginalRequestUriWithArgs | string | This field contains the original request URL. |
| ReceivedBytes | int | Size of packet received, in bytes. |
| RequestQuery | string | Query string portion of the request URI. |
| RequestUri | string | URI of the received request. |
| RuleName | string | The rule associated with the given request log. |
| SentBytes | int | Size of packet sent, in bytes. |
| ServerConnectTime | real | Time (in seconds) taken to establish a connection with the backend server. |
| ServerHeaderTime | real | Time (in seconds) taken to receive the response headers from the backend server. |
| ServerResponseLatency | real | Latency of the response (in seconds) from the backend server. |
| ServerRouted | string | The backend server that application gateway routes the request to. |
| ServerStatus | int | HTTP status code of the backend server. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SslCipher | string | Cipher suite being used for TLS communication (if TLS is enabled). |
| SslClientCertificateFingerprint | string | Fingerprint of the SSL client certificate. |
| SslClientCertificateIssuerName | string | Issuer name of the SSL client certificate. |
| SslClientVerify | string | Status of SSL client certificate verification. |
| SslEnabled | string | Whether communication to the backend pools used TLS. Valid values are on and off. |
| SslProtocol | string | SSL/TLS protocol being used (if TLS is enabled). |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time (UTC) when the log was created. |
| TimeTaken | real | Length of time (in seconds) that it takes for the first byte of a client request to be processed and its last-byte sent in the response to the client. It's important to note that the Time-Taken field usually includes the time that the request and response packets are traveling over the network. |
| TransactionId | string | Unique identifier to correlate the request received from the client. |
| Type | string | The name of the table |
| UpstreamSourcePort | int | The source port used by Application Gateway when initiating a connection to the backend target. |
| UserAgent | string | User agent from the HTTP request header. |
| WafEvaluationTime | real | Length of time (in seconds) that it takes for the request to be processed by the WAF. |
| WafMode | string | Value can be either Detection or Prevention. |
| WafPolicyId | string | The resource ID of the WAF policy associated with the Application Gateway. |

## Solutions (1)

This table is used by the following solutions:

- [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md)

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [A potentially malicious web request was executed against a web server](../content/azure-web-application-firewall-waf-a-potentially-malicious-web-request-was-executed-against-a-web-server-46ac55ae-47b8-414a-8f94-89ccd1962178-ef0d4240.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/applicationgateways`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

