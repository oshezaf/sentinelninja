# Sentinel Solution for SAP® BTP

*Solution: SAP BTP*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SAPBTP.svg" alt="SAP BTP Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | Application,Cloud Provider |
| **Version** | 3.2.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-04-04 |
| **Last Updated** | 2026-10-22 |
| **Solution Folder** | [SAP BTP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/sentinel4sap.sap_btp_sentinel_solution) · Popularity: 🔵 Medium (76%) |

SAP Business Technology Platform (BTP) is SAP's platform-as-a-service for building, extending, and integrating SAP and third-party applications. It brings together services such as Cloud Integration (CPI), Cloud Identity Services, Business Application Studio, and Build Work Zone that organizations rely on to run business-critical processes.

The SAP BTP Solution for Microsoft Sentinel ingests audit and activity events from SAP BTP Audit Log Service and custom application vulnerability findings from SAP Application Vulnerability Report Service using codeless data connectors. It ships detections and a workbook to help security teams monitor BTP for identity abuse, integration threats, developer-workspace risks, vulnerable applications, and audit coverage gaps.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Application Vulnerability Report for SAP BTP](../connectors/sapbtpavl.md)
- [SAP BTP](../connectors/sapbtpauditevents.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SAPBTPAVL_CL`](../tables/sapbtpavl-cl.md) | [Application Vulnerability Report for SAP BTP](../connectors/sapbtpavl.md) | Analytics, Workbooks |
| [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) | [SAP BTP](../connectors/sapbtpauditevents.md) | Analytics, Workbooks |
| [`Update`](../tables/update.md) | - | Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Workbooks |

## Content Items

This solution includes **18 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 17 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [SAP BTP - Audit log service unavailable](../content/sap-btp-sap-btp-audit-log-service-unavailable-8a3b5c7d-9e1f-4a2b-8c6d-3e5f7a9b1c2d-59dbfe2c.md) | High | DefenseEvasion | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Build Work Zone unauthorized access and role tampering](../content/sap-btp-sap-btp-build-work-zone-unauthorized-access-and-role-tampering-8e5f3a2c-9d1b-4c6e-a7f8-3b2d1e0c9a5f-6a78fea6.md) | High | InitialAccess, Persistence, DefenseEvasion, Impact | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Cloud Identity Service application configuration monitor](../content/sap-btp-sap-btp-cloud-identity-service-application-configuration-monitor-3f8a2c5e-7b9d-4e1a-8f6c-2d4b9a1e3c7f-40dbddc8.md) | Medium | CredentialAccess, PrivilegeEscalation | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Cloud Integration JDBC data source changes](../content/sap-btp-sap-btp-cloud-integration-jdbc-data-source-changes-b2c3d4e5-6f7a-8b9c-0d1e-2f3a4b5c6d7e-19fed39d.md) | High | CredentialAccess, LateralMovement | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Cloud Integration access policy tampering](../content/sap-btp-sap-btp-cloud-integration-access-policy-tampering-9e6f4b2c-0d3e-5a8f-c9b7-2f5d8a1e4c6b-b2a65d94.md) | High | DefenseEvasion, PrivilegeEscalation | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Cloud Integration artifact deployment](../content/sap-btp-sap-btp-cloud-integration-artifact-deployment-a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d-f66f50e2.md) | High | Execution, Persistence | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Cloud Integration package import or transport](../content/sap-btp-sap-btp-cloud-integration-package-import-or-transport-c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f-6a94c9be.md) | Medium | InitialAccess, Persistence | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Cloud Integration tampering with security material](../content/sap-btp-sap-btp-cloud-integration-tampering-with-security-material-8d5f3a1b-9c2e-4f7d-b8a6-1e4c7f9d2b5a-5a633e0d.md) | Medium | CredentialAccess, DefenseEvasion | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Failed access attempts across multiple BAS subaccounts](../content/sap-btp-sap-btp-failed-access-attempts-across-multiple-bas-subaccounts-74b243a6-3046-48aa-8b03-e43b3c529cc1-c240bea2.md) | Medium | Reconnaissance, Discovery | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Malware detected in BAS dev space](../content/sap-btp-sap-btp-malware-detected-in-bas-dev-space-31997e9a-7447-47f3-8208-4f5d7efe497c-0069aa3f.md) | Medium | ResourceDevelopment, Execution, Persistence | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Mass user deletion in Cloud Identity Service](../content/sap-btp-sap-btp-mass-user-deletion-in-cloud-identity-service-a3b8e7c4-5f2d-4a1e-9c6b-8d7f3e2a1b0c-0fccee33.md) | Medium | Impact | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Mass user deletion in a sub account](../content/sap-btp-sap-btp-mass-user-deletion-in-a-sub-account-6f1e58bd-cd95-4dfb-8883-94207f30929a-f868505a.md) | Medium | Impact | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Trust and authorization Identity Provider monitor](../content/sap-btp-sap-btp-trust-and-authorization-identity-provider-monitor-62357c23-ecdc-4edc-9349-8338063af1ef-9cbceca7.md) | Medium | CredentialAccess, PrivilegeEscalation | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Unaudited custom app with login-only activity](../content/sap-btp-sap-btp-unaudited-custom-app-with-login-only-activity-5e8f2a1b-7c3d-4b9e-a6f0-1d2e3c4b5a6f-c689ff8c.md) | Medium | DefenseEvasion | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - Use of custom app with high or critical vulnerability](../content/sap-btp-sap-btp-use-of-custom-app-with-high-or-critical-vulnerability-8a4c9e2f-6b1d-4e7a-9c3f-2d5b8f1a6e4c-1f4a73ac.md) | Medium | InitialAccess | [`SAPBTPAVL_CL`](../tables/sapbtpavl-cl.md)<br>[`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - User added to Cloud Identity Service privileged Administrators list](../content/sap-btp-sap-btp-user-added-to-cloud-identity-service-privileged-administrators-list-7d4e9f2a-8b1c-4a5d-9e3f-6c2b1a0d8e7f-c3f4a14a.md) | High | LateralMovement, PrivilegeEscalation | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [SAP BTP - User added to sensitive privileged role collection](../content/sap-btp-sap-btp-user-added-to-sensitive-privileged-role-collection-5acbe4cb-a379-4acc-9ad3-28dc48ad33d3-137fda25.md) | Low | LateralMovement, PrivilegeEscalation | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SAPBTPActivity](../content/sap-btp-sapbtpactivity-8f5b3a2b.md) | [`SAPBTPAVL_CL`](../tables/sapbtpavl-cl.md)<br>[`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md)<br>[`Update`](../tables/update.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                  |
|-------------|--------------------------------|---------------------------------------------------------------------|
| 3.2.1       | 21-10-2026                     | Improved the AVL vulnerability rule to alert on name-matched interactive XSUAA logins to apps with high or critical findings; same-space audit activity is separate context only. Lowered severity to Medium, aggregated findings per app, extended the lookback to 14 days for weekly scans, added account and vulnerability context, and used ingestion time to break equal finding timestamps where available. |
| 3.2.0       | 28-09-2026                     | Added SAP BTP AVL connector for SAP Application Vulnerability Report Service findings (`SAPBTPAVL_CL`). Added an analytic rule for critical vulnerability findings in custom apps, with incident grouping per app and subaccount. Added an "Application Vulnerabilities" workbook tab and a vulnerability posture KPI on the Overview tab. |
| 3.1.1       | 22-07-2026                     |New analytic rule: detect unaudited custom apps with login-only activity. Renamed analytic rules with `SAP BTP` prefix for improved discoverability.|
| 3.1.0       | 08-06-2026                     |Reworked BTP Cloud Integration artifact deployment rule to use audit.configuration events with richer artifact, actor, and tenant context|
| 3.0.12      | 29-12-2025                     |Updated grid view UI with new subaccount onboarding properties|
| 3.0.11      | 29-12-2025                     |Added queryWindowDelayInMin for SAP log delays and included the SAP CIS analytic rules.|
| 3.0.10      | 03-10-2025                     |Resolves data connector duplicate handle pagination errors|
| 3.0.9       | 02-09-2025                     |Connector UI fix|
| 3.0.8       | 03-12-2024                     |Removal of Function App data connector|
| 3.0.7       | 24-07-2024                     |Updated BAS malware rule after changes in source message format|
| 3.0.6       | 23-07-2024                     |Resolves ContentTemplateNotFound error for CCP|
| 3.0.5       | 15-07-2024                     |Remove data source mappings for deprecated function app connector|
| 3.0.4       | 11-07-2024                     |Move codeless connector to GA and deprecated function app connector|
| 3.0.3       | 21-06-2024                     |Fixes issue with data connector TokenEndpoint query parameter|
| 3.0.2       | 21-03-2024                     |Fix data connector version mismatch|
| 3.0.1       | 19-03-2024                     |Add data connector based on CCP with support for multiple subaccounts|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

