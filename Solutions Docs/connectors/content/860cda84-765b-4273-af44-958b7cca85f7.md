# Granting permissions to account

Shows the most prevalent users who grant access to others on Azure resources. List the common source IP address for each of those accounts. If an operation is not from those IP addresses, it may be worthy of investigation.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure Activity](../solutions/azure-activity.md) |
| **ID** | `860cda84-765b-4273-af44-958b7cca85f7` |
| **Tactics** | Persistence, PrivilegeEscalation |
| **Techniques** | T1098 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity/Hunting%20Queries/Granting_Permissions_to_Account.yaml) |

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
