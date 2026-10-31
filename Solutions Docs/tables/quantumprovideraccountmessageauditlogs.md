# QuantumProviderAccountMessageAuditLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for QuantumProviderAccountMessageAuditLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/quantumprovideraccountmessageauditlogs) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/quantumprovideraccountmessageauditlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | The log category. Value is AuditEvent for all records in this table. |
| Location | string | The Azure region where the Provider Account resource resides. |
| MessageId | string | The unique identifier of the provider message that was created, updated, or deleted. |
| MessagePriority | string | The priority of the provider message (e.g. High, Standard). Empty for DeleteProviderMessage. |
| MessageType | string | The type of the provider message (e.g. Maintenance). Empty for DeleteProviderMessage. |
| OperationName | string | The name of the audited operation: CreateProviderMessage, UpdateProviderMessage, or DeleteProviderMessage. |
| OperationVersion | string | The API version under which the operation was invoked. |
| ProviderId | string | The identifier of the quantum provider whose messages were modified. |
| RequesterObjectId | string | The Entra object ID of the identity that performed the operation. |
| RequesterTenantId | string | The Entra tenant ID of the identity that performed the operation. |
| RequesterUpn | string | The user principal name (UPN) of the identity that performed the operation. Empty for managed identities and service principals. |
| ResultCode | string | The outcome of the operation, such as Success, Conflict, or ProviderMessageNotFound. |
| ScheduledMessageEndTime | datetime | The scheduled UTC end time of the provider message window. Empty for DeleteProviderMessage. |
| ScheduledMessageStartTime | datetime | The scheduled UTC start time of the provider message window. Empty for DeleteProviderMessage. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the message operation was recorded. |
| TraceId | string | The distributed trace identifier for correlating this operation across services. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [QuantumProviderAccountMessageAuditLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/quantumprovideraccountmessageauditlogs)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.quantum/provideraccounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

