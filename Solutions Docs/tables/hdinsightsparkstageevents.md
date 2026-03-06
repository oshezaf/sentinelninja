# HDInsightSparkStageEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HDInsightSparkStageEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsightsparkstageevents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsightsparkstageevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApplicationId | string | The application ID of the application producing the record. |
| AttemptId | string | The Id of the stage attempt. |
| ClusterDnsName | string | The DNS name of the cluster running the stage. |
| ClusterTenantId | string | The tenant ID of the cluster running the stage. |
| CompletionTime | datetime | The time (UTC) the stage was completed. |
| Details | string | The exception details for any stage failures. |
| FailureReason | string | The reason for failure if the stage failed. |
| Host | string | The FQDN of the host. |
| IpAddress | string | The IP Address of the node running the stage. |
| RDDInfo | string | Json containing information about RDDs used in the stage. |
| Region | string | The region of the cluster running the stage. |
| Role | string | The type of node running the stage. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StageId | string | The ID of the stage. |
| StageName | string | The name of the stage. |
| SubmissionTime | datetime | The time (UTC) the stage was submitted. |
| TaskCount | int | The count of tasks associated with the stage. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |
| UserSubscriptionId | string | The subscription ID of the cluster running the stage. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.hdinsight/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

