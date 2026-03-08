# Corelight - External Proxy Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detects external proxy usage.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Corelight](../solutions/corelight.md) |
| **ID** | `05850746-9ae4-412f-838b-844f0903f4a9` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, CommandAndControl |
| **Techniques** | T1090 |
| **Required Connectors** | [Corelight](../connectors/corelight.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Corelight/Analytic%20Rules/CorelightExternalProxyDetected.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Corelight_v2_http2_CL`](../tables/corelight-v2-http2-cl.md) 🔶 | ? | ✓ | ? |
| [`Corelight_v2_http_CL`](../tables/corelight-v2-http-cl.md) 🔶 | ? | ✓ | ? |
| [`Corelight_v2_http_red_CL`](../tables/corelight-v2-http-red-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Corelight](../solutions/corelight.md)

