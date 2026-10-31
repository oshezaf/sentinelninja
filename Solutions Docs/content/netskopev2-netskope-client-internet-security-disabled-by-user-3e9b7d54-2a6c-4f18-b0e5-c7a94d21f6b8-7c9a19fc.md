# Netskope Client - Internet Security disabled by user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects Netskope Client devices where the user disabled the Netskope Internet Security (secure web gateway / CASB steering) service. All matching client-status events in the 6-hour window are collected into a single alert, grouped per device, so repeated disable events on the same device are reported once. A user disabling Internet Security bypasses web, threat and data protection policies for that device.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Netskopev2](../solutions/netskopev2.md) |
| **ID** | `3e9b7d54-2a6c-4f18-b0e5-c7a94d21f6b8` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [NetskopeClientStatus](../connectors/netskopeclientstatus.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Analytic%20Rules/NetskopeClientStatus_InternetSecurityDisabledByUser.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeClientStatus_CL`](../tables/netskopeclientstatus-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Netskopev2](../solutions/netskopev2.md)

