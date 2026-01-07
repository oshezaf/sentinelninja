# Rare subscription-level operations in Azure

This query looks for a few sensitive subscription-level events based on Azure Activity Logs. For example, this monitors for the operation name 'Create or Update Snapshot', which is used for creating backups but could be misused by attackers to dump hashes or extract sensitive information from the disk.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Activity](../solutions/azure-activity.md) |
| **ID** | `23de46ea-c425-4a77-b456-511ae4855d69` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Persistence |
| **Techniques** | T1003, T1098 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity/Analytic%20Rules/RareOperations.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureActivity`](../tables/azureactivity.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Azure Activity](../solutions/azure-activity.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
