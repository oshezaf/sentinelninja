# ateral Movement Risk - Role Chain Length

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

detects chains of more than 3 roles in the account, this is a misconfiguration that can enable lateral movement.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Authomize](../solutions/authomize.md) |
| **ID** | `bf03796a-3ed7-440f-bfc3-0c702cf762a9` |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1089 |
| **Required Connectors** | [Authomize](../connectors/authomize.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Authomize/Hunting%20Queries/Chain_of_3_or_more_roles.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) | — | — |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Authomize](../solutions/authomize.md)

