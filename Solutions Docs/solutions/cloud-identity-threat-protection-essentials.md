# Cloud Identity Threat Protection Essentials

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-11-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloud%20Identity%20Threat%20Protection%20Essentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloud%20Identity%20Threat%20Protection%20Essentials) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **3 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AuditLogs`](../tables/auditlogs.md) | Analytics, Hunting |
| [`NewUserAddsUser`](../tables/newuseraddsuser.md) | Hunting |
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
| [Multi-Factor Authentication Disabled for a User](../content/65c78944-930b-4cae-bd79-c3664ae30ba7.md) | Medium | CredentialAccess, Persistence | - |
| [New External User Granted Admin Role](../content/d7424fd9-abb3-4ded-a723-eebe023aaa0b.md) | Medium | Persistence | [`AuditLogs`](../tables/auditlogs.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Application Granted EWS Permissions](../content/c7941212-4ff9-4d2d-b38d-54d78fa087cc.md) | Collection, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Detect Disabled Account Sign-in Attempts by Account Name](../content/b00f127c-46fa-40bd-9ab6-b266974d29cc.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Detect Disabled Account Sign-in Attempts by IP Address](../content/0cd51b2e-d3b2-4001-8e3f-5cbb604f69b2.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Interactive STS refresh token modifications](../content/4696e072-aca8-4a4f-bf05-89fddc5ac3c9.md) | CredentialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [Sign-ins From VPS Providers](../content/86490334-5371-40a2-971a-3749c2654954.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Sign-ins from Nord VPN Providers](../content/cdc9b092-8a16-4559-9e5e-831877e8209a.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Suspicious Sign-ins to Privileged Account](../content/a73c52f2-b3a5-4fe4-be7d-4d59b8558590.md) | InitialAccess | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [User Granted Access and Grants Access to Other Users](../content/2b6a3882-d601-4298-983b-880f6dc7acdb.md) | Persistence, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md)<br>[`NewUserAddsUser`](../tables/newuseraddsuser.md) |

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
