# Corelight - Multiple files sent over HTTP with abnormal requests

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects sources sending multiple compressed files greater than 10MBs sent over HTTP in a short amount of time.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Corelight](../solutions/corelight.md) |
| **ID** | `7226d37b-50ee-4e3b-9f80-5b74080d8f2c` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1030 |
| **Required Connectors** | [Corelight](../connectors/corelight.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Corelight/Analytic%20Rules/CorelightMultipleFilesSentOverHTTPAbnormalRequests.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Corelight_v2_http2_CL`](../tables/corelight-v2-http2-cl.md)
- [`Corelight_v2_http_CL`](../tables/corelight-v2-http-cl.md)
- [`Corelight_v2_http_red_CL`](../tables/corelight-v2-http-red-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Corelight](../solutions/corelight.md)

