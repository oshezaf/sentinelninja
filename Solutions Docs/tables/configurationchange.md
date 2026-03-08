# ConfigurationChange

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ConfigurationChange table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | IT & Management Tools |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/configurationchange) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (57 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/configurationchange)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Acls | string | The Access-Control List specifies which users or system processes are granted access to objects |
| Attributes | string |  |
| ChangeCategory | string | The type of change that occurred: Added Removed Modified |
| Computer | string |  |
| ConfigChangeType | string | Type of configuration item that changed: Files Software WindowsServices Registry Daemons |
| Current | string | Current value |
| DateCreated | datetime | Date that the item was created |
| DateModified | datetime | Date that the item was last modified |
| FieldsChanged | string | Fields that were changed as part of the change record |
| FileContentChecksum | string | Checksum of the file content |
| FileSystemPath | string | File system path for the changed file |
| Hive | string | Registry hive for the changed registry key |
| LastSnapshotAge | long | Age of the last snapshot |
| Location | string |  |
| ManagementGroupName | string | Name of a resource's assigned management group |
| Previous | string | Previous value |
| PreviousAcls | string | Previous Acl value |
| PreviousAttributes | string | Previous attributes value |
| PreviousDateCreated | datetime | Previous date created time |
| PreviousDateModified | datetime | Previous date modified time |
| PreviousFileContentChecksum | string | Previous file content checksum value |
| PreviousSize | long | Previous file size |
| PreviousValueData | string | Previous registry value data |
| PreviousValueType | string | Previous registry value type |
| Publisher | string | Software publisher name |
| RegistryKey | string | Registry key name |
| Size | long | Current size of the changed file |
| SoftwareDescription | string | Description of the software |
| SoftwareName | string | Name of the software |
| SoftwareType | string | Type of the software: Application Package Update |
| SourceComputerId | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SvcAccount | string | User account that is associated with the service executable explicitly to provide a security context for the service |
| SvcChangeType | string | Service property that was changed |
| SvcController | string | Parent process for the daemon |
| SvcDisplayName | string | Human-frinedly name for the service |
| SvcName | string | Name of the service |
| SvcPath | string | The file path to the executable for the service |
| SvcPreviousAccount | string | Previous user account that was associated with the sevice executable |
| SvcPreviousController | string | Previous parent process for the daemon |
| SvcPreviousPath | string | Previous file path to the executable for the service |
| SvcPreviousRunlevels | string | Previous modes used by the daemon for system operation |
| SvcPreviousStartupType | string | Previous startup behavior of the service |
| SvcPreviousState | string | Previous state of the service |
| SvcRunlevels | string | Modes used by the daemon for system operation |
| SvcStartupType | string | Startup behavior of the service |
| SvcState | string | Current state of the service |
| TimeGenerated | datetime | Date and time the record was created. |
| Type | string | The name of the table |
| ValueData | string | Data contained in the value and registry key being tracked |
| ValueName | string | Name of the value for the registry key being tracked |
| ValueType | string | Type of the value for the registry key being tracked |
| VMUUID | string |  |

## Solutions (4)

This table is used by the following solutions:

- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)

---

## Content Items Using This Table (4)

### Workbooks (4)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |  |

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

