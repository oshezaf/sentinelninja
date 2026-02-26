# SAPLogServ_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (14 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20LogServ/Data%20Connectors/SAPLogServ_PUSH_CCP/SAPLogServ_DCR.json)

| Column Name | Type |
|:------------|:-----|
| _raw | string |
| _time | real |
| clz_dir | string |
| clz_subdir | string |
| cribl_breaker | string |
| cribl_pipe | string |
| host | string |
| index | string |
| region | string |
| source | string |
| sourcetype | string |
| test | dynamic |
| test1 | dynamic |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [SAP LogServ](../solutions/sap-logserv.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SAP LogServ (RISE), S/4HANA Cloud private edition](../connectors/saplogserv.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (4)

**In solution [SAP LogServ](../solutions/sap-logserv.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SAP LogServ - HANA DB - Assign Admin Authorizations](../content/sap-logserv-sap-logserv-hana-db-assign-admin-authorizations-4981469b-8618-43a7-b44c-5744594fa494-5de53ca7.md) |  |
| [SAP LogServ - HANA DB - Audit Trail Policy Changes](../content/sap-logserv-sap-logserv-hana-db-audit-trail-policy-changes-e8394afb-82a7-4718-8d31-cc57ad352fa8-98541953.md) |  |
| [SAP LogServ - HANA DB - Deactivation of Audit Trail](../content/sap-logserv-sap-logserv-hana-db-deactivation-of-audit-trail-8fb9fb88-693f-4906-8be2-4bb9771418fc-6f2dd94f.md) |  |
| [SAP LogServ - HANA DB - User Admin actions](../content/sap-logserv-sap-logserv-hana-db-user-admin-actions-a9e4b02a-5a8c-4c59-9836-a204d1028632-72af1011.md) |  |

### Workbooks (1)

**In solution [SAP LogServ](../solutions/sap-logserv.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SAPLogServObserve](../content/sap-logserv-saplogservobserve-6fc88ed2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

