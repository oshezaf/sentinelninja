# Storage Alert Correlation with CommonSecurityLogs and StorageLogs

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query combines different Storage alerts with CommonSecurityLogs and StorageLogs helping analysts  triage and investigate any  possible Storage related attacks faster thus reducing Mean Time To Respond

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `7098cae1-c632-4b40-b715-86d6b07720d7` |
| **Tactics** | InitialAccess, LateralMovement |
| **Techniques** | T1586, T1570 |
| **Required Connectors** | [AzureSecurityCenter](../connectors/azuresecuritycenter.md), [Fortinet](../connectors/fortinet.md) |
| **Event Vendor** | Fortinet |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/MultipleDataSources/StorageAlertCorrelationwithCommonSecurityLogsandStorageLogs.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`SecurityAlert`](../tables/securityalert.md)
- [`StorageBlobLogs`](../tables/storagebloblogs.md)
- [`StorageFileLogs`](../tables/storagefilelogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

