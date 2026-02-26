# FileMaliciousContentInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Files that were processed by Microsoft Defender for Office 365 in SharePoint Online, OneDrive, and Microsoft Teams.

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/filemaliciouscontentinfo) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailurlinfo-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (21 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/filemaliciouscontentinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| DetectionMethods | string | Verdict from the email filtering stack on whether the email contains malware, phishing, or other threats. |
| DocumentID | string | Unique identifier of the file. |
| FileCreationTime | datetime | Timestamp of the file creation. |
| FileName | string | Name of the file that the recorded action was applied to. |
| FileOwnerDisplayName | string | Account recorded as owner of the file. |
| FileOwnerUpn | string | Account recorded as owner of the file |
| FileSize | long | Size of the file in bytes. |
| FolderPath | string | Folder containing the file that the recorded action was applied to. |
| LastModifiedTime | datetime | Date and time the item, or related metadata was last modified. |
| LastModifyingAccountUpn | string | Account that last modified this file. |
| ReportId | string | Unique identifier for the event. |
| SHA256 | string | SHA-256 of the file that the recorded action was applied to. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| ThreatNames | string | Detection name for malware or other threats found. |
| ThreatTypes | string | Verdict from the email filtering stack on whether the email contains malware, phishing, or other threats. |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated. |
| Type | string | The name of the table |
| Workload | string | Information about the workload from which the URL originated from. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

