# VMComputer

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for VMComputer table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | VMinsights |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/vmcomputer) |

## Schema (58 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/vmcomputer)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AgentId | string | Unique ID for the microsoft monitoring agent installed on the server. |
| AzureCloudServiceDeployment | string | For cloud services the deployment id of the server. |
| AzureCloudServiceInstanceId | string | For cloud services the instance name of the server. |
| AzureCloudServiceName | string | For cloud services the service name of the server. |
| AzureCloudServiceRoleName | string | For cloud services the role name of the server. |
| AzureCloudServiceRoleType | string | For cloud services the role type of the server. |
| AzureFaultDomain | string | The fault domain for the server. Only available for Azure VMs and VMSS instances. |
| AzureImageOffering | string | The description of the image used on the server. Only available for Azure VMs and VMSS instances. |
| AzureImagePublisher | string | The publisher of the VM image used on the server. Only available for Azure VMs and VMSS instances. |
| AzureImageSku | string | The sku for the VM image used on the server. Only available for Azure VMs and VMSS instances. |
| AzureImageVersion | string | The image version used on the server. Only available for Azure VMs and VMSS instances. |
| AzureLocation | string | The location of the server. Only available for Azure VMs and VMSS instances. |
| AzureResourceGroup | string | The resource group for the server. Only available for Azure VMs and VMSS instances. |
| AzureResourceName | string | The Azure name for the resource. |
| AzureServiceFabricClusterId | string | For service fabric clusters the cluster id of the server. |
| AzureServiceFabricClusterName | string | For service fabric clusters the cluster name. |
| AzureSize | string | The size of the Azure VM. Only available for Azure VMs and VMSS instances. |
| AzureSubscriptionId | string | The subscription ID of the server. Only available for Azure VMs and VMSS instances. |
| AzureUpdateDomain | string | The update domain of the server. Only available for Azure VMs and VMSS instances. |
| AzureVmId | string | The Azure ID of the server. Only available for Azure VMs and VMSS instances. |
| AzureVmScaleSetDeployment | string | For scale sets the deployment id of the server. |
| AzureVmScaleSetInstanceId | string | For scale sets the instance id of the server. |
| AzureVmScaleSetName | string | For scale sets the name of the scale set. |
| AzureVmScaleSetResourceId | string | For scale sets the resource id of the scale set. |
| BootTime | datetime | The boot time in UTC |
| Computer | string | The name of the computer. |
| Cpus | int | The number of CPUs |
| CpuSpeed | int | The CPU speed in MHz |
| DependencyAgentVersion | string | The version number of the dependency agent on the server. |
| DisplayName | string | The display name of the server. |
| DnsNames | dynamic | An array of DNS names |
| FullDisplayName | string | The full display name of the server. |
| HostingProvider | string | The hosting provider for the server |
| HostName | string | The host name of the server without domain. |
| HypervisorId | string | The hypervisor id of the server. |
| HypervisorType | string | The hypervisor type of the server. |
| Ipv4Addresses | dynamic | A list of the server's IPv4 addresses |
| Ipv4DefaultGateways | dynamic | A list of the server's IPv4 default gateways. |
| Ipv4SubnetMasks | dynamic | A list of the server's IPv4 subnet masks. |
| Ipv6Addresses | dynamic | A list of the server's IPv6 addresses |
| MacAddresses | dynamic | A list of the server's MAC addresses |
| Machine | string | AgentId with m- prepended. |
| OperatingSystemFamily | string | Value will be windows or linux |
| OperatingSystemFullName | string | The full name of the operating system |
| PhysicalMemoryMB | long | The physical memory in MB |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TimeGenerated | datetime | Date and time the record was created. |
| TimeZone | string | The UTC timezone offset of the server. |
| Type | string | The name of the table |
| VirtualizationState | string | Values will be Unknown Physical Virtual or Hypervisor |
| VirtualMachineHypervisorId | string | The hypervisor id of the server. |
| VirtualMachineNativeId | string | The native id of the server. |
| VirtualMachineNativeName | string | The name of the VM |
| VirtualMachineType | string | hyperv vmware xen and so on |

## Solutions (1)

This table is used by the following solutions:

- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

