# ElasticAgentLogsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (155 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ElasticAgent%5CData%20Connectors%5CElasticAgent_CCF/table_ElasticAgentLogsV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AgentEphemeralId | guid | Ephemeral identifier of the agent instance. |
| AgentHostname | string | Hostname where agent is running. |
| AgentId | guid | Unique identifier of the agent. |
| AgentName | string | Name of the Elastic Agent. |
| AgentType | string | Type of the agent (e.g., metricbeat). |
| AgentVersion | string | Version of the Elastic Agent. |
| BeatId | guid | Unique identifier of the beat instance. |
| BeatStateManagementEnabled | bool | Whether beat management is enabled. |
| BeatStateModuleCount | int | Number of modules configured. |
| BeatStateOutputName | string | Beat output name. |
| BeatStateQueueName | string | Beat queue name. |
| BeatStatsLibbeatOutputEvents | dynamic | Libbeat output events stats. |
| BeatStatsLibbeatOutputRead | dynamic | Libbeat output read stats. |
| BeatStatsLibbeatOutputType | string | Libbeat output type. |
| BeatStatsLibbeatOutputWrite | dynamic | Libbeat output write stats. |
| BeatStatsRuntimeGoroutines | int | Number of Go runtime goroutines. |
| BeatStatsUptimeMs | long | Beat uptime in milliseconds. |
| BeatType | string | Type of beat (e.g., metricbeat). |
| ConnectorName | string | Friendly name identifying the connector instance. |
| DataStreamDataset | string | Data stream dataset (e.g., system.cpu). |
| DataStreamNamespace | string | Data stream namespace (e.g., default). |
| DataStreamType | string | Data stream type (e.g., metrics, logs). |
| DstBytes | string | Destination bytes received (ASIM compatibility). |
| DstPackets | string | Destination packets received (ASIM compatibility). |
| DvcHostname | string | Device hostname (ASIM compatibility). |
| DvcId | string | Device unique identifier (ASIM compatibility). |
| DvcIpAddr | string | Device IP address (ASIM compatibility). |
| DvcOs | string | Operating system name. |
| DvcOsVersion | string | Operating system version. |
| EcsVersion | string | Elastic Common Schema version. |
| ElasticAgentId | guid | Elastic Agent unique identifier. |
| ElasticAgentProcess | string | Elastic Agent process name. |
| ElasticAgentSnapshot | bool | Whether this is a snapshot build. |
| ElasticAgentVersion | string | Elastic Agent version. |
| EventDataset | string | Event dataset identifier. |
| EventDuration | long | Event duration in nanoseconds. |
| EventModule | string | Event module name. |
| EventProductVersion | string | Event product version (agent version). |
| HostArchitecture | string | CPU architecture (e.g., x86_64). |
| HostContainerized | bool | Whether host is containerized. |
| HostCpuUsage | real | Host CPU usage percentage. |
| HostHostname | string | Hostname of the machine. |
| HostOsCodename | string | Operating system codename. |
| HostOsFamily | string | Operating system family (e.g., windows). |
| HostOsKernel | string | Operating system kernel version. |
| HostOsPlatform | string | Operating system platform. |
| HostOsType | string | Operating system type. |
| InputType | string | Input type (e.g., filestream). |
| LogLevel | string | Log level (info, warn, error). |
| LogLogger | string | Logger name. |
| LogOffset | long | Log file offset. |
| LogOriginFileLine | int | Origin file line number. |
| LogOriginFileName | string | Origin file name. |
| LogPath | string | Log file path. |
| MetricsetName | string | Name of the metricset (cpu, memory, process, etc.). |
| MetricsetPeriod | int | Metricset collection period in milliseconds. |
| MonitoringEcsVersion | string | Monitoring ECS version. |
| MonitoringMetricsBeatCpuSystem | dynamic | Beat CPU system stats. |
| MonitoringMetricsBeatCpuTotal | dynamic | Beat CPU total stats. |
| MonitoringMetricsBeatCpuUser | dynamic | Beat CPU user stats. |
| MonitoringMetricsBeatHandlesLimit | dynamic | Beat handles limit. |
| MonitoringMetricsBeatHandlesOpen | long | Beat open handles. |
| MonitoringMetricsBeatInfoEphemeralId | guid | Beat info ephemeral ID. |
| MonitoringMetricsBeatInfoUptime | dynamic | Beat info uptime. |
| MonitoringMetricsBeatInfoVersion | string | Beat info version. |
| MonitoringMetricsBeatMemstatsGcNext | long | Beat next GC target. |
| MonitoringMetricsBeatMemstatsMemoryAlloc | long | Beat allocated memory. |
| MonitoringMetricsBeatMemstatsMemorySys | long | Beat memory sys stats. |
| MonitoringMetricsBeatMemstatsMemoryTotal | long | Beat total memory. |
| MonitoringMetricsBeatMemstatsRss | long | Beat RSS memory. |
| MonitoringMetricsBeatRuntimeGoroutines | int | Beat runtime goroutines. |
| MonitoringMetricsLibbeatConfigModule | dynamic | Libbeat config module. |
| MonitoringMetricsLibbeatOutputEvents | dynamic | Libbeat output events. |
| MonitoringMetricsLibbeatOutputRead | dynamic | Libbeat output read stats. |
| MonitoringMetricsLibbeatOutputWrite | dynamic | Libbeat output write stats. |
| MonitoringMetricsLibbeatPipelineClients | int | Libbeat pipeline clients. |
| MonitoringMetricsLibbeatPipelineEvents | dynamic | Libbeat pipeline events. |
| MonitoringMetricsLibbeatPipelineQueue | dynamic | Libbeat pipeline queue. |
| MonitoringMetricsMetricbeatSystemCpu | dynamic | Metricbeat CPU stats. |
| MonitoringMetricsMetricbeatSystemFilesystem | dynamic | Metricbeat filesystem stats. |
| MonitoringMetricsMetricbeatSystemMemory | dynamic | Metricbeat memory stats. |
| MonitoringMetricsMetricbeatSystemNetwork | dynamic | Metricbeat network stats. |
| MonitoringMetricsSystemLoad1 | real | System load 1 minute. |
| MonitoringMetricsSystemLoad15 | real | System load 15 minutes. |
| MonitoringMetricsSystemLoad5 | real | System load 5 minutes. |
| MonitoringMetricsSystemLoadNorm | dynamic | System load normalized. |
| ServiceAddress | string | Service address endpoint. |
| ServiceId | string | Service unique identifier. |
| ServiceName | string | Name of the service. |
| ServiceType | string | Type of service. |
| SrcBytes | string | Source bytes sent (ASIM compatibility). |
| SrcMacAddr | string | Source MAC address (ASIM compatibility). |
| SrcPackets | string | Source packets sent (ASIM compatibility). |
| SystemCpuCores | int | Number of CPU cores. |
| SystemCpuIdleNormPct | real | Normalized idle CPU percentage. |
| SystemCpuIdlePct | real | Idle CPU percentage. |
| SystemCpuIowaitNormPct | real | Normalized IO wait CPU percentage (Linux). |
| SystemCpuIowaitPct | real | IO wait CPU percentage (Linux). |
| SystemCpuIrqNormPct | real | Normalized IRQ CPU percentage (Linux). |
| SystemCpuIrqPct | real | IRQ CPU percentage (Linux). |
| SystemCpuNiceNormPct | real | Normalized nice CPU percentage (Linux). |
| SystemCpuNicePct | real | Nice CPU percentage (Linux). |
| SystemCpuSoftirqNormPct | real | Normalized soft IRQ CPU percentage (Linux). |
| SystemCpuSoftirqPct | real | Soft IRQ CPU percentage (Linux). |
| SystemCpuStealNormPct | real | Normalized steal CPU percentage (Linux). |
| SystemCpuStealPct | real | Steal CPU percentage (Linux). |
| SystemCpuSystemNormPct | real | Normalized system CPU percentage. |
| SystemCpuSystemPct | real | System CPU percentage. |
| SystemCpuTotalNormPct | real | Normalized total CPU percentage. |
| SystemCpuTotalPct | real | Total CPU percentage. |
| SystemCpuUserNormPct | real | Normalized user CPU percentage. |
| SystemCpuUserPct | real | User CPU percentage. |
| SystemFilesystemAvailable | long | Available filesystem space in bytes. |
| SystemFilesystemDeviceName | string | Filesystem device name. |
| SystemFilesystemFiles | long | Total filesystem inodes. |
| SystemFilesystemFree | long | Free filesystem space in bytes. |
| SystemFilesystemFreeFiles | long | Free filesystem inodes. |
| SystemFilesystemMountPoint | string | Filesystem mount point. |
| SystemFilesystemTotal | long | Total filesystem space in bytes. |
| SystemFilesystemType | string | Filesystem type. |
| SystemFilesystemUsedBytes | long | Used filesystem space in bytes. |
| SystemFilesystemUsedPct | real | Used filesystem percentage. |
| SystemMemoryActualFree | long | Actual free memory in bytes. |
| SystemMemoryActualUsedBytes | long | Actual used memory in bytes. |
| SystemMemoryActualUsedPct | real | Actual used memory percentage. |
| SystemMemoryCached | long | Cached memory in bytes (Linux). |
| SystemMemoryFree | long | Free memory in bytes. |
| SystemMemorySwapFree | long | Free swap memory in bytes. |
| SystemMemorySwapTotal | long | Total swap memory in bytes. |
| SystemMemorySwapUsedBytes | long | Used swap memory in bytes. |
| SystemMemoryTotal | long | Total memory in bytes. |
| SystemMemoryUsedBytes | long | Used memory in bytes. |
| SystemMemoryUsedPct | real | Used memory percentage. |
| SystemNetworkInBytes | long | Network incoming bytes. |
| SystemNetworkInDropped | long | Network incoming dropped packets. |
| SystemNetworkInErrors | long | Network incoming errors. |
| SystemNetworkInPackets | long | Network incoming packets. |
| SystemNetworkName | string | Network interface name. |
| SystemNetworkOutBytes | long | Network outgoing bytes. |
| SystemNetworkOutDropped | long | Network outgoing dropped packets. |
| SystemNetworkOutErrors | long | Network outgoing errors. |
| SystemNetworkOutPackets | long | Network outgoing packets. |
| SystemProcessCpuSystemTicks | long | System CPU ticks for process. |
| SystemProcessCpuSystemTimeMs | long | System CPU time in milliseconds. |
| SystemProcessCpuTotalTicks | long | Total CPU ticks for process. |
| SystemProcessCpuTotalTimeMs | long | Total CPU time in milliseconds. |
| SystemProcessCpuTotalValue | long | Total CPU value for process. |
| SystemProcessCpuUserTicks | long | User CPU ticks for process. |
| SystemProcessCpuUserTimeMs | long | User CPU time in milliseconds. |
| SystemProcessFdLimitHard | long | Hard file descriptor limit (Linux). |
| SystemProcessFdLimitSoft | long | Soft file descriptor limit (Linux). |
| SystemProcessFdOpen | long | Open file descriptors (Linux). |
| SystemProcessMemorySize | long | Process memory size in bytes. |
| Tags | dynamic | Event tags. |
| TimeGenerated | datetime | The timestamp (in UTC) when the event was collected. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [ElasticAgent](../solutions/elasticagent.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Elastic Agent (via Codeless Connector Framework)](../connectors/elasticagentconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

