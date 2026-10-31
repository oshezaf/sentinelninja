# FireCompass Risks

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/firecompass.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `FireCompassRisksConnector` |
| **Publisher** | FireCompass |
| **Used in Solutions** | [FireCompassRisks](../solutions/firecompassrisks.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [FireCompassRisks_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FireCompassRisks/Data%20Connectors/FireCompassRisks_ccf/FireCompassRisks_connectorDefinition.json) |
| **DCR Definition Files** | [FireCompassRisks_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FireCompassRisks/Data%20Connectors/FireCompassRisks_ccf/FireCompassRisks_DCR.json) |
| **CCF Configuration** | [FireCompassRisks_pollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FireCompassRisks/Data%20Connectors/FireCompassRisks_ccf/FireCompassRisks_pollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#firecompass-risks) |

The FireCompass data connector allows ingesting risk and vulnerability data from the FireCompass API into Microsoft Sentinel. The data connector is built on the Microsoft Sentinel Codeless Connector Platform.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`FCRisks_CL`](../tables/fcrisks-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

#### Configuration steps for the FireCompass API
Generate your API Token from the FireCompass platform and paste it below to authenticate the connector.
- **FIRECOMPASS Management URL**: https://example.FIRECOMPASSTEST.net/
- **API endpoint path**: /internal_risks/v1/risk
- **FireCompass API Token**: Enter API Token
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

