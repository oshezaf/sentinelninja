# StorageFileLogs

Reference for StorageFileLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/storagefilelogs) |

## Solutions (4)

This table is used by the following solutions:

- [Azure Storage](../solutions/azure-storage.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Azure Storage Account](../connectors/azurestorageaccount.md)

---

## Content Items Using This Table (9)

### Analytic Rules (1)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/8f9cd0e5-b4ab-4821-95e2-1082fcd784c7.md)

### Hunting Queries (6)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/0051a0d9-684f-4317-abbd-c1e5c24b39cb.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect File Creation in Startup Folder](../content/64e199a8-b26c-462f-a65c-09ed9b53a47b.md)
- [Detect Files with Ramsomware Extensions](../content/595aea5c-74c7-415b-8b12-10af1a338cdf.md)
- [Detect Modification to System Files or Directories by User Accounts](../content/54b222c4-0149-421e-9d6d-da66da50495a.md)
- [Detect New Scheduled Task Entry Creations](../content/4dc0aae4-6375-4670-b138-8c42490ba206.md)
- [Executable Files Created in Uncommon Locations](../content/ab8ddb26-050c-40aa-aaf0-bfb7e3eeb05f.md)

### Workbooks (2)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malwareprotectionessentialsworkbook-malware-protection-essentials.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.storage/storageaccounts`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
