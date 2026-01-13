# <img src="../images/asim-badge.png" alt="ASIM" height="32"> GDPR Compliance & Data Security

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="GDPR Compliance & Data Security Logo" width="75" height="75">

This workbook helps you track, visualize and monitor GDPR related requirements across your enterprise. It consolidates data from Defender XDR, Microsoft Purview, Azure SQL Databases, Microsoft 365, UEBA and Entra ID solution.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2025-10-08 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GDPR%20Compliance%20%26%20Data%20Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GDPR%20Compliance%20%26%20Data%20Security) |
| **Dependencies** | [Microsoft Defender XDR](microsoft-defender-xdr.md), [Microsoft Purview](microsoft-purview.md), [Microsoft Purview Information Protection](microsoft-purview-information-protection.md), [Azure SQL Database solution for sentinel](azure-sql-database-solution-for-sentinel.md), [Microsoft 365](microsoft-365.md), [Microsoft Entra ID](microsoft-entra-id.md) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **1 ASIM parser(s)** for normalized data:

| Table | Used By Content |
|-------|----------------|
| [`_Im_WebSession`](../asim/imwebsession.md) | Workbooks |

## Tables Used

This solution queries **14 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | Workbooks |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) | Workbooks |
| [`AuditLogs`](../tables/auditlogs.md) | Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`LAQueryLogs`](../tables/laquerylogs.md) | Workbooks |
| [`MicrosoftPurviewInformationProtection`](../tables/microsoftpurviewinformationprotection.md) | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | Workbooks |
| [`Operation`](../tables/operation.md) | Workbooks |
| [`PurviewDataSensitivityLogs`](../tables/purviewdatasensitivitylogs.md) | Workbooks |
| [`SQLSecurityAuditEvents`](../tables/sqlsecurityauditevents.md) | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`Syslog`](../tables/syslog.md) | Workbooks |
| [`Update`](../tables/update.md) | Workbooks |

### Internal Tables

The following **4 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Workbooks |
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |
| [`anomalies`](../tables/anomalies.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>[`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AADUserRiskEvents`](../tables/aaduserriskevents.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`LAQueryLogs`](../tables/laquerylogs.md)<br>[`MicrosoftPurviewInformationProtection`](../tables/microsoftpurviewinformationprotection.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`Operation`](../tables/operation.md)<br>[`PurviewDataSensitivityLogs`](../tables/purviewdatasensitivitylogs.md)<br>[`SQLSecurityAuditEvents`](../tables/sqlsecurityauditevents.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`Syslog`](../tables/syslog.md)<br>[`Update`](../tables/update.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md)<br>[`anomalies`](../tables/anomalies.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 								 |
|-------------|--------------------------------|-----------------------------------------------------------------------------------------------------| 
| 3.0.2       | 15-12-2025                     | Update the **Workbook** to include support for additional assets in the Watchlist.  	     |
| 3.0.1       | 18-11-2025                     | Fixing Issue with Defender Portal				     |
| 3.0.0       | 08-10-2025                     | Initial Solution Release						     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

