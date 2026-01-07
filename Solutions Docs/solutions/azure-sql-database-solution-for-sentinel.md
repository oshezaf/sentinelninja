# Azure SQL Database solution for sentinel

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-08-19 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20SQL%20Database%20solution%20for%20sentinel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20SQL%20Database%20solution%20for%20sentinel) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure SQL Databases](../connectors/azuresql.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | [Azure SQL Databases](../connectors/azuresql.md) | Analytics, Hunting, Workbooks |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |

## Content Items

This solution includes **19 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 8 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Affected rows stateful anomaly on database](../content/2a632013-379d-4993-956f-615063d31e10.md) | Medium | Impact | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Credential errors stateful anomaly on database](../content/daa32afa-b5b6-427d-93e9-e32f3f359dd7.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Drop attempts stateful anomaly on database](../content/237c3855-138c-4588-a68f-b870abd3bfc9.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Execution attempts stateful anomaly on database](../content/3367fd5e-44b3-4746-a9a5-dc15c8202490.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Firewall errors stateful anomaly on database](../content/20f87813-3de0-4a9f-a8c0-6aaa3187be08.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Firewall rule manipulation attempts stateful anomaly on database](../content/05030ca6-ef66-42ca-b672-2e84d4aaf5d7.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [OLE object manipulation attempts stateful anomaly on database](../content/dabd7284-004b-4237-b5ee-a22acab19eb2.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Outgoing connection attempts stateful anomaly on database](../content/c105513d-e398-4a02-bd91-54b9b2d6fa7d.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Response rows stateful anomaly on database](../content/9851c360-5fd5-4bae-a117-b66d8476bf5e.md) | Medium | Exfiltration | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Syntax errors stateful anomaly on database](../content/c815008d-f4d1-4645-b13b-8b4bc188d5de.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Affected rows stateful anomaly on database - hunting query](../content/9670ac84-e035-47f5-8eb5-9d863a8a7893.md) | Impact | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Anomalous Query Execution Time](../content/724c7010-0afe-4d46-95ab-32f6737e658b.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Anomalous Query Execution Time](../content/af55d5b0-6b4a-4874-8299-9d845bf7c1fd.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Boolean Blind SQL Injection](../content/4cda0673-37f9-4765-af1f-556de2295cd7.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Prevalence Based SQL Query Size Anomaly](../content/2a21303e-be48-404f-a6f6-883a6acfe5ad.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Response rows stateful anomaly on database - hunting query](../content/137tyi7c-7225-434b-8bfc-fea28v95ebd8.md) | Exfiltration | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Suspicious SQL Stored Procedures](../content/db5b0a77-1b1d-4a31-8ebb-c508ebc3bb38.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Time Based SQL Query Size Anomaly](../content/e0944dec-3c92-4b2d-8e81-a950afeaba69.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Workbook-AzureSQLSecurity](../content/workbook-azuresqlsecurity-azure-sql-database-solution-for-sentinel.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|   
| 3.0.0       | 25-10-2024                     | Updated description of CreateUi and **Analytic Rule**					  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
