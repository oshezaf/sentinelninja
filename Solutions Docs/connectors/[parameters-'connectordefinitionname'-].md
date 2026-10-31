# ⚠️ 🔍 Microsoft Defender XDR (XdrLogRaider)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/XdrLogRaider.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `[parameters('connectorDefinitionName')]` |
| **Publisher** | Alex Kefallonitis |
| **Used in Solutions** | [XdrLogRaider](../solutions/xdrlograider.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [azuredeploy_XdrLogRaider_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/XdrLogRaider/Data%20Connectors/azuredeploy_XdrLogRaider_FunctionApp.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Sibling ARM template declares DCR / Log Ingestion API resources* |
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
- **Workspace** (Workspace): read/write permissions on workspace · contributor

**Custom Permissions:**
- **Defender XDR service account**: An Entra service account with appropriate Defender XDR portal read permissions. The account satisfies MFA via TOTP or Passkey.
- **Sentinel-enabled Log Analytics workspace**: The connector ingests data into this workspace via the data collection endpoint and rule.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 · Service account credentials (automatic)**

The deployment template stored your service account credentials (password and TOTP seed or Passkey PEM) into the deployment Key Vault. No manual action is required if the deployment completed successfully.

**2. Step 2 · Unattended authentication (automatic)**

On the first cycle, the Function App performs an unattended Entra OAuth login using the stored credentials. Single sign-on state is captured and persisted so subsequent cycles use silent refresh. No operator interaction is required.

**3. Step 3 · Verify ingestion (~10 minutes after deploy)**

Query the workspace for ingested rows in any active `Defender_<Category>_CL` table. Cycle telemetry (Boot, Auth, Cycle, Entry events) is available via Application Insights for end-to-end observability.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

