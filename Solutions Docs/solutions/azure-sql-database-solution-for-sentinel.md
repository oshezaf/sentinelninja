# Azure SQL Database solution for sentinel

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AzureSQL.svg" alt="Azure SQL Database solution for sentinel Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Azure SQL Database](https://azure.microsoft.com/products/azure-sql/) solution for Microsoft Sentinel enables you to stream Azure SQL database audit and diagnostic logs into Microsoft Sentinel, allowing you to continuously monitor activity in all your instances. 
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor Resource Diagnostics ](https://docs.microsoft.com/azure/azure-monitor/essentials/diagnostic-settings?tabs=portal)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-08-19 |
| **Solution Folder** | [Azure SQL Database solution for sentinel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20SQL%20Database%20solution%20for%20sentinel) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure SQL Databases](../connectors/azuresql.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureActivity`](../tables/azureactivity.md) | - | Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | [Azure SQL Databases](../connectors/azuresql.md) | Analytics, Hunting, Workbooks |
| [`Operation`](../tables/operation.md) | - | Workbooks |

### Internal Tables

The following **2 table(s)** are used internally by this solution's content items:

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
| [Affected rows stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-affected-rows-stateful-anomaly-on-database-2a632013-379d-4993-956f-615063d31e10-11212897.md) | Medium | Impact | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Credential errors stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-credential-errors-stateful-anomaly-on-database-daa32afa-b5b6-427d-93e9-e32f3f359dd7-ce884545.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Drop attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-drop-attempts-stateful-anomaly-on-database-237c3855-138c-4588-a68f-b870abd3bfc9-7ce4340f.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Execution attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-execution-attempts-stateful-anomaly-on-database-3367fd5e-44b3-4746-a9a5-dc15c8202490-1b031009.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Firewall errors stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-firewall-errors-stateful-anomaly-on-database-20f87813-3de0-4a9f-a8c0-6aaa3187be08-b973d4ce.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Firewall rule manipulation attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-firewall-rule-manipulation-attempts-stateful-anomaly-on-databas-05030ca6-ef66-42ca-b672-2e84d4aaf5d7-c6bd8fb4.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [OLE object manipulation attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-ole-object-manipulation-attempts-stateful-anomaly-on-database-dabd7284-004b-4237-b5ee-a22acab19eb2-08386257.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Outgoing connection attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-outgoing-connection-attempts-stateful-anomaly-on-database-c105513d-e398-4a02-bd91-54b9b2d6fa7d-be32ef2f.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Response rows stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-response-rows-stateful-anomaly-on-database-9851c360-5fd5-4bae-a117-b66d8476bf5e-50984d5e.md) | Medium | Exfiltration | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Syntax errors stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-syntax-errors-stateful-anomaly-on-database-c815008d-f4d1-4645-b13b-8b4bc188d5de-75deac2f.md) | Medium | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Affected rows stateful anomaly on database - hunting query](../content/azure-sql-database-solution-for-sentinel-affected-rows-stateful-anomaly-on-database-hunting-query-9670ac84-e035-47f5-8eb5-9d863a8a7893-66ffcc6c.md) | Impact | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Anomalous Query Execution Time](../content/azure-sql-database-solution-for-sentinel-anomalous-query-execution-time-724c7010-0afe-4d46-95ab-32f6737e658b-6f211c62.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Anomalous Query Execution Time](../content/azure-sql-database-solution-for-sentinel-anomalous-query-execution-time-af55d5b0-6b4a-4874-8299-9d845bf7c1fd-21c7b493.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Boolean Blind SQL Injection](../content/azure-sql-database-solution-for-sentinel-boolean-blind-sql-injection-4cda0673-37f9-4765-af1f-556de2295cd7-513f1aae.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Prevalence Based SQL Query Size Anomaly](../content/azure-sql-database-solution-for-sentinel-prevalence-based-sql-query-size-anomaly-2a21303e-be48-404f-a6f6-883a6acfe5ad-c554d854.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Response rows stateful anomaly on database - hunting query](../content/azure-sql-database-solution-for-sentinel-response-rows-stateful-anomaly-on-database-hunting-query-137tyi7c-7225-434b-8bfc-fea28v95ebd8-78e08eb9.md) | Exfiltration | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Suspicious SQL Stored Procedures](../content/azure-sql-database-solution-for-sentinel-suspicious-sql-stored-procedures-db5b0a77-1b1d-4a31-8ebb-c508ebc3bb38-4ec8f8ae.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Time Based SQL Query Size Anomaly](../content/azure-sql-database-solution-for-sentinel-time-based-sql-query-size-anomaly-e0944dec-3c92-4b2d-8e81-a950afeaba69-50b245a5.md) | InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Workbook-AzureSQLSecurity](../content/azure-sql-database-solution-for-sentinel-workbook-azuresqlsecurity-2448278c.md) | [`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Operation`](../tables/operation.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|   
| 3.0.0       | 25-10-2024                     | Updated description of CreateUi and **Analytic Rule**					  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

