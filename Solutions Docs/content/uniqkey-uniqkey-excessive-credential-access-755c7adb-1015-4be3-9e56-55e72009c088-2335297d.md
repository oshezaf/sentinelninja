# Uniqkey - Excessive credential access

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects an actor reading an abnormally large number of credentials from Uniqkey within a single hour (default threshold: more than 50 access events). Bulk credential reads are rarely part of normal daily work and can indicate a compromised session harvesting secrets, or an insider collecting credentials ahead of departure. Tune the threshold to your organization's baseline, and consider a lower threshold for actors of type scim or system that normally never read credentials interactively.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Uniqkey](../solutions/uniqkey.md) |
| **ID** | `755c7adb-1015-4be3-9e56-55e72009c088` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1555 |
| **Required Connectors** | [UniqkeyEventsConnector](../connectors/uniqkeyeventsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Uniqkey/Analytic%20Rules/Uniqkey%20-%20Excessive%20credential%20access.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Uniqkey](../solutions/uniqkey.md)

