# HealthStateChangeEvent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HealthStateChangeEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/healthstatechangeevent) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (21 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/healthstatechangeevent)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CurrentMonitorState | string | Current state of the monitor (Critical, Warning, Healthy, Unknown, None). |
| CurrentStateFirstObservedTimestamp | datetime | Timestamp (UTC) when the current state of the monitor was first observed. |
| EvaluationTimestamp | datetime | Timestamp (UTC) when the monitor health state change event was created. |
| Evidence | dynamic | Snapshot of samples and reason the monitor changed state. |
| ImpactStartTimestamp | datetime | Timestamp (UTC) the monitor start change to non-healthy (Critical, Warning) state. |
| InstrumentationData | dynamic | Current state of the monitor (Critical, Warning, Healthy, Unknown, None). |
| MonitorConfiguration | dynamic | Configuration for the monitor. Aggregate monitor configuration is an empty string. |
| MonitoredObject | string | Object the monitor is monitoring. Values only exist for dynamic monitors, e.g. D: for monitor logical-disks|D:|free-space-mb. |
| MonitorName | string | Name of the monitor, e.g. logical-disks|C:|free-space-mb for Windows platform, filesystems|/var/lib|free-space-mb for Linux platform. |
| MonitorResourceId | string | ARM resource id of the monitor. |
| MonitorType | string | Type of the monitor. Same as the monitor name for static monitors, replaces MonitoredObject with * for dynamic monitors. |
| ParentMonitorName | string | Parent monitor name, e.g. logical-disks|C: for Windows platform, filesystems for Linux platform. |
| PreviousMonitorState | string | Previous state of the monitor (Critical, Warning, Healthy, Unknown, None). |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) when the record was generated. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [HealthStateChangeEvent Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/healthstatechangeevent)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

