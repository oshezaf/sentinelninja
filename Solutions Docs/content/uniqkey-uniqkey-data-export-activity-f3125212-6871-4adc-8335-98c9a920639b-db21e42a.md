# Uniqkey - Data export activity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects export of credential or vault data from the Uniqkey organization. Exports are legitimate for backup and migration scenarios, but they move secrets outside the platform's protection and are the primary exfiltration vector for a password manager, so each occurrence is raised as its own alert for review. If scheduled exports by known administrative or service accounts create noise, exclude those actors in the query.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Uniqkey](../solutions/uniqkey.md) |
| **ID** | `f3125212-6871-4adc-8335-98c9a920639b` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Exfiltration |
| **Techniques** | T1555 |
| **Required Connectors** | [UniqkeyEventsConnector](../connectors/uniqkeyeventsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Uniqkey/Analytic%20Rules/Uniqkey%20-%20Data%20export%20activity.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Uniqkey](../solutions/uniqkey.md)

