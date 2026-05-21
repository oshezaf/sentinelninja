# Storage Alert Correlation with CommonSecurityLogs and StorageLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query combines different Storage alerts with CommonSecurityLogs and StorageLogs helping analysts  triage and investigate any  possible Storage related attacks faster thus reducing Mean Time To Respond

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `7098cae1-c632-4b40-b715-86d6b07720d7` |
| **Tactics** | InitialAccess, LateralMovement |
| **Techniques** | T1586, T1570 |
| **Required Connectors** | [AzureSecurityCenter](../connectors/azuresecuritycenter.md), [Fortinet](../connectors/fortinet.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/MultipleDataSources/StorageAlertCorrelationwithCommonSecurityLogsandStorageLogs.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `ApplicationProtocol has_any "SSL"`<br>`DestinationPort != "161"`<br>`DeviceAction !in "close,client-rst,server-rst,deny"`<br>`DeviceVendor == "Fortinet"`<br>`LogSeverity has_any "2"`<br>`SourceIP != "0.0.0.0"` | ✓ | ✓ | ? |
| [`SecurityAlert`](../tables/securityalert.md) | `DisplayName has_any "Potential malware uploaded to a storage blob container"` | ✓ | ✗ | ? |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) |  | ✓ | ✗ | ? |
| [`StorageFileLogs`](../tables/storagefilelogs.md) |  | ✓ | ✗ | ? |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureStorageAccount](../connectors/azurestorageaccount.md) | [Azure Storage](../solutions/azure-storage.md) |
| [CefAma](../connectors/cefama.md) | [Common Event Format](../solutions/common-event-format.md) |
| [VirtualMetricDirectorProxy](../connectors/virtualmetricdirectorproxy.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelConnector](../connectors/virtualmetricmssentinelconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelDataLakeConnector](../connectors/virtualmetricmssentineldatalakeconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |

**Solutions:** [Azure Storage](../solutions/azure-storage.md), [Common Event Format](../solutions/common-event-format.md), [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

