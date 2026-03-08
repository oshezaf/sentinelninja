# MDCDetectionDNSEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for MDCDetectionDNSEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/mdcdetectiondnsevents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (35 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/mdcdetectiondnsevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AdditionalData | dynamic | Holds Additional Data. |
| Addresses | dynamic | The list of IP addresses resolved by the DNS lookup call. |
| AzureResourceId | string | The Azure resource ID of the K8S cluster resource. |
| Comm | string | The command name which initiated the dns lookup call - i.e. curl, wget etc. |
| ContainerId | string | The container id of the docker container which initiated the dns lookup call. |
| ContainerName | string | The name of the docker container which initiated the dns lookup call. |
| Cwd | string | The current working directory of the process which initiated the dns lookup call. |
| DataPipelineMetadata | dynamic | Holds Data PipelineMetadata. |
| Digest | string | The digest of the Image running in the docker container which initiated the dns lookup call. |
| Domain | string | The domain name that was queried/resolved by the DNS lookup call. |
| EventGuid | string | The unique identifier for the event. |
| Exe | string | The executable path of the process which initiated the dns lookup call. |
| Gid | string | The group id of the user who initiated the dns lookup call. |
| ImageName | string | The name of the Image running in the docker container which initiated the dns lookup call. |
| Latency | string | The latency of the DNS lookup call. |
| NameServer | string | The nameserver used in order to resolve the DNS lookup call. |
| Namespace | string | The namespace of the pod in which the container is running. |
| NodeName | string | The name of the node on which the pod is running. |
| PacketId | string | The packet id in the packet that was sent for the DNS lookup call. |
| Pcomm | string | The parent command name which initiated the dns lookup call. |
| PID | string | The process id of the process which initiated the dns lookup call. |
| PodName | string | The name of the pod in which the container is running. |
| Ppid | string | The parent process id of the process which initiated the dns lookup call. |
| QR | string | Q for Query packets, R for Response packets. |
| Qtype | string | The type of the DNS query - i.e. A, AAAA, CNAME etc. |
| Rcode | string | A string representing Succes/Error DNS lookup result. |
| Region | string | The region where the K8S cluster is deployed. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| Tid | string | The thread id of the DNS lookup call. |
| TimeGenerated | datetime | The time (UTC) when the monitored entity was created, renamed, modified or deleted. |
| Type | string | The name of the table |
| Uid | string | The user id of the user who initiated the dns lookup call. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

