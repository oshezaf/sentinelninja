# Determine users with cluster admin role

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This query determines the cluster-admin role assigned to users and applied to resources across the entire cluster .

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure kubernetes Service](../solutions/azure-kubernetes-service.md) |
| **ID** | `c3ac03d5-dbf2-49ab-a2de-83396a20a5fb` |
| **Severity** | Medium |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [AzureKubernetes](../connectors/azurekubernetes.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20kubernetes%20Service/Hunting%20Queries/AKS-clusterrolebinding.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category == "kube-audit"` | — | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Azure kubernetes Service](../solutions/azure-kubernetes-service.md)

