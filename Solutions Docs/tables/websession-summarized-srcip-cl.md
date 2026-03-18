# WebSession_Summarized_SrcIP_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the [Web Session Essentials](../solutions/web-session-essentials.md) solution. It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/WebSession_Summarized_SrcIP_CL.json)

| Column Name | Type |
|:------------|:-----|
| DestDomain_s | string |
| DstBytes_d | int |
| DstIPIsPrivate_b | bool |
| EventCount_d | int |
| EventProduct_s | string |
| EventResult_s | string |
| EventResultDetails_s | string |
| EventTime_t | datetime |
| EventType_s | string |
| SrcBytes_d | int |
| SrcHostname_s | string |
| SrcIpAddr_s | string |
| SrcUsername_s | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Web Session Essentials](../solutions/web-session-essentials.md)

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Detect unauthorized data transfers using timeseries anomaly (ASIM Web Session)](../content/web-session-essentials-detect-unauthorized-data-transfers-using-timeseries-anomaly-asim-web-session-5965d3e7-8ed0-477c-9b42-e75d9237fab0-8fc606c8.md) |  |

### Workbooks (1)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [WebSessionEssentials](../content/web-session-essentials-websessionessentials-73073115.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

