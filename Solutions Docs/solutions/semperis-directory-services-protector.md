# Semperis Directory Services Protector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Semperis%20Directory%20Services%20Protector/Workbooks/Images/Logo/Semperis.svg" alt="Semperis Directory Services Protector Logo" width="75" height="75">

The [Semperis Directory Services Protector](https://www.semperis.com/ds-protector/) solution provides the capability to ingest Windows event logs (i.e., Indicators of Exposure and Indicators of Compromise) into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Agent based logs collection from Windows and Linux machines](https://docs.microsoft.com/azure/azure-monitor/agents/data-sources-custom-logs)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Semperis |
| **Support Tier** | Partner |
| **Support Link** | [https://www.semperis.com/contact-us/](https://www.semperis.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Semperis |
| **First Published** | 2021-10-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Semperis%20Directory%20Services%20Protector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Semperis%20Directory%20Services%20Protector) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Semperis Directory Services Protector](../connectors/semperisdsp.md)

## Tables Reference

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | - | Workbooks |
| [`Operation`](../tables/operation.md) | - | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | [Semperis Directory Services Protector](../connectors/semperisdsp.md) | Analytics, Workbooks |
| [`alert`](../tables/alert.md) | - | Workbooks |

## Content Items

This solution includes **15 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 8 |
| Workbooks | 6 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Semperis DSP Failed Logons](../content/semperis-directory-services-protector-semperis-dsp-failed-logons-0e105444-fe13-4ce6-9239-21880076a3f9-2263251b.md) | Medium | InitialAccess, CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Semperis DSP Kerberos krbtgt account with old password](../content/semperis-directory-services-protector-semperis-dsp-kerberos-krbtgt-account-with-old-password-9ff3b26b-7636-412e-ac46-072b084b94cb-7cfe67a4.md) | Medium | CredentialAccess | - |
| [Semperis DSP Mimikatz's DCShadow Alert](../content/semperis-directory-services-protector-semperis-dsp-mimikatz's-dcshadow-alert-1a6d0a49-64b3-4ca1-96c3-f154c16c218c-044ebdda.md) | High | DefenseEvasion | - |
| [Semperis DSP Operations Critical Notifications](../content/semperis-directory-services-protector-semperis-dsp-operations-critical-notifications-8f471e21-3bb2-466f-9bc2-0a0326a60788-3ceee4d9.md) | Medium | InitialAccess, CredentialAccess, ResourceDevelopment | [`SecurityEvent`](../tables/securityevent.md) |
| [Semperis DSP RBAC Changes](../content/semperis-directory-services-protector-semperis-dsp-rbac-changes-e5edf3f3-de53-45e6-b0d7-1ce1c048df4a-21be9fb7.md) | Medium | PrivilegeEscalation, Persistence | [`SecurityEvent`](../tables/securityevent.md) |
| [Semperis DSP Recent sIDHistory changes on AD objects](../content/semperis-directory-services-protector-semperis-dsp-recent-sidhistory-changes-on-ad-objects-64796da3-6383-4de2-9c97-866c83c459ae-0217ae73.md) | High | PrivilegeEscalation, Persistence | - |
| [Semperis DSP Well-known privileged SIDs in sIDHistory](../content/semperis-directory-services-protector-semperis-dsp-well-known-privileged-sids-in-sidhistory-ddd75d93-5b8b-4349-babe-c4e15343c5a3-fe463147.md) | Medium | PrivilegeEscalation, DefenseEvasion | - |
| [Semperis DSP Zerologon vulnerability](../content/semperis-directory-services-protector-semperis-dsp-zerologon-vulnerability-85c1f9e4-6f14-46bf-82d5-dbe495b92aab-46434387.md) | Medium | PrivilegeEscalation | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SemperisDSPADChanges](../content/semperis-directory-services-protector-semperisdspadchanges-b1c49b5b.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [SemperisDSPNotifications](../content/semperis-directory-services-protector-semperisdspnotifications-fcd6b926.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`alert`](../tables/alert.md) |
| [SemperisDSPQuickviewDashboard](../content/semperis-directory-services-protector-semperisdspquickviewdashboard-72fd1e27.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Operation`](../tables/operation.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`alert`](../tables/alert.md) |
| [SemperisDSPSecurityIndicators](../content/semperis-directory-services-protector-semperisdspsecurityindicators-a942a3d9.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [SemperisDSPWorkbook](../content/semperis-directory-services-protector-semperisdspworkbook-523d6926.md) ⚠️ | - |
| [workbooksMetadata](../content/semperis-directory-services-protector-workbooksmetadata-8e76a455.md) ⚠️ | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [dsp_parser](../content/semperis-directory-services-protector-dsp-parser-5ea4c8c2-a6e9-4321-8402-39635ffcfbe4-3bb2922c.md) | - | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.2       | 23-04-2025                     | Updated **Analytical Rule** and **Parser**   |
| 3.0.1       | 28-03-2025                     | Removed duplicate query and fixed query in **Workbook** SemperisDSPSecurityIndicators.   |
| 3.0.0       | 18-03-2025                     | Fixed correct function name in **Workbook** SemperisDSPSecurityIndicators.      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
