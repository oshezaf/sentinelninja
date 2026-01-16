# Sign-ins from IPs that attempt sign-ins to disabled accounts

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies IPs with failed attempts to sign in to one or more disabled accounts signed in successfully to another account. This analytic will additionally identify the successful signed in accounts as the mapped account entities for investigation. References: https://docs.microsoft.com/azure/active-directory/reports-monitoring/reference-sign-ins-error-codes 50057 - User account is disabled. The account has been disabled by an administrator.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `53b6d42e-ff74-46a8-abee-ec72181f66ba` |
| **Severity** | Medium |
| **Tactics** | InitialAccess, Persistence |
| **Techniques** | T1078, T1098 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |

## Tables Used

This content item queries data from the following tables:

- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

