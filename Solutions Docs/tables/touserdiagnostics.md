# TOUserDiagnostics

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for TOUserDiagnostics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/touserdiagnostics) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (20 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/touserdiagnostics)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | Category of the event. |
| CorrelationId | string | Correlation ID of the operation. |
| EdgeLocation | string | The Azure Edge custom location resource Id on which the operation happens. |
| Location | string | Azure region in which the Toolchain orchestrator diagnostic resource is located. |
| Message | string | The diagnose message. |
| OperatingResourceId | string | The operating resource id refers to the specific operational resource that the Toolchain orchestrator is managing when this event is triggered. |
| OperatingResourceK8SId | string | The operating resource K8s id refers to K8s resource id (namespace/name) of the specific operational resource that the Toolchain orchestrator is managing when this event is triggered. |
| OperationName | string | Operation name of the event. |
| Properties | dynamic | Properties of the event. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Event generation time. |
| TOServiceInstance | string | Toolchain orchestrator service pod name. |
| TOServiceName | string | Toolchain orchestrator service name. |
| Type | string | The name of the table |
| User | string | The Microsoft Entra ID object Id of the requester. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.toolchainorchestrator/diagnostics`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

