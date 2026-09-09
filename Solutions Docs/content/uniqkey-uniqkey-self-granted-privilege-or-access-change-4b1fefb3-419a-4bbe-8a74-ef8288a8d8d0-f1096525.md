# Uniqkey - Self-granted privilege or access change

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies privilege, sharing or group-membership changes in Uniqkey where the actor and the target of the change are the same person. In a healthy administrative process, access changes are made by a different administrator, so a self-referential grant is a strong indicator of insider privilege escalation or a compromised administrator account expanding its own reach.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Uniqkey](../solutions/uniqkey.md) |
| **ID** | `4b1fefb3-419a-4bbe-8a74-ef8288a8d8d0` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation, Persistence |
| **Techniques** | T1078, T1098 |
| **Required Connectors** | [UniqkeyEventsConnector](../connectors/uniqkeyeventsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Uniqkey/Analytic%20Rules/Uniqkey%20-%20Self-granted%20privilege%20or%20access%20change.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`UniqkeyEvents_CL`](../tables/uniqkeyevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Uniqkey](../solutions/uniqkey.md)

