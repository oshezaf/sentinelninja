# Morphisec API Data Connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Morphisec_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MorphisecCCF` |
| **Publisher** | Morphisec |
| **Used in Solutions** | [Morphisec](../solutions/morphisec.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Morphisec_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Morphisec/Data%20Connectors/Morphisec_CCF/Morphisec_ConnectorDefinition.json) |
| **CCF Configuration** | [Morphisec_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Morphisec/Data%20Connectors/Morphisec_CCF/Morphisec_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |

The [Morphisec](https://www.morphisec.com/) solution for Microsoft Sentinel enables you to seamlessly ingest security alerts directly from the Morphisec API. By leveraging Morphisec's proactive breach prevention and moving target defense capabilities, this integration enriches your security operations with high-fidelity, low-noise alerts on evasive threats.

This solution provides more than just data ingestion; it equips your security team with a full suite of ready-to-use content, including: Data Connector, ASIM Parser, Analytic Rule Templates and Workbook.

With this solution, you can empower your SOC to leverage Morphisec's powerful threat prevention within a unified investigation and response workflow in Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`MorphisecAlerts_CL`](../tables/morphisecalerts-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure Morphisec Connector**

1. Create an API key client in Morphisec Console with read permissions to fetch alerts. 
2. Provide the Client ID and Client Secret in the connector configuration.
- **Morphisec Base URL**: https://<your-morphisec-region>.morphisec.cloud
- **Client ID**: Enter the Client ID
- **Client Secret**: (password field)
- **Tenant ID**: Enter your Morphisec Tenant ID
- Click 'Connect to Morphisec' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

