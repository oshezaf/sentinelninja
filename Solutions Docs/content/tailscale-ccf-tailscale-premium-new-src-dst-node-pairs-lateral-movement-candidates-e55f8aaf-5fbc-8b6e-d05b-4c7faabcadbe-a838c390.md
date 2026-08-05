# Tailscale Premium: New src->dst node pairs (lateral movement candidates)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies tailnet src->dst pairs observed in the last 24h that were NOT observed in the prior 7-day baseline. Useful for spotting lateral movement to nodes that don't usually talk.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Tailscale (CCF)](../solutions/tailscale-ccf.md) |
| **ID** | `e55f8aaf-5fbc-8b6e-d05b-4c7faabcadbe` |
| **Tactics** | LateralMovement, Discovery |
| **Techniques** | T1021, T1018 |
| **Required Connectors** | [TailscalePremiumCCF](../connectors/tailscalepremiumccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Hunting%20Queries/TailscalePremiumNewNodePairs.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Tailscale (CCF)](../solutions/tailscale-ccf.md)

