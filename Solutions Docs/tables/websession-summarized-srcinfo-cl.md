# WebSession_Summarized_SrcInfo_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the [Web Session Essentials](../solutions/web-session-essentials.md) solution. It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (15 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/WebSession_Summarized_SrcInfo_CL.json)

| Column Name | Type |
|:------------|:-----|
| DstBytes_d | int |
| EventCount_d | int |
| EventProduct_s | string |
| EventResult_s | string |
| EventResultDetails_s | string |
| EventTime_t | datetime |
| EventType_s | string |
| EventVendor_s | string |
| HttpContentType_s | string |
| HttpRequestMethod_s | string |
| HttpUserAgent_s | string |
| NetworkApplicationProtocol_s | string |
| SrcBytes_d | int |
| TimeGenerated | datetime |
| UrlCategory_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Web Session Essentials](../solutions/web-session-essentials.md)

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect presence of uncommon user agents in web requests (ASIM Web Session)](../content/web-session-essentials-detect-presence-of-uncommon-user-agents-in-web-requests-asim-web-session-2d50d937-d7f2-4c05-b151-9af7f9ec747e-f39e98ed.md) |  |

### Workbooks (1)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [WebSessionEssentials](../content/web-session-essentials-websessionessentials-73073115.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

