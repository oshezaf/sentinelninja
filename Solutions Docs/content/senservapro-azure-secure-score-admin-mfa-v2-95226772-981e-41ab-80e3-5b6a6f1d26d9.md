# Azure secure score admin MFA V2

This query searches for requiring multi-factor authentication (MFA) for all administrative roles makes it harder  for attackers to access accounts. Administrative roles have higher permissions than typical users.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SenservaPro](../solutions/senservapro.md) |
| **ID** | `95226772-981E-41AB-80E3-5B6A6F1D26D9` |
| **Tactics** | Impact |
| **Techniques** | T1529, T1498 |
| **Required Connectors** | [SenservaPro](../connectors/senservapro.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro/Hunting%20Queries/AzureSecureScoreAdminMFAV2.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SenservaPro_CL`](../tables/senservapro-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to SenservaPro](../solutions/senservapro.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
