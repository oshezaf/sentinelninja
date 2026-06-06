# Pathlock CAC: Threat Detection & Response Microsoft Sentinel Integration

*Solution: Pathlock_TDnR*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/pathlock_logo.svg" alt="Pathlock_TDnR Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Pathlock Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://pathlock.com/support/](https://pathlock.com/support/) |
| **Categories** | domains,verticals |
| **Version** | 3.0.1 |
| **Author** | Pathlock Inc. - support@pathlock.com |
| **First Published** | 2022-02-17 |
| **Solution Folder** | [Pathlock_TDnR](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pathlock_TDnR) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/pathlockinc1631410274035.pathlock_tdnr) · Popularity: 🟡 Low (46%) |

The [Pathlock TD&R](https://pathlock.com/products/cybersecurity-application-controls/) integration enables organizations to seamlessly forward Pathlock Threat Detection and Response (TD&R) events from both on-premise and cloud-based SAP systems into Microsoft Sentinel Solution for SAP for unified security visibility and incident correlation across the enterprise.

Built on Pathlock’s Cybersecurity Application Controls (CAC) platform, this connector utilizes the Common Connector Platform (CCP) framework to securely transmit log and event data while maintaining data integrity and governance. The Custom Logs solution is automatically deployed during installation, ensuring a quick and reliable setup without manual configuration steps.

With this integration, SOC and SAP security teams can:
- Consolidate SAP-specific threat intelligence and correlate it with enterprise events in Microsoft Sentinel.
- Leverage 4,000+ Pathlock detection signatures and 80+ SAP log sources for comprehensive SAP monitoring.
- Automate alerting and response workflows in Microsoft Sentinel for faster mean-time-to-detect (MTTD) and mean-time-to-respond (MTTR).
- Maintain audit readiness by demonstrating end-to-end visibility of SAP threat activity.

This out-of-the-box connector simplifies secure event forwarding from SAP to Microsoft Sentinel—enabling centralized analysis, compliance reporting, and proactive response within your existing security ecosystem.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [Pathlock Threat Detection and Response Integration](../connectors/pathlock-tdnr.md) ⚠️

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) | [Pathlock Threat Detection and Response Integration](../connectors/pathlock-tdnr.md) | Analytics |

## Content Items

