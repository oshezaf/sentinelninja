# Azure Storage File Create, Access, Delete

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query will identify where a file is uploaded to Azure File or Blob storage and is then accessed once before being deleted. This activity may be indicative of exfiltration activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `25568c62-414b-4577-acee-5cba9494c232` |
| **Tactics** | Exfiltration |
| **Techniques** | T1537 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/AzureStorage/AzureStorageFileCreateAccessDelete.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`StorageBlobLogs`](../tables/storagebloblogs.md)
- [`StorageFileLogs`](../tables/storagefilelogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

