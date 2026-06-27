# AWSELBFlowLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSELBFlowLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awselbflowlogs) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Parsers](#parsers-using-this-table)

## Schema (21 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awselbflowlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AccountId | string | The AWS account ID that owns the network interface. |
| Action | string | Indicates whether the traffic was accepted or rejected. |
| Bytes | string | The number of bytes transferred during the flow. |
| DestinationAddress | string | The destination IP address of the traffic. |
| DestinationPort | string | The destination port of the traffic. |
| EndTime | datetime | The end time of the flow in Unix seconds. |
| InterfaceId | string | The ID of the network interface for which the traffic is recorded. |
| LogStatus | string | Indicates the logging status (e.g., OK, NODATA, SKIPDATA). |
| LogType | string | Type of the log (e.g., VPCFlowLog, TransitGatewayFlowLog). |
| Packets | string | The number of packets transferred during the flow. |
| Protocol | string | The IANA protocol number of the traffic (e.g., 6 for TCP, 17 for UDP). |
| SourceAddress | string | The source IP address of the traffic. |
| SourcePort | string | The source port of the traffic. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| SStartTime | datetime | The start time of the flow in Unix seconds. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp when the log was collected or ingested. |
| Type | string | The name of the table |
| Version | string | The version of the flow log format. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [AWSELBFlowLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awselbflowlogs)

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AWSELBFlowLogsData](../parsers/awselbflowlogsdata.md) | [AWS ELB](../solutions/aws-elb.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

