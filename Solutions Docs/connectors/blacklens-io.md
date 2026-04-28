# blacklens.io

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/blacklens.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `blacklens_io` |
| **Publisher** | snapSEC GmbH |
| **Used in Solutions** | [Blacklens](../solutions/blacklens.md) |
| **Collection Method** | [REST Pull API](../methods/rest-pull-api.md) |
| **Connector Definition Files** | [blacklens_io.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Blacklens/Data%20Connectors/blacklens_io.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |

The [blacklens.io](https://blacklens.io) data connector allows you to ingest Attack Surface Management alerts from blacklens.io into Microsoft Sentinel using a webhook-based Logic App and the Azure Monitor Logs Ingestion API.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`blacklens_CL`](../tables/blacklens-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Azure Subscription**: Contributor or Owner permissions on the resource group are required to deploy the data ingestion infrastructure (Data Collection Endpoint, Data Collection Rule, custom table, and Logic App).
- **blacklens.io Account**: A blacklens.io account with webhook integration capabilities is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 - Deploy the data ingestion infrastructure**

This step deploys the required Azure resources: a Data Collection Endpoint, Data Collection Rule, custom Log Analytics table (`blacklens_CL`), and a webhook-triggered Logic App.

1. Click the **Deploy to Azure** button below.

	[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FBlacklens%2FData%20Connectors%2Fdeployment%2Fazuredeploy_blacklens.json)

2. Select the **Subscription**, **Resource Group**, and **Location** where your Microsoft Sentinel workspace resides.
3. Enter the **Workspace Name** of your Log Analytics workspace.
4. Click **Review + create** and then **Create**.

**2. Step 2 - Copy the webhook URL**

1. After the deployment succeeds, click the **Outputs** tab on the deployment page.
2. Copy the **webhookUrl** value.

Alternatively, navigate to **Logic Apps** > `la-blacklens-alert-log-ingestion` > **Overview** and copy the **Workflow URL**.

**3. Step 3 - Configure blacklens.io**

1. Log in to the [blacklens.io portal](https://blacklens.io).
2. Navigate to the webhook integration settings.
3. Paste the webhook URL copied in Step 2.
4. Save the configuration.
5. Link the webhook integration to at least one **notification policy** so that alerts are sent to the webhook.

After a few minutes, a test incident should appear in Microsoft Sentinel.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

