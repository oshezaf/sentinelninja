# Source IP Abnormally Connects to Multiple Destinations

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies source IP that abnormally connects to multiple destinations according to learning period activity. This can indicate initial access attempts by attackers, trying to jump between different machines in the organization.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **ID** | `d006f4f8-86bb-4c9d-9826-837762ddad6b` |
| **Tactics** | Execution, LateralMovement |
| **Required Connectors** | [AzureFirewall](../connectors/azurefirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Hunting%20Queries/Azure%20Firewall%20-%20Source%20IP%20Abnormally%20Connects%20to%20Multiple%20Destinations.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)
- [`AZFWNetworkRule`](../tables/azfwnetworkrule.md)
- [`AzureDiagnostics`](../tables/azurediagnostics.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Azure Firewall](../solutions/azure-firewall.md)

