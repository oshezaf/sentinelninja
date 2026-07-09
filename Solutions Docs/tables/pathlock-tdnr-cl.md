# Pathlock_TDnR_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | SAP *(basis: projected)* |
| **Collector Vendor** | Pathlock *(basis: projected)* |
| **Collector Product** | Threat Detection and Response |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (55 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pathlock_TDnR/Data%20Connectors/Pathlock_TDnR_PUSH_CCP/Pathlock_TDnR_DCR.json)

| Column Name | Type |
|:------------|:-----|
| AffectedUser | string |
| AgrName | string |
| Area | string |
| AuditActionid | string |
| Bname | string |
| Bytes | long |
| CentralTs | string |
| ConfChgDate | string |
| ConfChgTime | string |
| ConfChgUser | string |
| ConfDate | string |
| Confirmed | string |
| ConfTime | string |
| ConfUser | string |
| DataSource | string |
| Datum | string |
| DatumUtc | string |
| DestIp | string |
| Eventid | string |
| EventidLfdnr | string |
| Exported | string |
| Filename | string |
| FilterNo | string |
| Forwarded | string |
| Hostname | string |
| Incident | string |
| Instance | string |
| KeyField | string |
| LogLine | string |
| Mandt | string |
| MessageV1 | string |
| MessageV2 | string |
| MessageV3 | string |
| MessageV4 | string |
| MsgId | string |
| MsgNo | string |
| MsgType | string |
| Object | string |
| ObjName | string |
| Okcode | string |
| Pgmid | string |
| Profn | string |
| Push | string |
| Report | string |
| RtSysid | string |
| SrcIp | string |
| Subid | string |
| Sysid | string |
| Tabname | string |
| Tcode | string |
| Terminal | string |
| TimeGenerated | datetime |
| Uri | string |
| Zeit | string |
| ZeitUtc | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Pathlock_TDnR](../solutions/pathlock-tdnr.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Pathlock Inc.: Threat Detection and Response for SAP](../connectors/pathlock-tdnr.md) |  |
| [Pathlock Threat Detection and Response Integration](../connectors/pathlock-tdnr.md) |  |

---

## Content Items Using This Table (77)

### Analytic Rules (77)