This solution includes **77 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 77 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Pathlock TDnR - ABAP Runtime Dumps](../content/pathlock-tdnr-pathlock-tdnr-abap-runtime-dumps-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c02-041b0073.md) | Medium | Discovery | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - ABAP Source Code Changes](../content/pathlock-tdnr-pathlock-tdnr-abap-source-code-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c01-5bd3cc0b.md) | High | Persistence, DefenseEvasion | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Authorization Check Value Changes (SU24)](../content/pathlock-tdnr-pathlock-tdnr-authorization-check-value-changes-su24-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c62-e7427ac8.md) | High | DefenseEvasion, PrivilegeEscalation | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Authorization Profile Changes](../content/pathlock-tdnr-pathlock-tdnr-authorization-profile-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c41-3d7609f9.md) | High | PrivilegeEscalation, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Authorization Role Changes](../content/pathlock-tdnr-pathlock-tdnr-authorization-role-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c46-2f320141.md) | High | PrivilegeEscalation, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Bank Master Data Changes](../content/pathlock-tdnr-pathlock-tdnr-bank-master-data-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c05-023ad1aa.md) | High | Impact | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Business Partner Bank Data Changes](../content/pathlock-tdnr-pathlock-tdnr-business-partner-bank-data-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c06-f8b485e2.md) | High | Impact | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - CUA Settings Changes](../content/pathlock-tdnr-pathlock-tdnr-cua-settings-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c17-c89bb1ba.md) | Medium | Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Credit Card Data Changes](../content/pathlock-tdnr-pathlock-tdnr-credit-card-data-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c07-28153f2a.md) | High | Collection, Impact | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Critical File Integrity Changes](../content/pathlock-tdnr-pathlock-tdnr-critical-file-integrity-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c24-3e412a30.md) | High | DefenseEvasion, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - DDIC Table Utility Changes (SE14)](../content/pathlock-tdnr-pathlock-tdnr-ddic-table-utility-changes-se14-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c69-6350ecbd.md) | High | DefenseEvasion | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Database Cockpit Audit Events](../content/pathlock-tdnr-pathlock-tdnr-database-cockpit-audit-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c23-f2bdd6b1.md) | Medium | Discovery, PrivilegeEscalation | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Debitor Change Documents](../content/pathlock-tdnr-pathlock-tdnr-debitor-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c08-fe13a76a.md) | Medium | Impact | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Dynamic Access Control Events](../content/pathlock-tdnr-pathlock-tdnr-dynamic-access-control-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c40-0b284695.md) | High | PrivilegeEscalation | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Emergency User (AdminTrack) Activity](../content/pathlock-tdnr-pathlock-tdnr-emergency-user-admintrack-activity-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c50-313bd96a.md) | High | Persistence, PrivilegeEscalation | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Function Module Tested in Production](../content/pathlock-tdnr-pathlock-tdnr-function-module-tested-in-production-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c25-1eedf744.md) | High | Execution | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - G/L Account Changes](../content/pathlock-tdnr-pathlock-tdnr-g-l-account-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c15-4106f7ce.md) | Medium | Impact | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - GRC Access Control Change Documents](../content/pathlock-tdnr-pathlock-tdnr-grc-access-control-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c10-ae67d444.md) | Medium | PrivilegeEscalation | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Generic SAP Change Documents](../content/pathlock-tdnr-pathlock-tdnr-generic-sap-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c09-45cccb4b.md) | Medium | Impact, DefenseEvasion | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Generic Table Content Changes](../content/pathlock-tdnr-pathlock-tdnr-generic-table-content-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c67-00e59d76.md) | High | DefenseEvasion, Impact | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Global System Change Setting Events](../content/pathlock-tdnr-pathlock-tdnr-global-system-change-setting-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c65-dc8cce8d.md) | High | DefenseEvasion, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - HANA Standalone DB Connection Events](../content/pathlock-tdnr-pathlock-tdnr-hana-standalone-db-connection-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c28-684697d3.md) | Medium | LateralMovement | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - HR User Master Change Requests](../content/pathlock-tdnr-pathlock-tdnr-hr-user-master-change-requests-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c30-34753614.md) | Medium | Impact, Collection | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - IBAN Change Documents](../content/pathlock-tdnr-pathlock-tdnr-iban-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c11-be8423f3.md) | High | Impact | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - ICF Web Service Changes](../content/pathlock-tdnr-pathlock-tdnr-icf-web-service-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c32-ab2396df.md) | High | Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - ICM Security Events](../content/pathlock-tdnr-pathlock-tdnr-icm-security-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c33-f6267652.md) | Medium | DefenseEvasion | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - J2EE Security Audit Events](../content/pathlock-tdnr-pathlock-tdnr-j2ee-security-audit-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c36-efb4f361.md) | Medium | Discovery | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - J2EE Security Events](../content/pathlock-tdnr-pathlock-tdnr-j2ee-security-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c35-7edde9b8.md) | Medium | InitialAccess, Discovery | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Kerberos Keytab Changes](../content/pathlock-tdnr-pathlock-tdnr-kerberos-keytab-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c12-481ffb20.md) | High | CredentialAccess, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - LDAP Synchronization Application Log Events](../content/pathlock-tdnr-pathlock-tdnr-ldap-synchronization-application-log-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c58-7012178a.md) | Medium | CredentialAccess | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Logical OS Command Changes](../content/pathlock-tdnr-pathlock-tdnr-logical-os-command-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c38-9ec02e1f.md) | High | Execution, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Missing SAP Security Notes](../content/pathlock-tdnr-pathlock-tdnr-missing-sap-security-notes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c37-f56fab72.md) | Medium | Discovery | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Multiple Login Sessions Detected](../content/pathlock-tdnr-pathlock-tdnr-multiple-login-sessions-detected-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c73-906d59e4.md) | Medium | InitialAccess, Discovery, CredentialAccess | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - OData Application Log Events](../content/pathlock-tdnr-pathlock-tdnr-odata-application-log-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c59-3665f35a.md) | Medium | Collection, Exfiltration | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Outbound SAP SMTP Email](../content/pathlock-tdnr-pathlock-tdnr-outbound-sap-smtp-email-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c39-bd4bbb2f.md) | Medium | Exfiltration | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Outgoing Spool Print Job Events](../content/pathlock-tdnr-pathlock-tdnr-outgoing-spool-print-job-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c60-e6c20e70.md) | Medium | Exfiltration | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Pathlock Security Radar Internal Events](../content/pathlock-tdnr-pathlock-tdnr-pathlock-security-radar-internal-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c34-d6d478f6.md) | Medium | Discovery | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Payment Request Changes](../content/pathlock-tdnr-pathlock-tdnr-payment-request-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c14-6dc6a451.md) | Medium | Impact | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - RFC Connection Changes](../content/pathlock-tdnr-pathlock-tdnr-rfc-connection-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c45-8891f243.md) | High | LateralMovement, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - RiskTrack Audit Results](../content/pathlock-tdnr-pathlock-tdnr-risktrack-audit-results-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c52-efc09e0f.md) | High | Discovery | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Authorization Changes](../content/pathlock-tdnr-pathlock-tdnr-sap-authorization-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c03-f1025162.md) | High | PrivilegeEscalation, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP BTP Cloud Foundry Events](../content/pathlock-tdnr-pathlock-tdnr-sap-btp-cloud-foundry-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c22-510a6be3.md) | Medium | Discovery | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Batch Job Events](../content/pathlock-tdnr-pathlock-tdnr-sap-batch-job-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c04-7f7d5de6.md) | Medium | Execution, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Client Configuration Changes](../content/pathlock-tdnr-pathlock-tdnr-sap-client-configuration-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c20-8c875b0a.md) | High | DefenseEvasion, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Cloud Account Administration Events](../content/pathlock-tdnr-pathlock-tdnr-sap-cloud-account-administration-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c21-3c895514.md) | Medium | InitialAccess, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Cloud Connector Events](../content/pathlock-tdnr-pathlock-tdnr-sap-cloud-connector-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c54-cca38aa0.md) | Medium | LateralMovement | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Download Observer Events](../content/pathlock-tdnr-pathlock-tdnr-sap-download-observer-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c51-48b76260.md) | Medium | Exfiltration | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP HANA Database Audit Trail](../content/pathlock-tdnr-pathlock-tdnr-sap-hana-database-audit-trail-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c27-c8d12358.md) | Medium | Discovery, CredentialAccess, InitialAccess | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP HANA Parameter Changes](../content/pathlock-tdnr-pathlock-tdnr-sap-hana-parameter-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c29-d34cbed6.md) | Medium | DefenseEvasion | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP HTTP Webserver Events](../content/pathlock-tdnr-pathlock-tdnr-sap-http-webserver-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c31-8f494ae3.md) | Medium | InitialAccess, CommandAndControl | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Instance Profile Changes](../content/pathlock-tdnr-pathlock-tdnr-sap-instance-profile-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c64-8e929508.md) | High | DefenseEvasion, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Public Cloud Security Audit Events](../content/pathlock-tdnr-pathlock-tdnr-sap-public-cloud-security-audit-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c57-055e2974.md) | Medium | Discovery | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP RFC Gateway Events](../content/pathlock-tdnr-pathlock-tdnr-sap-rfc-gateway-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c26-1d6f7ad6.md) | Medium | LateralMovement, CommandAndControl | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Read Access Logging Audit](../content/pathlock-tdnr-pathlock-tdnr-sap-read-access-logging-audit-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c43-67f7d442.md) | Medium | Collection | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Read Access Logging Data](../content/pathlock-tdnr-pathlock-tdnr-sap-read-access-logging-data-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c44-2ba00cee.md) | Medium | Collection, Exfiltration | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Router Log Events](../content/pathlock-tdnr-pathlock-tdnr-sap-router-log-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c49-d306f91d.md) | Medium | LateralMovement, CommandAndControl | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Security Audit Log Events](../content/pathlock-tdnr-pathlock-tdnr-sap-security-audit-log-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c56-1dfbb5ab.md) | High | Discovery, DefenseEvasion | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP System Job Monitoring Events](../content/pathlock-tdnr-pathlock-tdnr-sap-system-job-monitoring-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c66-d54c66b1.md) | Medium | Execution | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP System Log Events](../content/pathlock-tdnr-pathlock-tdnr-sap-system-log-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c63-843f05ef.md) | Medium | Discovery | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SAP Web Dispatcher HTTP Events](../content/pathlock-tdnr-pathlock-tdnr-sap-web-dispatcher-http-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c77-75f1e196.md) | Medium | InitialAccess, CommandAndControl | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SE16N Direct Table Change Documents](../content/pathlock-tdnr-pathlock-tdnr-se16n-direct-table-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c55-92a037ed.md) | High | DefenseEvasion, Exfiltration | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - STRUST PSE Certificate Changes](../content/pathlock-tdnr-pathlock-tdnr-strust-pse-certificate-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c42-e6e503e4.md) | High | CredentialAccess, DefenseEvasion | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SU24 Table USOBT_C Changes](../content/pathlock-tdnr-pathlock-tdnr-su24-table-usobt-c-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c18-3a1c402a.md) | Medium | DefenseEvasion, PrivilegeEscalation | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - SU24 Table USOBX_C Changes](../content/pathlock-tdnr-pathlock-tdnr-su24-table-usobx-c-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c19-720a4c5b.md) | Medium | DefenseEvasion, PrivilegeEscalation | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Spool Job Changes](../content/pathlock-tdnr-pathlock-tdnr-spool-job-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c61-1965d1a5.md) | Medium | Collection | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Switchable Authorization Design Changes](../content/pathlock-tdnr-pathlock-tdnr-switchable-authorization-design-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c47-d53ad766.md) | High | DefenseEvasion, PrivilegeEscalation | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Switchable Authorization Runtime Changes](../content/pathlock-tdnr-pathlock-tdnr-switchable-authorization-runtime-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c48-d1f164f6.md) | High | DefenseEvasion, PrivilegeEscalation | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - System Security Policy Changes](../content/pathlock-tdnr-pathlock-tdnr-system-security-policy-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c16-bb0dcfbf.md) | High | DefenseEvasion, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - TMS Transport and Import Events](../content/pathlock-tdnr-pathlock-tdnr-tms-transport-and-import-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c71-c436b963.md) | High | Persistence, Execution | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Table Parameter Setting Changes](../content/pathlock-tdnr-pathlock-tdnr-table-parameter-setting-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c68-9f0aeb01.md) | High | DefenseEvasion | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Transaction and Report Statistics](../content/pathlock-tdnr-pathlock-tdnr-transaction-and-report-statistics-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c70-918c6568.md) | Medium | Discovery | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - User Access Management Password Resets](../content/pathlock-tdnr-pathlock-tdnr-user-access-management-password-resets-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c53-598b484d.md) | Medium | CredentialAccess, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - User Authorization Buffer Manipulation](../content/pathlock-tdnr-pathlock-tdnr-user-authorization-buffer-manipulation-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c72-be87e307.md) | High | PrivilegeEscalation, DefenseEvasion | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - User Master Data Changes](../content/pathlock-tdnr-pathlock-tdnr-user-master-data-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c74-e9b84250.md) | High | Persistence, PrivilegeEscalation | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - User-Profile Assignment Changes](../content/pathlock-tdnr-pathlock-tdnr-user-profile-assignment-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c75-13848f86.md) | High | PrivilegeEscalation, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - User-Role Assignment Changes](../content/pathlock-tdnr-pathlock-tdnr-user-role-assignment-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c76-32b460f3.md) | High | PrivilegeEscalation, Persistence | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |
| [Pathlock TDnR - Vendor Change Documents](../content/pathlock-tdnr-pathlock-tdnr-vendor-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c13-0d35f78e.md) | Medium | Impact | [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) |

