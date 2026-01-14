# Azure VM Run Command executed from Azure IP address

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies any Azure VM Run Command operation executed from an Azure IP address. Run Command allows an attacker or legitimate user to execute arbitrary PowerShell on a target VM. This technique has been seen in use by NOBELIUM.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure Activity](../solutions/azure-activity.md) |
| **ID** | `efe843ca-3ce7-4896-9f8b-f2c374ae6527` |
| **Tactics** | LateralMovement, CredentialAccess |
| **Techniques** | T1570, T1078.004 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity/Hunting%20Queries/AzureRunCommandFromAzureIP.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureActivity`](../tables/azureactivity.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Azure Activity](../solutions/azure-activity.md)

