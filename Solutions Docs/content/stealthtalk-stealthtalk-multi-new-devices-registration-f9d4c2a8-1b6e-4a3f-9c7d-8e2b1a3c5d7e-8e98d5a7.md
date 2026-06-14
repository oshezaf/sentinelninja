# StealthTalk - Multi new devices registration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a single StealthTalk user registering two or more previously-unseen devices within a 24-hour window. Sudden registration of multiple new devices is a strong indicator of account takeover (an attacker enrolling their own device after credential theft) or device-farm abuse.  The rule fires when a user produces two or more distinct NewDeviceId values within the lookback window, regardless of operating system. Look at the OSList custom detail to spot cross-platform patterns (e.g. an iOS-o

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [StealthTalk](../solutions/stealthtalk.md) |
| **ID** | `f9d4c2a8-1b6e-4a3f-9c7d-8e2b1a3c5d7e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, InitialAccess, DefenseEvasion |
| **Techniques** | T1078, T1098 |
| **Required Connectors** | [StealthTalkAnomalousAuth](../connectors/stealthtalkanomalousauth.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StealthTalk/Analytic%20Rules/MultiNewDevicesRegistration.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to StealthTalk](../solutions/stealthtalk.md)

