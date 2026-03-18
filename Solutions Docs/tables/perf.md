# Perf

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Perf table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Low value |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/perf) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)
- [Resource Types](#resource-types)

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/perf)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| BucketEndTime | datetime |  |
| BucketStartTime | datetime |  |
| Computer | string | Computer that the event was collected from. |
| CounterName | string | Name of the performance counter. |
| CounterPath | string | Full path of the counter in the form \<Computer>\object(instance)\counter. |
| CounterValue | real |  |
| InstanceName | string | Name of the event instance. Empty if no instance. |
| Max | real |  |
| Min | real |  |
| ObjectName | string | Name of the performance object. |
| SampleCount | int |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StandardDeviation | real |  |
| TimeGenerated | datetime | Date and time the data was sampled. |
| Type | string | The name of the table |

## Solutions (3)

This table is used by the following solutions:

- [Barracuda CloudGen Firewall](../solutions/barracuda-cloudgen-firewall.md)
- [Forcepoint NGFW](../solutions/forcepoint-ngfw.md)
- [SOC Handbook](../solutions/soc-handbook.md)

---

## Content Items Using This Table (7)

### Workbooks (7)

**In solution [Barracuda CloudGen Firewall](../solutions/barracuda-cloudgen-firewall.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Barracuda](../content/barracuda-cloudgen-firewall-barracuda-9d8c6fb5.md) |  |

**In solution [Forcepoint NGFW](../solutions/forcepoint-ngfw.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ForcepointNGFWAdvanced](../content/forcepoint-ngfw-forcepointngfwadvanced-b6a3422e.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Barracuda](../content/github-only-barracuda-84e65401.md) |  |
| [DataCollectionHealthMonitoring](../content/github-only-datacollectionhealthmonitoring-360bf8be.md) |  |
| [ForcepointNGFWAdvanced](../content/github-only-forcepointngfwadvanced-901d419d.md) |  |
| [SecurityStatus](../content/github-only-securitystatus-c79b09ad.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.containerservice/managedclusters`
- `microsoft.kubernetes/connectedclusters`
- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`
- `microsoft.azurestackhci/clusters`
- `microsoft.hybridcontainerservice/provisionedclusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

