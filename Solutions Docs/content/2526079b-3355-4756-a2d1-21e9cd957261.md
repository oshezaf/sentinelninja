# AWS role with shadow admin privileges

The policy detect the creation of new AWS roles with shadow admin privileges. The policy configuration allows limiting the policy to specific accounts.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Authomize](../solutions/authomize.md) |
| **ID** | `2526079b-3355-4756-a2d1-21e9cd957261` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [Authomize](../connectors/authomize.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Authomize/Analytic%20Rules/AWS_role_with_shadow_admin_privileges.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Authomize_v2_CL`](../tables/authomize-v2-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Authomize](../solutions/authomize.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
