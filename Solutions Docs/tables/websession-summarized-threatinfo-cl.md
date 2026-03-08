# WebSession_Summarized_ThreatInfo_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the [Web Session Essentials](../solutions/web-session-essentials.md) solution. It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/WebSession_Summarized_ThreatInfo_CL.json)

| Column Name | Type |
|:------------|:-----|
| DestDomain_s | string |
| DstIpAddr_s | string |
| EventCount_d | string |
| EventResult_s | string |
| EventSeverity_s | string |
| EventTime_t | datetime |
| SrcIpAddr_s | string |
| SrcUsername_s | string |
| ThreatCategory_s | string |
| ThreatField_s | string |
| ThreatName_s | string |
| ThreatOriginalConfidence_d | int |
| ThreatRiskLevel_d | int |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Web Session Essentials](../solutions/web-session-essentials.md)

---

## Content Items Using This Table (2)

### Workbooks (1)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [WebSessionEssentials](../content/web-session-essentials-websessionessentials-73073115.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

