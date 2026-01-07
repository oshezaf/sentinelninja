# ASimProcessEventLogs

Reference for ASimProcessEventLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimprocesseventlogs) |

## Solutions (5)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## Connectors (2)

This table is ingested by the following connectors:

- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md)
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md)

---

## Content Items Using This Table (7)

### Analytic Rules (3)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect Malicious Usage of Recovery Tools to Delete Backup Files](../content/259de2c1-c546-4c6d-a17c-df639722f4d7.md)
- [Process Creation with Suspicious CommandLine Arguments](../content/fdbcc0eb-44fb-467e-a51d-a91df0780a81.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Imminent Ransomware](../content/bb46dd86-e642-48a4-975c-44f5ac2b5033.md)

### Hunting Queries (3)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Certutil (LOLBins and LOLScripts, Normalized Process Events)](../content/eb022863-9ae2-41d4-b633-29e4d024b76f.md)
- [Windows System Shutdown/Reboot (Normalized Process Events)](../content/5db1f6f9-9de9-43a9-b7cc-357486b42fc6.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect New Scheduled Task Creation that Run Executables From Non-Standard Location](../content/b43394b9-fa91-4d98-b331-619926a933bb.md)

### Workbooks (1)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malwareprotectionessentialsworkbook-malware-protection-essentials.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/processeventnormalized`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
