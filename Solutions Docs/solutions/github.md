# GitHub

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-10-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub) |

## Data Connectors

This solution provides **3 data connector(s)**:

- [GitHub Enterprise Audit Log (via Codeless Connector Framework) (Preview)](../connectors/githubauditdefinitionv2.md)
- [[Deprecated] GitHub Enterprise Audit Log](../connectors/githubecauditlogpolling.md)
- [GitHub (using Webhooks)](../connectors/githubwebhook.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md) | [[Deprecated] GitHub Enterprise Audit Log](../connectors/githubecauditlogpolling.md) | - |
| [`GitHubAuditLogsV2_CL`](../tables/githubauditlogsv2-cl.md) | [GitHub Enterprise Audit Log (via Codeless Connector Framework) (Preview)](../connectors/githubauditdefinitionv2.md), [[Deprecated] GitHub Enterprise Audit Log](../connectors/githubecauditlogpolling.md) | - |
| [`githubscanaudit_CL`](../tables/githubscanaudit-cl.md) | [GitHub (using Webhooks)](../connectors/githubwebhook.md) | Workbooks |

## Content Items

This solution includes **28 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 14 |
| Hunting Queries | 8 |
| Parsers | 4 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [(Preview) GitHub - A payment method was removed](../content/github-%28preview%29-github---a-payment-method-was-removed-6bb50582-caac-4a9b-9afb-3fee766ebbf7.md) | Medium | InitialAccess | - |
| [(Preview) GitHub - Oauth application - a client secret was removed](../content/github-%28preview%29-github---oauth-application---a-client-secret-was-removed-0b85a077-8ba5-4cb5-90f7-1e882afe10c5.md) | Medium | InitialAccess | - |
| [(Preview) GitHub - Repository was created](../content/github-%28preview%29-github---repository-was-created-0b85a077-8ba5-4cb5-90f7-1e882afe10c2.md) | Medium | InitialAccess | - |
| [(Preview) GitHub - Repository was destroyed](../content/github-%28preview%29-github---repository-was-destroyed-0b85a077-8ba5-4cb5-90f7-1e882afe10c3.md) | Medium | InitialAccess | - |
| [(Preview) GitHub - User visibility Was changed](../content/github-%28preview%29-github---user-visibility-was-changed-0b85a077-8ba5-4cb5-90f7-1e882afe20c9.md) | Medium | InitialAccess | - |
| [(Preview) GitHub - User was added to the organization](../content/github-%28preview%29-github---user-was-added-to-the-organization-0b85a077-8ba5-4cb5-90f7-1e882afe10c4.md) | Medium | InitialAccess | - |
| [(Preview) GitHub - User was blocked](../content/github-%28preview%29-github---user-was-blocked-0b85a077-8ba5-4cb5-90f7-1e882afe10c8.md) | Medium | InitialAccess | - |
| [(Preview) GitHub - User was invited to the repository](../content/github-%28preview%29-github---user-was-invited-to-the-repository-0b85a077-8ba5-4cb5-90f7-1e882afe40c9.md) | Medium | InitialAccess | - |
| [(Preview) GitHub - pull request was created](../content/github-%28preview%29-github---pull-request-was-created-0b85a077-8ba5-4cb5-90f7-1e882afe10c7.md) | Medium | InitialAccess | - |
| [(Preview) GitHub - pull request was merged](../content/github-%28preview%29-github---pull-request-was-merged-0b85a077-8ba5-4cb5-90f7-1e882afe10c6.md) | Medium | InitialAccess | - |
| [GitHub Activites from a New Country](../content/github-github-activites-from-a-new-country-f041e01d-840d-43da-95c8-4188f6cef546.md) | Medium | InitialAccess | - |
| [GitHub Security Vulnerability in Repository](../content/github-github-security-vulnerability-in-repository-5436f471-b03d-41cb-b333-65891f887c43.md) | Informational | InitialAccess, Execution, PrivilegeEscalation, DefenseEvasion, CredentialAccess, LateralMovement | - |
| [GitHub Two Factor Auth Disable](../content/github-github-two-factor-auth-disable-3ff0fffb-d963-40c0-b235-3404f915add7.md) | Medium | DefenseEvasion | - |
| [NRT GitHub Two Factor Auth Disable](../content/github-nrt-github-two-factor-auth-disable-594c653d-719a-4c23-b028-36e3413e632e.md) | Medium | DefenseEvasion | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [GitHub First Time Invite Member and Add Member to Repo](../content/github-github-first-time-invite-member-and-add-member-to-repo-f0d30d3c-e6ad-480a-90e8-1bd7cc84881b.md) | Persistence | - |
| [GitHub First Time Repo Delete](../content/github-github-first-time-repo-delete-c3237d88-fdc4-4dee-8b90-118ded2c507c.md) | Impact | - |
| [GitHub Inactive or New Account Access or Usage](../content/github-github-inactive-or-new-account-access-or-usage-b8508e24-47a6-4f8e-9066-3cc937197e7f.md) | Persistence | - |
| [GitHub Mass Deletion of repos or projects](../content/github-github-mass-deletion-of-repos-or-projects-67da5c4e-49f2-476d-96ff-2dbe4b855a48.md) | Impact | - |
| [GitHub OAuth App Restrictions Disabled](../content/github-github-oauth-app-restrictions-disabled-667e6a70-adc9-49b7-9cf3-f21927c71959.md) | Persistence, DefenseEvasion | - |
| [GitHub Repo switched from private to public](../content/github-github-repo-switched-from-private-to-public-a6e2afd3-559c-4e88-a693-39c1f6789ef1.md) | Collection | - |
| [GitHub Update Permissions](../content/github-github-update-permissions-ec986fb7-34ed-4528-a5f3-a496e61d8860.md) | Persistence, DefenseEvasion | - |
| [GitHub User Grants Access and Other User Grants Access](../content/github-github-user-grants-access-and-other-user-grants-access-f18c4dfb-4fa6-4a9d-9bd3-f7569d1d685a.md) | Persistence, PrivilegeEscalation | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [GitHub](../content/github-github.md) | [`githubscanaudit_CL`](../tables/githubscanaudit-cl.md) |
| [GitHubAdvancedSecurity](../content/github-githubadvancedsecurity.md) | [`githubscanaudit_CL`](../tables/githubscanaudit-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GitHubAuditData](../content/github-githubauditdata-32d7c900-875f-43d6-9e48-987fd5df3762.md) | - | - |
| [GitHubCodeScanningData](../content/github-githubcodescanningdata-090a125e-1e28-4f56-96be-bf9a2e51042b.md) | - | - |
| [GitHubDependabotData](../content/github-githubdependabotdata-96de3515-a65e-4edc-8b1a-90c780221bb2.md) | - | - |
| [GitHubSecretScanningData](../content/github-githubsecretscanningdata-2bcbf832-074f-4bd3-b043-f2c7873f5630.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.1.2       | 24-11-2025                     | Added clarity to Github Enterprise Audit CCF connector definition to use API URL. |
| 3.1.1       | 13-11-2025                     | Fixed URL handling for GitHub Enterprise Audit CCF connector.|
| 3.1.0       | 05-11-2025                     | Updated Github Enterprise Audit CCF connector to use full URL instead of enterprise name. |
| 3.0.9       | 05-09-2025                     | Enhancements to user guidance for connecting GitHub Enterprise audit logs connector                      |
| 3.0.8       | 26-08-2025                     | Removed deprecated tag from webhook connector.                      |
| 3.0.7       | 19-06-2025                     | Introducing a new CCF-based GitHub Enterprise Audit connector to replace the CLV1 connector                      |
| 3.0.6       | 26-04-2024                     | Repackaged for fix on parser in maintemplate to have old parsername and parentid.                    |
| 3.0.5       | 18-04-2024                     | Repackaged to fix parser issue.                                                  |
| 3.0.4       | 04-04-2024                     | Updated Entity Mappings in **Analytic Rules**.                                                 |
| 3.0.3       | 31-01-2024                     | Updated the solution to fix **Analytic Rules** deployment issue.              |
| 3.0.2       | 06-11-2023                     | Updated the **Workbook** name to resolve the issue of multiple keywords.  |
| 3.0.1       | 22-08-2023                     | Modified **GitHubWorkbook** to add new features (a.Filtering by organizations, b.Filtering by repository topics).  |
| 3.0.0       | 17-07-2023                     | **Data Connectors** description updated & Code Enhancements added for **Workbooks**. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
