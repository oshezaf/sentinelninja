# Cross-service Azure Data Explorer queries

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Under specific circumstances, executing KQL queries can exfiltrate information like access tokens, regarding external data functions like adx(). This query tries to list executed KQL queries that used the adx() function and where an access token might have been exposed to. Ref: https://docs.microsoft.com/azure/azure-monitor/logs/azure-monitor-data-explorer-proxy Ref: https://securecloud.blog/2022/04/27/azure-monitor-malicious-kql-query/

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `58b17f82-f594-4d36-9b78-4e4b03992708` |
| **Tactics** | Exfiltration |
| **Techniques** | T1567 |
| **Required Connectors** | [AzureMonitor(Query Audit)](../connectors/azuremonitor-query-audit.md) |

## Tables Used

This content item queries data from the following tables:

- [`LAQueryLogs`](../tables/laquerylogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

