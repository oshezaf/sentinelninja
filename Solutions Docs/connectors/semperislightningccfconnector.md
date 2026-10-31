# Semperis Lightning (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/SemperisLightning/Data%20Connectors/Logos/semperis.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SemperisLightningCCFConnector` |
| **Publisher** | Semperis |
| **Used in Solutions** | [SemperisLightning](../solutions/semperislightning.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [SemperisLightning_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SemperisLightning/Data%20Connectors/SemperisLightningCCF/SemperisLightning_ConnectorDefinition.json) |
| **DCR Definition Files** | [SemperisLightning_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SemperisLightning/Data%20Connectors/SemperisLightningCCF/SemperisLightning_DCR.json) |
| **CCF Configuration** | [SemperisLightning_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SemperisLightning/Data%20Connectors/SemperisLightningCCF/SemperisLightning_PollerConfig.json) |
| **CCF Capabilities** | `JwtToken`, `POST` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#semperis-lightning-via-codeless-connector-framework) |

The [Semperis Lightning](https://www.semperis.com/platform/) connector uses the Codeless Connector Framework to ingest Semperis Lightning identity security data into Microsoft Sentinel. One configured instance represents one Semperis zone/API-key pair and deploys one RestApiPoller per supported stream into dedicated `*V2_CL` tables, so it can run alongside the Azure Functions connector.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`LightningAttackPathLinksV2_CL`](../tables/lightningattackpathlinksv2-cl.md) | ? | ✓ | ? |
| [`LightningAttackPathsV2_CL`](../tables/lightningattackpathsv2-cl.md) | ? | ✓ | ? |
| [`LightningIOEResultsV2_CL`](../tables/lightningioeresultsv2-cl.md) | ? | ✓ | ? |
| [`LightningIOEsMetadataV2_CL`](../tables/lightningioesmetadatav2-cl.md) | ? | ✓ | ? |
| [`LightningIndicatorExecutionsV2_CL`](../tables/lightningindicatorexecutionsv2-cl.md) | ? | ✓ | ? |
| [`LightningTier0AttackersV2_CL`](../tables/lightningtier0attackersv2-cl.md) | ? | ✓ | ? |
| [`LightningTier0NodesV2_CL`](../tables/lightningtier0nodesv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Semperis Lightning API key**: A valid API key and the matching Semperis zone are required. The key is collected as a password field and is not stored in this repository.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Manage Semperis Lightning connections**

Add one instance for each Semperis tenant/zone/API-key pair.
This candidate uses the CCF multi-instance grid/context-pane pattern. Each instance appears as six poller rows in the grid. IOE execution results are not active because the public connector performs a dynamic second request per execution, which RestApiPoller cannot represent.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connection Name**
- **Zone**
- **Data Stream**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Semperis Lightning instance**

*Configure a Semperis tenant connection*

When you click the "Add new instance" button in the portal, a configuration form will open. You'll need to provide:

*Instance details*

- **Connection Name** (required): Semperis-Production
- **Semperis Zone** (required): Select from available options
  - North America (na)
  - Europe (eu)
- **Semperis API Key** (required): API key

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

