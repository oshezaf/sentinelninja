# ⚠️ Valimail Enforce Configuration Events

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/valimail.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ValimailEnforceEventsConnector` |
| **Publisher** | Valimmail |
| **Used in Solutions** | [ValimailEnforce](../solutions/valimailenforce.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ValimailEnforceEventLogs_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ValimailEnforce/Data%20Connectors/ValimailEnforceEventLogs_ccp/ValimailEnforceEventLogs_connectorDefinition.json) |
| **CCF Configuration** | [ValimailEnforceEventLogs_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ValimailEnforce/Data%20Connectors/ValimailEnforceEventLogs_ccp/ValimailEnforceEventLogs_PollerConfig.json) |
| **CCF Capabilities** | `JwtToken`, `Paging` |

The [Valimail Configuration Events](https://support.valimail.com/en/articles/13133390-microsoft-sentinel) data connector allows ingesting email domain's configuration events from the Valimail's Reporting API into Microsoft Sentinel. The data connector is built on Microsoft Sentinel Codeless Connector Platform.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

#### Configuration steps for the Valimail Events API 
 Follow the instructions in the [guide to generate a set of Reporting API credentials](https://support.valimail.com/en/articles/11322142-api-key-self-service). Store the created Client ID and the App ID keys.
- **Client Account Slug**: Account slug
- **API Client Id**: (password field)
- **API App Id**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

