# Methods for Downloading Files with PowerShell

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies PowerShell downloading files from external sources, a common malware delivery technique. Covers Invoke-WebRequest, Invoke-RestMethod and Start-BitsTransfer, the curl and wget aliases, and .NET classes System.Net.WebClient and HttpClient.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Intel471](../solutions/intel471.md) |
| **ID** | `c7b320fb-ac67-45b0-92c4-b0f1e10b4e46` |
| **Tactics** | CommandAndControl, Execution |
| **Techniques** | T1059.001, T1105 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Intel471/Hunting%20Queries/methods-for-downloading-files-with-powershell.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SecurityEvent`](../tables/securityevent.md) | `CommandLine has_any "Invoke-WebRequest"`<br>`NewProcessName has_any "powershell.exe"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Intel471](../solutions/intel471.md)

