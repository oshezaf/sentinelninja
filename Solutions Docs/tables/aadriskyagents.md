# AADRiskyAgents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADRiskyAgents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadriskyagents) |

## Schema (18 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadriskyagents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AgentDisplayName | string | Human-readable name of the agent. |
| CorrelationId | string | The ID for correlated log analytics events. Can be used to identify correlated events between multiple tables. |
| Id | string | Unique identifier of the agent at risk. |
| IdentityType | string | Type of identity associated with this agent. Possible values are: AgentIdentity, AgentUser, AgentIdentityBlueprintPrincipal. |
| IsDeleted | bool | Indicates whether the agent has been deleted. |
| IsEnabled | bool | Indicates whether the agent is enabled. |
| IsProcessing | bool | Indicates whether the agent's risky state is being processed by the backend. |
| OperationName | string | Name of the operation. |
| RiskDetail | string | Details of the detected risk. Possible values are: none, adminConfirmedAgentCompromised, adminConfirmedAgentSafe, unknownFutureValue. |
| RiskLastModifiedDateTime | datetime | Date and time when the risky agent was last modified in UTC. |
| RiskLevel | string | Level of the detected risky agent. Possible values are: low, medium, high, hidden, none, unknownFutureValue. |
| RiskState | string | State of the agent's risk. Possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time of the event in UTC. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [AADRiskyAgents Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadriskyagents)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

