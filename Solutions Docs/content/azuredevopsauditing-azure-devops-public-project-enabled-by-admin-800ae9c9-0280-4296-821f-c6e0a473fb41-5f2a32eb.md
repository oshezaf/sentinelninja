# Azure DevOps- Public project enabled by admin

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query identifies Azure DevOps activities where organization public projects policy enabled by the admin

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `800ae9c9-0280-4296-821f-c6e0a473fb41` |
| **Tactics** | Persistence, DefenseEvasion |
| **Techniques** | T1098, T1562 |
| **Required Connectors** | [AzureMonitor](../connectors/azuremonitor.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Hunting%20Queries/Public%20Projects%20enabled.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ADOAuditLogs_CL`](../tables/adoauditlogs-cl.md)
- [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)

