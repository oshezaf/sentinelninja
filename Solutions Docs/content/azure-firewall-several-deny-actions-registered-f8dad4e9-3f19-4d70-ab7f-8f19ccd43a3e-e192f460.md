# Several deny actions registered

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies attack pattern when attacker tries to move, or scan, from resource to resource on the network and creates an incident when a source has more than 1 registered deny action in Azure Firewall.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **ID** | `f8dad4e9-3f19-4d70-ab7f-8f19ccd43a3e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, LateralMovement, CommandAndControl |
| **Techniques** | T1046, T1071, T1210 |
| **Required Connectors** | [AzureFirewall](../connectors/azurefirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Analytic%20Rules/SeveralDenyActionsRegistered.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | ✓ | ✗ | ✓ |
| [`AZFWFlowTrace`](../tables/azfwflowtrace.md) | ✓ | ✗ | ✓ |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) | ✓ | ✗ | ✓ |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | ✓ | ✗ | ✓ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | — | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Azure Firewall](../solutions/azure-firewall.md)

