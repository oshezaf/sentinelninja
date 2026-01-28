# SOX IT Compliance

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="SOX IT Compliance Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

This workbook helps organizations monitor SOX (Sarbanes–Oxley) IT General Controls, including access governance, privileged activity, configuration changes, data integrity, and log monitoring. It consolidates data from Microsoft Entra ID, Defender for Identity, Microsoft 365, Azure Activity, SQL auditing, and Windows/Linux system logs.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2025-12-11 |
| **Solution Folder** | [SOX IT Compliance](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOX%20IT%20Compliance) |
| **Dependencies** | [Microsoft Entra ID](microsoft-entra-id.md), [Microsoft Defender XDR](microsoft-defender-xdr.md), [Microsoft 365](microsoft-365.md), [Azure Activity](azure-activity.md), [Azure SQL Database solution for sentinel](azure-sql-database-solution-for-sentinel.md), [Windows Security Events](windows-security-events.md), [UEBA Essentials](ueba-essentials.md) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **11 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AuditLogs`](../tables/auditlogs.md) | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Workbooks |
| [`ConfigurationChange`](../tables/configurationchange.md) | Workbooks |
| [`Heartbeat`](../tables/heartbeat.md) | Workbooks |
| [`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md) | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | Workbooks |
| [`Operation`](../tables/operation.md) | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`Syslog`](../tables/syslog.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) | [`AuditLogs`](../tables/auditlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ConfigurationChange`](../tables/configurationchange.md)<br>[`Heartbeat`](../tables/heartbeat.md)<br>[`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`Operation`](../tables/operation.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`Syslog`](../tables/syslog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 								|
|-------------|--------------------------------|----------------------------------------------------------------------------------------------------| 
| 3.0.0       | 11-12-2025                     | Initial Solution Release																		  	|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

