# SAP LogServ

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SAP |
| **Support Tier** | Partner |
| **Support Link** | [https://community.sap.com/t5/enterprise-resource-planning-blogs-by-sap/announcing-limited-preview-of-sap-logserv-integration-with-microsoft/ba-p/13942180](https://community.sap.com/t5/enterprise-resource-planning-blogs-by-sap/announcing-limited-preview-of-sap-logserv-integration-with-microsoft/ba-p/13942180) |
| **Categories** | domains |
| **First Published** | 2025-02-17 |
| **Last Updated** | 2025-07-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20LogServ](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20LogServ) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [SAP LogServ (RISE), S/4HANA Cloud private edition](../connectors/saplogserv.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SAPLogServ_CL`](../tables/saplogserv-cl.md) | [SAP LogServ (RISE), S/4HANA Cloud private edition](../connectors/saplogserv.md) | Analytics, Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [SAP LogServ - HANA DB - Assign Admin Authorizations](../content/sap-logserv-sap-logserv---hana-db---assign-admin-authorizations-4981469b-8618-43a7-b44c-5744594fa494.md) | High | PrivilegeEscalation | [`SAPLogServ_CL`](../tables/saplogserv-cl.md) |
| [SAP LogServ - HANA DB - Audit Trail Policy Changes](../content/sap-logserv-sap-logserv---hana-db---audit-trail-policy-changes-e8394afb-82a7-4718-8d31-cc57ad352fa8.md) | High | Persistence, LateralMovement, DefenseEvasion | [`SAPLogServ_CL`](../tables/saplogserv-cl.md) |
| [SAP LogServ - HANA DB - Deactivation of Audit Trail](../content/sap-logserv-sap-logserv---hana-db---deactivation-of-audit-trail-8fb9fb88-693f-4906-8be2-4bb9771418fc.md) | High | Persistence, LateralMovement, DefenseEvasion | [`SAPLogServ_CL`](../tables/saplogserv-cl.md) |
| [SAP LogServ - HANA DB - User Admin actions](../content/sap-logserv-sap-logserv---hana-db---user-admin-actions-a9e4b02a-5a8c-4c59-9836-a204d1028632.md) | High | PrivilegeEscalation | [`SAPLogServ_CL`](../tables/saplogserv-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SAPLogServObserve](../content/sap-logserv-saplogservobserve.md) | [`SAPLogServ_CL`](../tables/saplogserv-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.4       |  11-08-2025                    | Connector UI updates |
| 3.0.3       |  17-07-2025                    | Observability Workbook added |
| 3.0.2       |  25-06-2025                    | Analytic Rules for HANA DB added |
| 3.0.1       |  09-04-2025                    | Retention setting dropped from table to default to LogAnalytics ws default |
| 3.0.0       |  17-02-2025                    | Initial Solution Release |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
