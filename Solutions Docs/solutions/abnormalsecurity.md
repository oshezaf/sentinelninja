# Abnormal Security Events

*Solution: AbnormalSecurity*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/AbnormalSecurity/Data%20Connectors/Logo/abnormalsecurity.svg" alt="AbnormalSecurity Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Abnormal Security |
| **Support Tier** | Partner |
| **Support Link** | [https://abnormalsecurity.com/contact](https://abnormalsecurity.com/contact) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | AbnormalSecurity - support@abnormalsecurity.com |
| **First Published** | 2021-10-20 |
| **Last Updated** | 2026-06-25 |
| **Solution Folder** | [AbnormalSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/abnormalsecuritycorporation1593011233180.fe1b4806-215b-4610-bf95-965a7a65579c) · Popularity: 🟢 High (81%) |

The Abnormal Security solution provides real-time security event ingestion from Abnormal's cloud email security platform into Microsoft Sentinel. Supports both push-based (CCF Push) and pull-based (Azure Functions) connectors. The push connector routes events to per-event-type tables (threats, cases, audit logs, abuse mailbox, posture changes, ATO cases, remediations, vendor cases) using the Codeless Connector Framework.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [AbnormalSecurity ](../connectors/abnormalsecurity.md) 🔶
- [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **11 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ABNORMAL_CASES_CL`](../tables/abnormal-cases-cl.md) | [AbnormalSecurity ](../connectors/abnormalsecurity.md) | - |
| [`ABNORMAL_SECURITY_ABUSE_MAILBOX_CL`](../tables/abnormal-security-abuse-mailbox-cl.md) 🔶 | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | Analytics, Hunting, Workbooks |
| [`ABNORMAL_SECURITY_ATO_CASE_CL`](../tables/abnormal-security-ato-case-cl.md) 🔶 | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | Analytics, Workbooks |
| [`ABNORMAL_SECURITY_AUDIT_LOG_CL`](../tables/abnormal-security-audit-log-cl.md) 🔶 | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_CASE_CL`](../tables/abnormal-security-case-cl.md) 🔶 | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_LOGS_CL`](../tables/abnormal-security-logs-cl.md) 🔶 | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_POSTURE_CHANGE_CL`](../tables/abnormal-security-posture-change-cl.md) 🔶 | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_REMEDIATION_CL`](../tables/abnormal-security-remediation-cl.md) 🔶 | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_THREAT_LOG_CL`](../tables/abnormal-security-threat-log-cl.md) 🔶 | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | Analytics, Hunting, Workbooks |
| [`ABNORMAL_SECURITY_VENDOR_CASE_CL`](../tables/abnormal-security-vendor-case-cl.md) 🔶 | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | Analytics, Hunting, Workbooks |
| [`ABNORMAL_THREAT_MESSAGES_CL`](../tables/abnormal-threat-messages-cl.md) 🔶 | [AbnormalSecurity ](../connectors/abnormalsecurity.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **14 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Hunting Queries | 4 |
| Parsers | 4 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Abnormal Security - Account Takeover case opened](../content/abnormalsecurity-abnormal-security-account-takeover-case-opened-da243bf4-382b-46b9-9b4d-ce6ffe9e7beb-df151faa.md) | High | InitialAccess, CredentialAccess | [`ABNORMAL_SECURITY_ATO_CASE_CL`](../tables/abnormal-security-ato-case-cl.md) |
| [Abnormal Security - High-risk email attack detected](../content/abnormalsecurity-abnormal-security-high-risk-email-attack-detected-8effd19a-abab-433a-9184-ae67ac51e6d0-39f20acc.md) | High | InitialAccess | [`ABNORMAL_SECURITY_THREAT_LOG_CL`](../tables/abnormal-security-threat-log-cl.md) |
| [Abnormal Security - User-reported email judged malicious](../content/abnormalsecurity-abnormal-security-user-reported-email-judged-malicious-51c6ba55-fecd-4be0-9064-1aafc4d3e8d6-6ee04478.md) | Medium | InitialAccess | [`ABNORMAL_SECURITY_ABUSE_MAILBOX_CL`](../tables/abnormal-security-abuse-mailbox-cl.md) |
| [Abnormal Security - Vendor compromise case detected](../content/abnormalsecurity-abnormal-security-vendor-compromise-case-detected-b15ea4c9-58da-44d8-90e4-6591d947e7e3-5d66afe6.md) | Medium | InitialAccess | [`ABNORMAL_SECURITY_VENDOR_CASE_CL`](../tables/abnormal-security-vendor-case-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Abnormal Security - Most-targeted recipients](../content/abnormalsecurity-abnormal-security-most-targeted-recipients-9dbf1df0-03cd-4c5a-ba22-4f10b82ac90a-9cb3f041.md) | InitialAccess, Reconnaissance | [`ABNORMAL_SECURITY_THREAT_LOG_CL`](../tables/abnormal-security-threat-log-cl.md) |
| [Abnormal Security - Newly observed vendor domains](../content/abnormalsecurity-abnormal-security-newly-observed-vendor-domains-f8d819ef-7c3a-499a-a8ef-33737ce9a146-ba0d4629.md) | InitialAccess | [`ABNORMAL_SECURITY_VENDOR_CASE_CL`](../tables/abnormal-security-vendor-case-cl.md) |
| [Abnormal Security - Threats still in the mailbox](../content/abnormalsecurity-abnormal-security-threats-still-in-the-mailbox-b341a0db-0925-40de-b03e-fe5b350b4a7a-3a7ba3eb.md) | InitialAccess | [`ABNORMAL_SECURITY_THREAT_LOG_CL`](../tables/abnormal-security-threat-log-cl.md) |
| [Abnormal Security - User-reported email campaigns](../content/abnormalsecurity-abnormal-security-user-reported-email-campaigns-71d3da2b-2cd4-46ee-8436-438e0a9e243a-c02788ad.md) | InitialAccess | [`ABNORMAL_SECURITY_ABUSE_MAILBOX_CL`](../tables/abnormal-security-abuse-mailbox-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AbnormalSecurityOverview](../content/abnormalsecurity-abnormalsecurityoverview-c47e736a.md) | [`ABNORMAL_SECURITY_ABUSE_MAILBOX_CL`](../tables/abnormal-security-abuse-mailbox-cl.md)<br>[`ABNORMAL_SECURITY_ATO_CASE_CL`](../tables/abnormal-security-ato-case-cl.md)<br>[`ABNORMAL_SECURITY_THREAT_LOG_CL`](../tables/abnormal-security-threat-log-cl.md)<br>[`ABNORMAL_SECURITY_VENDOR_CASE_CL`](../tables/abnormal-security-vendor-case-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Abnormal Security - Add Incident Comment](../content/abnormalsecurity-abnormal-security-add-incident-comment-a5b5c9ac.md) | This playbook is triggered when a Microsoft Sentinel incident is created. It adds a comment to the i... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AbnormalSecurityAbuseMailbox](../parsers/abnormalsecurityabusemailbox.md) | - | [`ABNORMAL_SECURITY_ABUSE_MAILBOX_CL`](../tables/abnormal-security-abuse-mailbox-cl.md) *(read)* |
| [AbnormalSecurityAtoCases](../parsers/abnormalsecurityatocases.md) | - | [`ABNORMAL_SECURITY_ATO_CASE_CL`](../tables/abnormal-security-ato-case-cl.md) *(read)* |
| [AbnormalSecurityThreatLog](../parsers/abnormalsecuritythreatlog.md) | - | [`ABNORMAL_SECURITY_THREAT_LOG_CL`](../tables/abnormal-security-threat-log-cl.md) *(read)* |
| [AbnormalSecurityVendorCases](../parsers/abnormalsecurityvendorcases.md) | - | [`ABNORMAL_SECURITY_VENDOR_CASE_CL`](../tables/abnormal-security-vendor-case-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.1.0       | 05-06-2026                     | Added Microsoft Sentinel content for the CCF Push connector to meet MISA integration criteria: four scheduled **Analytic Rules** (high-risk email attack, account takeover, user-reported malicious email, vendor compromise) with entity mappings and MITRE ATT&CK techniques; four **Hunting Queries**; four **Parsers** normalizing the per-event-type tables to friendly column names; an **Abnormal Security Overview Workbook**; and an incident-comment **Playbook**. |
| 3.0.0       | 08-05-2026                     | Added CCF Push connector with multi-table routing (9 tables), DeployPushConnectorButton, and OAuth 2.0 authentication. Legacy Azure Functions connector retained for backward compatibility. <br> Full MLA column parity: renamed abx_body_* columns to abx_body_abx_body_*, added abx_body_abx_metadata_* columns across all 9 streams. Fixed DCR transforms with explicit tostring(abx_body) and tostring(abx_metadata) conversions. Fixed fallback stream to Custom-ABNORMAL_SECURITY_LOGS_CL. Added top-level workspace/tables resources in mainTemplate for direct ARM deployment. |
| 2.0.1       | 29-06-2023                     | Renaming Azure Function to Azure Functions in **Data Connector** Description and  Updated the python runtime version to 3.11      |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

