# Azure secure score one admin

This query searches for having 1 Global Administrator reduces the surface area of attack for your Azure tenant,   but sets up a single point of failure for the whole tenant. Global Administrators have access  to all aspects of Azure

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SenservaPro](../solutions/senservapro.md) |
| **ID** | `27982ECB-493E-4DAE-BB21-6F0B77B25526` |
| **Tactics** | Impact |
| **Techniques** | T1529 |
| **Required Connectors** | [SenservaPro](../connectors/senservapro.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro/Hunting%20Queries/AzureSecureScoreOneAdmin.yaml) |

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
