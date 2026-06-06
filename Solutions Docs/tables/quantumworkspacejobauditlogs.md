# QuantumWorkspaceJobAuditLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for QuantumWorkspaceJobAuditLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/quantumworkspacejobauditlogs) |

## Schema (22 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/quantumworkspacejobauditlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | The log category. Value is AuditEvent for all records in this table. |
| JobId | string | The unique identifier of the job that was the target of the operation. |
| Location | string | The Azure region where the Workspace resource resides. |
| OperationName | string | The name of the audited operation, such as CreateJob, UpdateJob, or CancelJob. |
| OperationParams | dynamic | Additional parameters specific to the operation, represented as a JSON object. For UpdateJob this includes flags such as priorityUpdated, nameUpdated, and tagsUpdated. |
| OperationVersion | string | The API version under which the operation was invoked. |
| Priority | string | The priority level assigned to the job at creation time, such as High or Standard. Populated for CreateJob operations. |
| ProviderId | string | The identifier of the quantum provider to which the job was submitted. Populated for CreateJob operations. |
| RequesterObjectId | string | The Entra object ID of the identity that performed the operation. |
| RequesterTenantId | string | The Entra tenant ID of the identity that performed the operation. |
| RequesterUpn | string | The user principal name (UPN) of the identity that performed the operation. Empty for managed identities and service principals. |
| ResultCode | string | The outcome of the operation, such as Success or Failure. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetId | string | The identifier of the quantum target to which the job was submitted. Populated for CreateJob operations. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the job operation was recorded. |
| TraceId | string | The distributed trace identifier for correlating this operation across services. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.quantum/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

