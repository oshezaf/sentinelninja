# Rapid7InsightVMCloudVulnerabilities

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Rapid7InsightVMCloudVulnerabilities table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/rapid7insightvmcloudvulnerabilities) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (49 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/rapid7insightvmcloudvulnerabilities)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Added | datetime | The date the vulnerability coverage was added (ISO 8601 YYYY-MM-DD) |
| Categories | string | Comma-separated list of categories the vulnerability is classified under |
| Cves | string | All CVEs assigned to this vulnerability |
| CvssV2AccessComplexity | string | Enum: L/M/H. CVSS v2 Access Complexity - attack conditions required to exploit |
| CvssV2AccessVector | string | Enum: L/A/N. CVSS v2 Access Vector - how the vulnerability is exploited (Local/Adjacent/Network) |
| CvssV2Authentication | string | Enum: N/S/M. CVSS v2 Authentication - number of authentications required to exploit |
| CvssV2AvailabilityImpact | string | Enum: N/P/C. CVSS v2 Availability Impact - impact to availability |
| CvssV2ConfidentialityImpact | string | Enum: N/P/C. CVSS v2 Confidentiality Impact - impact on confidentiality |
| CvssV2ExploitScore | real | The CVSS v2 exploit score |
| CvssV2ImpactScore | real | The CVSS v2 impact score |
| CvssV2IntegrityImpact | string | Enum: N/P/C. CVSS v2 Integrity Impact - impact to integrity |
| CvssV2Score | real | The CVSS v2 score (0-10) |
| CvssV2Vector | string | The CVSS v2 vector |
| CvssV3AttackComplexity | string | Enum: L/H. CVSS v3 Attack Complexity - conditions beyond attacker control required |
| CvssV3AttackVector | string | Enum: N/A/L/P. CVSS v3 Attack Vector - context of exploitation |
| CvssV3AvailabilityImpact | string | Enum: N/L/H. CVSS v3 Availability Impact - impact to availability |
| CvssV3ConfidentialityImpact | string | Enum: N/L/H. CVSS v3 Confidentiality Impact - impact on confidentiality |
| CvssV3ExploitScore | real | The CVSS v3 exploit score |
| CvssV3ImpactScore | real | The CVSS v3 impact score |
| CvssV3IntegrityImpact | string | Enum: N/L/H. CVSS v3 Integrity Impact - impact to integrity |
| CvssV3PrivilegesRequired | string | Enum: N/L/H. CVSS v3 Privileges Required - level of privileges needed before exploit |
| CvssV3Scope | string | Enum: U/C. CVSS v3 Scope - impact remains in same authority or crosses |
| CvssV3Score | real | The CVSS v3 score (0-10) |
| CvssV3UserInteraction | string | Enum: N/R. CVSS v3 User Interaction - whether user action is required |
| CvssV3Vector | string | The CVSS v3 vector |
| DenialOfService | bool | Whether the vulnerability can lead to Denial of Service (DoS) |
| Description | string | A verbose description of the vulnerability |
| Exploits | string | The exploits that can be used to exploit a vulnerability |
| Id | string | The identifier of the vulnerability |
| Links | string | References to security standards this vulnerability is a part of |
| MalwareKits | string | The malware kits that are known to be used to exploit the vulnerability |
| Modified | datetime | The last date the vulnerability was modified (ISO 8601 YYYY-MM-DD) |
| PciCvssScore | real | The CVSS score adjusted for PCI rules (0-10) |
| PciFail | bool | Whether presence on a host would cause a PCI failure |
| PciSeverityScore | real | The severity score adjusted for PCI rules (0-10) |
| PciSpecialNotes | string | Special notes or remarks about the vulnerability pertaining to PCI compliance |
| PciStatus | string | The PCI compliance status |
| Published | datetime | The date the vulnerability was first published (ISO 8601 YYYY-MM-DD) |
| References | string | Condensed references to security standards: [<source>:<id>,...] |
| RiskScore | real | The risk score of the vulnerability (e.g., Rapid7 Real Risk , 0-1000) |
| Severity | string | The severity of the vulnerability (none, informational, low, moderate, severe, critical) |
| SeverityScore | real | The severity score of the vulnerability (0-10) |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time the event was generated |
| Type | string | The name of the table |
| VulnerabilityTitle | string | The title (summary) of the vulnerability |

## Solutions (1)

This table is used by the following solutions:

- [Rapid7InsightVM](../solutions/rapid7insightvm.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Rapid7 Insight Platform Vulnerability Management Reports (via Codeless Connector Framework)](../connectors/rapid7insightvmconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [InsightVMVulnerabilities](../parsers/insightvmvulnerabilities.md) | [Rapid7InsightVM](../solutions/rapid7insightvm.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

