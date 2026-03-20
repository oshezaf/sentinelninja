# AWSALBAccessLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSALBAccessLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsalbaccesslogs) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (37 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsalbaccesslogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ActionsExecuted | string | The actions taken when processing the request (e.g., forward, fixed-response, redirect). |
| Alb | string | The ARN of the Application Load Balancer. |
| ALBType | string | The type of request (e.g., http or https). |
| ChosenCertArn | string | The ARN of the certificate presented to the client. |
| Classification | string | Classification of the request (e.g., success or error). |
| ClassificationReason | string | The reason why a request was classified in a certain way. |
| ClientIp | string | The IP address of the client. |
| ClientPort | int | The port number of the client. |
| ConnTraceId | string | The connection trace ID that uniquely identifies the connection. |
| DomainName | string | The SNI domain provided by the client during the TLS handshake. |
| ElbStatusCode | int | The status code sent from the load balancer to the client. |
| LambdaErrorReason | string | The reason code for a failed Lambda function, if applicable. |
| MatchedRulePriority | string | The priority value of the rule that matched the request. |
| ReceivedBytes | long | The size of the request, in bytes, received from the client. |
| RedirectUrl | string | The URL of the redirect target, if a redirect action was taken. |
| RequestCreationTime | string | The timestamp when the load balancer generated the request to the target. |
| RequestProcessingTime | string | The total time taken by the load balancer to receive the request from the client. |
| RequestRaw | string | The complete request line from the client. |
| ResponseProcessingTime | string | The total time taken by the load balancer to send the response to the client. |
| SentBytes | long | The size of the response, in bytes, sent to the client. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SslCipher | string | The SSL cipher used for the SSL connection (if any). |
| SslProtocol | string | The SSL protocol used for the SSL connection (if any). |
| TargetGroupArn | string | The ARN of the target group that handled the request. |
| TargetIp | string | The IP address of the target that processed the request. |
| TargetPort | int | The port number of the target that processed the request. |
| TargetPortList | string | A list of IP:port pairs of the targets that handled the request. |
| TargetProcessingTime | string | The total time taken by the target to process the request. |
| TargetStatusCode | string | The status code received from the target. |
| TargetStatusCodeList | string | A list of status codes returned by the targets. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time when the load balancer received the request. |
| TraceId | string | The trace identifier for the request, useful for debugging. |
| Type | string | The name of the table |
| UserAgent | string | The user agent String of the client. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

