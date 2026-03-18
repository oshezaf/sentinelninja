# DNS_Summarized_Logs_sourceInfo_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the [DNS Essentials](../solutions/dns-essentials.md) solution. It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (8 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/DNS_Summarized_Logs_sourceInfo_CL.json)

| Column Name | Type |
|:------------|:-----|
| count__d | int |
| DnsQueryTypeName_s | string |
| DvcHostname_s | string |
| EventProduct_s | string |
| EventSubType_s | string |
| EventTime_t | datetime |
| EventType_s | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [DNS Essentials](../solutions/dns-essentials.md)

---

## Content Items Using This Table (2)

### Workbooks (1)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DNSSolutionWorkbook](../content/dns-essentials-dnssolutionworkbook-9b8ac8e7.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

