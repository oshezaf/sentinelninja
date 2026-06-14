# StealthTalk - Login outside work zone

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a single StealthTalk authentication originating from a country or city that does not match the user's assigned (expected) geographic zone. Each individual mismatch is treated as an incident - there is no aggregation threshold, since a single login from an unexpected country is high-confidence evidence of a credential issue.  An incident fires when LoginCountry differs from AssignedCountry OR LoginCity differs from AssignedCity. Source IPv4, raw event ID, and both the observed and expe

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [StealthTalk](../solutions/stealthtalk.md) |
| **ID** | `a7c3e9b1-4f5d-4e2a-9b8c-1d2e3f4a5b6c` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, DefenseEvasion, CredentialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [StealthTalkAnomalousAuth](../connectors/stealthtalkanomalousauth.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StealthTalk/Analytic%20Rules/LoginOutsideWorkZone.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to StealthTalk](../solutions/stealthtalk.md)

