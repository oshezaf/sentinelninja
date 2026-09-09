# ⚠️ Cybereinforce Threat Enforcement (CTE)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Cybereinforce/Logo/cybereinforce-logo.png" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `cybereinforce_cte` |
| **Publisher** | Cybeurope |
| **Used in Solutions** | [Cybereinforce](../solutions/cybereinforce.md) |
| **Collection Method** | [REST Pull API](../methods/rest-pull-api.md) |
| **Connector Definition Files** | [cybereinforce_cte.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybereinforce/Data%20Connectors/cybereinforce_cte.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |

The [Cybereinforce Threat Enforcement](https://cybereinforce.com) data connector ingests browser-level URL blocking, threat-intelligence match, and audit/administration events into Microsoft Sentinel using a scheduled Logic App and the Azure Monitor Logs Ingestion API. Cybereinforce enforces Microsoft Defender threat intelligence directly at the browser (Chrome, Firefox, Safari) on enrolled endpoints, and this connector surfaces that enforcement activity for SOC investigation, hunting, and alerting.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CybereinforceCTE_CL`](../tables/cybereinforcecte-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Azure Subscription**: Contributor or Owner permissions on the resource group are required to deploy the data ingestion infrastructure (Data Collection Endpoint, Data Collection Rule, custom table, and Logic App).
- **Cybereinforce Account**: An active Cybereinforce Threat Enforcement tenant with admin access to generate a MicrosoftToken from the Cybereinforce Admin portal.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 - Generate a Cybereinforce MicrosoftToken**

1. Sign in to the [Cybereinforce Admin portal](https://cybereinforce.com/admin/).
2. Under **Integrations**, find the **MicrosoftToken** section.
3. Click **Generate MicrosoftToken (/api/microsoftToken)**.
4. Copy the generated token and your Cybereinforce **Tenant ID** - both are required for the deployment in Step 2.

**2. Step 2 - Deploy the data ingestion infrastructure**

This step deploys the required Azure resources: a custom Log Analytics table (`CybereinforceCTE_CL`), a Data Collection Endpoint, a Data Collection Rule, a user-assigned managed identity, and a Logic App that polls Cybereinforce on a schedule and forwards new events into the table.

1. Click the **Deploy to Azure** button below.

	[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCybereinforce%2FData%20Connectors%2Fdeployment%2Fazuredeploy_cybereinforce.json)

2. Select the **Subscription**, **Resource Group**, and **Location** where your Microsoft Sentinel workspace resides.
3. Enter the **Log Analytics Workspace Resource ID**, the **Cybereinforce Tenant ID**, and the **MicrosoftToken** copied in Step 1.
4. Click **Review + create** and then **Create**.

**3. Step 3 - Confirm ingestion**

After a few polling cycles (default every 15 minutes), new events should appear in the `CybereinforceCTE_CL` table. Run one of the sample queries above in Log Analytics to confirm data is flowing.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

