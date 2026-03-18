# SINECSecurityGuard_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (16 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SINECSecurityGuard_CL.json)

| Column Name | Type |
|:------------|:-----|
| destination_ip | string |
| destination_port | int |
| detected_at | datetime |
| evidence | dynamic |
| protocol | string |
| sensor_id | string |
| sensor_name | string |
| severity | string |
| signature_category | string |
| signature_details | string |
| signature_id | int |
| signature_name | string |
| source_ip | string |
| source_port | int |
| tenant_id | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [SINEC Security Guard](../solutions/sinec-security-guard.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SINEC Security Guard](../connectors/ssg.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [SINEC Security Guard](../solutions/sinec-security-guard.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [SSG_Security_Incidents](../content/sinec-security-guard-ssg-security-incidents-d41fa731-45a2-4b23-bb1d-29896fbc5298-8490c938.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

