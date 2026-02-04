# First Time Source IP to Destination

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies the first time a source IP communicates with a destination based on a configurable learning period. Configurable Parameters: - Learning period time - learning period for threshold calculation in days. Default is set to 7.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **ID** | `f055e82b-5ef6-4395-bc9e-99f7e451343a` |
| **Tactics** | Exfiltration, CommandAndControl |
| **Required Connectors** | [AzureFirewall](../connectors/azurefirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Hunting%20Queries/Azure%20Firewall%20-%20First%20time%20source%20IP%20to%20Destination.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | ✓ | ✗ | ✓ |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | ✓ | ✗ | ✓ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | — | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Azure Firewall](../solutions/azure-firewall.md)

