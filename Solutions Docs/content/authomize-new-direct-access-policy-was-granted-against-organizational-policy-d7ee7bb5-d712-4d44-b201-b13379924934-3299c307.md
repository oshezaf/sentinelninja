# New direct access policy was granted against organizational policy

This policy detects when access was granted directly (not via groups). This policy is defined by default by Authomize to track AWS only. It is possible to edit the existing policy or create more versions to track other apps.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Authomize](../solutions/authomize.md) |
| **ID** | `d7ee7bb5-d712-4d44-b201-b13379924934` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, PrivilegeEscalation |
| **Techniques** | T1078, T1078 |
| **Required Connectors** | [Authomize](../connectors/authomize.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Authomize/Analytic%20Rules/New_direct_access_policy_was_granted.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Authomize_v2_CL`](../tables/authomize-v2-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Authomize](../solutions/authomize.md)

