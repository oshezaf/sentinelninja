# Rapid7InsightVMCloudAssets

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Rapid7InsightVMCloudAssets table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/rapid7insightvmcloudassets) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (37 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/rapid7insightvmcloudassets)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AssessedForPolicies | bool | Whether an asset was assessed for policies |
| AssessedForVulnerabilities | bool | Whether an asset was assessed for vulnerabilities |
| AssetType | string | The type of asset |
| CredentialAssessments | string | The credential assessments for the asset |
| CriticalVulnerabilities | real | The count of critical vulnerability findings |
| Exploits | real | The count of known unique exploits that can be used to exploit vulnerabilities on the asset |
| HostName | string | The host name (local or FQDN) |
| Id | string | The asset identifier |
| Ip | string | The IPv4 or IPv6 address |
| LastAssessedForVulnerabilities | datetime | The time at which an asset was assessed for vulnerabilities |
| LastScanEnd | datetime | The time at which the last scan of the asset ended |
| LastScanStart | datetime | The time at which the last scan of the asset started |
| Mac | string | The Media Access Control (MAC) address with format specification |
| MalwareKits | real | The count of known unique malware kits that can be used to attack vulnerabilities |
| ModerateVulnerabilities | real | The count of moderate vulnerability findings |
| New | string | Vulnerabilities that are new in the latest version (when comparison time is supplied) |
| OsArchitecture | string | The architecture of the operating system |
| OsDescription | string | The description of the operating system (containing vendor, family, product, version and architecture) |
| OsFamily | string | The family of the operating system |
| OsName | string | The name of the operating system |
| OsSystemName | string | A combination of vendor and family (with redundancies removed), suitable for grouping |
| OsType | string | The type of operating system |
| OsVendor | string | The vendor of the operating system |
| OsVersion | string | The version of the operating system |
| Remediated | string | Vulnerabilities that were remediated in the latest version (when comparison time is supplied) |
| RiskScore | real | The risk score (with criticality adjustments) of the asset |
| Same | string | Vulnerabilities that are the same between current and comparison time (when comparison time is supplied and includeSame is true) |
| SevereVulnerabilities | real | The count of severe vulnerability findings |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Tags | string | The tags applied to the asset |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time the event was generated |
| TotalVulnerabilities | real | The total count of vulnerability findings |
| Type | string | The name of the table |
| UniqueIdentifiers | string | Unique identifiers found on the asset, such as hardware or operating system identifiers |

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
| [InsightVMAssets](../parsers/insightvmassets.md) | [Rapid7InsightVM](../solutions/rapid7insightvm.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

