# StealthTalk - Brute force followed by suspicious access

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies credential-stuffing or brute-force success: a MultiFailLogin event with 9+ failed attempts followed within 2 hours by a GeoAnomalyLogin or NewDeviceLogin for the same user - the closest proxy for "the brute-force eventually succeeded".

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [StealthTalk](../solutions/stealthtalk.md) |
| **ID** | `e3f6a9b4-ad5c-4e8f-9a7b-4c3d5e6f7a8b` |
| **Tactics** | CredentialAccess, InitialAccess |
| **Techniques** | T1110, T1078 |
| **Required Connectors** | [StealthTalkAnomalousAuth](../connectors/stealthtalkanomalousauth.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StealthTalk/Hunting%20Queries/BruteForceFollowedBySuspicious.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to StealthTalk](../solutions/stealthtalk.md)

