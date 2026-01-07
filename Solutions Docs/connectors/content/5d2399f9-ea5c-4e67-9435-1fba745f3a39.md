# Azure storage key enumeration

Azure's storage key listing can expose secrets, PII, and grant VM access. Monitoring for anomalous accounts or IPs is crucial. The query generates IP clusters, correlates activities, and flags unexpected ones. Single-operation users are excluded.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure Activity](../solutions/azure-activity.md) |
| **ID** | `5d2399f9-ea5c-4e67-9435-1fba745f3a39` |
| **Tactics** | Discovery |
| **Techniques** | T1087 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity/Hunting%20Queries/Anomalous_Listing_Of_Storage_Keys.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureActivity`](../tables/azureactivity.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Azure Activity](../solutions/azure-activity.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
