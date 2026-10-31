# AgentFabricFlowLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AgentFabricFlowLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agentfabricflowlogs) |

## Schema (29 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agentfabricflowlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AdditionalFields | dynamic | Other details about the request that have no column of their own, as a JSON object. New keys can appear at any time. |
| ClientRequestId | string | Request ID that the caller sent, if any. Use it to match the request with the caller's own logs. The fabric does not validate it. |
| DestinationFqdn | string | Host in the request: the HTTP host without its port, or the TLS server name when the request has no HTTP host. DestinationSpiffe identifies the member that the request goes to. |
| DestinationPort | int | Destination port of the request. |
| DestinationSpiffe | string | SPIFFE ID of the member that the request goes to, in the same form as SourceSpiffe. Empty when the destination is not a member, for example for Egress. |
| DurationMs | int | Time in milliseconds from the start of the request to the end of the response. |
| FlowType | string | Path of the request through the fabric: WithinFabric (to a member of this fabric), CrossFabric (to a member of another fabric), Egress (to a destination outside Agent Fabric), or Ingress (from a caller outside the fabric to a member). Empty when the fabric did not route the request. |
| MatchedRule | string | Name of the policy rule that decided the request. When no rule that you wrote decided, the fabric uses a reserved name, such as default-deny (a policy group targets the source, but no rule matched) or default-allow-untargeted (no policy group targets the source). Some rules get a generated name, such as mcp-0 for an MCP policy. |
| McpMethod | string | MCP method of the request, for example tools/call, tools/list, or resources/read. Empty for a request that is not MCP, and for an MCP request that the fabric could not read, for example over TLS that the fabric did not inspect. |
| McpToolName | string | Name of the MCP tool that an MCP tools/call request asked for. Empty for other requests. |
| Method | string | HTTP method of the request. Empty when the fabric saw no HTTP request. |
| Path | string | HTTP request path, without the query string. |
| PolicyGroup | string | Name of the policy group whose rule decided the request. If no rule matched, the value is the policy group that targets the source, or (default) when more than one policy group targets it. Empty when no policy group targets the source. |
| Protocol | string | Protocol of the request: http, https (TLS that the fabric inspected), tls (TLS that the fabric did not inspect), or tcp. |
| RequestBytes | long | Size in bytes of the whole request, headers and body, on the member's connection after TLS. 0 when the fabric did not measure it. |
| RequestId | string | Unique ID that the fabric gives the request. Use it to find one request and to remove duplicate rows. |
| ResponseBytes | long | Size in bytes of the whole response, headers and body, on the member's connection after TLS. 0 when the fabric did not measure it. |
| SourceSpiffe | string | SPIFFE ID of the member that sent the request, in the form spiffe://<trust domain>/ns/<fabric ID>/sa/<member name>. If a gateway forwards the request for a member, the value is that member, as the gateway reports it. The trust domain can change, so identify a member by its fabric ID and member name. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | int | HTTP status code that the member received. 0 when the member received no HTTP response. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time (UTC) when the request started. The fabric writes the row when the request ends. If the row arrives more than 2 days after this time, Log Analytics replaces this value with the arrival time. |
| Type | string | The name of the table |
| Verdict | string | Outcome for the request: Allow, Deny (the fabric refused the request), or Unknown (the row is not a policy decision, for example a failed TLS handshake). |
| VerdictReason | string | Why the request got its verdict: Policy (a policy rule decided, see MatchedRule), PromptShield (the fabric blocked a prompt attack), PromptShieldAlert (the fabric sent a request with a prompt attack and flagged it), PromptShieldSanitized (the fabric removed a prompt attack, then sent the request), PromptShieldUnavailable (the fabric could not check the request for prompt attacks), PolicyUnavailable, CrossFabric, TlsHandshakeFailed, ProtocolNotSupported, or NoRequest. PromptShieldUnavailable comes with Deny if the fabric refused the request, or with Allow if the fabric sent it without the check. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [AgentFabricFlowLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agentfabricflowlogs)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

