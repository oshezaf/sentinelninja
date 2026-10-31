# Netskope Client - Private Access disabled by user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects Netskope Client devices where the user disabled the Netskope Private Access (NPA) service. All matching client-status events in the 6-hour window are collected into a single alert, grouped per device, so repeated disable events on the same device are reported once. A user disabling Private Access removes zero-trust access controls from the device.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Netskopev2](../solutions/netskopev2.md) |
| **ID** | `8c1f6a2e-4b7d-4e3a-9f21-5d0c7b9e6a41` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [NetskopeClientStatus](../connectors/netskopeclientstatus.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Analytic%20Rules/NetskopeClientStatus_PrivateAccessDisabledByUser.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeClientStatus_CL`](../tables/netskopeclientstatus-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Netskopev2](../solutions/netskopev2.md)

