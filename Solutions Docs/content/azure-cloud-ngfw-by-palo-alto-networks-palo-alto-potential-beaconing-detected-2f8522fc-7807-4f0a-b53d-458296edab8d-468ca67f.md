# Palo Alto - potential beaconing detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies beaconing patterns from PAN traffic logs based on recurrent timedelta patterns.  Reference Blog:https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/detect-network-beaconing-via-intra-request-time-delta-patterns/ba-p/779586

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md) |
| **ID** | `2f8522fc-7807-4f0a-b53d-458296edab8d` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071, T1571 |
| **Required Connectors** | [CloudNgfwByPAN](../connectors/cloudngfwbypan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Cloud%20NGFW%20by%20Palo%20Alto%20Networks/Hunting%20Queries/CloudNGFW-PotentialBeaconing.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ | ✓ |
| [`fluentbit_CL`](../tables/fluentbit-cl.md) | — | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Azure Cloud NGFW By Palo Alto Networks](../solutions/azure-cloud-ngfw-by-palo-alto-networks.md)

