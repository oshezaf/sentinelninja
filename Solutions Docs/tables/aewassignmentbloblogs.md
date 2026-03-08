# AEWAssignmentBlobLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AEWAssignmentBlobLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aewassignmentbloblogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aewassignmentbloblogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AssignmentBlobDataVersion | int | Data version (gets incremented with every experiment operation) of Assignment Blob. |
| AssignmentBlobLastOperationId | string | The last operation id that got published for an assignment blob data version which is generally one below the current version. |
| AssignmentBlobNewOperationIds | dynamic | List of new operation ids (changes) that are getting published or added with this assignment blob. |
| AssignmentBlobSchemaVersion | string | Schema version of assignment blob data associated with this operation. |
| CorrelationId | string | The ID for correlated events. Can be used to identify correlated events between multiple tables. |
| DurationMs | int | The duration of the operation (to upload blob file) in milliseconds. |
| ExperimentWorkspaceId | string | The Guid of your experimentation workspace. |
| HttpStatusCode | int | The HTTP status code of the corresponding REST API call operation. |
| Identity | string | The resource id of the user assigned managed identity that performed this operation. |
| Level | string | The severity level of the operation. Will be one of Information, Warning, Error, or Critical. |
| Location | string | The location of the resource. |
| OperationName | string | The operation associated with log record. |
| ResultDescription | string | The static text description of this operation. |
| ResultType | string | The status of the event. Typical values include Succeeded, Failed. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |
| URI | string | The request Url. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.experimentation/experimentworkspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

