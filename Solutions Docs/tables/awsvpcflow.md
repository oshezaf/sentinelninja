# AWSVPCFlow

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSVPCFlow table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsvpcflow) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (45 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsvpcflow)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountId | string | The AWS account ID of the owner of the source network interface for which traffic is recorded. If the network interface is created by an AWS service, for example when creating a VPC endpoint or Network Load Balancer, the record may display unknown for this field. |
| Action | string | The action that is associated with the traffic. |
| AzId | string | The ID of the Availability Zone. |
| Bytes | long | The number of bytes transferred during the flow. |
| DstAddr | string | The destination address for outgoing traffic. |
| DstPort | int | The destination port of the traffic. |
| EcsClusterArn | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| EcsClusterName | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| EcsContainerId | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| EcsContainerInstanceArn | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| EcsContainerInstanceId | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| EcsSecondContainerId | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| EcsServiceName | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| EcsTaskArn | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| EcsTaskDefinitionArn | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| EcsTaskId | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| End | datetime | The time when the last packet of the flow was received within the aggregation interval. |
| FlowDirection | string | The direction of the flow with respect to the interface where traffic is captured. |
| InstanceId | string | The ID of the instance that's associated with network interface for which the traffic is recorded. |
| InterfaceId | string | The ID of the network interface for which the traffic is recorded. |
| LogStatus | string | The logging status of the flow log. |
| Packets | int | The number of packets transferred during the flow. |
| PktDstAddr | string | The packet-level (original) destination IP address for the traffic. |
| PktDstAwsService | string | The name of the subset of IP address ranges for the PktDstAddr field, if the destination IP address is for an AWS service. |
| PktSrcAddr | string | The packet-level (original) source IP address of the traffic. |
| PktSrcAwsService | string | The name of the subset of IP address ranges for the PktSrcAddr field, if the source IP address is for an AWS service. |
| Protocol | int | The IANA protocol number of the traffic. |
| Region | string | The Region that contains the network interface for which traffic is recorded. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcAddr | string | The source address for incoming traffic. |
| SrcPort | int | The source port of the traffic. |
| Start | datetime | The remote ip of the request. |
| SublocationId | string | The ID of the sublocation that contains the network interface for which traffic is recorded. |
| SublocationType | string | The type of sublocation that is returned in the sublocationId field. |
| SubnetId | string | The ID of the subnet. |
| TcpFlags | int | The bitmask value for the following TCP flags. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the event was generated. This value will be the same as 'start' input field or the data arrival time to Azure Monitor in case the 'start' input field is empty or missing. |
| TrafficPath | string | The path that egress traffic takes to the destination. |
| TrafficType | string | The type of traffic. The possible values are: IPv4, IPv6, and EFA. For more information search for 'Elastic Fabric Adapter (EFA)'. |
| Type | string | The name of the table |
| Version | int | The VPC Flow Logs version. |
| VpcId | string | The ID of the VPC. |

## Solutions (6)

This table is used by the following solutions:

- [AWS VPC Flow Logs](../solutions/aws-vpc-flow-logs.md)
- [Amazon Web Services](../solutions/amazon-web-services.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) |  |
| [Amazon Web Services S3](../connectors/awss3.md) |  |

---

## Content Items Using This Table (7)

### Workbooks (7)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AWSS3](../content/github-only-awss3-8722dc32.md) |  |
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimNetworkSessionAWSVPC](../asim/asimnetworksessionawsvpc.md) | NetworkSession | AWS VPC |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

