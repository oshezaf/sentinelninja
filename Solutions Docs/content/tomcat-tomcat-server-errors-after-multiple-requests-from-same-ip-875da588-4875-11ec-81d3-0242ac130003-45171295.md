# Tomcat - Server errors after multiple requests from same IP

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects server errors after multiple requests from same IP address.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Tomcat](../solutions/tomcat.md) |
| **ID** | `875da588-4875-11ec-81d3-0242ac130003` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact, InitialAccess |
| **Techniques** | T1498, T1190, T1133 |
| **Required Connectors** | [CustomLogsAma](../connectors/customlogsama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tomcat/Analytic%20Rules/TomcatServerErrorsAfterMultipleRequestsFromSameIP.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Tomcat_CL`](../tables/tomcat-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Tomcat](../solutions/tomcat.md)

