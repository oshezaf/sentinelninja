# CYFIRMA Cyber Intelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cyfirma_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CyfirmaCyberIntelligenceDC` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CyfirmaCyberIntel_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Data%20Connectors/CyfirmaCyberIntelligence_ccp/CyfirmaCyberIntel_DataConnectorDefinition.json) |

The CYFIRMA Cyber Intelligence data connector enables seamless log ingestion from the DeCYFIR API into Microsoft Sentinel. Built on the Microsoft Sentinel Codeless Connector Platform, it leverages the DeCYFIR Alerts API to retrieve logs. Additionally, it supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview), which parse security data into a custom table during ingestion. This eliminates the need for query-time parsing, enhancing performance and efficiency.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyfirmaCampaigns_CL`](../tables/cyfirmacampaigns-cl.md) | — | ✗ | ✓ |
| [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) | — | ✗ | ✓ |
| [`CyfirmaMalware_CL`](../tables/cyfirmamalware-cl.md) | — | ✗ | ✓ |
| [`CyfirmaThreatActors_CL`](../tables/cyfirmathreatactors-cl.md) | — | ✗ | ✓ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. CYFIRMA Cyber Intelligence**

This connector provides the Indicators, Threat actors, Malware and Campaigns logs from CYFIRMA Cyber Intelligence. The connector uses the DeCYFIR API to retrieve logs and supports DCR-based ingestion time transformations, parsing security data into a custom table during ingestion. This eliminates the need for query-time parsing, enhancing performance and efficiency.
- **CYFIRMA API URL**: https://decyfir.cyfirma.com
- **CYFIRMA API Key**: (password field)
- **Pull all IoC's Or Tailored IoC's**: All IoC's or Tailored IoC's
- **API Delta**: API Delta
- **Recommended Actions**: Recommended Action can be any one of:All/Monitor/Block
- **Threat Actor Associated**: Is any Threat Actor Associated with the IoC's
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

