# Recorded Future Identity - Playbook Alert Importer

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/RecordedFuture.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `RecordedFutureIdentityAlertImporter` |
| **Publisher** | Recorded Future |
| **Used in Solutions** | [Recorded Future Identity](../solutions/recorded-future-identity.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [RFI_AlertImporter_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity/Data%20Connectors/RFI_AlertImporter_ConnectorDefinition.json) |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#recorded-future-identity---playbook-alert-importer) |

Imports Recorded Future Identity Playbook Alerts into Microsoft Sentinel. Enables incident creation via Analytic Rules on the `RFI_PlaybookAlertResults_V2_CL` table. For full installation details, see the [readme](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity/Playbooks/readme.md).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RFI_PlaybookAlertResults_V2_CL`](../tables/rfi-playbookalertresults-v2-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions are required.

**Custom Permissions:**
- **Azure Subscription**: Step 1 (Data Connectors infrastructure) requires **Monitoring Contributor** and **Log Analytics Contributor** on the resource group. Step 3 (playbook) requires **Owner** or **Role Based Access Control Administrator** when deploying with automatic role assignment (`create_role_assignment=true`), otherwise **Contributor** suffices.
- **Recorded Future API Token**: A Recorded Future Identity API token is required to authorize the RFI Custom Connector used by the playbook.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 — Deploy Data Connectors infrastructure**

Deploys the shared Data Collection Endpoint (DCE), Data Collection Rule (DCR), Log Analytics table (`RFI_PlaybookAlertResults_V2_CL`), and this connector definition tile.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRecorded%20Future%20Identity%2FData%20Connectors%2Fazuredeploy-alert-importer.json)

**2. Step 2 — Deploy RFI-CustomConnector**

The custom connector handles authentication towards the Recorded Future API. Deploy it once — it is shared by the playbook.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRecorded%20Future%20Identity%2FPlaybooks%2FConnectors%2FRFI-CustomConnector-0-2-0%2Fazuredeploy.json)

**3. Step 3 — Deploy RFI-Playbook-Alert-Importer-LAW**

Deploys the Logic App that imports Recorded Future Identity Playbook Alerts and writes them to the Log Analytics table using Managed Identity. Set `create_role_assignment=false` if your organization requires manual role assignment (see permissions above). After deployment, authorize the connectors and enable the Logic App.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRecorded%20Future%20Identity%2FPlaybooks%2FRFI-Playbook-Alert-Importer-LAW%2Fazuredeploy.json)

**4. Step 4 — Deploy Analytics Rule**

Creates Microsoft Sentinel incidents from the `RFI_PlaybookAlertResults_V2_CL` table. The rule is also available under **Microsoft Sentinel → Configuration → Analytics → Rule Templates**.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRecorded%20Future%20Identity%2FData%20Connectors%2Fazuredeploy-incident-creation-analytic-rule.json)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

