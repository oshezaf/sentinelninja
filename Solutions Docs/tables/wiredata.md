# WireData

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for WireData table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security, Virtual Machines |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wiredata) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (48 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wiredata)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApplicationProtocol | string | Type of network protocol used |
| ApplicationServiceName | string | Hold over field from old schema - attribute not collected |
| Computer | string | Computer name where data was collected |
| Confidence | string | Confidence level for Malicious IP identification. Values are 0 - 100. |
| Description | string | Description of the observed threat. |
| Direction | string | Inbound or outbound |
| FirstReportedDateTime | string | The first time the provider reported the threat. |
| IndicatorThreatType | string | Threat indicator detected is one of the following values Botnet C2 CryptoMining Darknet DDos MaliciousUrl Malware Phishing Proxy PUA Watchlist. |
| IPVersion | string | IP version |
| IsActive | string | Indicates indicators are deactivated with True or False value. |
| LastReportedDateTime | string | The last time the indicator was seen by Interflow. |
| LatencyMilliseconds | int | Hold over field from old schema - attribute not collected |
| LatencySamplingFailureRate | string | Hold over field from old schema - attribute not collected |
| LatencySamplingTimeStamp | datetime | Hold over field from old schema - attribute not collected |
| LocalIP | string | IP address of the local computer |
| LocalMAC | string | Hold over field from old schema - attribute not collected |
| LocalPortNumber | int | Local port number |
| LocalSubnet | string | Subnet where data was collected |
| MaliciousIP | string | IP address of a known malicious source |
| ManagementGroupName | string | Name of the Operations Manager management group |
| ProcessID | int | Windows process ID |
| ProcessName | string | Path and file name of the process |
| ProtocolName | string | Name of the network protocol used |
| ReceivedBytes | long | Amount of bytes received |
| ReceivedPackets | long | Hold over field from old schema - attribute not collected |
| RemoteIP | string | Remote IP address used by the remote computer |
| RemoteIPCountry | string | Country/region of the remote IP address |
| RemoteIPLatitude | real | IP latitude value |
| RemoteIPLongitude | real | IP longitude value |
| RemoteMAC | string | Hold over field from old schema - attribute not collected |
| RemotePortNumber | int | Port number used by the remote IP address |
| SentBytes | long | Number of bytes sent |
| SentPackets | long | Hold over field from old schema - attribute not collected |
| SequenceNumber | long | Hold over field from old schema - attribute not collected |
| SessionEndTime | datetime | End time of session |
| SessionID | string | A unique value that identifies communication session between two IP addresses |
| SessionStartTime | datetime | Start time of session |
| SessionState | string | Connected or disconnected |
| Severity | int | Suspected malware severity |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TimeGenerated | datetime | Time of the record |
| TLPLevel | string | Traffic Light Protocol (TLP) Level is one of the defined values White Green Amber Red. |
| TotalBytes | long | Total number of bytes sent during session |
| Type | string | The name of the table |

## Solutions (2)

This table is used by the following solutions:

- [SOC Handbook](../solutions/soc-handbook.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)

---

## Content Items Using This Table (2)

### Hunting Queries (1)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map File Entity to WireData Event](../content/threat-intelligence-ti-map-file-entity-to-wiredata-event-689a9475-440b-4e69-8ab1-a5e241685f39-12f328f6.md) |  |

### Workbooks (1)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

