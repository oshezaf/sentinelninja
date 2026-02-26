# MimecastAudit_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (13 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/MimecastAudit_CL.json)

| Column Name | Type |
|:------------|:-----|
| app_s | string |
| auditType_s | string |
| category_s | string |
| eventInfo_s | string |
| eventTime_d | datetime |
| id_s | string |
| method_s | string |
| mimecastEventCategory_s | string |
| mimecastEventId_s | string |
| src_s | string |
| time_generated | datetime |
| TimeGenerated | datetime |
| user_s | string |

## Solutions (1)

This table is used by the following solutions:

- [MimecastAudit](../solutions/mimecastaudit.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Mimecast Audit & Authentication](../connectors/mimecastauditapi.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [MimecastAudit](../solutions/mimecastaudit.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast Audit - Logon Authentication Failed](../content/mimecastaudit-mimecast-audit-logon-authentication-failed-9c5dcd76-9f6d-42a3-b984-314b52678f20-1b9e93dc.md) |  |

### Workbooks (1)

**In solution [MimecastAudit](../solutions/mimecastaudit.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MimecastAudit](../content/mimecastaudit-mimecastaudit-98d680e6.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

