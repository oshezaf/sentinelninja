# NRT Sensitive Azure Key Vault operations

Identifies when sensitive Azure Key Vault operations are used. This includes: VaultDelete, KeyDelete, SecretDelete, SecretPurge, KeyPurge, SecretBackup, KeyBackup. Any Backup operations should match with expected scheduled backup activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Key Vault](../solutions/azure-key-vault.md) |
| **ID** | `884ead54-cb3f-4676-a1eb-b26532d6cbfd` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | NRT |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Required Connectors** | [AzureKeyVault](../connectors/azurekeyvault.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Key%20Vault/Analytic%20Rules/NRT_KeyVaultSensitiveOperations.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureDiagnostics`](../tables/azurediagnostics.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Azure Key Vault](../solutions/azure-key-vault.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

