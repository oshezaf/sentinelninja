# GitLab

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="GitLab Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [GitLab](https://about.gitlab.com/solutions/devops-platform/) solution allows you to easily connect your GitLab (GitLab Enterprise Edition - Standalone) logs into Microsoft Sentinel. This gives you more security insight into your organization's DevOps pipelines.

This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-04-27 |
| **Last Updated** | 2022-06-27 |
| **Solution Folder** | [GitLab](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitLab) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] GitLab](../connectors/gitlab.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SigninLogs`](../tables/signinlogs.md) | - | Analytics |
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
| [GitLab - Abnormal number of repositories deleted](../content/gitlab-gitlab-abnormal-number-of-repositories-deleted-3efd09bd-a582-4410-b7ec-5ff21cfad7bd-e932ffd2.md) | Medium | Impact | [`Syslog`](../tables/syslog.md) |
| [GitLab - Brute-force Attempts](../content/gitlab-gitlab-brute-force-attempts-2238d13a-cf05-4973-a83f-d12a25dbb153-84a2fd44.md) | Medium | CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [GitLab - External User Added to GitLab](../content/gitlab-gitlab-external-user-added-to-gitlab-c1544d8f-cbbd-4e35-8d32-5b9312279833-0ecac57f.md) | Medium | Persistence | [`Syslog`](../tables/syslog.md) |
| [GitLab - Local Auth - No MFA](../content/gitlab-gitlab-local-auth-no-mfa-e0b45487-5c79-482d-8ac0-695de8c031af-0b436ca9.md) | Medium | CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [GitLab - Personal Access Tokens creation over time](../content/gitlab-gitlab-personal-access-tokens-creation-over-time-4d6d8b0e-6d9a-4857-a141-f5d89393cddb-e2442425.md) | Medium | Collection | [`Syslog`](../tables/syslog.md) |
| [GitLab - Repository visibility to Public](../content/gitlab-gitlab-repository-visibility-to-public-8b291c3d-90ba-4ebf-af2c-0283192d430e-27c058ed.md) | Medium | Persistence, DefenseEvasion, CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [GitLab - SSO - Sign-Ins Burst](../content/gitlab-gitlab-sso-sign-ins-burst-57b1634b-531d-4eab-a456-8b855887428f-5a07493b.md) | Medium | CredentialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [GitLab - TI - Connection from Malicious IP](../content/gitlab-gitlab-ti-connection-from-malicious-ip-7241740a-5280-4b74-820a-862312d721a8-aca76b78.md) | Medium | InitialAccess | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [GitLab - User Impersonation](../content/gitlab-gitlab-user-impersonation-0f4f16a2-b464-4c10-9a42-993da3e15a40-bad32e25.md) | Medium | Persistence | [`Syslog`](../tables/syslog.md)<br>[`impersonationStart`](../tables/impersonationstart.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GitLabAccess](../content/gitlab-gitlabaccess-4ddd33c3-87a5-430f-9241-3736853aa5fb-125eb1c9.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [GitLabApp](../content/gitlab-gitlabapp-ccc66347-5850-4549-aa31-c621499d26d8-fecc825c.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [GitLabAudit](../content/gitlab-gitlabaudit-a0ea016a-471a-4e49-a938-fecc9180d148-7bbefce0.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                        |
|-------------|--------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.2       | 12-12-2024                     | Removed Deprecated **Data connectors**                                                    |
| 3.0.1       | 07-24-2023                     | Deprecated data connectors                                                                |
| 3.0.0       | 07-11-2023                     | Modifying text as there is rebranding from Azure Active Directory to Microsoft Entra ID   |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

