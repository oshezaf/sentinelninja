# Microsoft Entra ID Hybrid Health AD FS Service Delete

This detection uses AzureActivity logs (Administrative category) to identify the deletion of an Microsoft Entra ID Hybrid Health AD FS service instance in a tenant. A threat actor can create a new AD Health ADFS service and create a fake server to spoof AD FS signing logs. The health AD FS service can then be deleted after it is no longer needed via HTTP requests to Azure. More information is available in this blog https://o365blog.com/post/hybridhealthagent/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Activity](../solutions/azure-activity.md) |
| **ID** | `86a036b2-3686-42eb-b417-909fc0867771` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1578.003 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity/Analytic%20Rules/AADHybridHealthADFSServiceDelete.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureActivity`](../tables/azureactivity.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Azure Activity](../solutions/azure-activity.md)

