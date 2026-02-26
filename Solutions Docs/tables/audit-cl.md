# Audit_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (7 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Mimecast_Audit_CL.json)

| Column Name | Type |
|:------------|:-----|
| auditType | string |
| category | string |
| eventInfo | string |
| eventTime | datetime |
| id | string |
| TimeGenerated | datetime |
| user | string |

## Solutions (1)

This table is used by the following solutions:

- [Mimecast](../solutions/mimecast.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Mimecast Audit](../connectors/mimecastauditapi.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Mimecast](../solutions/mimecast.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast Audit - Logon Authentication Failed](../content/mimecast-mimecast-audit-logon-authentication-failed-f00197ab-491f-41e7-9e22-a7003a4c1e54-34f15bb0.md) |  |

### Workbooks (1)

**In solution [Mimecast](../solutions/mimecast.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast_Audit_Workbook](../content/mimecast-mimecast-audit-workbook-2c0dd88f.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MimecastAudit](../parsers/mimecastaudit.md) | [Mimecast](../solutions/mimecast.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

