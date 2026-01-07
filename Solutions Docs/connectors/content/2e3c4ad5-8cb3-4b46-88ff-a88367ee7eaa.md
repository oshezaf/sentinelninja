# Password Exfiltration over SCIM application

This rule detects suspicious sync events that occurred to applications using SCIM for user provisioning.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Authomize](../solutions/authomize.md) |
| **ID** | `2e3c4ad5-8cb3-4b46-88ff-a88367ee7eaa` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, InitialAccess |
| **Techniques** | T1555, T1040, T1552 |
| **Required Connectors** | [Authomize](../connectors/authomize.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Authomize/Analytic%20Rules/Password_Exfiltration_over_SCIM.yaml) |

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
