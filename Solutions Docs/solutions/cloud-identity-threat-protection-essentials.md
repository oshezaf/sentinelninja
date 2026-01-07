# Cloud Identity Threat Protection Essentials

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Cloud Identity Threat Protection Essentials Logo" width="75" height="75">

As more and more companies move to the cloud - attacks to the cloud identity system are becoming more commonplace. The **Cloud Identity Threat Protection Essentials** solution looks for most common cloud focused identity attacks such as Suspicious Sign-ins, privilege grants, MFA disable etc. Rapid detection of these attacks can enable organizations to respond faster and stop them from progressing further.
 
**Pre-requisites:**
 
This is a [domain solution](https://learn.microsoft.com/en-us/azure/sentinel/sentinel-solutions-catalog#domain-solutions) and does not include any data connectors. The content in this solution supports the connectors listed below. Install one or more of the listed solutions, to unlock the value provided by this solution.
 
 1. Microsoft Entra ID
 
 2. Amazon Web Services
 
 3. Microsoft Entra ID Identity Protection
 
**Keywords:** MFA, Nord VPN, VPS, Disabled Account, Suspicious Sign-in, Service principal

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-11-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloud%20Identity%20Threat%20Protection%20Essentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloud%20Identity%20Threat%20Protection%20Essentials) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **2 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AuditLogs`](../tables/auditlogs.md) | Analytics, Hunting |
| [`SigninLogs`](../tables/signinlogs.md) | Hunting |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Hunting |
| [`IdentityInfo`](../tables/identityinfo.md) | Hunting |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 8 |
| Analytic Rules | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Multi-Factor Authentication Disabled for a User](../content/cloud-identity-threat-protection-essentials-multi-factor-authentication-disabled-for-a-user-65c78944-930b-4cae-bd79-c3664ae30ba7-478ef443.md) | Medium | CredentialAccess, Persistence | - |
| [New External User Granted Admin Role](../content/cloud-identity-threat-protection-essentials-new-external-user-granted-admin-role-d7424fd9-abb3-4ded-a723-eebe023aaa0b-7be35a90.md) | Medium | Persistence | [`AuditLogs`](../tables/auditlogs.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Application Granted EWS Permissions](../content/cloud-identity-threat-protection-essentials-application-granted-ews-permissions-c7941212-4ff9-4d2d-b38d-54d78fa087cc-2ba49c1b.md) | Collection, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Detect Disabled Account Sign-in Attempts by Account Name](../content/cloud-identity-threat-protection-essentials-detect-disabled-account-sign-in-attempts-by-account-name-b00f127c-46fa-40bd-9ab6-b266974d29cc-dff302a4.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Detect Disabled Account Sign-in Attempts by IP Address](../content/cloud-identity-threat-protection-essentials-detect-disabled-account-sign-in-attempts-by-ip-address-0cd51b2e-d3b2-4001-8e3f-5cbb604f69b2-58dcd212.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Interactive STS refresh token modifications](../content/cloud-identity-threat-protection-essentials-interactive-sts-refresh-token-modifications-4696e072-aca8-4a4f-bf05-89fddc5ac3c9-f22e226e.md) | CredentialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [Sign-ins From VPS Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-vps-providers-86490334-5371-40a2-971a-3749c2654954-088cc628.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Sign-ins from Nord VPN Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-nord-vpn-providers-cdc9b092-8a16-4559-9e5e-831877e8209a-d746cc8d.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Suspicious Sign-ins to Privileged Account](../content/cloud-identity-threat-protection-essentials-suspicious-sign-ins-to-privileged-account-a73c52f2-b3a5-4fe4-be7d-4d59b8558590-502c7b31.md) | InitialAccess | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [User Granted Access and Grants Access to Other Users](../content/cloud-identity-threat-protection-essentials-user-granted-access-and-grants-access-to-other-users-2b6a3882-d601-4298-983b-880f6dc7acdb-c6da3825.md) | Persistence, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                         |
|-------------|--------------------------------|----------------------------------------------------------------------------|
| 3.0.3       | 28-02-2024                     | Removed usage of BlastRadius from **Hunting Queries**                      |
| 3.0.2       | 09-02-2024                     | Tagged for dependent solutions for deployment                              |
| 3.0.1       | 16-01-2024                     | Sub-techniques added for **Analytical Rules**   							|
| 3.0.0       | 07-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