## Additional Documentation

> 📄 *Source: [Pathlock_TDnR/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pathlock_TDnR/README.md)*

This project provides an ARM template to deploy the "Pathlock Threat Detection & Response (TD&R)" connector in Microsoft Sentinel Solution for SAP. The deployment includes the following components:
- Connector
- Workbook
- Parser Function

## Deployment via Content Hub

To deploy using the Content Hub:

1. Log in to the Azure Portal.
2. Navigate to Microsoft Sentinel and select your workspace.
3. Go to **Content Hub**.
4. Search for **Pathlock Threat Detection & Response (TD&R)**.
5. Click **Install**, then **Create**.
6. Follow the prompts to complete the installation.

## Deployment via ARM Template

If the connector is not yet available in the Content Hub, you can deploy it manually using the provided ARM template.

### Prerequisites

- Access to the Microsoft Sentinel environment.
- Workspace name and location (found in Sentinel > Settings > Workspace Settings > Properties > Location).
- Microsoft Sentinel Agent installed on the relevant system.
- Path for log file generation.
- Cron job configured to append new logs to an existing file.
- Logs must be received in a custom table named `Pathlock_TDnR_CL`.

### Installation Steps

1. Click the **Deploy to Azure** button below.
2. Select the Resource Group where Microsoft Sentinel is deployed.
3. Enter the Microsoft Sentinel Workspace name.
4. Leave other settings as default.
5. Click **Review + create**.
6. Wait for validation, then click **Create**.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Ffrozenstrawberries%2FAzure-Sentinel%2Fmaster%2FSolutions%2FPathlock_TDnR%2FPackage%2FmainTemplate.json)

---

*This solution is provided by Pathlock as a temporary deployment method until the official connector is available in the Content Hub.*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.1 | 04-06-2026 | Added 77 **Analytic Rules**; updated **Data Connector** description and dataTypes; fixed MITRE tactic/technique mapping mismatches and replaced non-ASCII characters in **Analytic Rules** |
| 3.0.0 | 05-11-2025 | Initial Solution Release |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

