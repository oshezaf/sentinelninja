# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Mercury - Domain, Hash and IP IOCs - August 2022

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a match across various data feeds for domains, hashes and IP IOC related to Mercury  Reference:  https://www.microsoft.com/security/blog/2022/08/25/mercury-leveraging-log4j-2-vulnerabilities-in-unpatched-systems-to-target-israeli-organizations/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `ae10c588-7ff7-486c-9920-ab8b0bdb6ede` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [DNS](../connectors/dns.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [F5](../connectors/f5.md), [CiscoASA](../connectors/ciscoasa.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [Fortinet](../connectors/fortinet.md), [CheckPoint](../connectors/checkpoint.md), [CEF](../connectors/cef.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [Office365](../connectors/office365.md), [AzureFirewall](../connectors/azurefirewall.md), [WindowsFirewall](../connectors/windowsfirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/Mercury_Log4j_August2022.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`imFileEvent`](../asim/imfileevent.md)

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | ✓ | ✗ |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | ✓ | ✗ |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | ✓ | ✗ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | — | ✗ |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | ✓ | ✗ |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) | ✓ | ✗ |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | ✓ | ✗ |
| [`DnsEvents`](../tables/dnsevents.md) | ✓ | ✗ |
| [`Event`](../tables/event.md) | ✓ | ✗ |
| [`OfficeActivity`](../tables/officeactivity.md) | ✓ | ✗ |
| [`VMConnection`](../tables/vmconnection.md) | ✗ | ✗ |
| [`WindowsFirewall`](../tables/windowsfirewall.md) | ✓ | ✗ |

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
| [CefAma](../connectors/cefama.md) | [Common Event Format](../solutions/common-event-format.md) |
| [DNS](../connectors/dns.md) | [Windows Server DNS](../solutions/windows-server-dns.md) |
| [MimecastTIRegionalConnectorAzureFunctions](../connectors/mimecasttiregionalconnectorazurefunctions.md) | [MimecastTIRegional](../solutions/mimecasttiregional.md) |
| [SlashNextFunctionApp](../connectors/slashnextfunctionapp.md) | [SlashNext](../solutions/slashnext.md) |
| [VirtualMetricDirectorProxy](../connectors/virtualmetricdirectorproxy.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelConnector](../connectors/virtualmetricmssentinelconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelDataLakeConnector](../connectors/virtualmetricmssentineldatalakeconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [WindowsFirewall](../connectors/windowsfirewall.md) | [Windows Firewall](../solutions/windows-firewall.md) |

**Solutions:** [Azure Batch Account](../solutions/azure-batch-account.md), [Azure Cognitive Search](../solutions/azure-cognitive-search.md), [Azure Data Lake Storage Gen1](../solutions/azure-data-lake-storage-gen1.md), [Azure Event Hubs](../solutions/azure-event-hubs.md), [Azure Key Vault](../solutions/azure-key-vault.md), [Azure Logic Apps](../solutions/azure-logic-apps.md), [Azure Service Bus](../solutions/azure-service-bus.md), [Azure Stream Analytics](../solutions/azure-stream-analytics.md), [Common Event Format](../solutions/common-event-format.md), [MimecastTIRegional](../solutions/mimecasttiregional.md), [SlashNext](../solutions/slashnext.md), [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md), [Windows Firewall](../solutions/windows-firewall.md), [Windows Server DNS](../solutions/windows-server-dns.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

