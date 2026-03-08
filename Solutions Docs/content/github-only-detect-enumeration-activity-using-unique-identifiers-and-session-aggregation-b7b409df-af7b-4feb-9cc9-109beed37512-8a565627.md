# Detect Enumeration Activity Using Unique Identifiers and Session Aggregation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

"This Kusto (KQL) hunting query detects blob-enumeration or file-spraying behaviour in Azure Storage by:   - Aggregating requests into time-bound sessions with row_window_session().   - Defining a "user" as the combination of AccountName | UserAgentHeader, which is tolerant of rapid IP rotation.   - Raising an alert when, within any single session:   - The actor touches at least 10 distinct objects, and   - At least 50 % of those requests return an HTTP 4xx/5xx status, and   - Each object is acc

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `b7b409df-af7b-4feb-9cc9-109beed37512` |
| **Tactics** | Reconnaissance, Collection |
| **Techniques** | T1595, T1530 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AzureStorage/AzureStorageEnumerationPerUserSessino.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Hunting Queries](hunting-queries.md)

