# Vectra Create Incident Based on Priority for Accounts

Create an incident when an identity is suspected to be compromised. Vectra is using AI to prioritize an entity based on multiple factors (attack rating, velocity, breadth, importance.etc.). This layer of aggregation at the entity level provides a greater signal-to-noise ratio and help analyst focus on what matters.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **ID** | `af6f2812-0187-4cc9-822a-952f8b5b6b7e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1546 |
| **Required Connectors** | [VectraXDR](../connectors/vectraxdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Analytic%20Rules/Priority_Account.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Entities_Data_CL`](../tables/entities-data-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Vectra XDR](../solutions/vectra-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
