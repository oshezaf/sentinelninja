# VaronisAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (21 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/VaronisAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| Asset_s | string |
| AssetContainsFlaggedData_s | string |
| AssetContainsSensitiveData_s | string |
| Category | string |
| DeviceName_s | string |
| EventUTC_t | datetime |
| FileServerOrDomain_s | string |
| ID_g | string |
| IngestTime_t | datetime |
| Name_s | string |
| NumOfAlertedEvents_d | real |
| Platform_s | string |
| Query_s | string |
| SamAccountName_s | string |
| Severity_s | string |
| SeverityId_d | real |
| Status_s | string |
| StatusId_d | real |
| Time_t | datetime |
| TimeGenerated | datetime |
| UserName_s | string |

## Solutions (1)

This table is used by the following solutions:

- [VaronisSaaS](../solutions/varonissaas.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Varonis SaaS](../connectors/varonissaas.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [VaronisSaaS](../solutions/varonissaas.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [VaronisSaaS](../content/varonissaas-varonissaas-5667e619.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

