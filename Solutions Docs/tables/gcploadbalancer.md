# GCPLoadBalancer

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPLoadBalancer table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcploadbalancer) |

## Schema (31 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcploadbalancer)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| BackendServiceName | string | The backend service name in Google Cloud Platform . |
| BackendTargetProjectNumber | string | The Backend Service Project Number. |
| CacheDecision | dynamic | Indicates whether a request was served from the cache or the backend. |
| EnforcedEdgeSecurityPolicy | dynamic | the edge security policy rule that was enforced. |
| EnforcedSecurityPolicy | dynamic | Indicates whether a security policy (such as a WAF or access control rules) was applied to a request. |
| ForwardingRuleName | string | The forwarding rule resource of the load balancer in Google Cloud Platform. |
| InsertId | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| Latency | string | The latency of the request. |
| LogName | string | Information including a suffix identifying the log sub-type (e.g., admin activity, system access, data access) and where in the hierarchy the request was made. |
| PayloadRemoteIp | string | The remote ip address of the payload. |
| PreviewEdgeSecurityPolicy | dynamic | populated if a request matches an edge security policy rule configured for preview. |
| PreviewSecurityPolicy | dynamic | Request matches a rule configured for preview (present only when a preview rule would have taken priority over the enforced rule). |
| ProjectId | string | The Project id in Google Cloud Platform |
| RemoteIp | string | The remote ip of the request. |
| RequestMethod | string | The http method of the request. |
| RequestSize | string | The size of the request. |
| RequestStatus | string | The status code of the request. |
| RequestUrl | string | The url of the request. |
| SecurityPolicyRequestData | dynamic | The security policy data of the request. |
| Severity | string | The severity of the incident. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusDetails | string | The status details of the request. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time the log entry was received by logging. |
| Timestamp | datetime | The time the event described by the log entry occurred. |
| Type | string | The name of the table |
| UrlMapName | string | The url map resource name in Google Cloud Platform. |
| UserAgent | string | The user agent of the request. |
| Zone | string | The Zone name of the Load Balancer. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

