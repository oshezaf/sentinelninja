# SentinelHealth

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SentinelHealth table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelhealth) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (17 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelhealth)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Description | string | The operation description. |
| ExtendedProperties | dynamic | Additional information based on the resource type. |
| OperationName | string | The name of the operation that triggered the event. |
| Reason | string | The operation reason. |
| RecordId | string | A unique record identifier. |
| SentinelResourceId | string | The Sentinel resource ID. |
| SentinelResourceKind | string | The resource kind, for example: connector kind (such as Office365, AmazonWebServicesCloudTrail), alert rule kind (scheduld). |
| SentinelResourceName | string | The Sentinel resource name. |
| SentinelResourceType | string | The resource type, for example: DataConnector, AlertRule, etc. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Status | string | Status of the operation, for example: Success, Failure, Warning, Informational, Partial Success. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the event was generated. |
| Type | string | The name of the table |
| WorkspaceId | string | The workspace ID. |

## Solutions (1)

This table is used by the following solutions:

- [SentinelSOARessentials](../solutions/sentinelsoaressentials.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [SentinelSOARessentials](../solutions/sentinelsoaressentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AutomationHealth](../content/sentinelsoaressentials-automationhealth-09dce6f5.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

