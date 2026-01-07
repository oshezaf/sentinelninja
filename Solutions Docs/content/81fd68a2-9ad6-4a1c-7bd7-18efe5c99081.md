# Rare Custom Script Extension

The Custom Script Extension in Azure executes scripts on VMs, useful for post-deployment tasks. Scripts can be from various sources and could be used maliciously. The query identifies rare custom script extensions executed in your environment.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure Activity](../solutions/azure-activity.md) |
| **ID** | `81fd68a2-9ad6-4a1c-7bd7-18efe5c99081` |
| **Tactics** | Execution |
| **Techniques** | T1059 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity/Hunting%20Queries/Rare_Custom_Script_Extension.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureActivity`](../tables/azureactivity.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Azure Activity](../solutions/azure-activity.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
