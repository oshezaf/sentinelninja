# SAPBTPAuditLog_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (11 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SAPBTPAuditLog_CL.json)

| Column Name | Type |
|:------------|:-----|
| AlsServiceId | string |
| Category | string |
| Message | dynamic |
| MessageUuid | string |
| OrgId | string |
| SpaceId | string |
| SubaccountName | string |
| Tenant | string |
| TimeGenerated | datetime |
| UpdatedOn | datetime |
| UserName | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [SAP BTP](../solutions/sap-btp.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SAP BTP](../connectors/sapbtpauditevents.md) |  |

---

## Content Items Using This Table (17)

### Analytic Rules (16)

**In solution [SAP BTP](../solutions/sap-btp.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [SAP BTP - Audit log service unavailable](../content/sap-btp-sap-btp-audit-log-service-unavailable-8a3b5c7d-9e1f-4a2b-8c6d-3e5f7a9b1c2d-59dbfe2c.md) |  |
| [SAP BTP - Build Work Zone unauthorized access and role tampering](../content/sap-btp-sap-btp-build-work-zone-unauthorized-access-and-role-tampering-8e5f3a2c-9d1b-4c6e-a7f8-3b2d1e0c9a5f-6a78fea6.md) |  |
| [SAP BTP - Cloud Identity Service application configuration monitor](../content/sap-btp-sap-btp-cloud-identity-service-application-configuration-monitor-3f8a2c5e-7b9d-4e1a-8f6c-2d4b9a1e3c7f-40dbddc8.md) |  |
| [SAP BTP - Cloud Integration JDBC data source changes](../content/sap-btp-sap-btp-cloud-integration-jdbc-data-source-changes-b2c3d4e5-6f7a-8b9c-0d1e-2f3a4b5c6d7e-19fed39d.md) |  |
| [SAP BTP - Cloud Integration access policy tampering](../content/sap-btp-sap-btp-cloud-integration-access-policy-tampering-9e6f4b2c-0d3e-5a8f-c9b7-2f5d8a1e4c6b-b2a65d94.md) |  |
| [SAP BTP - Cloud Integration artifact deployment](../content/sap-btp-sap-btp-cloud-integration-artifact-deployment-a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d-f66f50e2.md) |  |
| [SAP BTP - Cloud Integration package import or transport](../content/sap-btp-sap-btp-cloud-integration-package-import-or-transport-c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f-6a94c9be.md) |  |
| [SAP BTP - Cloud Integration tampering with security material](../content/sap-btp-sap-btp-cloud-integration-tampering-with-security-material-8d5f3a1b-9c2e-4f7d-b8a6-1e4c7f9d2b5a-5a633e0d.md) |  |
| [SAP BTP - Failed access attempts across multiple BAS subaccounts](../content/sap-btp-sap-btp-failed-access-attempts-across-multiple-bas-subaccounts-74b243a6-3046-48aa-8b03-e43b3c529cc1-c240bea2.md) |  |
| [SAP BTP - Malware detected in BAS dev space](../content/sap-btp-sap-btp-malware-detected-in-bas-dev-space-31997e9a-7447-47f3-8208-4f5d7efe497c-0069aa3f.md) |  |
| [SAP BTP - Mass user deletion in Cloud Identity Service](../content/sap-btp-sap-btp-mass-user-deletion-in-cloud-identity-service-a3b8e7c4-5f2d-4a1e-9c6b-8d7f3e2a1b0c-0fccee33.md) |  |
| [SAP BTP - Mass user deletion in a sub account](../content/sap-btp-sap-btp-mass-user-deletion-in-a-sub-account-6f1e58bd-cd95-4dfb-8883-94207f30929a-f868505a.md) |  |
| [SAP BTP - Trust and authorization Identity Provider monitor](../content/sap-btp-sap-btp-trust-and-authorization-identity-provider-monitor-62357c23-ecdc-4edc-9349-8338063af1ef-9cbceca7.md) |  |
| [SAP BTP - Unaudited custom app with login-only activity](../content/sap-btp-sap-btp-unaudited-custom-app-with-login-only-activity-5e8f2a1b-7c3d-4b9e-a6f0-1d2e3c4b5a6f-c689ff8c.md) |  |
| [SAP BTP - User added to Cloud Identity Service privileged Administrators list](../content/sap-btp-sap-btp-user-added-to-cloud-identity-service-privileged-administrators-list-7d4e9f2a-8b1c-4a5d-9e3f-6c2b1a0d8e7f-c3f4a14a.md) |  |
| [SAP BTP - User added to sensitive privileged role collection](../content/sap-btp-sap-btp-user-added-to-sensitive-privileged-role-collection-5acbe4cb-a379-4acc-9ad3-28dc48ad33d3-137fda25.md) |  |

### Workbooks (1)

**In solution [SAP BTP](../solutions/sap-btp.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SAPBTPActivity](../content/sap-btp-sapbtpactivity-8f5b3a2b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

