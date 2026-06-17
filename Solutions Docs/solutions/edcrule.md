# ⚠️ eDCRule

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Microsoft_Sentinel.svg" alt="eDCRule Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | eDC ICE223 |
| **Support Tier** | Partner |
| **Support Link** | [https://www.aceredc.com/zh/contact/](https://www.aceredc.com/zh/contact/) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | eDC ICE223 - ice223@acercsi.com |
| **First Published** | 2026-05-18 |
| **Solution Folder** | [eDCRule](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/eDCRule) |

The eDCRule solution for Microsoft Sentinel installs custom analytic rule templates.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **4 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | Analytics |
| [`AuditLogs`](../tables/auditlogs.md) | Analytics |
| [`AzureActivity`](../tables/azureactivity.md) | Analytics |
| [`SigninLogs`](../tables/signinlogs.md) | Analytics |

### Internal Tables

The following **2 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Analytics |
| [`IdentityInfo`](../tables/identityinfo.md) | Analytics |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [[AzureSubscription] Suspicious Azure VM Run Command Execution Detected](../content/edcrule-[azuresubscription]-suspicious-azure-vm-run-command-execution-detected-6fa564ac-dfb7-4753-a49b-5fc919866c28-eec2ea83.md) | High | LateralMovement, CredentialAccess | [`AzureActivity`](../tables/azureactivity.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [[Entra ID] Application Assigned Administrator Permissions Immediately After Obtaining Role Management Permissions](../content/edcrule-[entra-id]-application-assigned-administrator-permissions-immediately-after-obtaining-role-manag-90bacdf4-e35b-47cb-92d1-29d8397eb4a0-48ff141a.md) | High | Persistence, PrivilegeEscalation, DefenseEvasion, InitialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [[Entra ID] Application Granted Administrative Permission to Assign Microsoft Entra ID Roles](../content/edcrule-[entra-id]-application-granted-administrative-permission-to-assign-microsoft-entra-id-roles-ef34b272-930c-41c8-a682-8c2093cd2024-0e05b599.md) | High | Persistence, Impact, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [[Entra ID] Authentication Method Changed for Privileged Account](../content/edcrule-[entra-id]-authentication-method-changed-for-privileged-account-9f7197b6-eeb2-46f3-83b1-a2c4dfca46a0-e18c8380.md) | High | Persistence | [`AuditLogs`](../tables/auditlogs.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [[Entra ID] Domain Federation Trust Settings Modified](../content/edcrule-[entra-id]-domain-federation-trust-settings-modified-944d0ab5-b654-47f9-a398-2e77a0b7906e-34bc2dd8.md) | High | CredentialAccess, Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [[Entra ID] Mass Privileged Role Change Activity Detected](../content/edcrule-[entra-id]-mass-privileged-role-change-activity-detected-d6cd3c6f-1d2a-4c42-a048-dbe91cf35b18-7a3ebdd5.md) | High | PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [[Entra ID] Privilege Elevation Request Denied](../content/edcrule-[entra-id]-privilege-elevation-request-denied-aceee46e-8fb3-42d9-967a-aac637bcefd4-d1a14d12.md) | High | Persistence, PrivilegeEscalation, DefenseEvasion, InitialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [[Entra ID] Privileged Role Assigned to User](../content/edcrule-[entra-id]-privileged-role-assigned-to-user-fad0f8b9-a0a5-430a-9a94-049a1144bf54-83a30e48.md) | High | Persistence, DefenseEvasion, PrivilegeEscalation, InitialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [[Entra ID] Privileged Role Assigned to a New User](../content/edcrule-[entra-id]-privileged-role-assigned-to-a-new-user-b64ac0e2-a241-4b9a-ad3e-ae572630b295-a5a10709.md) | High | Persistence, PrivilegeEscalation, DefenseEvasion, InitialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [[Entra ID] Suspicious Continuous OAuth Token Usage](../content/edcrule-[entra-id]-suspicious-continuous-oauth-token-usage-67802748-435b-4f80-9f61-b9a9ac6ea15c-abe74de3.md) | High | CredentialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 17-06-2026                     | Initial Solution Release.                   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

