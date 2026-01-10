# Admin SaaS account detected

detects internal admins accounts, it's recommended to review any new administrative permission.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Authomize](../solutions/authomize.md) |
| **ID** | `b3430fb5-78aa-4729-8595-f66c06138478` |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1089 |
| **Required Connectors** | [Authomize](../connectors/authomize.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Authomize/Hunting%20Queries/Admin_SaaS_account_detected.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Authomize_v2_CL`](../tables/authomize-v2-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Authomize](../solutions/authomize.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

