# GitLab

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-04-27 |
| **Last Updated** | 2022-06-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitLab](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitLab) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] GitLab](../connectors/gitlab.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] GitLab](../connectors/gitlab.md) | Analytics |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Analytics |
| [`impersonationStart`](../tables/impersonationstart.md) | - | Analytics |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 9 |
| Parsers | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [GitLab - Abnormal number of repositories deleted](../content/3efd09bd-a582-4410-b7ec-5ff21cfad7bd.md) | Medium | Impact | - |
| [GitLab - Brute-force Attempts](../content/2238d13a-cf05-4973-a83f-d12a25dbb153.md) | Medium | CredentialAccess | - |
| [GitLab - External User Added to GitLab](../content/c1544d8f-cbbd-4e35-8d32-5b9312279833.md) | Medium | Persistence | [`Syslog`](../tables/syslog.md) |
| [GitLab - Local Auth - No MFA](../content/e0b45487-5c79-482d-8ac0-695de8c031af.md) | Medium | CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [GitLab - Personal Access Tokens creation over time](../content/4d6d8b0e-6d9a-4857-a141-f5d89393cddb.md) | Medium | Collection | [`Syslog`](../tables/syslog.md) |
| [GitLab - Repository visibility to Public](../content/8b291c3d-90ba-4ebf-af2c-0283192d430e.md) | Medium | Persistence, DefenseEvasion, CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [GitLab - SSO - Sign-Ins Burst](../content/57b1634b-531d-4eab-a456-8b855887428f.md) | Medium | CredentialAccess | - |
| [GitLab - TI - Connection from Malicious IP](../content/7241740a-5280-4b74-820a-862312d721a8.md) | Medium | InitialAccess | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [GitLab - User Impersonation](../content/0f4f16a2-b464-4c10-9a42-993da3e15a40.md) | Medium | Persistence | [`impersonationStart`](../tables/impersonationstart.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GitLabAccess](../content/4ddd33c3-87a5-430f-9241-3736853aa5fb.md) | - | - |
| [GitLabApp](../content/ccc66347-5850-4549-aa31-c621499d26d8.md) | - | - |
| [GitLabAudit](../content/a0ea016a-471a-4e49-a938-fecc9180d148.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                        |
|-------------|--------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.2       | 12-12-2024                     | Removed Deprecated **Data connectors**                                                    |
| 3.0.1       | 07-24-2023                     | Deprecated data connectors                                                                |
| 3.0.0       | 07-11-2023                     | Modifying text as there is rebranding from Azure Active Directory to Microsoft Entra ID   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
