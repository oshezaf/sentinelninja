# 1Password - User added to privileged group

This will alert when a user is added to a privileged group which has been implemented by an actor that was not the target user account. Once the analytics rule is triggered it will group all related future alerts for upto 30 minutes when all related entities are the same.  Ref: https://1password.com/ Ref: https://github.com/securehats/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [1Password](../solutions/1password.md) |
| **ID** | `849ea271-cd9c-4afe-a13b-ddbbac5fc6d3` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [1Password](../connectors/1password.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password/Analytics%20Rules/1Password%20-%20User%20added%20to%20privileged%20group.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to 1Password](../solutions/1password.md)

