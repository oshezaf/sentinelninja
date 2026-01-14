# 1Password - Disable MFA factor or type for all user accounts

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This will alert when the MFA factor or type for all user accounts are disabled. Once this analytics rule is triggered it will group all related future alerts for upto an hour when all related entities are the same.  Ref: https://1password.com/ Ref: https://github.com/securehats/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [1Password](../solutions/1password.md) |
| **ID** | `92ab0938-1e7c-4671-9810-392e8b9714da` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1556 |
| **Required Connectors** | [1Password](../connectors/1password.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password/Analytics%20Rules/1Password%20-%20Disable%20MFA%20factor%20or%20type%20for%20all%20user%20accounts.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to 1Password](../solutions/1password.md)

