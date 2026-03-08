# NetworkMonitoring

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NetworkMonitoring table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Network |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/networkmonitoring) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (233 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/networkmonitoring)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AddressType | string |  |
| AgentCapability | int |  |
| AgentFqdn | string |  |
| AgentId | string |  |
| AgentIP | string |  |
| AlertsCount | int |  |
| AvgHopLatencyList | string |  |
| AzureHopListDiagnosticCode | string |  |
| AzureHopListHealth | string |  |
| AzureHopListIPAddress | string |  |
| AzureHopListResourceID | string |  |
| AzureHopListType | string |  |
| BitsInPerSecond | long |  |
| BitsOutPerSecond | long |  |
| CircuitName | string |  |
| CircuitRegion | string |  |
| CircuitResourceGroup | string |  |
| CircuitResourceId | string |  |
| CircuitSKUFamily | string |  |
| CircuitSKUTier | string |  |
| CircuitSubscriptionId | string |  |
| Computer | string |  |
| ConnectionMonitorResourceId | string |  |
| ConnectionResourceId | string |  |
| CustomFieldName | string |  |
| CustomFieldValueFloat | long |  |
| CustomFieldValueHex | string |  |
| CustomFieldValueInt | long |  |
| CustomFieldValueString | string |  |
| CustomMonitoringData | string |  |
| CustomOid | string |  |
| CustomOidResponseSuffix | string |  |
| DestinationNetwork | string |  |
| DestinationNetworkNodeInterface | string |  |
| DestinationNetworkNodeLink | string |  |
| DestinationSubNetwork | string |  |
| Details | string |  |
| DeviceComponentType | string |  |
| DeviceMonitoringChannel | string |  |
| DeviceState | string |  |
| DeviceType | string |  |
| DiagnosticHop | string |  |
| DiagnosticHopLatency | string |  |
| DiskCount | int |  |
| EgressByteCount | long |  |
| EgressPacketCount | long |  |
| EndpointId | int |  |
| Enterprise | string |  |
| ExporterIp | string |  |
| ExportProtocol | string |  |
| FanCount | int |  |
| FriendlyName | string |  |
| GenTrapType | string |  |
| HighLatency | real |  |
| HostFqdn | string |  |
| HostFqdn1 | string |  |
| HostFqdn2 | string |  |
| HostIp | string |  |
| HostIp1 | string |  |
| HostIp2 | string |  |
| IcmpPingStatus | string |  |
| ifAdminStatus | string |  |
| ifHCInBroadcastPkts | long |  |
| ifHCInMulticastPkts | long |  |
| ifHCInOctets | long |  |
| ifHCInUcastPkts | long |  |
| ifHCOutBroadcastPkts | long |  |
| ifHCOutMulticastPkts | long |  |
| ifHCOutOctetsMib2 | int |  |
| ifHCOutUcastPkts | long |  |
| ifHighSpeed | long |  |
| ifInDiscardsMib2 | long |  |
| ifInErrors | long |  |
| ifMtu | long |  |
| ifOperStatus | string |  |
| ifOutDiscards | long |  |
| ifOutErrors | long |  |
| ifOutQLen | long |  |
| ifPhysAddress | string |  |
| ifType | string |  |
| InBroadCastPktsPerSec | long |  |
| Index | long |  |
| InDiscardsPercent | int |  |
| InDiscardsPerSec | long |  |
| InErrorsPercent | int |  |
| InErrorsPerSec | long |  |
| IngressByteCount | long |  |
| IngressPacketCount | long |  |
| InMultiCastPktsPerSec | long |  |
| InOctetsPerSec | long |  |
| InterfaceCount | int |  |
| InterfaceId | int |  |
| InternalByteCount | long |  |
| InternalPacketCount | long |  |
| InUnicastPktsPerSec | long |  |
| IpV4Addresses | string |  |
| IpV4Subnets | string |  |
| IpV6Addresses | string |  |
| IpV6Subnets | string |  |
| IsPrimary | bool |  |
| L2ConnectedNodes | string |  |
| L2ConnectedPorts | string |  |
| L4Port | int |  |
| L4Protocol | string |  |
| L7Protocol | string |  |
| LatencyBenchmark | real |  |
| LatencyFaultLinks | string |  |
| LatencyHealthIndicator | bool |  |
| LatencyHealthState | string |  |
| LatencyMode | string |  |
| LatencyThreshold | real |  |
| LatencyThresholdMode | string |  |
| Loss | real |  |
| LossBenchmark | real |  |
| LossFaultLinks | string |  |
| LossHealthIndicator | bool |  |
| LossHealthState | string |  |
| LossMode | string |  |
| LossThreshold | real |  |
| LossThresholdMode | string |  |
| LowLatency | real |  |
| MachineType | int |  |
| MaxHopLatencyList | string |  |
| MedianLatency | real |  |
| MemAvailablePercent | int |  |
| MemCount | int |  |
| MemTotalInMB | long |  |
| MessageCode | string |  |
| MessageDetails | string |  |
| MessageType | string |  |
| MicrosoftEdge | string |  |
| MicrosoftEdgeAlias | string |  |
| MinHopLatencyList | string |  |
| Model | string |  |
| NodeLinkCount | int |  |
| NodeUniqueName | string |  |
| NotificationCode | int |  |
| NotificationType | string |  |
| NPMAgentEnvironment | string |  |
| OSType | string |  |
| OutBroadCastPktsPerSec | long |  |
| OutDiscardsPercent | int |  |
| OutDiscardsPerSec | long |  |
| OutErrorsPercent | long |  |
| OutErrorsPerSec | long |  |
| OutMultiCastPktsPerSec | long |  |
| OutOctetsPerSec | long |  |
| OutUnicastPktsPerSec | long |  |
| Path | string |  |
| PathInformation | string |  |
| PeeringLocation | string |  |
| PeeringName | string |  |
| PeeringType | string |  |
| PingDelayInMsec | real |  |
| Port | int |  |
| PortName | string |  |
| PrefixLength | string |  |
| PrimaryBytesInPerSecond | long |  |
| PrimaryBytesOutPerSecond | long |  |
| ProcessorCount | int |  |
| ProcessorTimePercent | int |  |
| Protocol | string |  |
| ProviderEdge | string |  |
| ProviderEdgeAlias | string |  |
| ProvisioningState | string |  |
| ResponseCodeHealthState | string |  |
| RouteDestination | string |  |
| RouteMetric | string |  |
| RouteNextHop | string |  |
| RouterIP | string |  |
| RouterName | string |  |
| RouteTableIpV4NextHops | string |  |
| RouteTableIpV6NextHops | string |  |
| RouteTableNextHopNodes | string |  |
| RuleName | string |  |
| SecondaryBytesInPerSecond | long |  |
| SecondaryBytesOutPerSecond | long |  |
| ServiceKey | string |  |
| ServiceLossHealthState | string |  |
| ServiceLossPercent | real |  |
| ServiceProvider | string |  |
| ServiceResponseCode | long |  |
| ServiceResponseHealthState | string |  |
| ServiceResponseThreshold | real |  |
| ServiceResponseThresholdMode | string |  |
| ServiceResponseTime | real |  |
| ServiceTestId | int |  |
| SnmpManagementIpV4Address | string |  |
| SnmpManagementIpV6Address | string |  |
| SnmpPingStatus | string |  |
| SnmpVersion | string |  |
| SourceNetwork | string |  |
| SourceNetworkNodeInterface | string |  |
| SourceNetworkNodeLink | string |  |
| SourceSubNetwork | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SpecificTrapType | string |  |
| SubnetId | string |  |
| SubnetId1 | string |  |
| SubnetId2 | string |  |
| SubnetLinkCount | int |  |
| SubscriptionId | string |  |
| SubType | string |  |
| SupportsSnmp | bool |  |
| sysContact | string |  |
| sysDescr | string |  |
| sysLocation | string |  |
| sysName | string |  |
| sysObjectID | string |  |
| sysUpTime | long |  |
| Target | string |  |
| TestName | string |  |
| TimeGenerated | datetime |  |
| TimeProcessed | datetime |  |
| TimeSinceActive | int |  |
| ToS | int |  |
| TotalByteCount | long |  |
| TotalFlowRecords | long |  |
| TotalPacketCount | long |  |
| TotalPeerings | int |  |
| TotalSessions | int |  |
| TraceRouteCompletionTime | datetime |  |
| TrapCollectionIntervalInSeconds | int |  |
| TrapCount | int |  |
| TrapData | string |  |
| TrapOid | string |  |
| Type | string | The name of the table |
| UtilizationHealthState | string |  |
| Vendor | string |  |
| VirtualNetwork | string |  |
| VLan | int |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

