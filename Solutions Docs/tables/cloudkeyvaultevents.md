# CloudKeyVaultEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Operations performed against Azure Key Vault resources

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-cloudkeyvaultevents-table) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudkeyvaultevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccountApplicationId | string | Application ID associated with the Key Vault access. |
| AccountObjectId | string | Object ID of the identity accessing the key vault. |
| AccountTenantId | string | Unique identifier of the Microsoft Entra tenant associated with the accessing account. |
| AccountType | string | Type of account used to access the key vault. |
| AccountUpn | string | User principal name of the user accessing the key vault. |
| ActivityName | string | Name of the Key Vault operation performed. |
| AdditionalFields | dynamic | Additional information about the event in JSON format. |
| AzureResourceId | string | Azure resource ID of the key vault. |
| DataSource | string | Source of the Key Vault logs. |
| HttpStatusCode | int | HTTP status code returned by the Key Vault operation. |
| IPAddress | string | IP address from which the key vault was accessed. |
| Location | string | Azure region where the key vault is located. |
| ReportId | string | GUID that identifies the record in this table. |
| RequestUri | string | URI of the Key Vault request. |
| ResultSignature | string | Result signature of the Key Vault operation. |
| SubscriptionId | string | Unique identifier of the Azure subscription. |
| Timestamp | datetime | Date and time when the record was generated. |
| UserAgentHeader | string | User-agent string from the HTTP request. |
| VaultName | string | Name of the key vault. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [CloudKeyVaultEvents Schema Reference (Defender XDR)](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-cloudkeyvaultevents-table)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

