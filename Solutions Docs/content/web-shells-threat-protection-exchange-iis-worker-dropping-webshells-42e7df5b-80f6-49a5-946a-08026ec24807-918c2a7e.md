# Exchange IIS Worker Dropping Webshells

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query checks for the IIS worker process dropping files that resemble web shells and other artifacts seen in known attacks. Reference: https://msrc-blog.microsoft.com/2021/03/02/multiple-security-updates-released-for-exchange-server

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md) |
| **ID** | `42e7df5b-80f6-49a5-946a-08026ec24807` |
| **Tactics** | Execution, Persistence |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Shells%20Threat%20Protection/Hunting%20Queries/exchange-iis-worker-dropping-webshell.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DeviceFileEvents`](../tables/devicefileevents.md) | `FolderPath !endswith ".ini"`<br>`FolderPath !endswith ".js"`<br>`FolderPath !endswith ".json"`<br>`FolderPath !endswith ".log"`<br>`FolderPath !endswith ".tmp"`<br>`FolderPath !endswith ".vb"`<br>`FolderPath !endswith ".xml"`<br>`FolderPath has_any "\\wwwroot\\"`<br>`InitiatingProcessCommandLine contains "MSExchange"`<br>`InitiatingProcessFileName == "w3wp.exe"` | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)

