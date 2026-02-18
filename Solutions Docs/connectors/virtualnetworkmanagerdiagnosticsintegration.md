# 🔗 Azure Virtual Network Manager (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Virtual Network Manager](https://learn.microsoft.com/en-us/azure/virtual-network-manager/overview) is a management service for centrally managing virtual networks at scale.

To collect Azure Virtual Network Manager logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/virtual-network-manager/how-to-configure-diagnostic-settings) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AVNMConnectivityConfigurationChange`](../tables/avnmconnectivityconfigurationchange.md) | ✓ | ✗ | — |
| [`AVNMIPAMPoolAllocationChange`](../tables/avnmipampoolallocationchange.md) | ✓ | ✗ | — |
| [`AVNMNetworkGroupMembershipChange`](../tables/avnmnetworkgroupmembershipchange.md) | ✓ | ✗ | — |
| [`AVNMRuleCollectionChange`](../tables/avnmrulecollectionchange.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

