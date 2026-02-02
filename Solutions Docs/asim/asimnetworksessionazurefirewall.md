# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Azure Firewall logs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionAzureFirewall` |
| **Built-in Parser** | `_ASim_NetworkSession_AzureFirewall` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Azure Firewall |
| **Parser Version** | 0.2.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimNetworkSession/CHANGELOG/ASimNetworkSessionAzureFirewall.md)) |
| **Last Updated** | Dec 3, 2025 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionAzureFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionAzureFirewall.yaml) |

## Description

This ASIM parser supports normalizing Azure Firewall logs to the ASIM Network Session normalized schema. This parser is partially based on a work by [Koos Goossens](https://github.com/TheCloudScout).

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) |  | ✓ | ✗ |
| [`AZFWNatRule`](../tables/azfwnatrule.md) |  | ✓ | ✗ |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) |  | ✓ | ✗ |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) |  | ✓ | ✗ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category == "AzureFirewallNetworkRule"` | — | ✗ |
| [`Event`](../tables/event.md) |  | ✓ | ✗ |

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
| [AzureKeyVault](../connectors/azurekeyvault.md) | [Azure Key Vault](../solutions/azure-key-vault.md) |
| [AzureLogicApps_CCP](../connectors/azurelogicapps-ccp.md) | [Azure Logic Apps](../solutions/azure-logic-apps.md) |
| [AzureServiceBus_CCP](../connectors/azureservicebus-ccp.md) | [Azure Service Bus](../solutions/azure-service-bus.md) |
| [AzureStreamAnalytics_CCP](../connectors/azurestreamanalytics-ccp.md) | [Azure Stream Analytics](../solutions/azure-stream-analytics.md) |
| [MimecastTIRegionalConnectorAzureFunctions](../connectors/mimecasttiregionalconnectorazurefunctions.md) | [MimecastTIRegional](../solutions/mimecasttiregional.md) |
| [SlashNextFunctionApp](../connectors/slashnextfunctionapp.md) | [SlashNext](../solutions/slashnext.md) |

**Solutions:** [Azure Batch Account](../solutions/azure-batch-account.md), [Azure Cognitive Search](../solutions/azure-cognitive-search.md), [Azure Data Lake Storage Gen1](../solutions/azure-data-lake-storage-gen1.md), [Azure Event Hubs](../solutions/azure-event-hubs.md), [Azure Key Vault](../solutions/azure-key-vault.md), [Azure Logic Apps](../solutions/azure-logic-apps.md), [Azure Service Bus](../solutions/azure-service-bus.md), [Azure Stream Analytics](../solutions/azure-stream-analytics.md), [MimecastTIRegional](../solutions/mimecasttiregional.md), [SlashNext](../solutions/slashnext.md)

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

