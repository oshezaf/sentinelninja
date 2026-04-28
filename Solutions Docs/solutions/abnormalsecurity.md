# Abnormal Security Events

*Solution: AbnormalSecurity*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/AbnormalSecurity/Data%20Connectors/Logo/abnormalsecurity.svg" alt="AbnormalSecurity Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Abnormal Security |
| **Support Tier** | Partner |
| **Support Link** | [https://abnormalsecurity.com/contact](https://abnormalsecurity.com/contact) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | AbnormalSecurity - support@abnormalsecurity.com |
| **First Published** | 2021-10-20 |
| **Last Updated** | 2026-02-17 |
| **Solution Folder** | [AbnormalSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/abnormalsecuritycorporation1593011233180.fe1b4806-215b-4610-bf95-965a7a65579c) · Popularity: 🟡 Low (29%) |

The Abnormal Security solution provides real-time security event ingestion from Abnormal's cloud email security platform into Microsoft Sentinel. Supports both push-based (CCF Push) and pull-based (Azure Functions) connectors. The push connector routes events to per-event-type tables (threats, cases, audit logs, abuse mailbox, posture changes, ATO cases, remediations, vendor cases) using the Codeless Connector Framework.

## Data Connectors

This solution provides **2 data connector(s)**:

- [AbnormalSecurity ](../connectors/abnormalsecurity.md) 🔶
- [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md)

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **11 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ABNORMAL_CASES_CL`](../tables/abnormal-cases-cl.md) | [AbnormalSecurity ](../connectors/abnormalsecurity.md) | - |
| [`ABNORMAL_SECURITY_ABUSE_MAILBOX_CL`](../tables/abnormal-security-abuse-mailbox-cl.md) | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_ATO_CASE_CL`](../tables/abnormal-security-ato-case-cl.md) | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_AUDIT_LOG_CL`](../tables/abnormal-security-audit-log-cl.md) | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_CASE_CL`](../tables/abnormal-security-case-cl.md) | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_POSTURE_CHANGE_CL`](../tables/abnormal-security-posture-change-cl.md) | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_REMEDIATION_CL`](../tables/abnormal-security-remediation-cl.md) | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_THREAT_LOG_CL`](../tables/abnormal-security-threat-log-cl.md) | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_SECURITY_VENDOR_CASE_CL`](../tables/abnormal-security-vendor-case-cl.md) | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |
| [`ABNORMAL_THREAT_MESSAGES_CL`](../tables/abnormal-threat-messages-cl.md) 🔶 | [AbnormalSecurity ](../connectors/abnormalsecurity.md) | - |
| [`AbnormalSecurityLogs_CL`](../tables/abnormalsecuritylogs-cl.md) | [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.0       | 04-03-2026                     | Added CCF Push connector with multi-table routing (9 tables), DeployPushConnectorButton, and OAuth 2.0 authentication. Legacy Azure Functions connector retained for backward compatibility. |
| 2.0.1       | 29-06-2023                     | Renaming Azure Function to Azure Functions in **Data Connector** Description and  Updated the python runtime version to 3.11      |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

