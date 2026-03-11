# DPDP Compliance

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="DPDP Compliance Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-01-26 |
| **Last Updated** | 2026-02-06 |
| **Solution Folder** | [DPDP Compliance](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DPDP%20Compliance) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-dpdp-compliance) · Popularity: ⚪ Very Low (0%) |
| **Pre-requisites** | [Microsoft Defender XDR](microsoft-defender-xdr.md), [Microsoft Purview](microsoft-purview.md), [Microsoft Purview Information Protection](microsoft-purview-information-protection.md), [Azure SQL Database solution for sentinel](azure-sql-database-solution-for-sentinel.md), [Microsoft 365](microsoft-365.md), [Microsoft Entra ID](microsoft-entra-id.md) |

This workbook helps you track, visualize and monitor DPDP (Digital Personal Data Protection) related requirements across your enterprise. It consolidates data from Defender XDR, Microsoft Purview, Azure SQL Databases, Microsoft 365, UEBA and Entra ID solution.

## Contents

- [Pre-requisites](#pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **5 other solution(s)**:

| Solution |
|:---------|
| [Microsoft 365](microsoft-365.md) |
| [Microsoft Defender XDR](microsoft-defender-xdr.md) |
| [Microsoft Entra ID](microsoft-entra-id.md) |
| [Microsoft Purview](microsoft-purview.md) |
| [Microsoft Purview Information Protection](microsoft-purview-information-protection.md) |

## Data Connectors

**This solution does not include its own data connectors** but uses connectors from dependency solutions:

- [Microsoft Entra ID](../connectors/azureactivedirectory.md) *(dependency on [Microsoft Entra ID](microsoft-entra-id.md))*
- [Microsoft Purview](../connectors/microsoftazurepurview.md) *(dependency on [Microsoft Purview](microsoft-purview.md))*
- [Microsoft Purview Information Protection](../connectors/microsoftpurviewinformationprotection.md) *(dependency on [Microsoft Purview Information Protection](microsoft-purview-information-protection.md))*
- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) *(dependency on [Microsoft Defender XDR](microsoft-defender-xdr.md))*
- [Microsoft 365 (formerly, Office 365)](../connectors/office365.md) *(dependency on [Microsoft 365](microsoft-365.md))*

## Tables Used

This solution queries **12 table(s)** from its content items:

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
| [`SecurityEvent`](../tables/securityevent.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`Syslog`](../tables/syslog.md) | Workbooks |

### Internal Tables

The following **4 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`Anomalies`](../tables/anomalies.md) | Workbooks |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Workbooks |
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DPDPCompliance](../content/dpdp-compliance-dpdpcompliance-18571e87.md) | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AADUserRiskEvents`](../tables/aaduserriskevents.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`LAQueryLogs`](../tables/laquerylogs.md)<br>[`MicrosoftPurviewInformationProtection`](../tables/microsoftpurviewinformationprotection.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`Operation`](../tables/operation.md)<br>[`PurviewDataSensitivityLogs`](../tables/purviewdatasensitivitylogs.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`Syslog`](../tables/syslog.md)<br>*Internal use:*<br>[`Anomalies`](../tables/anomalies.md)<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 								 |
|-------------|--------------------------------|-----------------------------------------------------------------------------------------------------|
| 3.0.0       | 26-01-2026                     | Initial Solution Release						     |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

