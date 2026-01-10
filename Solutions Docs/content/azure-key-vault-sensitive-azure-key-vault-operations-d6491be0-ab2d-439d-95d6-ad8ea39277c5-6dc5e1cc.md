# Sensitive Azure Key Vault operations

Identifies when sensitive Azure Key Vault operations are used. This includes: VaultDelete, KeyDelete, SecretDelete, SecretPurge, KeyPurge, SecretBackup, KeyBackup. Any Backup operations should match with expected scheduled backup activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Key Vault](../solutions/azure-key-vault.md) |
| **ID** | `d6491be0-ab2d-439d-95d6-ad8ea39277c5` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Required Connectors** | [AzureKeyVault](../connectors/azurekeyvault.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Key%20Vault/Analytic%20Rules/KeyVaultSensitiveOperations.yaml) |

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

