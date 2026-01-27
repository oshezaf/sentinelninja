# Application Gateway WAF - SQLi Detection

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a match for SQL Injection attack in the Application gateway WAF logs. The Threshold value in the query can be changed as per your infrastructure's requirement.  References: https://owasp.org/Top10/A03_2021-Injection/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `68c0b6bb-6bd9-4ef4-9011-08998c8ef90f` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Execution, InitialAccess, PrivilegeEscalation |
| **Techniques** | T1211, T1059, T1190, T0890 |
| **Required Connectors** | [WAF](../connectors/waf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/AzureWAF/AppGwWAF-SQLiDetection.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category == "ApplicationGatewayFirewallLog"` | — | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureBatchAccount_CCP](../connectors/azurebatchaccount-ccp.md) | [Azure Batch Account](../solutions/azure-batch-account.md) |
| [AzureCognitiveSearch_CCP](../connectors/azurecognitivesearch-ccp.md) | [Azure Cognitive Search](../solutions/azure-cognitive-search.md) |
| [AzureDataLakeStorageGen1_CCP](../connectors/azuredatalakestoragegen1-ccp.md) | [Azure Data Lake Storage Gen1](../solutions/azure-data-lake-storage-gen1.md) |
| [AzureEventHub_CCP](../connectors/azureeventhub-ccp.md) | [Azure Event Hubs](../solutions/azure-event-hubs.md) |
| [AzureKeyVault](../connectors/azurekeyvault.md) | [Azure Key Vault](../solutions/azure-key-vault.md) |
| [AzureLogicApps_CCP](../connectors/azurelogicapps-ccp.md) | [Azure Logic Apps](../solutions/azure-logic-apps.md) |
| [AzureServiceBus_CCP](../connectors/azureservicebus-ccp.md) | [Azure Service Bus](../solutions/azure-service-bus.md) |
| [AzureStreamAnalytics_CCP](../connectors/azurestreamanalytics-ccp.md) | [Azure Stream Analytics](../solutions/azure-stream-analytics.md) |
| [SlashNextFunctionApp](../connectors/slashnextfunctionapp.md) | [SlashNext](../solutions/slashnext.md) |

**Solutions:** [Azure Batch Account](../solutions/azure-batch-account.md), [Azure Cognitive Search](../solutions/azure-cognitive-search.md), [Azure Data Lake Storage Gen1](../solutions/azure-data-lake-storage-gen1.md), [Azure Event Hubs](../solutions/azure-event-hubs.md), [Azure Key Vault](../solutions/azure-key-vault.md), [Azure Logic Apps](../solutions/azure-logic-apps.md), [Azure Service Bus](../solutions/azure-service-bus.md), [Azure Stream Analytics](../solutions/azure-stream-analytics.md), [SlashNext](../solutions/slashnext.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

