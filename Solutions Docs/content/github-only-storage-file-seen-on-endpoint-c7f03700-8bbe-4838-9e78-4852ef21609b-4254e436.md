# Storage File Seen on Endpoint

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Finds instances where a file uploaded to blob or file storage and it is seen on an endpoint by Microsoft Defender XDR.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `c7f03700-8bbe-4838-9e78-4852ef21609b` |
| **Tactics** | LateralMovement |
| **Techniques** | T1570 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AzureStorage/AzureStorageFileOnEndpoint.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DeviceFileEvents`](../tables/devicefileevents.md) | `ActionType == "FileCreated"` | ✓ | ✗ | ? |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) |  | ✓ | ✗ | ✓ |
| [`StorageFileLogs`](../tables/storagefilelogs.md) |  | ✓ | ✗ | ✓ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureStorageAccount](../connectors/azurestorageaccount.md) | [Azure Storage](../solutions/azure-storage.md) |

**Solutions:** [Azure Storage](../solutions/azure-storage.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

