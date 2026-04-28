# QualysKnowledgeBase

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for QualysKnowledgeBase table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/qualysknowledgebase) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/qualysknowledgebase)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Category | string | Vulnerability Category. |
| Consequence | string | Vulnerability Consequence. |
| CveId | dynamic | Common Vulnerabilities and Exposures identifier. |
| CveUrl | dynamic | URL for the CVE entry. |
| Diagnosis | string | Diagnosis information for the vulnerability. |
| DiscoveryAdditionalInfo | string | Additional information about vulnerability discovery. |
| DiscoveryAuthType | dynamic | Authentication type used for discovery. |
| DiscoveryRemote | string | Remote discovery information. |
| LastServiceModificationDateTime | datetime | Date and time when the vulnerability was last modified in the service. |
| Patchable | string | Indicates whether the vulnerability is patchable. |
| PciFlag | string | PCI compliance flag indicator. |
| PublishedDatetime | datetime | Date and time when the vulnerability was published. |
| Qid | string | The QID of the vulnerability. |
| SeverityLevel | string | Severity level of the vulnerability. |
| SoftwareProduct | dynamic | Software product affected by the vulnerability. |
| SoftwareVendor | dynamic | Vendor of the affected software. |
| Solution | string | Solution or remediation steps for the vulnerability. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| ThreatIntelligence | dynamic | Threat intelligence data associated with the vulnerability. |
| TimeGenerated | datetime | Date and time when the record was generated. |
| Type | string | The name of the table |
| VendorReferenceId | dynamic | Vendor-specific reference identifier. |
| VendorReferenceUrl | dynamic | URL for vendor-specific reference. |
| VulnTitle | string | Title of the ingested vulnerability. |
| VulnType | string | Type or classification of the vulnerability. |

## Solutions (1)

This table is used by the following solutions:

- [Qualys VM Knowledgebase](../solutions/qualys-vm-knowledgebase.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Qualys VM KnowledgeBase](../connectors/qualyskb.md) |  |
| [Qualys Knowledge Base (via Codeless Connector Framework)](../connectors/qualyskbconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [QualysKB](../parsers/qualyskb.md) | [Qualys VM Knowledgebase](../solutions/qualys-vm-knowledgebase.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

