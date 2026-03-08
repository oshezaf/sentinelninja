# CYFIRMA Digital Risk

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cyfirma_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CyfirmaDigitalRiskAlertsConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CyfirmaDigitalRiskAlerts_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Digital%20Risk/Data%20Connectors/CyfirmaDigitalRiskAlerts_ccp/CyfirmaDigitalRiskAlerts_DataConnectorDefinition.json) |
| **CCF Configuration** | [CyfirmaDigitalRiskAlerts_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Digital%20Risk/Data%20Connectors/CyfirmaDigitalRiskAlerts_ccp/CyfirmaDigitalRiskAlerts_PollerConfig.json) |
| **CCF Capabilities** | `APIKey` |

The CYFIRMA Digital Risk Alerts data connector enables seamless log ingestion from the DeCYFIR/DeTCT API into Microsoft Sentinel. Built on the Microsoft Sentinel Codeless Connector Platform, it leverages the DeCYFIR Alerts API to retrieve logs. Additionally, it supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview), which parse security data into a custom table during ingestion. This eliminates the need for query-time parsing, enhancing performance and efficiency.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyfirmaDBWMDarkWebAlerts_CL`](../tables/cyfirmadbwmdarkwebalerts-cl.md) | ✓ | ✓ | ✓ |
| [`CyfirmaDBWMPhishingAlerts_CL`](../tables/cyfirmadbwmphishingalerts-cl.md) | ✓ | ✓ | ✓ |
| [`CyfirmaDBWMRansomwareAlerts_CL`](../tables/cyfirmadbwmransomwarealerts-cl.md) | ✓ | ✓ | ✓ |
| [`CyfirmaSPEConfidentialFilesAlerts_CL`](../tables/cyfirmaspeconfidentialfilesalerts-cl.md) | ✓ | ✓ | ✓ |
| [`CyfirmaSPEPIIAndCIIAlerts_CL`](../tables/cyfirmaspepiiandciialerts-cl.md) | ✓ | ✓ | ✓ |
| [`CyfirmaSPESocialThreatAlerts_CL`](../tables/cyfirmaspesocialthreatalerts-cl.md) | ✓ | ✓ | ✓ |
| [`CyfirmaSPESourceCodeAlerts_CL`](../tables/cyfirmaspesourcecodealerts-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. CYFIRMA Digital Risk**

Connect to CYFIRMA Digital Risk Alerts to ingest logs into Microsoft Sentinel. This connector uses the DeCYFIR/DeTCT API to retrieve alerts and supports DCR-based ingestion time transformations for efficient log parsing.
- **CYFIRMA API URL**: https://decyfir.cyfirma.com
- **CYFIRMA API Key**: (password field)
- **API Delta**: API Delta
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

