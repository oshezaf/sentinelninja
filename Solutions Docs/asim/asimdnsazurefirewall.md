# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser for Azure Firewall

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsAzureFirewall` |
| **Built-in Parser** | `_ASim_Dns_AzureFirewall` |
| **Schema** | Dns |
| **Schema Version** | 0.1.7 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Azure Firewall |
| **Parser Version** | 0.4.0 |
| **Last Updated** | Dec 2, 2025 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsAzureFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsAzureFirewall.yaml) |

## Description

This ASIM parser supports normalizing Azure Firewall logs to the ASIM Dns normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) |  | ✓ | ✗ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category == "AzureFirewallDnsProxy"`<br>`ResourceType == "AZUREFIREWALLS"` | — | ✗ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [AzureBatchAccount_CCP](../connectors/azurebatchaccount-ccp.md) | [Azure Batch Account](../solutions/azure-batch-account.md) |
| [AzureCognitiveSearch_CCP](../connectors/azurecognitivesearch-ccp.md) | [Azure Cognitive Search](../solutions/azure-cognitive-search.md) |
| [AzureDataLakeStorageGen1_CCP](../connectors/azuredatalakestoragegen1-ccp.md) | [Azure Data Lake Storage Gen1](../solutions/azure-data-lake-storage-gen1.md) |
| [AzureEventHub_CCP](../connectors/azureeventhub-ccp.md) | [Azure Event Hubs](../solutions/azure-event-hubs.md) |
| [AzureFirewall](../connectors/azurefirewall.md) | [Azure Firewall](../solutions/azure-firewall.md) |
| [AzureKeyVault](../connectors/azurekeyvault.md) | [Azure Key Vault](../solutions/azure-key-vault.md) |
| [AzureLogicApps_CCP](../connectors/azurelogicapps-ccp.md) | [Azure Logic Apps](../solutions/azure-logic-apps.md) |
| [AzureServiceBus_CCP](../connectors/azureservicebus-ccp.md) | [Azure Service Bus](../solutions/azure-service-bus.md) |
| [AzureStreamAnalytics_CCP](../connectors/azurestreamanalytics-ccp.md) | [Azure Stream Analytics](../solutions/azure-stream-analytics.md) |
| [SlashNextFunctionApp](../connectors/slashnextfunctionapp.md) | [SlashNext](../solutions/slashnext.md) |

**Solutions:** [Azure Batch Account](../solutions/azure-batch-account.md), [Azure Cognitive Search](../solutions/azure-cognitive-search.md), [Azure Data Lake Storage Gen1](../solutions/azure-data-lake-storage-gen1.md), [Azure Event Hubs](../solutions/azure-event-hubs.md), [Azure Firewall](../solutions/azure-firewall.md), [Azure Key Vault](../solutions/azure-key-vault.md), [Azure Logic Apps](../solutions/azure-logic-apps.md), [Azure Service Bus](../solutions/azure-service-bus.md), [Azure Stream Analytics](../solutions/azure-stream-analytics.md), [SlashNext](../solutions/slashnext.md)

## References

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

