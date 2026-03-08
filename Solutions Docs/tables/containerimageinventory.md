# ContainerImageInventory

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ContainerImageInventory table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Containers |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/containerimageinventory) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/containerimageinventory)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Computer | string | Computer name/Node name |
| Failed | int | Count of containers with this image that are in failed state |
| Image | string | Name of Container Image |
| ImageID | string | Image ID of the container image |
| ImageSize | string | Size of the container image [amount of data (on disk) that is used for the writable layer] |
| ImageTag | string | Tag of the container image |
| Paused | int | Count of containers with this image that are in paused state |
| Repository | string |  |
| Running | int | Count of containers with this image that are in running state |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Stopped | int | Count of containers with this image that are in stopped state |
| TimeGenerated | datetime | Date and time the record was created. |
| TotalContainer | long | Count of containers with this ContainerImage |
| Type | string | The name of the table |
| VirtualSize | string | Virtual Size of the Container Image [Total amount of disk-space used for the read-only image data] |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.containerservice/managedclusters`
- `microsoft.kubernetes/connectedclusters`
- `microsoft.hybridcontainerservice/provisionedclusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

