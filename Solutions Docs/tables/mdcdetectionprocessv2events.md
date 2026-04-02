# MDCDetectionProcessV2Events

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for MDCDetectionProcessV2Events table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/mdcdetectionprocessv2events) |

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/mdcdetectionprocessv2events)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AdditionalData | dynamic | Additional metadata about the container event. |
| AgentId | string | The ID of the monitoring agent tracking the container. |
| Auid | string | The audit user ID associated with the container process. |
| Cmdline | string | The command-line instruction that started the container. |
| Comm | string | The name of the executed command. |
| Computer | string | The name of the node where the container is running. |
| ContainerID | string | The unique identifier of the running container. |
| ContainerName | string | The name of the container. |
| Cwd | string | The current working directory of the container process. |
| Digest | string | The SHA-256 digest of the container image. |
| DriftAction | string | Indicates if there were any modifications in the container files. |
| Exe | string | The path to the executable running inside the container. |
| Gid | string | The group ID under which the process is running. |
| Group | string | The group name associated with the process. |
| Memfd | bool | Indicates if the container has memory file descriptor (memfd) execution. |
| Namespace | string | The namespace where the Kubernetes pod is deployed. |
| Pid | string | The process ID of the containerized application. |
| Pname | string | The parent process name of the containerized application. |
| PodLabels | dynamic | Labels associated with the Kubernetes pod. |
| PodName | string | The name of the Kubernetes pod. |
| Ppid | string | The parent process ID of the containerized application. |
| Repository | string | The container image repository. |
| Ses | string | The session ID of the container process. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Success | string | Indicates whether the command execution was successful. |
| Tag | string | The tag of the container image. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp when the event was recorded in UTC. |
| Type | string | The name of the table |
| Uid | string | The user ID under which the process is running. |
| UpperLayer | bool | Indicates if the container image uses an upper layer in the overlay filesystem. |
| User | string | The username running the process inside the container. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

