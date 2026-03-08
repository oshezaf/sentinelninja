# HDInsightAmbariClusterAlerts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HDInsightAmbariClusterAlerts table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsightambariclusteralerts) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (30 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsightambariclusteralerts)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AlertFirmness | string | The firmness of the alert. |
| AlertID | int | The ID of the alert message. |
| AlertInstance | string | Instance number of the alert. |
| ClusterName | string | The name of the cluster the alert came from. |
| ClusterType | string | The type of cluster where the alert was generated. |
| ComponentName | string | The component that generated the alert. |
| DefinitionId | int | Id of the alert definition. |
| DefinitionName | string | Name of the alert definition |
| HostFQDN | string | The FQDN of the host where the alert was generated. |
| HostName | string | The name of the host where the alert was generated. |
| Label | string | The label of the alert. |
| LatestTimestamp | long | The latest time the alert occurred. |
| MaintenanceState | string | The maintenance classifaction state of the alert. |
| Occurences | int | The number of times an alert has occurred. |
| OriginalTimestamp | long | The timestamp the alert first occurred. |
| ReferenceURI | string | The URI to the alert. |
| RepeatTolerance | int | The total number of occurences an alert can have before being escalated. |
| RepeatToleranceRemaining | int | The amount of occurences left before an alert gets escalted. |
| Scope | string | The scope of the alert. |
| ServiceName | string | The name of the service that generated the alert. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| State | string | The state of the alert. |
| TenantId | string | The Log Analytics workspace ID |
| Text | string | The informational text of the alert. |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.hdinsight/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

