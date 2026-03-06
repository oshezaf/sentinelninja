# KubeEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for KubeEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Containers |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/kubeevents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/kubeevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ClusterId | string | ID of the kubernetes cluster from which the event was sourced |
| ClusterName | string | ID of the kubernetes cluster from which the event was sourced |
| Computer | string | Computer/node name in the cluster for which the event applies. If not, computer/node name of sourcing computer |
| Count | real | Cumulative count of the number of occurences of a specific event [event.count] . |
| FirstSeen | datetime |  |
| KubeEventType | string | Type of kubernetes event [event.type]. Ex;- 'Normal' |
| LastSeen | datetime | Time event was last observed [event.lastTimestamp] |
| Message | string | Event message [event.message] |
| Namespace | string | Involved kubernetes object's namespace [event.InvolvedObject.namespace]. Ex;- 'kube-system' |
| ObjectKind | string | Kind of kubernetes object applicable for the event [event.InvolvedObject.kind] . Ex;- pod |
| Reason | string | Reason as seen in kubernetes event [event.reason] |
| SourceComponent | string | Source component that generated the event [event.source.component] . Ex;- default-scheduler |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TimeGenerated | datetime | Date and time the record was created. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Azure kubernetes Service](../solutions/azure-kubernetes-service.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Azure Kubernetes Service (AKS)](../connectors/azurekubernetes.md) |  |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.containerservice/managedclusters`
- `microsoft.kubernetes/connectedclusters`
- `microsoft.hybridcontainerservice/provisionedclusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

