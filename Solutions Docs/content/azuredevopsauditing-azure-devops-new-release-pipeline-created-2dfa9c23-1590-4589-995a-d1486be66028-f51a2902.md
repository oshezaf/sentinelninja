# Azure DevOps - New Release Pipeline Created

This query identifies users who created new package feed to Azure DevOps pipelines, having no prior history of feed creation, suggesting possible unauthorized activity and requiring verification.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `2dfa9c23-1590-4589-995a-d1486be66028` |
| **Tactics** | Persistence, Execution, PrivilegeEscalation |
| **Techniques** | T1053 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Hunting%20Queries/ADOReleasePipelineCreated.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
