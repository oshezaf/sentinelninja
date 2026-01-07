# CTERA

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CTERA |
| **Support Tier** | Partner |
| **Support Link** | [https://www.ctera.com/](https://www.ctera.com/) |
| **Categories** | domains |
| **First Published** | 2024-07-28 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTERA](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTERA) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CTERA Syslog](../connectors/ctera.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [CTERA Syslog](../connectors/ctera.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 6 |
| Hunting Queries | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Antivirus Detected an Infected File](../content/ctera-antivirus-detected-an-infected-file-4f767afa-d666-4ed4-b453-a4f5ad35181b.md) | High | Impact | [`Syslog`](../tables/syslog.md) |
| [CTERA Mass Access Denied Detection Analytic](../content/ctera-ctera-mass-access-denied-detection-analytic-88341fc3-38e1-46db-8bb1-6c052e749991.md) | High | DefenseEvasion | [`Syslog`](../tables/syslog.md) |
| [CTERA Mass Deletions Detection Analytic](../content/ctera-ctera-mass-deletions-detection-analytic-5365f294-0c67-432a-bacf-b1282a3b6c46.md) | High | Impact | [`Syslog`](../tables/syslog.md) |
| [CTERA Mass Permissions Changes Detection Analytic](../content/ctera-ctera-mass-permissions-changes-detection-analytic-90502ac9-19a2-41f0-ba81-e352de90b61b.md) | High | PrivilegeEscalation | [`Syslog`](../tables/syslog.md) |
| [Ransom Protect Detected a Ransomware Attack](../content/ctera-ransom-protect-detected-a-ransomware-attack-7a075edf-1cf2-4038-ba9c-c354db6409de.md) | High | Impact | [`Syslog`](../tables/syslog.md) |
| [Ransom Protect User Blocked](../content/ctera-ransom-protect-user-blocked-d5d4766b-e547-44da-9d85-48ff393db201.md) | High | Impact | [`Syslog`](../tables/syslog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [CTERA Batch Access Denied Detection](../content/ctera-ctera-batch-access-denied-detection-26f7d89a-b7b7-47cb-ad11-281f66c17c3d.md) | DefenseEvasion | [`Syslog`](../tables/syslog.md) |
| [CTERA Batch File Deletions Detection](../content/ctera-ctera-batch-file-deletions-detection-23206903-0c36-4d68-ba4b-169c67355b53.md) | Impact | [`Syslog`](../tables/syslog.md) |
| [CTERA Permission Change Detection](../content/ctera-ctera-permission-change-detection-694ce74e-968b-4ca0-ae24-53bcfd87bf0a.md) | PrivilegeEscalation | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CTERA_Workbook](../content/ctera-ctera-workbook.md) | [`Syslog`](../tables/syslog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                         |
|-------------|--------------------------------|--------------------------------------------|
| 3.0.1       | 05-12-2024                     | Update on existing **Hunting Queries** and new **Analytic Rules** |
| 3.0.0       | 21-10-2024                     | Initial Solution Release                   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
