# AADAgentRiskEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADAgentRiskEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadagentriskevents) |

## Schema (22 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadagentriskevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| ActivityDateTime | datetime | Date and time when the risky activity occurred in UTC. |
| AdditionalInfo | string | Additional information associated with the agent risk event. |
| AgentDisplayName | string | Human-readable name of the agent. |
| AgentId | string | Identifier of the agent associated with this risk detection. |
| CorrelationId | string | The ID for correlated log analytics events. Can be used to identify correlated events between multiple tables. |
| DetectedDateTime | datetime | Date and time when the risk was detected in UTC. |
| DetectionTimingType | string | Timing of the detected risk. Possible values are: notDefined, realtime, nearRealtime, offline, unknownFutureValue. |
| Id | string | Unique identifier for the risk detection event. |
| IdentityType | string | Type of identity associated with this detection. Possible values are: AgentIdentity, AgentUser, AgentIdentityBlueprintPrincipal. |
| LastModifiedDateTime | datetime | Date and time when the risk detection was last modified in UTC. |
| OperationName | string | Name of the operation. |
| RiskDetail | string | Details of the detected risk. Possible values are: none, adminConfirmedAgentCompromised, adminConfirmedAgentSafe, unknownFutureValue. |
| RiskEventType | string | Type of the risk event, based on the detection algorithm. |
| RiskEvidence | string | A short explanation or information about the risk. |
| RiskLevel | string | Level of the detected risk. Possible values are: low, medium, high, hidden, none, unknownFutureValue. |
| RiskState | string | State of the detected risk. Possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time of the event in UTC. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

