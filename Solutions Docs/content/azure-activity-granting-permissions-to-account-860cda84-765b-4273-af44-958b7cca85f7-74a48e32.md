# Granting permissions to account

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Azure Activity](../solutions/azure-activity.md)

