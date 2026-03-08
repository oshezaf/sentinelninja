# ElasticAgentEvent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (155 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ElasticAgentEvent.json)

| Column Name | Type |
|:------------|:-----|
| AgentEphemeralId | string |
| AgentHostname | string |
| AgentId | string |
| AgentName | string |
| AgentType | string |
| AgentVersion | string |
| BeatId | string |
| BeatStateManagementEnabled | string |
| BeatStateModuleCount | real |
| BeatStateOutputName | string |
| BeatStateQueueName | string |
| BeatStatsLibbeatOutputEvents | string |
| BeatStatsLibbeatOutputRead | string |
| BeatStatsLibbeatOutputType | string |
| BeatStatsLibbeatOutputWrite | string |
| BeatStatsRuntimeGoroutines | string |
| BeatStatsUptimeMs | string |
| BeatType | string |
| DataStreamDataset | string |
| DataStreamNamespace | string |
| DataStreamType | string |
| DstBytes | string |
| DstPackets | string |
| DvcHostname | string |
| DvcId | string |
| DvcIpAddr | string |
| DvcOs | string |
| DvcOsVersion | string |
| EcsVersion | string |
| ElasticAgentId | string |
| ElasticAgentProcess | string |
| ElasticAgentSnapshot | string |
| ElasticAgentVersion | string |
| EventDataset | string |
| EventDuration | string |
| EventModule | string |
| EventProductVersion | string |
| HostArchitecture | string |
| HostContainerized | string |
| HostCpuUsage | string |
| HostHostname | string |
| HostOsCodename | string |
| HostOsFamily | string |
| HostOsKernel | string |
| HostOsPlatform | string |
| HostOsType | string |
| InputType | string |
| LogLevel | string |
| LogLogger | string |
| LogOffset | string |
| LogOriginFileLine | string |
| LogOriginFileName | string |
| LogPath | string |
| MetricsetName | string |
| MetricsetPeriod | string |
| MonitoringEcsVersion | string |
| MonitoringMetricsBeatCpuSystem | string |
| MonitoringMetricsBeatCpuTotal | real |
| MonitoringMetricsBeatCpuUser | string |
| MonitoringMetricsBeatHandlesLimit | string |
| MonitoringMetricsBeatHandlesOpen | string |
| MonitoringMetricsBeatInfoEphemeralId | string |
| MonitoringMetricsBeatInfoUptime | string |
| MonitoringMetricsBeatInfoVersion | string |
| MonitoringMetricsBeatMemstatsGcNext | real |
| MonitoringMetricsBeatMemstatsMemoryAlloc | real |
| MonitoringMetricsBeatMemstatsMemorySys | string |
| MonitoringMetricsBeatMemstatsMemoryTotal | real |
| MonitoringMetricsBeatMemstatsRss | string |
| MonitoringMetricsBeatRuntimeGoroutines | string |
| MonitoringMetricsLibbeatConfigModule | string |
| MonitoringMetricsLibbeatOutputEvents | string |
| MonitoringMetricsLibbeatOutputRead | string |
| MonitoringMetricsLibbeatOutputWrite | string |
| MonitoringMetricsLibbeatPipelineClients | string |
| MonitoringMetricsLibbeatPipelineEvents | string |
| MonitoringMetricsLibbeatPipelineQueue | string |
| MonitoringMetricsMetricbeatSystemCpu | string |
| MonitoringMetricsMetricbeatSystemFilesystem | string |
| MonitoringMetricsMetricbeatSystemMemory | string |
| MonitoringMetricsMetricbeatSystemNetwork | string |
| MonitoringMetricsSystemLoad1 | string |
| MonitoringMetricsSystemLoad15 | string |
| MonitoringMetricsSystemLoad5 | string |
| MonitoringMetricsSystemLoadNorm | string |
| ServiceAddress | string |
| ServiceId | string |
| ServiceName | string |
| ServiceType | string |
| SrcBytes | string |
| SrcMacAddr | string |
| SrcPackets | string |
| SystemCpuCores | string |
| SystemCpuIdleNormPct | string |
| SystemCpuIdlePct | string |
| SystemCpuIowaitNormPct | string |
| SystemCpuIowaitPct | string |
| SystemCpuIrqNormPct | string |
| SystemCpuIrqPct | string |
| SystemCpuNiceNormPct | string |
| SystemCpuNicePct | string |
| SystemCpuSoftirqNormPct | string |
| SystemCpuSoftirqPct | string |
| SystemCpuStealNormPct | string |
| SystemCpuStealPct | string |
| SystemCpuSystemNormPct | string |
| SystemCpuSystemPct | string |
| SystemCpuTotalNormPct | string |
| SystemCpuTotalPct | string |
| SystemCpuUserNormPct | string |
| SystemCpuUserPct | string |
| SystemFilesystemAvailable | string |
| SystemFilesystemDeviceName | string |
| SystemFilesystemFiles | string |
| SystemFilesystemFree | string |
| SystemFilesystemFreeFiles | string |
| SystemFilesystemMountPoint | string |
| SystemFilesystemTotal | real |
| SystemFilesystemType | string |
| SystemFilesystemUsedBytes | string |
| SystemFilesystemUsedPct | string |
| SystemMemoryActualFree | string |
| SystemMemoryActualUsedBytes | real |
| SystemMemoryActualUsedPct | string |
| SystemMemoryCached | real |
| SystemMemoryFree | string |
| SystemMemorySwapFree | string |
| SystemMemorySwapTotal | real |
| SystemMemorySwapUsedBytes | real |
| SystemMemoryTotal | real |
| SystemMemoryUsedBytes | real |
| SystemMemoryUsedPct | string |
| SystemNetworkInBytes | real |
| SystemNetworkInDropped | string |
| SystemNetworkInErrors | string |
| SystemNetworkInPackets | string |
| SystemNetworkName | string |
| SystemNetworkOutBytes | real |
| SystemNetworkOutDropped | string |
| SystemNetworkOutErrors | string |
| SystemNetworkOutPackets | string |
| SystemProcessCpuSystemTicks | string |
| SystemProcessCpuSystemTime | datetime |
| SystemProcessCpuTotalTicks | string |
| SystemProcessCpuTotalTime | string |
| SystemProcessCpuTotalValue | string |
| SystemProcessCpuUserTicks | string |
| SystemProcessCpuUserTime | datetime |
| SystemProcessFdLimitHard | string |
| SystemProcessFdLimitSoft | string |
| SystemProcessFdOpen | string |
| SystemProcessMemorySize | real |
| Tags | string |
| TimeGenerated | datetime |
| Timestamp | datetime |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

