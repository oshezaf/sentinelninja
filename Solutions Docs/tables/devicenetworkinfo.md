# DeviceNetworkInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Network properties of devices, including physical adapters, IP and MAC addresses, as well as connected networks and domains

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicenetworkinfo) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicenetworkinfo-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (22 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicenetworkinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ConnectedNetworks | dynamic | Networks that the adapter is connected to. Each JSON element in the array contains the network name, category (public, private or domain), a description, and a flag indicating if it is connected publicly to the internet. |
| DefaultGateways | dynamic | Default gateway addresses in JSON array format. |
| DeviceId | string | Unique identifier for the device in the service. |
| DeviceName | string | Fully qualified domain name (FQDN) of the device. |
| DnsAddresses | dynamic | DNS server addresses in JSON array format. |
| IPAddresses | dynamic | JSON array containing all the IP addresses assigned to the adapter, along with their respective subnet prefix and the IP class (RFC 1918 & RFC 4291). |
| IPv4Dhcp | string | IPv4 address of the configured DHCP server. |
| IPv6Dhcp | string | IPv6 address of the configured DHCP server. |
| MacAddress | string | MAC address of the network adapter. |
| MachineGroup | string | The machine-group which this machine is associated to. This group is used by role-based access control to determine access to the machine. |
| NetworkAdapterName | string | Name of the network adapter. |
| NetworkAdapterStatus | string | Operational status of the network adapter. |
| NetworkAdapterType | string | Network adapter type. |
| NetworkAdapterVendor | string | Name of the manufacturer or vendor of the network adapter. |
| ReportId | long | Event identifier based on a repeating counter. To identify unique events, this column must be used in conjunction with the DeviceName and/or Timestamp columns. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the event was recorded by the MDE agent on the endpoint. |
| TunnelType | string | Tunneling protocol, when the interface is used for this purpose, for example 6to4, Teredo, ISATAP, PPTP, SSTP, and SSH. |
| Type | string | The name of the table |

## Solutions (2)

This table is used by the following solutions:

- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AssignedIPAddress](../parsers/assignedipaddress.md) | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |  |
| [Devicefromip](../parsers/devicefromip.md) | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

