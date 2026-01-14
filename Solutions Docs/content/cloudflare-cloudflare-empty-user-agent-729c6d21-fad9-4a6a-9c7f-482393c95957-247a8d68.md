# Cloudflare - Empty user agent

Detects requests where user agent is empty.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cloudflare](../solutions/cloudflare.md) |
| **ID** | `729c6d21-fad9-4a6a-9c7f-482393c95957` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190, T1133 |
| **Required Connectors** | [CloudflareDataConnector](../connectors/cloudflaredataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare/Analytic%20Rules/CloudflareEmptyUA.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)
- [`Cloudflare_CL`](../tables/cloudflare-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cloudflare](../solutions/cloudflare.md)

