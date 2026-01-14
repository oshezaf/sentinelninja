# NGINX - Multiple user agents for single source

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects requests with different user agents from one source in short timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NGINX HTTP Server](../solutions/nginx-http-server.md) |
| **ID** | `83a0b48f-1cb7-4b4f-a018-23c3203a239b` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190, T1133 |
| **Required Connectors** | [CustomLogsAma](../connectors/customlogsama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NGINX%20HTTP%20Server/Analytic%20Rules/NGINXDifferentUAsFromSingleIP.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`NGINX_CL`](../tables/nginx-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to NGINX HTTP Server](../solutions/nginx-http-server.md)

