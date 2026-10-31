# Recorded Future - Log Ingestion

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/RecordedFuture.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `RecordedFuture` |
| **Publisher** | Recorded Future |
| **Used in Solutions** | [Recorded Future](../solutions/recorded-future.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [RecordedFuture_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Data%20Connectors/RecordedFuture_ConnectorDefinition.json) |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#recorded-future---log-ingestion) |

Imports Recorded Future data into Microsoft Sentinel via the Log Ingestion API. Writes playbook alerts to `RecordedFuturePlaybookAlerts_V2_CL`, classic alerts to `RecordedFutureClassicAlerts_V2_CL`, threat map data to `RecordedFutureThreatMap_V2_CL` and `RecordedFutureThreatMapMalware_V2_CL`, and sandbox results to `RecordedFutureSandboxResults_V2_CL`.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RecordedFutureClassicAlerts_V2_CL`](../tables/recordedfutureclassicalerts-v2-cl.md) | ? | ✓ | ? |
| [`RecordedFuturePlaybookAlerts_V2_CL`](../tables/recordedfutureplaybookalerts-v2-cl.md) | ? | ✓ | ? |
| [`RecordedFutureSandboxResults_V2_CL`](../tables/recordedfuturesandboxresults-v2-cl.md) | ? | ✓ | ? |
| [`RecordedFutureThreatMapMalware_V2_CL`](../tables/recordedfuturethreatmapmalware-v2-cl.md) | ? | ✓ | ? |
| [`RecordedFutureThreatMap_V2_CL`](../tables/recordedfuturethreatmap-v2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions are required.

**Custom Permissions:**
- **Azure Subscription**: Monitoring Contributor and Log Analytics Contributor permissions required to deploy the Data Connectors infrastructure. Owner or Role Based Access Control Administrator required to deploy playbooks with automatic role assignment.
- **Recorded Future API Token**: A Recorded Future API token is required to authorize the Recorded Future Custom Connector used by the playbooks.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 — Deploy Data Connectors infrastructure**

Deploys the shared Data Collection Endpoint (DCE), Data Collection Rules (DCRs), Log Analytics tables, and this connector definition tile. Deploy this into the same resource group as your Log Analytics Workspace.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-RecordedFutureDataConnector-azuredeploy)

**2. Step 2 — Deploy the Recorded Future Custom Connector**

The custom connector handles authentication towards the Recorded Future API. Deploy it once — it is shared by the playbooks.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-RecordedFuture2FPlaybooksConnector-azuredeploy)

**3. Step 3 — Deploy playbooks**

Deploy one or more playbooks depending on your use case. No manual configuration is needed — each playbook connects to the Data Connectors infrastructure deployed in Step 1 automatically.

## Additional Documentation

> 📄 *Source: [Recorded Future\Data Connectors\README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded Future\Data Connectors\README.md)*

# Data Connectors

## Files

### `RecordedFuture_ConnectorDefinition.json`
`Customizable` connector definition for the **Recorded Future - Log Ingestion** tile.
Listed in `../Data/Solution_RecordedFuture.json` and baked into `../Package/mainTemplate.json`
by the packaging tool. This is what makes the connector appear in the Sentinel Data Connectors
gallery after a Content Hub / solution install.

### `azuredeploy.json`
Standalone ARM template that deploys the full infrastructure stack shared by the Log Ingestion
API playbooks:
- Data Collection Endpoint (DCE)
- 5 Data Collection Rules (DCRs)
- 5 Log Analytics custom tables (`RecordedFuturePlaybookAlerts_V2_CL`, `RecordedFutureClassicAlerts_V2_CL`,
  `RecordedFutureThreatMap_V2_CL`, `RecordedFutureThreatMapMalware_V2_CL`, `RecordedFutureSandboxResults_V2_CL`)
- Connector definition tile (see duplication note below)

Used by the "Deploy to Azure" button in the [Playbooks README](../Playbooks/readme.md) and in the
connector's own instruction steps. Deploy this before deploying any of the 6 playbooks that use
the Log Ingestion API (`RecordedFuture-Alert-Importer`, `RecordedFuture-Playbook-Alert-Importer`,
`RecordedFuture-ThreatMap-Importer`, `RecordedFuture-ThreatMapMalware-Importer`,
`RecordedFuture-Sandbox_StorageAccount`, `RecordedFuture-Sandbox_Outlook_Attachment`).

## Known duplication

### Connector tile

The connector UI tile content exists in two forms due to limitations of the packaging/deployment model:

| Content | Packager source | Standalone ARM |
|---|---|---|
| Connector UI tile | `RecordedFuture_ConnectorDefinition.json` | `azuredeploy.json` (`Microsoft.OperationalInsights/workspaces/providers/dataConnectorDefinitions` resource, `kind: Customizable`) |

If you update one (queries, description, instruction steps, connectivity criteria, etc.), update
its counterpart.

## Upgrading

`azuredeploy.json` has **no automatic Content Hub "update available" notification** — it's a
standalone template, not a tracked content item. When it changes (e.g. new DCR/table columns),
**existing customers must manually redeploy it** (same resource group) to pick up the change.
Check `metadata.releaseNotes` here and the top-level `ReleaseNotes.md` for what changed.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

