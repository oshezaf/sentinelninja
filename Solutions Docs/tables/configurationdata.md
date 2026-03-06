# ConfigurationData

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ConfigurationData table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | IT & Management Tools |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/configurationdata) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (40 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/configurationdata)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Acls | string | The Access-Control List specifies which users or system processes are granted access to objects |
| Architecture | string | Instruction set architecture for the software being tracked |
| Attributes | string |  |
| Computer | string |  |
| ConfigDataType | string | Type of configuration item: Files Software WindowsServices Registry Daemons |
| CurrentVersion | string | Current software version |
| DateCreated | datetime | Created date of the file |
| DateModified | datetime | Last modified date of the file |
| FileContentChecksum | string | Checksum of the reporting file |
| FileSystemPath | string | File system path for the reporting file |
| Hive | string | Registry hive for the reporting registry key |
| Location | string |  |
| ManagementGroupName | string |  |
| Publisher | string | Software publisher name |
| RegistryKey | string | Registy key name |
| Size | long | Size of the file |
| SoftwareDescription | string | Description of the software |
| SoftwareName | string | Name of the software |
| SoftwareType | string | Type of the software: Application Package Update |
| SourceComputerId | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SvcAccount | string | User account that is associated with the service executable explicitly to provide a security context for the service |
| SvcController | string | Service property that was changed |
| SvcDescription | string | Parent process for the daemon |
| SvcDisplayName | string | Human-frinedly name for the service |
| SvcName | string | Name of the service |
| SvcPath | string | The file path to the executable for the service |
| SvcRunlevels | string | Modes used by the daemon for system operation |
| SvcStartupType | string | Startup behavior of the service |
| SvcState | string | Current state of the service |
| TimeGenerated | datetime | Date and time the record was created. |
| Type | string | The name of the table |
| ValueData | string | Data contained in the value and registry key being tracked |
| ValueName | string | Name of the value for the registry key being tracked |
| ValueType | string | Type of the value for the registry key being tracked |
| VMUUID | string |  |

## Solutions (2)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

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

