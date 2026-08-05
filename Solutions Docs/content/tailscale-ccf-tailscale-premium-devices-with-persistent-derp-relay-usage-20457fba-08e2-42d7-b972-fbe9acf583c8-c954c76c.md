# Tailscale Premium: Devices with persistent DERP relay usage

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies devices that have consistently fallen back to DERP relay (IsRelayed=true) over the past 24 hours. Sustained relay usage points to NAT/firewall misconfiguration or deliberate evasion.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Tailscale (CCF)](../solutions/tailscale-ccf.md) |
| **ID** | `20457fba-08e2-42d7-b972-fbe9acf583c8` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1572 |
| **Required Connectors** | [TailscalePremiumCCF](../connectors/tailscalepremiumccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Hunting%20Queries/TailscalePremiumDerpRelayPersistence.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Tailscale (CCF)](../solutions/tailscale-ccf.md)

