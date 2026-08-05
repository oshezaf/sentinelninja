# Tailscale: Devices with outdated client version

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies tailnet devices that report UpdateAvailable=true on the latest snapshot. Tailscale releases security updates regularly; outdated clients lack the most recent improvements.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Tailscale (CCF)](../solutions/tailscale-ccf.md) |
| **ID** | `e5f6a7b8-9012-3456-7890-123456780046` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [TailscaleCCF](../connectors/tailscaleccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Hunting%20Queries/TailscaleOutdatedClients.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Tailscale (CCF)](../solutions/tailscale-ccf.md)

