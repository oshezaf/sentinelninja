# StealthTalk - Impossible travel

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a single StealthTalk user authenticating from two different countries within a 30-minute window. Legitimate physical travel between countries cannot occur on that timescale, so this is a strong indicator of stolen credentials.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [StealthTalk](../solutions/stealthtalk.md) |
| **ID** | `c1d4e7f2-8b3a-4c6d-9e5f-2a1b3c4d5e6f` |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [StealthTalkAnomalousAuth](../connectors/stealthtalkanomalousauth.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StealthTalk/Hunting%20Queries/ImpossibleTravel.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to StealthTalk](../solutions/stealthtalk.md)

