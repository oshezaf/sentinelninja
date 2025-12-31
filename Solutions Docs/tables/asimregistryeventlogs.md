# ASimRegistryEventLogs

Reference for ASimRegistryEventLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimregistryeventlogs) |

## Solutions (3)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## Connectors (2)

This table is ingested by the following connectors:

- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md)
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md)

---

## Content Items Using This Table (5)

### Analytic Rules (4)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect Print Processors Registry Driver Key Creation/Modification](../content/7edde3d4-9859-4a00-b93c-b19ddda55320.md)
- [Detect Registry Run Key Creation/Modification](../content/dd041e4e-1ee2-41ec-ba4e-82a71d628260.md)
- [Detect Windows Allow Firewall Rule Addition/Modification](../content/056593d4-ca3b-47a7-be9d-d1d0884a1d36.md)
- [Detect Windows Update Disabled from Registry](../content/f1443a87-78d5-40c3-b051-f468f0f2def0.md)

### Workbooks (1)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malwareprotectionessentialsworkbook-malware-protection-essentials.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/asimtables`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
