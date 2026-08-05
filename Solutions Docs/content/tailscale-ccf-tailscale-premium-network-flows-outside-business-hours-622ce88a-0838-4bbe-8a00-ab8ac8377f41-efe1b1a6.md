# Tailscale Premium: Network flows outside business hours

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies network flows occurring outside 07:00-19:00 UTC on weekdays plus all weekend, over 7 days. Filters to virtual/subnet/exit traffic. Useful for spotting unattended automation gone wrong.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Tailscale (CCF)](../solutions/tailscale-ccf.md) |
| **ID** | `622ce88a-0838-4bbe-8a00-ab8ac8377f41` |
| **Tactics** | Exfiltration, CommandAndControl |
| **Techniques** | T1029, T1071 |
| **Required Connectors** | [TailscalePremiumCCF](../connectors/tailscalepremiumccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Hunting%20Queries/TailscalePremiumOffHoursFlows.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Tailscale (CCF)](../solutions/tailscale-ccf.md)

