# User without MFA

The policy detects user accounts without mutli-factor authentication

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Authomize](../solutions/authomize.md) |
| **ID** | `71a7b0de-f13d-44b9-9caa-668f1bad0ce6` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [Authomize](../connectors/authomize.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Authomize/Analytic%20Rules/User_without_MFA.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Authomize_v2_CL`](../tables/authomize-v2-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Authomize](../solutions/authomize.md)

