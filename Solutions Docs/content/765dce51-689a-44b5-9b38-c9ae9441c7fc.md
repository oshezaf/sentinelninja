# Azure RBAC AKS created role details

'Query get the details of role created for kube-audit.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure kubernetes Service](../solutions/azure-kubernetes-service.md) |
| **ID** | `765dce51-689a-44b5-9b38-c9ae9441c7fc` |
| **Severity** | Medium |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [AzureKubernetes](../connectors/azurekubernetes.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20kubernetes%20Service/Hunting%20Queries/AKS-Rbac.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureDiagnostics`](../tables/azurediagnostics.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Azure kubernetes Service](../solutions/azure-kubernetes-service.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
