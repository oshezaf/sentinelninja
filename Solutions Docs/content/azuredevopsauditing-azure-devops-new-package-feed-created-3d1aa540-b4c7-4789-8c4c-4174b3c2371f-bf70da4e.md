# Azure DevOps - New Package Feed Created

This query identifies users who created new package feed to Azure DevOps pipelines, having no prior history of feed creation, suggesting possible unauthorized activity and requiring verification.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `3d1aa540-b4c7-4789-8c4c-4174b3c2371f` |
| **Tactics** | InitialAccess |
| **Techniques** | T1195 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Hunting%20Queries/ADONewPackageFeedCreated.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

