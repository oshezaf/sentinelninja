# GCPComputeEngine

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPComputeEngine table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpcomputeengine) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (14 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpcomputeengine)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| GCPResource | dynamic | Information about the monitored resource associated with the log entry, such as VM instance, database, etc. |
| InsertId | string | A unique identifier for the log entry used to prevent duplication. |
| Labels | dynamic | A set of key-value pairs that provide additional metadata about the log entry. |
| LogName | string | The full resource name of the log to which this log entry belongs. |
| Operation | dynamic | Information about an operation associated with the log entry, such as an audit trail or trace context. |
| ProtoPayload | dynamic | The structured payload of the log entry, typically in protocol buffer format; contains detailed event data. |
| ReceiveTimestamp | datetime | The time the log entry was received by the logging system. |
| Severity | string | The severity level of the log entry (e.g., DEBUG, INFO, WARNING, ERROR, CRITICAL). |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The actual time the event described by the log entry occurred. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Google Cloud Platform Compute Engine](../solutions/google-cloud-platform-compute-engine.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Google Cloud Platform Compute Engine (via Codeless Connector Framework)](../connectors/gcpcomputeenginelogsccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

