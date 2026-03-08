# Corelight - Possible Webshell

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detects post requests to unusual extensions.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Corelight](../solutions/corelight.md) |
| **ID** | `f3245aa1-1ca1-471c-a0b7-97ea6b791d5d` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1505 |
| **Required Connectors** | [Corelight](../connectors/corelight.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Corelight/Analytic%20Rules/CorelightPossibleWebshell.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Corelight_v2_http2_CL`](../tables/corelight-v2-http2-cl.md) 🔶 | ? | ✓ | ? |
| [`Corelight_v2_http_CL`](../tables/corelight-v2-http-cl.md) 🔶 | ? | ✓ | ? |
| [`Corelight_v2_http_red_CL`](../tables/corelight-v2-http-red-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Corelight](../solutions/corelight.md)

