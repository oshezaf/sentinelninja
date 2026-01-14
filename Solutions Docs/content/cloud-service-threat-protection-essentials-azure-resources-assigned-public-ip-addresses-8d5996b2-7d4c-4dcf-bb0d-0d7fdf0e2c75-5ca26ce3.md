# Azure Resources Assigned Public IP Addresses

This query identifies instances when public IP addresses are assigned to Azure Resources and show connections to those resources.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cloud Service Threat Protection Essentials](../solutions/cloud-service-threat-protection-essentials.md) |
| **ID** | `8d5996b2-7d4c-4dcf-bb0d-0d7fdf0e2c75` |
| **Tactics** | Impact |
| **Techniques** | T1496 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md), [AzureNetworkWatcher](../connectors/azurenetworkwatcher.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloud%20Service%20Threat%20Protection%20Essentials/Hunting%20Queries/AzureResourceAssignedPublicIP.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureActivity`](../tables/azureactivity.md)
- [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Cloud Service Threat Protection Essentials](../solutions/cloud-service-threat-protection-essentials.md)

