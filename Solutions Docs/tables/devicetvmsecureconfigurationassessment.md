# DeviceTvmSecureConfigurationAssessment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Microsoft Defender Vulnerability Management assessment events, indicating the status of various security configurations on devices

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmsecureconfigurationassessment) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicetvmsecureconfigurationassessment-table) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (18 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmsecureconfigurationassessment)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ConfigurationCategory | string | Category or grouping to which the configuration belongs |
| ConfigurationId | string | Unique identifier for a specific configuration |
| ConfigurationImpact | real | Rated impact of the configuration to the overall configuration score (1-10) |
| ConfigurationSubcategory | string | Subcategory or subgrouping to which the configuration belongs. In many cases, this describes specific capabilities or features. |
| Context | dynamic | Machine data configuration context |
| DeviceId | string | Unique identifier for the device in the service |
| DeviceName | string | Fully qualified domain name (FQDN) of the device |
| IsApplicable | bool | Indicates whether the configuration or policy is applicable |
| IsCompliant | bool | Indicates whether the configuration or policy is properly configured |
| IsExpectedUserImpact | bool | Indicates if user impact is expected when configuration applied |
| OSPlatform | string | Platform of the operating system running on the device. This indicates specific operating systems, including variations within the same family, such as Windows 10 and Windows 7 |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the record was generated |
| Timestamp | datetime | Date and time when the record was generated |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Standalone Content](../solutions/standalone-content.md)

---

## Content Items Using This Table (3)

### Hunting Queries (3)

**Standalone Content:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [MDE_DeviceHealth](../content/standalone-content-mde-devicehealth-da4eeb70-c39b-4d8f-a4f0-22e15a745230-d1196843.md) |  |

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Endpoint Agent Health Status Report](../content/github-only-endpoint-agent-health-status-report-64c0f54f-9a8d-4630-95c8-aa2751e5da0c-7b7ccf5d.md) |  |
| [MD AV Signature and Platform Version](../content/github-only-md-av-signature-and-platform-version-30035880-b7af-4d5e-8617-be7f070a5c1c-78f9bd77.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

