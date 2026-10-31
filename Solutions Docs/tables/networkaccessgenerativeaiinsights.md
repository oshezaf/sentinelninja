# NetworkAccessGenerativeAIInsights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NetworkAccessGenerativeAIInsights table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | IT & Management Tools, Network, Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/networkaccessgenerativeaiinsights) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (26 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/networkaccessgenerativeaiinsights)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Action | string | The action taken on the content. Possible values: allow, block. |
| Activity | string | The type of generative AI activity being performed. |
| AIAgentId | string | The identifier of the AI agent associated with the interaction. |
| AIAgentName | string | The display name of the AI agent associated with the interaction. |
| Content | string | The content or query associated with the generative AI interaction. |
| DestinationUrl | string | The URL of the generative AI endpoint accessed. |
| ErrorCode | string | The upstream MCP error code returned in the response (for example, -32600 or -32601). |
| ErrorMessage | string | The error message returned in the response. |
| EventId | string | Unique identifier for the generative AI event. |
| EventType | string | The type of generative AI event that occurred. |
| LlmModel | string | The large language model used for the interaction (for example, gpt-4o, gpt-4.1, o3, or claude-3.5-sonnet). |
| McpClientName | string | The name of the MCP client initiating the MCP communication. |
| McpPrimitiveCount | int | The number of MCP primitives in the operation. |
| McpPrimitiveNames | string | The names of the MCP tools, resources, or prompts involved in the operation. |
| McpProtocolVersion | string | The negotiated MCP protocol version. |
| McpServerName | string | The name of the MCP server handling the MCP requests. |
| SessionId | string | Unique identifier for the session. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SubActivity | string | The specific type of operation within the activity. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time (UTC) that the event was generated. |
| TransactionId | string | Unique identifier for the transaction. |
| Type | string | The name of the table |
| UserPrincipalName | string | The UPN of the user who performed the activity. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [NetworkAccessGenerativeAIInsights Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/networkaccessgenerativeaiinsights)

## Solutions (1)

This table is used by the following solutions:

- [Global Secure Access](../solutions/global-secure-access.md)

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [Global Secure Access](../solutions/global-secure-access.md):** `Activity == "Mcp"`

| Workbook |
|:-------------|
| [GSAMCPInsights](../content/global-secure-access-gsamcpinsights-87ae8ba3.md) |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AIGovernance](../content/github-only-aigovernance-b2429b32.md) |  |

## Selection Criteria Summary (1 criteria, 1 total references)

References by type: 0 connectors, 1 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Activity == "Mcp"` | - | 1 | - | - | **1** |
| **Total** | **0** | **1** | **0** | **0** | **1** |

### Activity

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Mcp` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

