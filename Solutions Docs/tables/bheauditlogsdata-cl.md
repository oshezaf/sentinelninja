# BHEAuditLogsData_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (12 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BHEAuditLogsData_CL.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| actor_email | string |
| actor_id | string |
| actor_name | string |
| commit_id | string |
| created_at | datetime |
| fields | dynamic |
| id | int |
| request_id | string |
| source_ip_address | string |
| status | string |
| tenant_url | string |

## Solutions (1)

This table is used by the following solutions:

- [BloodHound Enterprise](../solutions/bloodhound-enterprise.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [BloodHound Enterprise](../solutions/bloodhound-enterprise.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [BloodHoundEnterpriseAuditLogs](../content/bloodhound-enterprise-bloodhoundenterpriseauditlogs-22043cee.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

