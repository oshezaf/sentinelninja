# Storage Alerts Correlation with CommonSecurityLogs & AuditLogs

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query combines different Storage alerts with CommonSecurityLogs and AuditLogs helping analysts investigate any possible storage related attacks faster  thus reducing Mean Time To Respond

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `860a8df2-8d19-4c60-bf61-de1c02422797` |
| **Tactics** | InitialAccess, Impact |
| **Techniques** | T1190, T1078 |
| **Required Connectors** | [AzureSecurityCenter](../connectors/azuresecuritycenter.md), [Fortinet](../connectors/fortinet.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Event Vendor** | Fortinet |

## Tables Used

This content item queries data from the following tables:

- [`AuditLogs`](../tables/auditlogs.md)
- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

