# FileMaliciousContentInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for FileMaliciousContentInfo table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/filemaliciouscontentinfo) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

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

## Schema References

Official Microsoft Learn documentation for field/column information:

- [FileMaliciousContentInfo Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/filemaliciouscontentinfo)

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

---

## Content Items Using This Table (19)

### Hunting Queries (18)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [File Malware Detections Over Time (SharePoint, OneDrive and Teams)](../content/microsoft-defender-xdr-file-malware-detections-over-time-sharepoint,-onedrive-and-teams-5dcb4965-db9c-4fee-a7b1-c178998ce5e8-59e67e97.md) |  |
| [File Malware Detections by Location (SharePoint, OneDrive and Teams)](../content/microsoft-defender-xdr-file-malware-detections-by-location-sharepoint,-onedrive-and-teams-f72e4cc0-1cb9-413a-8f56-f0363c205d1c-d5b90258.md) |  |
| [File Malware Detections by Workload (SharePoint, OneDrive and Teams)](../content/microsoft-defender-xdr-file-malware-detections-by-workload-sharepoint,-onedrive-and-teams-6f0595a9-724e-4b19-8a9c-8a50d0ac2eef-8510c840.md) |  |
| [File Malware Top Families by Microsoft Defender Detonation (SharePoint, OneDrive and Teams)](../content/microsoft-defender-xdr-file-malware-top-families-by-microsoft-defender-detonation-sharepoint,-onedrive-a-2c96d709-274b-45b8-b53a-545124ac8d8a-9f819c41.md) |  |
| [File Malware Top Families by SharePoint Antivirus (SharePoint, OneDrive and Teams)](../content/microsoft-defender-xdr-file-malware-top-families-by-sharepoint-antivirus-sharepoint,-onedrive-and-teams-57d825ee-1546-48af-b2d3-644731d21ad3-4c73c23b.md) |  |
| [File Scanning Coverage (SharePoint, OneDrive and Teams)](../content/microsoft-defender-xdr-file-scanning-coverage-sharepoint,-onedrive-and-teams-f9caad74-cd5a-4559-949a-6cd0f3376ff6-35225b40.md) |  |
| [Malicious files shared in Microsoft Teams](../content/microsoft-defender-xdr-malicious-files-shared-in-microsoft-teams-b2ec7e00-f8a5-450a-81d9-ddb884162595-85958595.md) | `Workload == "MicrosoftTeams"` |
| [Teams File Protection Summary](../content/microsoft-defender-xdr-teams-file-protection-summary-1be71088-f71c-43cc-9adc-9e5fd7a3a8c4-5ba280b0.md) |  |
| [Top File Owners Holding Malware (SharePoint, OneDrive and Teams)](../content/microsoft-defender-xdr-top-file-owners-holding-malware-sharepoint,-onedrive-and-teams-c8b12c34-4571-4d37-ae85-fafb02f8bc24-1bea7010.md) |  |

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [File Malware Detections Over Time (SharePoint, OneDrive and Teams)](../content/github-only-file-malware-detections-over-time-sharepoint,-onedrive-and-teams-1e361131-c7eb-4f7a-982f-a23d5d6a3490-e2fe77d5.md) |  |
| [File Malware Detections by Location (SharePoint, OneDrive and Teams)](../content/github-only-file-malware-detections-by-location-sharepoint,-onedrive-and-teams-3a9fa02a-4510-47a2-b76f-3be67c9ae06f-0aec7e6b.md) |  |
| [File Malware Detections by Workload (SharePoint, OneDrive and Teams)](../content/github-only-file-malware-detections-by-workload-sharepoint,-onedrive-and-teams-a895b106-6436-4586-aba7-26aee8309e64-b7d6959d.md) |  |
| [File Malware Top Families by Microsoft Defender Detonation (SharePoint, OneDrive and Teams)](../content/github-only-file-malware-top-families-by-microsoft-defender-detonation-sharepoint,-onedrive-and-teams-c2c416d7-e7ac-4e1d-ad74-10d939cf0be5-6328d4de.md) |  |
| [File Malware Top Families by SharePoint Antivirus (SharePoint, OneDrive and Teams)](../content/github-only-file-malware-top-families-by-sharepoint-antivirus-sharepoint,-onedrive-and-teams-e4f87c4a-0a56-4514-acfa-d662450132fa-a4b3f565.md) |  |
| [File Scanning Coverage (SharePoint, OneDrive and Teams)](../content/github-only-file-scanning-coverage-sharepoint,-onedrive-and-teams-7d86be89-dbdd-487e-961a-80228935563f-84870788.md) |  |
| [Malicious files shared in Microsoft Teams](../content/github-only-malicious-files-shared-in-microsoft-teams-7ad7e727-44f3-4b5b-80a4-b6b54d5eba5a-c068ce8d.md) | `Workload == "MicrosoftTeams"` |
| [Teams File Protection Summary](../content/github-only-teams-file-protection-summary-27ce9419-ad42-4fff-94df-9ad4b3c613ab-a61272bc.md) |  |
| [Top File Owners Holding Malware (SharePoint, OneDrive and Teams)](../content/github-only-top-file-owners-holding-malware-sharepoint,-onedrive-and-teams-fe2faae3-9864-44b0-a42d-8e829baa34a9-7b0a8a29.md) |  |

### Workbooks (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md) |  |

## Selection Criteria Summary (1 criteria, 2 total references)

References by type: 0 connectors, 2 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Workload == "MicrosoftTeams"` | - | 2 | - | - | **2** |
| **Total** | **0** | **2** | **0** | **0** | **2** |

### Workload

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `MicrosoftTeams` | - | 2 | - | - | **2** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

