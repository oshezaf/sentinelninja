# SAP BTP

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SAPBTP.svg" alt="SAP BTP Logo" width="75" height="75">

SAP® Business Technology Platform (BTP) is an infrastructure that allows SAP® customers to build no-code/low-code custom apps integrating to SAP® and third-party applications and datasets in order to achieve better business value by streamlining user's activities and interactions with the organization's business applications.

The BTP Solution for Microsoft Sentinel will collect audits and activity logs from the BTP infrastructure and BTP based apps, and will detect threats, suspicious activities, illegitimate activities, and more.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.10 |
| **Author** | Microsoft |
| **First Published** | 2023-04-04 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [SAP BTP](../connectors/sapbtpauditevents.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) | [SAP BTP](../connectors/sapbtpauditevents.md) | Analytics, Workbooks |
| [`UPDATE`](../tables/update.md) | - | Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Workbooks |

## Content Items

This solution includes **16 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 15 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [BTP - Audit log service unavailable](../content/sap-btp-btp-audit-log-service-unavailable-8a3b5c7d-9e1f-4a2b-8c6d-3e5f7a9b1c2d-9b6571ac.md) | High | DefenseEvasion | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Build Work Zone unauthorized access and role tampering](../content/sap-btp-btp-build-work-zone-unauthorized-access-and-role-tampering-8e5f3a2c-9d1b-4c6e-a7f8-3b2d1e0c9a5f-6a45f625.md) | High | InitialAccess, Persistence, DefenseEvasion, Impact | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Cloud Identity Service application configuration monitor](../content/sap-btp-btp-cloud-identity-service-application-configuration-monitor-3f8a2c5e-7b9d-4e1a-8f6c-2d4b9a1e3c7f-f72b086d.md) | Medium | CredentialAccess, PrivilegeEscalation | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Cloud Integration JDBC data source changes](../content/sap-btp-btp-cloud-integration-jdbc-data-source-changes-b2c3d4e5-6f7a-8b9c-0d1e-2f3a4b5c6d7e-193c616f.md) | High | CredentialAccess, LateralMovement | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Cloud Integration access policy tampering](../content/sap-btp-btp-cloud-integration-access-policy-tampering-9e6f4b2c-0d3e-5a8f-c9b7-2f5d8a1e4c6b-c2cfd081.md) | High | DefenseEvasion, PrivilegeEscalation | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Cloud Integration artifact deployment](../content/sap-btp-btp-cloud-integration-artifact-deployment-a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d-eac8ae9a.md) | High | Execution, Persistence | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Cloud Integration package import or transport](../content/sap-btp-btp-cloud-integration-package-import-or-transport-c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f-ff8b70bd.md) | Medium | InitialAccess, Persistence | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Cloud Integration tampering with security material](../content/sap-btp-btp-cloud-integration-tampering-with-security-material-8d5f3a1b-9c2e-4f7d-b8a6-1e4c7f9d2b5a-8018c9fc.md) | Medium | CredentialAccess, DefenseEvasion | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Failed access attempts across multiple BAS subaccounts](../content/sap-btp-btp-failed-access-attempts-across-multiple-bas-subaccounts-74b243a6-3046-48aa-8b03-e43b3c529cc1-dc22216f.md) | Medium | Reconnaissance, Discovery | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Malware detected in BAS dev space](../content/sap-btp-btp-malware-detected-in-bas-dev-space-31997e9a-7447-47f3-8208-4f5d7efe497c-5cefbaf4.md) | Medium | ResourceDevelopment, Execution, Persistence | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Mass user deletion in SAP Cloud Identity Service](../content/sap-btp-btp-mass-user-deletion-in-sap-cloud-identity-service-a3b8e7c4-5f2d-4a1e-9c6b-8d7f3e2a1b0c-f31294e7.md) | Medium | Impact | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Mass user deletion in a sub account](../content/sap-btp-btp-mass-user-deletion-in-a-sub-account-6f1e58bd-cd95-4dfb-8883-94207f30929a-ec5c739f.md) | Medium | Impact | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - Trust and authorization Identity Provider monitor](../content/sap-btp-btp-trust-and-authorization-identity-provider-monitor-62357c23-ecdc-4edc-9349-8338063af1ef-4e6563d9.md) | Medium | CredentialAccess, PrivilegeEscalation | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - User added to Cloud Identity Service privileged Administrators list](../content/sap-btp-btp-user-added-to-cloud-identity-service-privileged-administrators-list-7d4e9f2a-8b1c-4a5d-9e3f-6c2b1a0d8e7f-299aac8b.md) | High | LateralMovement, PrivilegeEscalation | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |
| [BTP - User added to sensitive privileged role collection](../content/sap-btp-btp-user-added-to-sensitive-privileged-role-collection-5acbe4cb-a379-4acc-9ad3-28dc48ad33d3-aa72b226.md) | Low | LateralMovement, PrivilegeEscalation | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SAPBTPActivity](../content/sap-btp-sapbtpactivity-8f5b3a2b.md) | [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md)<br>[`UPDATE`](../tables/update.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                  |
|-------------|--------------------------------|---------------------------------------------------------------------|
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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