**In solution [Pathlock_TDnR](../solutions/pathlock-tdnr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Pathlock TDnR - ABAP Runtime Dumps](../content/pathlock-tdnr-pathlock-tdnr-abap-runtime-dumps-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c02-041b0073.md) |  |
| [Pathlock TDnR - ABAP Source Code Changes](../content/pathlock-tdnr-pathlock-tdnr-abap-source-code-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c01-5bd3cc0b.md) |  |
| [Pathlock TDnR - Authorization Check Value Changes (SU24)](../content/pathlock-tdnr-pathlock-tdnr-authorization-check-value-changes-su24-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c62-e7427ac8.md) |  |
| [Pathlock TDnR - Authorization Profile Changes](../content/pathlock-tdnr-pathlock-tdnr-authorization-profile-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c41-3d7609f9.md) |  |
| [Pathlock TDnR - Authorization Role Changes](../content/pathlock-tdnr-pathlock-tdnr-authorization-role-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c46-2f320141.md) |  |
| [Pathlock TDnR - Bank Master Data Changes](../content/pathlock-tdnr-pathlock-tdnr-bank-master-data-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c05-023ad1aa.md) |  |
| [Pathlock TDnR - Business Partner Bank Data Changes](../content/pathlock-tdnr-pathlock-tdnr-business-partner-bank-data-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c06-f8b485e2.md) |  |
| [Pathlock TDnR - CUA Settings Changes](../content/pathlock-tdnr-pathlock-tdnr-cua-settings-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c17-c89bb1ba.md) |  |
| [Pathlock TDnR - Credit Card Data Changes](../content/pathlock-tdnr-pathlock-tdnr-credit-card-data-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c07-28153f2a.md) |  |
| [Pathlock TDnR - Critical File Integrity Changes](../content/pathlock-tdnr-pathlock-tdnr-critical-file-integrity-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c24-3e412a30.md) |  |
| [Pathlock TDnR - DDIC Table Utility Changes (SE14)](../content/pathlock-tdnr-pathlock-tdnr-ddic-table-utility-changes-se14-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c69-6350ecbd.md) |  |
| [Pathlock TDnR - Database Cockpit Audit Events](../content/pathlock-tdnr-pathlock-tdnr-database-cockpit-audit-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c23-f2bdd6b1.md) |  |
| [Pathlock TDnR - Debitor Change Documents](../content/pathlock-tdnr-pathlock-tdnr-debitor-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c08-fe13a76a.md) |  |
| [Pathlock TDnR - Dynamic Access Control Events](../content/pathlock-tdnr-pathlock-tdnr-dynamic-access-control-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c40-0b284695.md) |  |
| [Pathlock TDnR - Emergency User (AdminTrack) Activity](../content/pathlock-tdnr-pathlock-tdnr-emergency-user-admintrack-activity-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c50-313bd96a.md) |  |
| [Pathlock TDnR - Function Module Tested in Production](../content/pathlock-tdnr-pathlock-tdnr-function-module-tested-in-production-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c25-1eedf744.md) |  |
| [Pathlock TDnR - G/L Account Changes](../content/pathlock-tdnr-pathlock-tdnr-g-l-account-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c15-4106f7ce.md) |  |
| [Pathlock TDnR - GRC Access Control Change Documents](../content/pathlock-tdnr-pathlock-tdnr-grc-access-control-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c10-ae67d444.md) |  |
| [Pathlock TDnR - Generic SAP Change Documents](../content/pathlock-tdnr-pathlock-tdnr-generic-sap-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c09-45cccb4b.md) |  |
| [Pathlock TDnR - Generic Table Content Changes](../content/pathlock-tdnr-pathlock-tdnr-generic-table-content-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c67-00e59d76.md) |  |
| [Pathlock TDnR - Global System Change Setting Events](../content/pathlock-tdnr-pathlock-tdnr-global-system-change-setting-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c65-dc8cce8d.md) |  |
| [Pathlock TDnR - HANA Standalone DB Connection Events](../content/pathlock-tdnr-pathlock-tdnr-hana-standalone-db-connection-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c28-684697d3.md) |  |
| [Pathlock TDnR - HR User Master Change Requests](../content/pathlock-tdnr-pathlock-tdnr-hr-user-master-change-requests-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c30-34753614.md) |  |
| [Pathlock TDnR - IBAN Change Documents](../content/pathlock-tdnr-pathlock-tdnr-iban-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c11-be8423f3.md) |  |
| [Pathlock TDnR - ICF Web Service Changes](../content/pathlock-tdnr-pathlock-tdnr-icf-web-service-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c32-ab2396df.md) |  |
| [Pathlock TDnR - ICM Security Events](../content/pathlock-tdnr-pathlock-tdnr-icm-security-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c33-f6267652.md) |  |
| [Pathlock TDnR - J2EE Security Audit Events](../content/pathlock-tdnr-pathlock-tdnr-j2ee-security-audit-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c36-efb4f361.md) |  |
| [Pathlock TDnR - J2EE Security Events](../content/pathlock-tdnr-pathlock-tdnr-j2ee-security-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c35-7edde9b8.md) |  |
| [Pathlock TDnR - Kerberos Keytab Changes](../content/pathlock-tdnr-pathlock-tdnr-kerberos-keytab-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c12-481ffb20.md) |  |
| [Pathlock TDnR - LDAP Synchronization Application Log Events](../content/pathlock-tdnr-pathlock-tdnr-ldap-synchronization-application-log-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c58-7012178a.md) |  |
| [Pathlock TDnR - Logical OS Command Changes](../content/pathlock-tdnr-pathlock-tdnr-logical-os-command-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c38-9ec02e1f.md) |  |
| [Pathlock TDnR - Missing SAP Security Notes](../content/pathlock-tdnr-pathlock-tdnr-missing-sap-security-notes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c37-f56fab72.md) |  |
| [Pathlock TDnR - Multiple Login Sessions Detected](../content/pathlock-tdnr-pathlock-tdnr-multiple-login-sessions-detected-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c73-906d59e4.md) |  |
| [Pathlock TDnR - OData Application Log Events](../content/pathlock-tdnr-pathlock-tdnr-odata-application-log-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c59-3665f35a.md) |  |
| [Pathlock TDnR - Outbound SAP SMTP Email](../content/pathlock-tdnr-pathlock-tdnr-outbound-sap-smtp-email-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c39-bd4bbb2f.md) |  |
| [Pathlock TDnR - Outgoing Spool Print Job Events](../content/pathlock-tdnr-pathlock-tdnr-outgoing-spool-print-job-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c60-e6c20e70.md) |  |
| [Pathlock TDnR - Pathlock Security Radar Internal Events](../content/pathlock-tdnr-pathlock-tdnr-pathlock-security-radar-internal-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c34-d6d478f6.md) |  |
| [Pathlock TDnR - Payment Request Changes](../content/pathlock-tdnr-pathlock-tdnr-payment-request-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c14-6dc6a451.md) |  |
| [Pathlock TDnR - RFC Connection Changes](../content/pathlock-tdnr-pathlock-tdnr-rfc-connection-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c45-8891f243.md) |  |
| [Pathlock TDnR - RiskTrack Audit Results](../content/pathlock-tdnr-pathlock-tdnr-risktrack-audit-results-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c52-efc09e0f.md) |  |
| [Pathlock TDnR - SAP Authorization Changes](../content/pathlock-tdnr-pathlock-tdnr-sap-authorization-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c03-f1025162.md) |  |
| [Pathlock TDnR - SAP BTP Cloud Foundry Events](../content/pathlock-tdnr-pathlock-tdnr-sap-btp-cloud-foundry-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c22-510a6be3.md) |  |
| [Pathlock TDnR - SAP Batch Job Events](../content/pathlock-tdnr-pathlock-tdnr-sap-batch-job-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c04-7f7d5de6.md) |  |
| [Pathlock TDnR - SAP Client Configuration Changes](../content/pathlock-tdnr-pathlock-tdnr-sap-client-configuration-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c20-8c875b0a.md) |  |
| [Pathlock TDnR - SAP Cloud Account Administration Events](../content/pathlock-tdnr-pathlock-tdnr-sap-cloud-account-administration-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c21-3c895514.md) |  |
| [Pathlock TDnR - SAP Cloud Connector Events](../content/pathlock-tdnr-pathlock-tdnr-sap-cloud-connector-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c54-cca38aa0.md) |  |
| [Pathlock TDnR - SAP Download Observer Events](../content/pathlock-tdnr-pathlock-tdnr-sap-download-observer-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c51-48b76260.md) |  |
| [Pathlock TDnR - SAP HANA Database Audit Trail](../content/pathlock-tdnr-pathlock-tdnr-sap-hana-database-audit-trail-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c27-c8d12358.md) |  |
| [Pathlock TDnR - SAP HANA Parameter Changes](../content/pathlock-tdnr-pathlock-tdnr-sap-hana-parameter-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c29-d34cbed6.md) |  |
| [Pathlock TDnR - SAP HTTP Webserver Events](../content/pathlock-tdnr-pathlock-tdnr-sap-http-webserver-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c31-8f494ae3.md) |  |
| [Pathlock TDnR - SAP Instance Profile Changes](../content/pathlock-tdnr-pathlock-tdnr-sap-instance-profile-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c64-8e929508.md) |  |
| [Pathlock TDnR - SAP Public Cloud Security Audit Events](../content/pathlock-tdnr-pathlock-tdnr-sap-public-cloud-security-audit-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c57-055e2974.md) |  |
| [Pathlock TDnR - SAP RFC Gateway Events](../content/pathlock-tdnr-pathlock-tdnr-sap-rfc-gateway-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c26-1d6f7ad6.md) |  |
| [Pathlock TDnR - SAP Read Access Logging Audit](../content/pathlock-tdnr-pathlock-tdnr-sap-read-access-logging-audit-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c43-67f7d442.md) |  |
| [Pathlock TDnR - SAP Read Access Logging Data](../content/pathlock-tdnr-pathlock-tdnr-sap-read-access-logging-data-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c44-2ba00cee.md) |  |
| [Pathlock TDnR - SAP Router Log Events](../content/pathlock-tdnr-pathlock-tdnr-sap-router-log-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c49-d306f91d.md) |  |
| [Pathlock TDnR - SAP Security Audit Log Events](../content/pathlock-tdnr-pathlock-tdnr-sap-security-audit-log-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c56-1dfbb5ab.md) |  |
| [Pathlock TDnR - SAP System Job Monitoring Events](../content/pathlock-tdnr-pathlock-tdnr-sap-system-job-monitoring-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c66-d54c66b1.md) |  |
| [Pathlock TDnR - SAP System Log Events](../content/pathlock-tdnr-pathlock-tdnr-sap-system-log-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c63-843f05ef.md) |  |
| [Pathlock TDnR - SAP Web Dispatcher HTTP Events](../content/pathlock-tdnr-pathlock-tdnr-sap-web-dispatcher-http-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c77-75f1e196.md) |  |
| [Pathlock TDnR - SE16N Direct Table Change Documents](../content/pathlock-tdnr-pathlock-tdnr-se16n-direct-table-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c55-92a037ed.md) |  |
| [Pathlock TDnR - STRUST PSE Certificate Changes](../content/pathlock-tdnr-pathlock-tdnr-strust-pse-certificate-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c42-e6e503e4.md) |  |
| [Pathlock TDnR - SU24 Table USOBT_C Changes](../content/pathlock-tdnr-pathlock-tdnr-su24-table-usobt-c-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c18-3a1c402a.md) |  |
| [Pathlock TDnR - SU24 Table USOBX_C Changes](../content/pathlock-tdnr-pathlock-tdnr-su24-table-usobx-c-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c19-720a4c5b.md) |  |
| [Pathlock TDnR - Spool Job Changes](../content/pathlock-tdnr-pathlock-tdnr-spool-job-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c61-1965d1a5.md) |  |
| [Pathlock TDnR - Switchable Authorization Design Changes](../content/pathlock-tdnr-pathlock-tdnr-switchable-authorization-design-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c47-d53ad766.md) |  |
| [Pathlock TDnR - Switchable Authorization Runtime Changes](../content/pathlock-tdnr-pathlock-tdnr-switchable-authorization-runtime-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c48-d1f164f6.md) |  |
| [Pathlock TDnR - System Security Policy Changes](../content/pathlock-tdnr-pathlock-tdnr-system-security-policy-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c16-bb0dcfbf.md) |  |
| [Pathlock TDnR - TMS Transport and Import Events](../content/pathlock-tdnr-pathlock-tdnr-tms-transport-and-import-events-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c71-c436b963.md) |  |
| [Pathlock TDnR - Table Parameter Setting Changes](../content/pathlock-tdnr-pathlock-tdnr-table-parameter-setting-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c68-9f0aeb01.md) |  |
| [Pathlock TDnR - Transaction and Report Statistics](../content/pathlock-tdnr-pathlock-tdnr-transaction-and-report-statistics-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c70-918c6568.md) |  |
| [Pathlock TDnR - User Access Management Password Resets](../content/pathlock-tdnr-pathlock-tdnr-user-access-management-password-resets-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c53-598b484d.md) |  |
| [Pathlock TDnR - User Authorization Buffer Manipulation](../content/pathlock-tdnr-pathlock-tdnr-user-authorization-buffer-manipulation-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c72-be87e307.md) |  |
| [Pathlock TDnR - User Master Data Changes](../content/pathlock-tdnr-pathlock-tdnr-user-master-data-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c74-e9b84250.md) |  |
| [Pathlock TDnR - User-Profile Assignment Changes](../content/pathlock-tdnr-pathlock-tdnr-user-profile-assignment-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c75-13848f86.md) |  |
| [Pathlock TDnR - User-Role Assignment Changes](../content/pathlock-tdnr-pathlock-tdnr-user-role-assignment-changes-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c76-32b460f3.md) |  |
| [Pathlock TDnR - Vendor Change Documents](../content/pathlock-tdnr-pathlock-tdnr-vendor-change-documents-2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c13-0d35f78e.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

