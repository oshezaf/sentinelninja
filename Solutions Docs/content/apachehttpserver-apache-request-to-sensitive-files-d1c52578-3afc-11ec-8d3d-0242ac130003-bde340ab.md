# Apache - Request to sensitive files

Detects request to sensitive files.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ApacheHTTPServer](../solutions/apachehttpserver.md) |
| **ID** | `d1c52578-3afc-11ec-8d3d-0242ac130003` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1189 |
| **Required Connectors** | [CustomLogsAma](../connectors/customlogsama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ApacheHTTPServer/Analytic%20Rules/ApacheRequestToSensitiveFiles.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ApacheHTTPServer](../solutions/apachehttpserver.md)

