# KeyVaults

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for KeyVaults table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/keyvaults) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (39 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/keyvaults)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| CallerIpAddress | string |  |
| Category | string |  |
| ClientInfo_s | string |  |
| Confidence | string |  |
| CorrelationId | string |  |
| Description | string |  |
| DurationMs | long |  |
| FirstReportedDateTime | string |  |
| HttpStatusCode_d | real |  |
| Id_s | string |  |
| Identity_o | string |  |
| IndicatorThreatType | string |  |
| IsActive | string |  |
| KeyProperties_o | string |  |
| LastReportedDateTime | string |  |
| MaliciousIP | string |  |
| OperationName | string |  |
| OperationVersion | string |  |
| RemoteIPCountry | string |  |
| RemoteIPLatitude | real |  |
| RemoteIPLongitude | real |  |
| RequestUri_s | string |  |
| Resource | string |  |
| ResourceGroup | string |  |
| ResourceId | string |  |
| ResourceProvider | string |  |
| ResultDescription | string |  |
| ResultSignature | string |  |
| ResultType | string |  |
| SecretProperties_o | string |  |
| Severity | int |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SubscriptionId | string |  |
| TimeGenerated | datetime |  |
| TLPLevel | string |  |
| Type | string | The name of the table |
| VaultProperties_o | string |  |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [KeyVaults Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/keyvaults)

## Solutions (1)

This table is used by the following solutions:

- [Azure Key Vault](../solutions/azure-key-vault.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Azure Key Vault](../solutions/azure-key-vault.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AzureKeyVaultWorkbook](../content/azure-key-vault-azurekeyvaultworkbook-72b1692d.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

