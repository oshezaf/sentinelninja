# HDInsightSparkBlockManagerEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HDInsightSparkBlockManagerEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsightsparkblockmanagerevents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsightsparkblockmanagerevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AddedTime | datetime | The time (UTC) the event was added. |
| ApplicationId | string | The application ID of the application producing the record. |
| BlockHost | string | The block host. |
| BlockManagerHost | string | The host where the Block Manager is running. |
| ClusterDnsName | string | The DNS name of the cluster the Block Manager is running on. |
| ClusterTenantId | string | The tenant ID of the cluster the Block Manager is running on. |
| ExecutorId | string | The ID of the executor running the application. |
| Host | string | The FQDN of the host. |
| IpAddress | string | The IP Address of the node the Block Manager is running on. |
| MaxMemory | long | The max memory usage from the event. |
| MaxOffHeapMemory | long | The max off heap memory usage from the event. |
| MaxOnHeapMemory | long | The max on heap memory usage from the event. |
| Region | string | The region of the cluster the Block Manager is running on. |
| RemovedTime | datetime | The time (UTC) the application was removed. |
| Role | string | The type of node the Block Manager is running on. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |
| UserSubscriptionId | string | The subscription ID of the cluster the Block Manager is running on. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.hdinsight/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

