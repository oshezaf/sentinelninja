# StealthTalk - After hours work

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies systematic off-hours activity for a single StealthTalk user - repeated authentications outside the user's configured working hours OR on weekends, observed across at least two distinct calendar days within a 48-hour window. The pattern is a common indicator of credential misuse, insider threat, or compromise of the account by an attacker operating in a different timezone.  An "off-hours event" is one where IsWeekend=true OR DeviationMinutes >= 180 (i.e. >= 3 hours after the configured

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [StealthTalk](../solutions/stealthtalk.md) |
| **ID** | `e3a8b2f1-5c7d-4d89-9b6e-0f1a2c3d4e5f` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, DefenseEvasion, Persistence |
| **Techniques** | T1078 |
| **Required Connectors** | [StealthTalkAnomalousAuth](../connectors/stealthtalkanomalousauth.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StealthTalk/Analytic%20Rules/AfterHoursWork.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to StealthTalk](../solutions/stealthtalk.md)

