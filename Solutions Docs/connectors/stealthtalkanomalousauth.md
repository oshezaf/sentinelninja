# StealthTalk Anomalous Authentication

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/StealthTalk/Workbooks/Images/Logo/st-ms-def-hub.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `StealthTalkAnomalousAuth` |
| **Publisher / Vendor** | StealthTalk |
| **Source Product** | Anomalous Authentication |
| **Used in Solutions** | [StealthTalk](../solutions/stealthtalk.md) |
| **Collection Method** | [REST Pull API](../methods/rest-pull-api.md) |
| **Connector Definition Files** | [StealthTalkConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StealthTalk/Data%20Connectors/StealthTalkConnector.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |

The StealthTalk Anomalous Authentication connector ingests four classes of anomalous user-authentication events from the StealthTalk Enterprise messenger into a custom Log Analytics table via the Logs Ingestion API.



Events:

- **OffHoursLogin** - login outside the user's configured working hours.

- **NewDeviceLogin** - login from a previously-unseen device.

- **GeoAnomalyLogin** - login from a country/city that does not match the user's assigned geo zone.

- **MultiFailLogin** - multiple consecutive failed authentication attempts.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **StealthTalk Enterprise instance**: A deployed StealthTalk Enterprise tenant with admin access to configure the outgoing webhook to the Log Analytics workspace.
- **Microsoft Entra App Registration**: A service principal that StealthTalk uses to authenticate to the Logs Ingestion API. Must have the **Monitoring Metrics Publisher** role on the deployed Data Collection Rule.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. STEP 1 - Auto-deployed ingestion infrastructure (review only)**

When the Solution is installed via the Microsoft Sentinel Content Hub, the following resources are deployed automatically into the workspace's resource group:

1. **Custom log table** `StealthTalkAnomalousAuth_CL` (21-field stream).
2. **Data Collection Endpoint** `StealthTalk-Sentinel-DCE`.
3. **Data Collection Rule** `StealthTalk-Sentinel-DCR` with `Custom-StealthTalkAnomalousAuth_CL` stream declaration and a one-to-one transform.
4. **ASIM Authentication 0.1.3 parsers** as workspace saved-search functions: `vimAuthenticationStealthTalk` (filtering) and `ASimAuthenticationStealthTalk` (non-filtering).
5. **`imAuthentication` extension parser** that registers the StealthTalk source in the workspace ASIM Authentication union (overrides Microsoft's `imAuthentication` saved-search to include the StealthTalk vim parser).
6. **`ASimDisabledParsers` watchlist** + Microsoft Sentinel onboarding state (idempotent).

No user action is required at this step beyond installing the Solution. The remaining steps configure StealthTalk to push events into the deployed DCR. Pre-requisite: Microsoft's `FullDeploymentAuthentication.json` ASIM Authentication parser pack must be deployed in the workspace before this Solution is installed.

**2. STEP 2 - Capture the DCE endpoint and DCR Immutable ID**

In the Azure portal, open the Data Collection Endpoint and Data Collection Rule resources deployed in Step 1:

- From the **Data Collection Endpoint** properties, copy the **Logs Ingestion endpoint URI** (looks like `https://stealthtalk-sentinel-dce-<suffix>.<region>.ingest.monitor.azure.com`).
- From the **Data Collection Rule** Overview, copy the **Immutable ID** (looks like `dcr-<guid>`).

You will paste both values into the StealthTalk admin console in Step 5.

**3. STEP 3 - Create a Microsoft Entra App Registration for StealthTalk**

Create a new App Registration in your Microsoft Entra tenant. Generate a client secret (or use a certificate). Note the **Tenant ID**, **App (client) ID** and **Client secret**. StealthTalk uses this service principal to authenticate to the Logs Ingestion API via OAuth.

**4. STEP 4 - Grant the App Registration the Monitoring Metrics Publisher role on the DCR**

Open the Data Collection Rule deployed in Step 1 -> **Access control (IAM)** -> **+ Add role assignment**.

- Role: **Monitoring Metrics Publisher**
- Assign access to: **User, group, or service principal**
- Select the App Registration from Step 3

RBAC role assignments cannot be performed by the Solution install template, so this step is manual.

**5. STEP 5 - Configure StealthTalk to send events**

In the StealthTalk admin console, configure the Microsoft Sentinel/Log Analytics integration with the values captured in Steps 2 and 3:

- **DCE endpoint** - the Logs Ingestion endpoint URI from Step 2
- **DCR Immutable ID** - from Step 2
- **Stream name** - `Custom-StealthTalkAnomalousAuth_CL`
- **Tenant ID, App (client) ID, Client secret** - from Step 3

Save and trigger a test event. The StealthTalk console reports success/failure of the OAuth handshake and the first event delivery.

**6. STEP 6 - Verify ingestion and ASIM normalisation**

Run the **Sample queries** above in **Logs**. All must return rows within a few minutes of test events:

- Raw `StealthTalkAnomalousAuth_CL` table populated.
- ASIM union view via `imAuthentication() | where EventVendor == 'StealthTalk'` returns the same events normalised to the ASIM Authentication schema.

If the raw table is empty: verify the StealthTalk console reports successful OAuth and event delivery, and confirm the App Registration has the **Monitoring Metrics Publisher** role on the DCR (Step 4). If the raw table has rows but ASIM union is empty: re-check that Microsoft's `FullDeploymentAuthentication.json` parser pack is deployed.

**7. STEP 7 - Enable analytic rules, hunting queries, workbook, and playbook**

In the Microsoft Sentinel **Content hub**, open the **StealthTalk Anomalous Authentication** Solution and click **Manage**. Enable the four Analytic Rule templates, the three Hunting Query templates, the Workbook, and the Microsoft Teams Playbook. For the Playbook, after deployment, grant its system-assigned managed identity the **Microsoft Sentinel Responder** role on the workspace, and grant the **Azure Security Insights** service principal the **Microsoft Sentinel Automation Contributor** role on the playbook's resource group. Then create an **Automation Rule** in Microsoft Sentinel that runs the playbook on incidents from the four StealthTalk analytic rules.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

