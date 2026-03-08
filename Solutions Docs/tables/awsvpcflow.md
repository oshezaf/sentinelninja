# AWSVPCFlow

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSVPCFlow table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsvpcflow) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (97 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsvpcflow) · [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20VPC%20Flow%20Logs/Data%20Connectors/AWSVPCFlowLogs_CCP/AWSVPCFlowLogs_DCR.json)

| Column Name | Type | Description | Source |
|:------------|:-----|:------------|:-------|
| _BilledSize | real | The record size in bytes | Azure Monitor docs |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account | Azure Monitor docs |
| account-id | string |  | DCR |
| account_id | string |  | DCR |
| AccountId | string | The AWS account ID of the owner of the source network interface for which traffic is recorded. If the network interface is created by an AWS service, for example when creating a VPC endpoint or Network Load Balancer, the record may display unknown for this field. | Azure Monitor docs |
| action | string | The action that is associated with the traffic. | DCR, Azure Monitor docs |
| az-id | string |  | DCR |
| az_id | string |  | DCR |
| AzId | string | The ID of the Availability Zone. | Azure Monitor docs |
| bytes | dynamic | The number of bytes transferred during the flow. | DCR, Azure Monitor docs |
| dstaddr | string | The destination address for outgoing traffic. | DCR, Azure Monitor docs |
| dstport | dynamic | The destination port of the traffic. | DCR, Azure Monitor docs |
| ecs-cluster-arn | string |  | DCR |
| ecs-cluster-name | string |  | DCR |
| ecs-container-id | string |  | DCR |
| ecs-container-instance-arn | string |  | DCR |
| ecs-container-instance-id | string |  | DCR |
| ecs-second-container-id | string |  | DCR |
| ecs-service-name | string |  | DCR |
| ecs-task-arn | string |  | DCR |
| ecs-task-definition-arn | string |  | DCR |
| ecs-task-id | string |  | DCR |
| ecs_cluster_arn | string |  | DCR |
| ecs_cluster_name | string |  | DCR |
| ecs_container_id | string |  | DCR |
| ecs_container_instance_arn | string |  | DCR |
| ecs_container_instance_id | string |  | DCR |
| ecs_second_container_id | string |  | DCR |
| ecs_service_name | string |  | DCR |
| ecs_task_arn | string |  | DCR |
| ecs_task_definition_arn | string |  | DCR |
| ecs_task_id | string |  | DCR |
| EcsClusterArn | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. | Azure Monitor docs |
| EcsClusterName | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. | Azure Monitor docs |
| EcsContainerId | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. | Azure Monitor docs |
| EcsContainerInstanceArn | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. | Azure Monitor docs |
| EcsContainerInstanceId | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. | Azure Monitor docs |
| EcsSecondContainerId | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. | Azure Monitor docs |
| EcsServiceName | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. | Azure Monitor docs |
| EcsTaskArn | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. | Azure Monitor docs |
| EcsTaskDefinitionArn | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. | Azure Monitor docs |
| EcsTaskId | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. | Azure Monitor docs |
| end | dynamic | The time when the last packet of the flow was received within the aggregation interval. | DCR, Azure Monitor docs |
| flow-direction | string |  | DCR |
| flow_direction | string |  | DCR |
| FlowDirection | string | The direction of the flow with respect to the interface where traffic is captured. | Azure Monitor docs |
| instance-id | string |  | DCR |
| instance_id | string |  | DCR |
| InstanceId | string | The ID of the instance that's associated with network interface for which the traffic is recorded. | Azure Monitor docs |
| interface-id | string |  | DCR |
| interface_id | string |  | DCR |
| InterfaceId | string | The ID of the network interface for which the traffic is recorded. | Azure Monitor docs |
| log-status | string |  | DCR |
| log_status | string |  | DCR |
| LogStatus | string | The logging status of the flow log. | Azure Monitor docs |
| packets | dynamic | The number of packets transferred during the flow. | DCR, Azure Monitor docs |
| pkt-dst-aws-service | string |  | DCR |
| pkt-dstaddr | string |  | DCR |
| pkt-src-aws-service | string |  | DCR |
| pkt-srcaddr | string |  | DCR |
| pkt_dst_aws_service | string |  | DCR |
| pkt_dstaddr | string |  | DCR |
| pkt_src_aws_service | string |  | DCR |
| pkt_srcaddr | string |  | DCR |
| PktDstAddr | string | The packet-level (original) destination IP address for the traffic. | Azure Monitor docs |
| PktDstAwsService | string | The name of the subset of IP address ranges for the PktDstAddr field, if the destination IP address is for an AWS service. | Azure Monitor docs |
| PktSrcAddr | string | The packet-level (original) source IP address of the traffic. | Azure Monitor docs |
| PktSrcAwsService | string | The name of the subset of IP address ranges for the PktSrcAddr field, if the source IP address is for an AWS service. | Azure Monitor docs |
| protocol | dynamic | The IANA protocol number of the traffic. | DCR, Azure Monitor docs |
| region | string | The Region that contains the network interface for which traffic is recorded. | DCR, Azure Monitor docs |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics | Azure Monitor docs |
| srcaddr | string | The source address for incoming traffic. | DCR, Azure Monitor docs |
| srcport | dynamic | The source port of the traffic. | DCR, Azure Monitor docs |
| start | dynamic | The remote ip of the request. | DCR, Azure Monitor docs |
| sublocation-id | string |  | DCR |
| sublocation-type | string |  | DCR |
| sublocation_id | string |  | DCR |
| sublocation_type | string |  | DCR |
| SublocationId | string | The ID of the sublocation that contains the network interface for which traffic is recorded. | Azure Monitor docs |
| SublocationType | string | The type of sublocation that is returned in the sublocationId field. | Azure Monitor docs |
| subnet-id | string |  | DCR |
| subnet_id | string |  | DCR |
| SubnetId | string | The ID of the subnet. | Azure Monitor docs |
| tcp-flags | string |  | DCR |
| tcp_flags | string |  | DCR |
| TcpFlags | int | The bitmask value for the following TCP flags. | Azure Monitor docs |
| TenantId | string | The Log Analytics workspace ID | Azure Monitor docs |
| TimeGenerated | datetime | The timestamp (UTC) of when the event was generated. This value will be the same as 'start' input field or the data arrival time to Azure Monitor in case the 'start' input field is empty or missing. | Azure Monitor docs |
| traffic-path | string |  | DCR |
| traffic_path | string |  | DCR |
| TrafficPath | string | The path that egress traffic takes to the destination. | Azure Monitor docs |
| TrafficType | string | The type of traffic. The possible values are: IPv4, IPv6, and EFA. For more information search for 'Elastic Fabric Adapter (EFA)'. | Azure Monitor docs |
| type | string | The name of the table | DCR, Azure Monitor docs |
| version | dynamic | The VPC Flow Logs version. | DCR, Azure Monitor docs |
| vpc-id | string |  | DCR |
| vpc_id | string |  | DCR |
| VpcId | string | The ID of the VPC. | Azure Monitor docs |

## Solutions (7)

This table is used by the following solutions:

- [AWS VPC Flow Logs](../solutions/aws-vpc-flow-logs.md)
- [Amazon Web Services](../solutions/amazon-web-services.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) |  |
| [Amazon Web Services S3](../connectors/awss3.md) |  |

---

## Content Items Using This Table (5)

### Workbooks (5)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimNetworkSessionAWSVPC](../asim/asimnetworksessionawsvpc.md) | NetworkSession | AWS VPC |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

