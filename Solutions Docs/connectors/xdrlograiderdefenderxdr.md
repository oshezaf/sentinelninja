# ⚠️ Microsoft Defender XDR (XdrLogRaider)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/XdrLogRaider.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `XdrLogRaiderDefenderXdr` |
| **Publisher** | Alex Kefallonitis |
| **Used in Solutions** | [XdrLogRaider](../solutions/xdrlograider.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [XdrLogRaider_API_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/XdrLogRaider/Data%20Connectors/XdrLogRaider_API_FunctionApp.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) \| [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Sibling ARM template declares DCR / Log Ingestion API resources; Connector definition requires workspace key (SharedKey pattern)* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#microsoft-defender-xdr) |

Open-source Microsoft Sentinel data connector for Microsoft Defender XDR portal-internal `/apiproxy/*` audit and reporting endpoints. Self-hosted in your Azure subscription with cookie-based authentication and transparent SSO refresh. Read-only by design — no action verbs are ever invoked on the Defender portal.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Defender_AnalyticsData_CL`](../tables/defender-analyticsdata-cl.md) | ? | ✓ | ? |
| [`Defender_AttackSimulation_CL`](../tables/defender-attacksimulation-cl.md) | ? | ✓ | ? |
| [`Defender_CloudApps_CL`](../tables/defender-cloudapps-cl.md) | ? | ✓ | ? |
| [`Defender_Configuration_CL`](../tables/defender-configuration-cl.md) | ? | ✓ | ? |
| [`Defender_EndpointManagement_CL`](../tables/defender-endpointmanagement-cl.md) | ? | ✓ | ? |
| [`Defender_ExposureManagement_CL`](../tables/defender-exposuremanagement-cl.md) | ? | ✓ | ? |
| [`Defender_Identity_CL`](../tables/defender-identity-cl.md) | ? | ✓ | ? |
| [`Defender_Operations_CL`](../tables/defender-operations-cl.md) | ? | ✓ | ? |
| [`Defender_PortalServices_CL`](../tables/defender-portalservices-cl.md) | ? | ✓ | ? |
| [`Defender_SecureScore_CL`](../tables/defender-securescore-cl.md) | ? | ✓ | ? |
| [`Defender_VulnerabilityManagement_CL`](../tables/defender-vulnerabilitymanagement-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **Defender XDR service account**: An Entra service account with appropriate Defender XDR portal read permissions. The account satisfies MFA via TOTP or Passkey.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Option 1 - Azure Resource Manager (ARM) Template**

Use this method for automated deployment of the XdrLogRaider connector.

1. Click the **Deploy to Azure** button below.

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-XdrLogRaider-azuredeploy)
2. Select the preferred **Subscription**, **Resource Group** and **Region**.
3. Provide the **Service account UPN**, **password**, and either the **TOTP secret** or **Passkey PEM**, and select your **Sentinel-enabled Log Analytics workspace**.
4. Review and click **Create**. The template deploys a self-hosted Function App plus its Key Vault, storage, data collection endpoint, custom tables and rules.

**2. Step 1 · Service account credentials (automatic)**

The deployment template stored your service account credentials (password and TOTP seed or Passkey PEM) into the deployment Key Vault. No manual action is required if the deployment completed successfully.

**3. Step 2 · Unattended authentication (automatic)**

On the first cycle, the Function App performs an unattended Entra OAuth login using the stored credentials. Single sign-on state is captured and persisted so subsequent cycles use silent refresh. No operator interaction is required.

**4. Step 3 · Verify ingestion (~10 minutes after deploy)**

Query the workspace for ingested rows in any active `Defender_<Category>_CL` table. Cycle telemetry (Boot, Auth, Cycle, Entry events) is available via Application Insights for end-to-end observability.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

