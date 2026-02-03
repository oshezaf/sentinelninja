# Palo Alto - high-risk ports

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies network connections whose ports are frequent targets of attacks and should not cross network boundaries or reach untrusted public networks. Consider updating the firewall policies to block the connections.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md) |
| **ID** | `0a57accf-3548-4e38-a861-99687c958f59` |
| **Tactics** | InitialAccess, Discovery |
| **Required Connectors** | [CloudNgfwByPAN](../connectors/cloudngfwbypan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Cloud%20NGFW%20by%20Palo%20Alto%20Networks/Hunting%20Queries/CloudNGFW-HighRiskPorts.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ |
| [`fluentbit_CL`](../tables/fluentbit-cl.md) | — | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md)

