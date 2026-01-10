# Service principal not using client credentials

This query searches for an service principal is not using a client certificate or secret is not secure.   It is recommended that you review your needs and use an Authentication method   for sign-in.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SenservaPro](../solutions/senservapro.md) |
| **ID** | `B604620B-0D87-4FFD-BE2E-7E40E81CE559` |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [SenservaPro](../connectors/senservapro.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro/Hunting%20Queries/ServicePrincipalNotUsingClientCredentials.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SenservaPro_CL`](../tables/senservapro-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to SenservaPro](../solutions/senservapro.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

