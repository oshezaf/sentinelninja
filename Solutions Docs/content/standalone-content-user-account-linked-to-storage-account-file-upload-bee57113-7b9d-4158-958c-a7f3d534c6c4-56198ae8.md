# User Account Linked to Storage Account File Upload

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query will try to identify the user account used to perform a file upload to blob storage. This query can be used to match all file upload events, or filtering can be applied on filename to search for a specific upload.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `bee57113-7b9d-4158-958c-a7f3d534c6c4` |
| **Tactics** | CredentialAccess |
| **Techniques** | T1528 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/AzureStorage/AzureStorageUploadLinkAccount.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SigninLogs`](../tables/signinlogs.md)
- [`StorageBlobLogs`](../tables/storagebloblogs.md)
- [`StorageFileLogs`](../tables/storagefilelogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

