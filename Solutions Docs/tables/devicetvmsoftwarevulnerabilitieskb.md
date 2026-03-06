# DeviceTvmSoftwareVulnerabilitiesKB

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Knowledge base of publicly disclosed vulnerabilities, including whether exploit code is publicly available

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmsoftwarevulnerabilitieskb) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicetvmsoftwarevulnerabilitieskb-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (15 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmsoftwarevulnerabilitieskb)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AffectedSoftware | dynamic | List of all software products affected by the vulnerability. |
| CveId | string | Unique identifier assigned to the security vulnerability under the Common Vulnerabilities and Exposures (CVE) system. |
| CvssScore | real | Severity score assigned to the security vulnerability under the Common Vulnerability Scoring System (CVSS). |
| IsExploitAvailable | bool | Indicates whether exploit code for the vulnerability is publicly available. |
| LastModifiedTime | datetime | Date and time the item or related metadata was last modified. |
| PublishedDate | datetime | Date vulnerability was disclosed to the public. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the record was generated. |
| Timestamp | datetime | Date and time when the record was generated |
| Type | string | The name of the table |
| VulnerabilityDescription | string | Description of the vulnerability and associated risks. |
| VulnerabilitySeverityLevel | string | Severity level assigned to the security vulnerability based on the CVSS score and dynamic factors influenced by the threat landscape. |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

---

## Content Items Using This Table (1)

### Hunting Queries (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect CISA Alert (AA22-117A) 2021 Top Routinely Exploited Vulnerabilities](../content/microsoft-defender-xdr-detect-cisa-alert-aa22-117a-2021-top-routinely-exploited-vulnerabilities-180bacfd-18de-450a-8e0c-7d2fa399ca49-875b2843.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

