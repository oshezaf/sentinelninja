# ASimFileEventLogs

Reference for ASimFileEventLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimfileeventlogs) |

## Solutions (4)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## Connectors (2)

This table is ingested by the following connectors:

- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md)
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md)

---

## Content Items Using This Table (8)

### Analytic Rules (1)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-8f9cd0e5-b4ab-4821-95e2-1082fcd784c7-681b75ff.md)

### Hunting Queries (6)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-0051a0d9-684f-4317-abbd-c1e5c24b39cb-5660b61d.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect File Creation in Startup Folder](../content/malware-protection-essentials-detect-file-creation-in-startup-folder-64e199a8-b26c-462f-a65c-09ed9b53a47b-2d1178e6.md)
- [Detect Files with Ramsomware Extensions](../content/malware-protection-essentials-detect-files-with-ramsomware-extensions-595aea5c-74c7-415b-8b12-10af1a338cdf-d88185c4.md)
- [Detect Modification to System Files or Directories by User Accounts](../content/malware-protection-essentials-detect-modification-to-system-files-or-directories-by-user-accounts-54b222c4-0149-421e-9d6d-da66da50495a-78cf8ebf.md)
- [Detect New Scheduled Task Entry Creations](../content/malware-protection-essentials-detect-new-scheduled-task-entry-creations-4dc0aae4-6375-4670-b138-8c42490ba206-84bcf125.md)
- [Executable Files Created in Uncommon Locations](../content/malware-protection-essentials-executable-files-created-in-uncommon-locations-ab8ddb26-050c-40aa-aaf0-bfb7e3eeb05f-1af678b6.md)

### Workbooks (1)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malware-protection-essentials-malwareprotectionessentialsworkbook-df9a8a0a.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/asimtables`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
