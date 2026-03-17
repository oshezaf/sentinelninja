# DeviceNetworkInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Network properties of devices, including physical adapters, IP and MAC addresses, as well as connected networks and domains

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicenetworkinfo) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicenetworkinfo-table) |

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

## Solutions (3)

This table is used by the following solutions:

- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Standalone Content](../solutions/standalone-content.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (19)

### Analytic Rules (1)

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [RDP Nesting](../content/standalone-content-rdp-nesting-69a45b05-71f5-45ca-8944-2e038747fb39-c48bfa3a.md) |  |

### Hunting Queries (14)

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MDE_DeviceInventory-LastUserLoggedIn](../content/standalone-content-mde-deviceinventory-lastuserloggedin-39226090-3c73-407f-bef8-9a09f98fc668-613b4c17.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Alert Events from Internal IP Address](../content/github-only-alert-events-from-internal-ip-address-f936ddfa-58e3-4db1-834b-fb50e8bd55c5-0c346d92.md) |  |
| [Baseline Comparison](../content/github-only-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-6e7e6931.md) |  |
| [ConnectedNetworkDeviceDiscovery](../content/github-only-connectednetworkdevicediscovery-c7813a5c-ef11-4ee9-8feb-731402f31259-5481412c.md) |  |
| [Device Logons from Unknown IPs](../content/github-only-device-logons-from-unknown-ips-a6d76204-efb2-4ccd-a068-d5a9e6876236-62ddb799.md) |  |
| [Devices In Subnet - IPAddressV4](../content/github-only-devices-in-subnet-ipaddressv4-7f4a9010-4948-4e0c-b668-7a2f603c7dc8-a32cecb4.md) |  |
| [Devices In Subnet - IPAddressV6](../content/github-only-devices-in-subnet-ipaddressv6-008f87b5-5b80-4487-9612-80032d931a69-3641f437.md) |  |
| [Machine info from IP address](../content/github-only-machine-info-from-ip-address-34a7334e-7bc0-4e3f-abc5-469ac7e29be7-44505e2c.md) |  |
| [Machine info from IP address (1)](../content/github-only-machine-info-from-ip-address-1-49cf658e-f446-476e-a7da-30909caaa3e3-db8ff898.md) |  |
| [Machine info from IP address (3)](../content/github-only-machine-info-from-ip-address-3-e10dd84f-e4d6-4b21-a9da-816699de0ba8-0cc85c2d.md) |  |
| [Network info of machine](../content/github-only-network-info-of-machine-86fb56b4-3a10-443b-8345-d00a45046d15-7a7ced1d.md) |  |
| [Seen Connected Networks](../content/github-only-seen-connected-networks-cd1492a0-7e53-4615-9e63-f930576a3f6b-f083ca4f.md) |  |
| [Seen IPv4 Network Subnets](../content/github-only-seen-ipv4-network-subnets-919047fa-f646-469a-bfeb-69a0dcbf44c0-0fa1d029.md) |  |
| [Seen IPv6 Network Subnets](../content/github-only-seen-ipv6-network-subnets-dab99d96-b53d-438f-9826-fd0934e8578c-4cf6873a.md) |  |

### Workbooks (4)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/github-only-microsoftdefenderforendpoint-ac005534.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AssignedIPAddress](../parsers/assignedipaddress.md) | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |  |
| [Devicefromip](../parsers/devicefromip.md) | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

