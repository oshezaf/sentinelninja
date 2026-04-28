# DynatraceAuditLogsV2_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (11 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace%5CData%20Connectors%5CDynatraceAuditLogsV2/Connector_Dynatrace_AuditLogs_table.json)

| Column Name | Type |
|:------------|:-----|
| category | string |
| entityId | string |
| environmentId | string |
| eventType | string |
| logId | string |
| patch | dynamic |
| success | bool |
| TimeGenerated | datetime |
| user | string |
| userOrigin | string |
| userType | string |

## Solutions (1)

This table is used by the following solutions:

- [Dynatrace](../solutions/dynatrace.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Dynatrace Audit Logs V1](../connectors/dynatraceauditlogs.md) |  |
| [Dynatrace Audit Logs V2](../connectors/dynatraceauditlogsccpdefinition.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Dynatrace](../solutions/dynatrace.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Dynatrace](../content/dynatrace-dynatrace-eddf4fe2.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [DynatraceAuditLogs](../parsers/dynatraceauditlogs.md) | [Dynatrace](../solutions/dynatrace.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

