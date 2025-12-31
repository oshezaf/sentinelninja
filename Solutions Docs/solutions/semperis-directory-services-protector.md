# Semperis Directory Services Protector

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Semperis |
| **Support Tier** | Partner |
| **Support Link** | [https://www.semperis.com/contact-us/](https://www.semperis.com/contact-us/) |
| **Categories** | domains |
| **First Published** | 2021-10-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Semperis%20Directory%20Services%20Protector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Semperis%20Directory%20Services%20Protector) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Semperis Directory Services Protector](../connectors/semperisdsp.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | - | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | [Semperis Directory Services Protector](../connectors/semperisdsp.md) | Analytics, Workbooks |

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
| [Semperis DSP Failed Logons](../content/0e105444-fe13-4ce6-9239-21880076a3f9.md) | Medium | InitialAccess, CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Semperis DSP Kerberos krbtgt account with old password](../content/9ff3b26b-7636-412e-ac46-072b084b94cb.md) | Medium | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Semperis DSP Mimikatz's DCShadow Alert](../content/1a6d0a49-64b3-4ca1-96c3-f154c16c218c.md) | High | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Semperis DSP Operations Critical Notifications](../content/8f471e21-3bb2-466f-9bc2-0a0326a60788.md) | Medium | InitialAccess, CredentialAccess, ResourceDevelopment | [`SecurityEvent`](../tables/securityevent.md) |
| [Semperis DSP RBAC Changes](../content/e5edf3f3-de53-45e6-b0d7-1ce1c048df4a.md) | Medium | PrivilegeEscalation, Persistence | [`SecurityEvent`](../tables/securityevent.md) |
| [Semperis DSP Recent sIDHistory changes on AD objects](../content/64796da3-6383-4de2-9c97-866c83c459ae.md) | High | PrivilegeEscalation, Persistence | [`SecurityEvent`](../tables/securityevent.md) |
| [Semperis DSP Well-known privileged SIDs in sIDHistory](../content/ddd75d93-5b8b-4349-babe-c4e15343c5a3.md) | Medium | PrivilegeEscalation, DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Semperis DSP Zerologon vulnerability](../content/85c1f9e4-6f14-46bf-82d5-dbe495b92aab.md) | Medium | PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SemperisDSPADChanges](../content/semperisdspadchanges-semperis-directory-services-protector.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [SemperisDSPNotifications](../content/semperisdspnotifications-semperis-directory-services-protector.md) | [`SecurityEvent`](../tables/securityevent.md) |
| [SemperisDSPQuickviewDashboard](../content/semperisdspquickviewdashboard-semperis-directory-services-protector.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [SemperisDSPSecurityIndicators](../content/semperisdspsecurityindicators-semperis-directory-services-protector.md) | [`SecurityEvent`](../tables/securityevent.md) |
| [SemperisDSPWorkbook](../content/semperisdspworkbook-semperis-directory-services-protector.md) | [`SecurityEvent`](../tables/securityevent.md) |
| [workbooksMetadata](../content/workbooksmetadata-semperis-directory-services-protector.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [dsp_parser](../content/5ea4c8c2-a6e9-4321-8402-39635ffcfbe4.md) | - | - |

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
