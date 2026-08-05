# Tailscale: Device Tailscale SSH newly enabled

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when Tailscale SSH is enabled on a device that previously did not have it. SSH provides authenticated shell access over the tailnet using Tailscale identity, broadening attack surface if unexpected. Verify and confirm the SSH ACL covers it.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Tailscale (CCF)](../solutions/tailscale-ccf.md) |
| **ID** | `f0a1b2c3-4567-8901-23de-f12345670041` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, LateralMovement |
| **Techniques** | T1021, T1098 |
| **Required Connectors** | [TailscaleCCF](../connectors/tailscaleccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Analytic%20Rules/TailscaleDeviceSshNewlyEnabled.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Tailscale (CCF)](../solutions/tailscale-ccf.md)

